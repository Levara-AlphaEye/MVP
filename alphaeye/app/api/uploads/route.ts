import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

// optional S3 support
let S3Client: any = null
let PutObjectCommand: any = null
let DeleteObjectCommand: any = null
let ListObjectsV2Command: any = null
let s3: any = null
const useS3 = !!process.env.S3_BUCKET
if (useS3) {
  try {
    // dynamic import to avoid errors when package isn't installed
    // @ts-ignore
    const pkg = require('@aws-sdk/client-s3')
    S3Client = pkg.S3Client
    PutObjectCommand = pkg.PutObjectCommand
    DeleteObjectCommand = pkg.DeleteObjectCommand
    ListObjectsV2Command = pkg.ListObjectsV2Command
    s3 = new S3Client({ region: process.env.AWS_REGION })
  } catch (e) {
    console.warn('S3 package not available, falling back to local storage')
  }
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads')

// ensure directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const maxThumbWidth = 300

async function saveLocal(fileName: string, buffer: Buffer) {
  const filePath = path.join(uploadDir, fileName)
  await fs.promises.writeFile(filePath, buffer)
  return `/uploads/${encodeURIComponent(fileName)}`
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as any

    if (!file || typeof file === 'string') {
      return NextResponse.json({ ok: false, error: 'No file provided' }, { status: 400 })
    }

    const originalName = file.name || `upload-${Date.now()}`
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Simple safety: avoid path traversal
    const safeBase = path.basename(originalName)
    // generate unique name
    const unique = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}-${safeBase}`

    let url = ''
    let thumbUrl = null

    if (useS3 && s3) {
      const bucket = process.env.S3_BUCKET as string
      const key = unique
      await s3.send(new PutObjectCommand({ Bucket: bucket, Key: key, Body: buffer, ContentType: file.type }))
      url = process.env.S3_PUBLIC_URL
        ? `${process.env.S3_PUBLIC_URL.replace(/\/$/, '')}/${encodeURIComponent(key)}`
        : `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(key)}`

      // thumbnail for images
      if (file.type?.startsWith('image/')) {
        try {
          const sharp = require('sharp')
          const thumbBuffer = await sharp(buffer).resize({ width: maxThumbWidth }).jpeg().toBuffer()
          const thumbKey = `${key}-thumb.jpg`
          await s3.send(new PutObjectCommand({ Bucket: bucket, Key: thumbKey, Body: thumbBuffer, ContentType: 'image/jpeg' }))
          thumbUrl = process.env.S3_PUBLIC_URL
            ? `${process.env.S3_PUBLIC_URL.replace(/\/$/, '')}/${encodeURIComponent(thumbKey)}`
            : `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(thumbKey)}`
        } catch (e) {
          console.warn('could not create image thumb', e)
        }
      }
    } else {
      // local filesystem
      await fs.promises.writeFile(path.join(uploadDir, unique), buffer)
      url = `/uploads/${encodeURIComponent(unique)}`

      if (file.type?.startsWith('image/')) {
        try {
          const sharp = require('sharp')
          const thumbBuffer = await sharp(buffer).resize({ width: maxThumbWidth }).jpeg().toBuffer()
          const thumbName = `${unique}-thumb.jpg`
          await fs.promises.writeFile(path.join(uploadDir, thumbName), thumbBuffer)
          thumbUrl = `/uploads/${encodeURIComponent(thumbName)}`
        } catch (e) {
          console.warn('could not create image thumb', e)
        }
      }
    }

    return NextResponse.json({ ok: true, filename: unique, url, thumbUrl })
  } catch (err) {
    console.error('upload error', err)
    return NextResponse.json({ ok: false, error: 'Upload failed' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    if (!name) return NextResponse.json({ ok: false, error: 'Missing name' }, { status: 400 })

    if (useS3 && s3) {
      const bucket = process.env.S3_BUCKET as string
      await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: name }))
      // also try deleting thumb
      await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: `${name}-thumb.jpg` }))
      return NextResponse.json({ ok: true })
    } else {
      const filePath = path.join(uploadDir, name)
      if (fs.existsSync(filePath)) await fs.promises.unlink(filePath)
      const thumbPath = path.join(uploadDir, `${name}-thumb.jpg`)
      if (fs.existsSync(thumbPath)) await fs.promises.unlink(thumbPath)
      return NextResponse.json({ ok: true })
    }
  } catch (e) {
    console.error('delete error', e)
    return NextResponse.json({ ok: false, error: 'Delete failed' }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (useS3 && s3) {
      const bucket = process.env.S3_BUCKET as string
      const data = await s3.send(new ListObjectsV2Command({ Bucket: bucket }))
      const objects = data.Contents || []
      // filter out thumbs
      const files = objects.filter((o: any) => !o.Key.endsWith('-thumb.jpg'))
      const items = files.map((o: any) => ({
        name: o.Key,
        size: o.Size,
        url: process.env.S3_PUBLIC_URL
          ? `${process.env.S3_PUBLIC_URL.replace(/\/$/, '')}/${encodeURIComponent(o.Key)}`
          : `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(o.Key)}`,
        thumbUrl: (objects.find((x: any) => x.Key === `${o.Key}-thumb.jpg`) ? (process.env.S3_PUBLIC_URL
          ? `${process.env.S3_PUBLIC_URL.replace(/\/$/, '')}/${encodeURIComponent(`${o.Key}-thumb.jpg`)}`
          : `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(`${o.Key}-thumb.jpg`)}`) : null),
        modified: o.LastModified ? o.LastModified.toISOString() : null,
      }))
      return NextResponse.json({ ok: true, files: items })
    }

    const files = await fs.promises.readdir(uploadDir)

    const items = await Promise.all(
      files
        .filter((n) => !n.endsWith('-thumb.jpg'))
        .map(async (name) => {
          const stat = await fs.promises.stat(path.join(uploadDir, name))
          const thumb = files.find((f) => f === `${name}-thumb.jpg`)
          return {
            name,
            size: stat.size,
            url: `/uploads/${encodeURIComponent(name)}`,
            thumbUrl: thumb ? `/uploads/${encodeURIComponent(thumb)}` : null,
            modified: stat.mtime.toISOString(),
          }
        })
    )

    return NextResponse.json({ ok: true, files: items })
  } catch (err) {
    console.error('list uploads error', err)
    return NextResponse.json({ ok: false, error: 'Could not list uploads' }, { status: 500 })
  }
}

"use client"

import { useEffect, useState } from 'react'

type Upload = { name: string; size: number; url: string; thumbUrl?: string | null; modified: string }

export default function UploadsList() {
  const [uploads, setUploads] = useState<Upload[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = () => {
    setLoading(true)
    fetch('/api/uploads')
      .then((r) => r.json())
      .then((data) => {
        if (data?.ok) setUploads(data.files)
        else setError(data?.error || 'Could not load uploads')
      })
      .catch((e) => setError('Could not load uploads'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const handleDelete = async (name: string) => {
    if (!confirm('Delete this upload?')) return
    const res = await fetch(`/api/uploads?name=${encodeURIComponent(name)}`, { method: 'DELETE' })
    const data = await res.json()
    if (res.ok) load()
    else alert(data?.error || 'Delete failed')
  }

  if (loading) return <div className="text-sm text-gray-500">Loading uploads…</div>
  if (error) return <div className="text-sm text-red-600">{error}</div>
  if (uploads.length === 0) return <div className="text-sm text-gray-500">No uploads yet</div>

  return (
    <div className="space-y-2">
      {uploads.map((u) => (
        <div key={u.name} className="flex items-center justify-between bg-white p-3 rounded border shadow-sm">
          <div className="flex items-center space-x-3">
            {u.thumbUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={u.thumbUrl} alt="thumb" className="h-10 w-16 object-cover rounded" />
            ) : (
              <div className="h-10 w-16 bg-gray-100 flex items-center justify-center rounded text-xs text-gray-500">{u.name.split('.').pop()?.toUpperCase()}</div>
            )}

            <a className="text-sm text-indigo-600 hover:underline truncate max-w-md" href={u.url} target="_blank" rel="noreferrer">{u.name}</a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xs text-gray-500">{(u.size / 1024).toFixed(0)} KB</div>
            <button onClick={() => handleDelete(u.name)} className="text-sm text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

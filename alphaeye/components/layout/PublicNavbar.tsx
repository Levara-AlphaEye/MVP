"use client"

import Link from "next/link"
import { useState } from "react"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function PublicNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            Alpha Eye
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <SignedOut>
              <Link
                href="/login"
                className="rounded-md border px-3 py-1.5 text-gray-700 hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-black px-3 py-1.5 text-white hover:bg-gray-800"
              >
                Get started
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-3 text-sm">
            <Link href="#features" className="block text-gray-700">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-gray-700">
              How it works
            </Link>
            <Link href="#pricing" className="block text-gray-700">
              Pricing
            </Link>
            <SignedOut>
              <Link href="/login" className="block text-gray-700">
                Log in
              </Link>
              <Link
                href="/register"
                className="block rounded-md bg-black px-3 py-2 text-white text-center"
              >
                Get started
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </header>
  )
}

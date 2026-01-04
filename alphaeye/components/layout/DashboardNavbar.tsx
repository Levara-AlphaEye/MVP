"use client"

import Link from "next/link"
import { UserButton } from '@clerk/nextjs'

export default function DashboardNavbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="text-lg font-semibold">
            Dashboard
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Overview
            </Link>
            <Link href="/dashboard/settings" className="text-gray-600 hover:text-gray-900">
              Settings
            </Link>
            <UserButton />
          </nav>

          {/* Mobile nav - simplified for now */}
          <div className="md:hidden">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  )
}
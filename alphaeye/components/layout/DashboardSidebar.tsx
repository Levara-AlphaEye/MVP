"use client"

import Link from "next/link"

export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:py-6 md:px-4 bg-white border-r">
      <div className="flex flex-col h-full">
        <div className="px-2 mb-4">
          <Link href="/dashboard" className="text-lg font-semibold">
            Dashboard
          </Link>
        </div>

        <nav className="flex-1 px-2 space-y-1 text-sm">
          <Link href="/dashboard" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
            Overview
          </Link>
          <Link href="/dashboard/projects" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
            Projects
          </Link>
          <Link href="/dashboard/settings" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
            Settings
          </Link>
        </nav>

        <div className="px-2 mt-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Back to site
          </Link>
        </div>
      </div>
    </aside>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { key: "overview", label: "Overview", href: "/dashboard" },
  { key: "deck-analysis", label: "Deck Analysis", href: "/dashboard/deck-analysis" },
  { key: "funding-readiness", label: "Funding Readiness", href: "/dashboard/funding-readiness" },
  { key: "investors", label: "Investors", href: "/dashboard/investors" },
  { key: "improvements", label: "Improvements", href: "/dashboard/improvements" },
  { key: "benchmarks", label: "Benchmarks", href: "/dashboard/benchmarks" },
  { key: "outreach", label: "Outreach", href: "/dashboard/outreach" },
]

function IconPlaceholder({ active }: { active?: boolean }) {
  return (
    <svg
      className={`h-5 w-5 mr-3 flex-shrink-0 ${active ? 'text-indigo-600' : 'text-gray-400'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect width="14" height="10" x="3" y="5" rx="2" />
    </svg>
  )
}

export default function DashboardSidebar() {
  const pathname = usePathname() || ""

  return (
    // fixed width on md+ screens, hidden on small screens
    <aside className="hidden md:flex md:w-64 md:flex-col md:py-6 md:px-4 bg-white border-r">
      <div className="flex flex-col h-full">
        <div className="px-2 mb-4">
          <Link href="/dashboard" className="text-lg font-semibold">
            Dashboard
          </Link>
        </div>

        <nav className="flex-1 px-2 space-y-1 text-sm" aria-label="Sidebar">
          {navItems.map((item) => {
            // active logic: Overview is exact /dashboard; others match startWith
            const active =
              item.href === '/dashboard'
                ? pathname === '/dashboard' || pathname === '/dashboard/'
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group flex items-center rounded-md px-3 py-2 transition-colors ${
                  active
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <IconPlaceholder active={active} />
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
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

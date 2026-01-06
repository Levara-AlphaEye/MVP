"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"

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
          <Link href="/dashboard/settings" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 mb-2">
            {/* simple gear icon */}
            <span className="inline-flex items-center">
              <svg className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M11.3 1.046a1 1 0 00-2.6 0l-.2.586a7.002 7.002 0 00-1.518.46L5.61 1.941a1 1 0 00-1.414 1.414l.151.352c-.18.32-.333.655-.457 1.003L1.05 6.7a1 1 0 000 2l.35.141c.126.347.277.682.457 1.003l-.151.352a1 1 0 001.414 1.414l1.373-1.151c.46.206.94.372 1.434.495l.2.586a1 1 0 002.6 0l.2-.586c.494-.123.974-.29 1.434-.495l1.373 1.151a1 1 0 001.414-1.414l-.151-.352c.18-.321.333-.656.457-1.003l.35-.141a1 1 0 000-2l-.35-.141a7.002 7.002 0 00-.457-1.003l.151-.352A1 1 0 0014.39 1.94l-1.018 1.151c-.48-.201-.977-.36-1.486-.475l-.2-.57zM10 13a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
              Settings
            </span>
          </Link>

          {/* Sign out button from Clerk */}
          <SignOutButton>
            <button className="w-full text-left rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 mb-2">
              Sign out
            </button>
          </SignOutButton>

          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Back to site
          </Link>
        </div>
      </div>
    </aside>
  )
}

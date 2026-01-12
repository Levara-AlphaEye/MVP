"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"
import {
  HomeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UsersIcon,
  SparklesIcon,
  StarIcon,
  SpeakerWaveIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  
} from "@heroicons/react/24/outline"

const navItems = [
  { key: "overview", label: "Overview", href: "/dashboard" },
  { key: "deck-analysis", label: "Deck Analysis", href: "/dashboard/deck-analysis" },
  { key: "funding-readiness", label: "Funding Readiness", href: "/dashboard/funding-readiness" },
  { key: "investors", label: "Investors", href: "/dashboard/investors" },
  { key: "improvements", label: "Improvements", href: "/dashboard/improvements" },
  { key: "benchmarks", label: "Benchmarks", href: "/dashboard/benchmarks" },
  { key: "outreach", label: "Outreach", href: "/dashboard/outreach" },
]

function NavIcon({ name, active }: { name: string; active?: boolean }) {
  const className = `${active ? 'text-indigo-600' : 'text-gray-400'} h-5 w-5`

  switch (name) {
    case 'overview':
      return <HomeIcon className={className} aria-hidden />
    case 'deck-analysis':
      return <DocumentTextIcon className={className} aria-hidden />
    case 'funding-readiness':
      return <ChartBarIcon className={className} aria-hidden />
    case 'investors':
      return <UsersIcon className={className} aria-hidden />
    case 'improvements':
      return <SparklesIcon className={className} aria-hidden />
    case 'benchmarks':
      return <StarIcon className={className} aria-hidden />
    case 'outreach':
      return <SpeakerWaveIcon className={className} aria-hidden />
    default:
      return <HomeIcon className={className} aria-hidden />
  }
}

export default function DashboardSidebar({ collapsed, onToggleCollapse }: { collapsed?: boolean; onToggleCollapse?: () => void }) {
  const pathname = usePathname() || ""
  const isCollapsed = !!collapsed

  // width classes: when collapsed use a narrow width on md screens, else full width
  const widthClass = isCollapsed ? 'md:w-20' : 'md:w-64'

  return (
    // fixed width on md+ screens, hidden on small screens
    <aside className={`relative hidden md:flex ${widthClass} md:flex-col md:py-6 md:px-4 bg-white border-r transition-all duration-200`}>
      <div className="flex flex-col h-full">
        <div className="px-2 mb-4">
          <Link href="/dashboard" className={`text-lg font-semibold ${isCollapsed ? 'hidden' : ''}`}>
            Dashboard
          </Link>
          {/* when collapsed show a compact logo/text */}
          {isCollapsed && (
            <div className="flex items-center justify-center h-8">
              <span className="text-sm font-semibold">DA</span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-2 space-y-1 text-sm" aria-label="Sidebar">
          {navItems.map((item) => {
            // active logic: Overview is exact /dashboard; others match startWith
            const active =
              item.href === '/dashboard'
                ? pathname === '/dashboard' || pathname === '/dashboard/'
                : pathname.startsWith(item.href)

            // when collapsed, center the whole link so the active/bg hover sits directly behind the icon
            const linkContentClass = isCollapsed ? 'justify-center p-2' : 'px-3 py-2'

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group flex items-center rounded-md transition-colors ${
                  active
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${linkContentClass}`}
                aria-current={active ? 'page' : undefined}
              >
                <div className="flex items-center justify-center w-8 h-8 shrink-0 overflow-hidden">
                  <NavIcon name={item.key} active={active} />
                </div>
                <span className={`${isCollapsed ? 'hidden' : 'truncate ml-3'}`}>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-2 mt-4">
          {/* Settings link: show icon-only when collapsed */}
          {isCollapsed ? (
            <Link
              href="/dashboard/settings"
              className="flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 mb-2"
              title="Settings"
            >
              <Cog6ToothIcon className="h-5 w-5 block text-gray-500" aria-hidden />
            </Link>
          ) : (
            <Link href="/dashboard/settings" className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 mb-2">
              <span className="inline-flex items-center">
                <Cog6ToothIcon className="h-4 w-4 mr-2 text-gray-500" aria-hidden />
                Settings
              </span>
            </Link>
          )}

          {/* Sign out button from Clerk: icon-only when collapsed */}
          {isCollapsed ? (
            <SignOutButton>
              <button
                className="flex items-center justify-center rounded-md p-2 text-red-600 hover:bg-red-50 mb-2 w-full"
                title="Sign out"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 block" aria-hidden />
              </button>
            </SignOutButton>
          ) : (
            <SignOutButton>
              <button className="w-full text-left rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 mb-2">
                Sign out
              </button>
            </SignOutButton>
          )}

          {/* Back to site: icon when collapsed */}
          {isCollapsed ? (
            <Link href="/" className="flex items-center justify-center text-gray-500 hover:text-gray-700 p-2 rounded-md" title="Back to site">
              <HomeIcon className="h-5 w-5 block" aria-hidden />
            </Link>
          ) : (
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              Back to site
            </Link>
          )}
        </div>

        {/* edge toggle button: visible on md+. Sits half outside the sidebar to indicate it's toggleable */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Open sidebar' : 'Collapse sidebar'}
            className="hidden md:inline-flex items-center justify-center h-8 w-8 rounded-full bg-white border shadow-sm text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {/* show a chevron indicating current action */}
            {isCollapsed ? (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}

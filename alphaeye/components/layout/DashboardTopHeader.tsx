"use client"

import { useState } from "react"
import { useUploadDeck } from "../UploadDeckContext"
import { Bars3Icon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function DashboardTopHeader({
  collapsed,
  onToggleCollapse,
}: {
  collapsed?: boolean
  onToggleCollapse?: () => void
}) {
  const [version, setVersion] = useState("v1.0")
  const { openModal } = useUploadDeck()

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Toggle button for collapsing sidebar - visible on md+ screens */}
          <button
            type="button"
            aria-label={collapsed ? 'Open sidebar' : 'Collapse sidebar'}
            aria-expanded={!collapsed}
            onClick={onToggleCollapse}
            className="hidden md:inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {/* simple hamburger / chevron icon that toggles */}
            {collapsed ? (
              <ChevronRightIcon className="h-5 w-5 block" aria-hidden />
            ) : (
              <Bars3Icon className="h-5 w-5 block" aria-hidden />
            )}
          </button>

          <div className="text-lg font-semibold">Startup Name (placeholder)</div>

          <div>
            <label className="sr-only">Deck version</label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="border-gray-200 rounded-md bg-white text-sm px-2 py-1"
            >
              <option value="v1.0">v1.0</option>
              <option value="v1.1">v1.1</option>
              <option value="v2.0">v2.0</option>
            </select>
          </div>

          <div className="text-sm text-gray-500">Last analyzed: <span className="text-gray-700">—</span></div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-600">Welcome back — choose a deck to start analysis</div>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Upload deck
          </button>
        </div>
      </div>
    </div>
  )
}

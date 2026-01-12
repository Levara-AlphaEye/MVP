"use client"

import { useState } from "react"
import DashboardSidebar from "../../components/layout/DashboardSidebar"
import DashboardTopHeader from "../../components/layout/DashboardTopHeader"
import { UploadDeckProvider } from "../../components/UploadDeckContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // collapsed controls whether the left sidebar is narrow (icons-only) or expanded
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed((c) => !c)
  }
  return (
    <UploadDeckProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Left sidebar (hidden on small screens). Receives collapsed state and toggle handler */}
          <DashboardSidebar collapsed={collapsed} onToggleCollapse={toggleCollapsed} />

          {/* Main content column */}
          <div className="flex-1 min-h-screen flex flex-col">

            {/* Top header - receives toggle handler and collapsed state */}
            <DashboardTopHeader collapsed={collapsed} onToggleCollapse={toggleCollapsed} />

            {/* Main area with grid wrapper for pages */}
            <main className="flex-1 p-6">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                  {/* By default pages will occupy full width; inner content can use the grid */}
                  <div className="md:col-span-12">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </UploadDeckProvider>
  )
}
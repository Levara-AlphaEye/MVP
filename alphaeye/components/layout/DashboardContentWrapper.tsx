"use client"

import React, { useState } from "react"
import DashboardTopHeader from "./DashboardTopHeader"
import DashboardRightPanel from "./DashboardRightPanel"

export default function DashboardContentWrapper({ children }: { children: React.ReactNode }) {
  const [rightVisible, setRightVisible] = useState(false)

  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">
          {/* Top header with toggle */}
          <DashboardTopHeader onToggle={() => setRightVisible((v) => !v)} />

          {/* Main grid/content area */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-12">{children}</div>
          </div>
        </div>
      </main>

      {/* Right panel is positioned as a sibling inside this wrapper so it can slide in.
          It is hidden by default and controlled via state above. */}
      <DashboardRightPanel visible={rightVisible} />
    </div>
  )
}

"use client"

import { UserProfile } from "@clerk/nextjs"

export default function DashboardSettingsPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 bg-white rounded-md shadow-sm">
      {/* Clerk's built-in profile/settings component handles account management (email, password, MFA, sessions).
          Use hash-based routing so this doesn't require a catch-all route or special middleware exemptions. */}
      <UserProfile
        routing="hash"
        appearance={{
          elements: {
            // allow Clerk to inherit site styles; tweak as needed
            card: "bg-white",
          },
        }}
      />
    </div>
  )
}

"use client"

import { usePathname } from 'next/navigation'
import PublicNavbar from "@/components/layout/PublicNavbar"

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Only show navbar on home page
  if (pathname !== '/') {
    return null
  }

  return <PublicNavbar />
}
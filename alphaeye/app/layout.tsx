import NavbarWrapper from "@/components/layout/NavbarWrapper"
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      <html lang="en">
        <body>
          <NavbarWrapper />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

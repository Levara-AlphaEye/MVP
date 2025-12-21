import PublicNavbar from "@/components/layout/PublicNavbar"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PublicNavbar />
        {children}
      </body>
    </html>
  )
}

import DashboardNavbar from "@/components/layout/DashboardNavbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardNavbar />
      <main className="mx-auto max-w-7xl px-4 py-8">
        {children}
      </main>
    </>
  )
}
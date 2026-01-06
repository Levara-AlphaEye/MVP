import DashboardSidebar from "../../components/layout/DashboardSidebar"
import DashboardTopHeader from "../../components/layout/DashboardTopHeader"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
                {/* Left sidebar (hidden on small screens) */}
                <DashboardSidebar />

                {/* Main content column */}
                <div className="flex-1 min-h-screen flex flex-col">

                  {/* Top header */}
                  <DashboardTopHeader />

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
  )
}
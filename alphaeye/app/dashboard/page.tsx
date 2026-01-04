import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.firstName || 'User'}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your account today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Total Scans</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p className="text-sm text-gray-500">No scans yet</p>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
          <p className="text-sm text-gray-500">Start your first project</p>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Reports Generated</h3>
          <p className="text-3xl font-bold text-purple-600">0</p>
          <p className="text-sm text-gray-500">Generate your first report</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <p className="text-gray-500">No recent activity. Start by creating your first project!</p>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            New Scan
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

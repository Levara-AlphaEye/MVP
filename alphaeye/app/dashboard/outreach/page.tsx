export default function Outreach() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Outreach Management</h1>
        <p className="text-gray-600 mt-2">Track and manage your investor outreach campaigns and communication efforts.</p>
      </div>

      {/* Outreach Overview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Total Contacts</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-1">247</div>
            <div className="text-sm text-gray-500">Active investor relationships</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Response Rate</h3>
            <div className="text-3xl font-bold text-green-600 mb-1">23%</div>
            <div className="text-sm text-gray-500">+5% from last month</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Meetings Scheduled</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
            <div className="text-sm text-gray-500">This quarter</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Active Campaigns</h3>
            <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-sm text-gray-500">Ongoing outreach efforts</div>
          </div>
        </div>
      </div>

      {/* Campaign Management */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Active Campaigns</h3>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Create New Campaign
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Q4 Seed Round Outreach",
              status: "Active",
              progress: 68,
              contacts: 89,
              responses: 21,
              meetings: 5,
              nextAction: "Follow up with 15 pending responses"
            },
            {
              name: "Angel Investor Network",
              status: "Active",
              progress: 45,
              contacts: 156,
              responses: 34,
              meetings: 7,
              nextAction: "Send personalized emails to top 50 matches"
            },
            {
              name: "VC Partnership Exploration",
              status: "Planning",
              progress: 15,
              contacts: 23,
              responses: 2,
              meetings: 0,
              nextAction: "Research and identify target firms"
            }
          ].map((campaign, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{campaign.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Progress</div>
                  <div className="font-semibold">{campaign.progress}%</div>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-lg font-semibold text-indigo-600">{campaign.contacts}</div>
                  <div className="text-xs text-gray-500">Contacts</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{campaign.responses}</div>
                  <div className="text-xs text-gray-500">Responses</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">{campaign.meetings}</div>
                  <div className="text-xs text-gray-500">Meetings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">
                    {campaign.contacts > 0 ? Math.round((campaign.responses / campaign.contacts) * 100) : 0}%
                  </div>
                  <div className="text-xs text-gray-500">Response Rate</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Next:</span> {campaign.nextAction}
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Tools */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Communication Templates</h3>
            <div className="space-y-3">
              {[
                { name: "Initial Outreach Email", type: "Email", usage: "45 uses", success: "22% response" },
                { name: "Follow-up Sequence", type: "Email Series", usage: "23 uses", success: "18% response" },
                { name: "Meeting Request", type: "Email", usage: "67 uses", success: "31% response" },
                { name: "Thank You Note", type: "Email", usage: "34 uses", success: "N/A" }
              ].map((template, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-gray-500">{template.type} • {template.usage} • {template.success}</div>
                  </div>
                  <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Use Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: "Email sent to Sarah Chen", time: "2 hours ago", status: "Delivered" },
                { action: "Meeting scheduled with TechVentures", time: "1 day ago", status: "Confirmed" },
                { action: "Follow-up sent to Michael Rodriguez", time: "2 days ago", status: "Opened" },
                { action: "LinkedIn message to Jennifer Park", time: "3 days ago", status: "Pending" },
                { action: "Call completed with David Kim", time: "1 week ago", status: "Completed" }
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    activity.status === 'Delivered' ? 'bg-blue-100 text-blue-800' :
                    activity.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                    activity.status === 'Opened' ? 'bg-yellow-100 text-yellow-800' :
                    activity.status === 'Pending' ? 'bg-gray-100 text-gray-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
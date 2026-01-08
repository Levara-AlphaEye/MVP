export default function Investors() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Investor Database</h1>
        <p className="text-gray-600 mt-2">Discover and connect with investors who match your startup's profile and needs.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search investors by name, firm, or focus area..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>All Stages</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Growth</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>All Sectors</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Fintech</option>
              <option>E-commerce</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Investor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Sarah Chen",
            firm: "TechVentures Capital",
            focus: "SaaS, AI/ML",
            stage: "Seed to Series A",
            location: "San Francisco, CA",
            portfolio: ["DataFlow", "AI Insights", "CloudScale"],
            match: 92
          },
          {
            name: "Michael Rodriguez",
            firm: "Growth Partners",
            focus: "B2B Software",
            stage: "Series A to B",
            location: "Austin, TX",
            portfolio: ["Enterprise Solutions", "DevTools", "Analytics"],
            match: 87
          },
          {
            name: "Jennifer Park",
            firm: "Innovation Fund",
            focus: "Healthcare Tech",
            stage: "Seed",
            location: "Boston, MA",
            portfolio: ["MedTech Solutions", "Health Analytics", "Digital Health"],
            match: 78
          },
          {
            name: "David Kim",
            firm: "Future Ventures",
            focus: "Fintech, Insurtech",
            stage: "Seed to Series A",
            location: "New York, NY",
            portfolio: ["PayTech", "InsureNow", "BlockChain Finance"],
            match: 85
          },
          {
            name: "Lisa Thompson",
            firm: "Sustainable Capital",
            focus: "Clean Tech, Green Energy",
            stage: "Series A",
            location: "Seattle, WA",
            portfolio: ["SolarTech", "GreenEnergy", "EcoSolutions"],
            match: 71
          },
          {
            name: "Robert Chen",
            firm: "Global Expansion Fund",
            focus: "Market Expansion",
            stage: "Growth",
            location: "Singapore",
            portfolio: ["AsiaScale", "GlobalTech", "MarketEntry"],
            match: 69
          }
        ].map((investor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{investor.name}</h3>
                <p className="text-sm text-gray-600">{investor.firm}</p>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                investor.match >= 85 ? 'bg-green-100 text-green-800' :
                investor.match >= 75 ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {investor.match}% match
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Focus:</span>
                <span className="font-medium">{investor.focus}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Stage:</span>
                <span className="font-medium">{investor.stage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium">{investor.location}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Recent Investments:</p>
              <div className="flex flex-wrap gap-1">
                {investor.portfolio.slice(0, 2).map((company, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-xs rounded">
                    {company}
                  </span>
                ))}
                {investor.portfolio.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded">
                    +{investor.portfolio.length - 2} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                Connect
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Outreach Tools */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Outreach Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl mb-2">📧</div>
            <h4 className="font-medium mb-1">Email Templates</h4>
            <p className="text-sm text-gray-600">Personalized outreach templates</p>
            <button className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
              Browse Templates
            </button>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-medium mb-1">CRM Integration</h4>
            <p className="text-sm text-gray-600">Track all investor interactions</p>
            <button className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
              Set Up CRM
            </button>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl mb-2">📈</div>
            <h4 className="font-medium mb-1">Analytics</h4>
            <p className="text-sm text-gray-600">Track outreach success rates</p>
            <button className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function FundingReadiness() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Funding Readiness</h1>
        <p className="text-gray-600 mt-2">Assess your startup's readiness for funding and identify areas that need attention.</p>
      </div>

      {/* Readiness Score */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-xl font-semibold mb-3">Overall Readiness Score</h3>
            <div className="text-5xl font-bold text-indigo-600 mb-2">68%</div>
            <p className="text-sm text-gray-500 mb-4">Based on 12 key criteria</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-xl font-semibold mb-3">Funding Probability</h3>
            <div className="text-5xl font-bold text-green-600 mb-2">72%</div>
            <p className="text-sm text-gray-500 mb-4">Likelihood of securing funding in next 6 months</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Readiness Checklist</h3>
            <div className="space-y-4">
              {[
                { category: "Business Model", score: 8, items: ["Clear value proposition", "Scalable business model", "Revenue streams identified"] },
                { category: "Market Opportunity", score: 7, items: ["Market size defined", "Target customers identified", "Competitive analysis complete"] },
                { category: "Team & Execution", score: 6, items: ["Experienced founding team", "Key hires in place", "Product development roadmap"] },
                { category: "Financials", score: 5, items: ["Financial projections", "Unit economics", "Funding requirements clear"] },
                { category: "Traction & Validation", score: 7, items: ["Early customers acquired", "Product-market fit indicators", "Growth metrics"] },
                { category: "Legal & Compliance", score: 9, items: ["Company incorporated", "IP protection", "Regulatory compliance"] }
              ].map((section, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{section.category}</h4>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      section.score >= 8 ? 'bg-green-100 text-green-800' :
                      section.score >= 6 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {section.score}/10
                    </span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <h4 className="font-medium text-yellow-800 text-sm">High Priority</h4>
                <p className="text-xs text-yellow-700 mt-1">Complete financial projections and unit economics</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                <h4 className="font-medium text-blue-800 text-sm">Medium Priority</h4>
                <p className="text-xs text-blue-700 mt-1">Strengthen founding team with key technical hire</p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <h4 className="font-medium text-green-800 text-sm">Completed</h4>
                <p className="text-xs text-green-700 mt-1">Legal incorporation and IP protection</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm mt-6">
            <h3 className="text-lg font-semibold mb-3">Funding Options</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100">
                Angel Investor Match
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                VC Database Access
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                Grant Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
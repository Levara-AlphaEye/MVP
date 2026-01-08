export default function Improvements() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Improvement Recommendations</h1>
        <p className="text-gray-600 mt-2">AI-powered suggestions to strengthen your startup and increase funding chances.</p>
      </div>

      {/* Priority Actions */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Priority Actions</h3>
        <div className="space-y-4">
          {[
            {
              title: "Strengthen Financial Projections",
              description: "Your financial model needs more detail and realistic assumptions. Add sensitivity analysis and scenario planning.",
              priority: "High",
              impact: "Critical for investor confidence",
              effort: "Medium",
              timeframe: "2-3 weeks"
            },
            {
              title: "Expand Market Analysis",
              description: "Include more comprehensive competitor analysis and market sizing data. Add TAM/SAM/SOM calculations.",
              priority: "High",
              impact: "Shows market understanding",
              effort: "Medium",
              timeframe: "1-2 weeks"
            },
            {
              title: "Add Customer Validation",
              description: "Include testimonials, case studies, or pilot program results to demonstrate product-market fit.",
              priority: "Medium",
              impact: "Proves traction",
              effort: "Low",
              timeframe: "1 week"
            },
            {
              title: "Clarify Go-to-Market Strategy",
              description: "Define your sales and distribution channels more clearly. Include pricing strategy and customer acquisition costs.",
              priority: "Medium",
              impact: "Shows execution plan",
              effort: "Medium",
              timeframe: "2 weeks"
            },
            {
              title: "Strengthen Team Section",
              description: "Add more detail about key team members' experience and relevant achievements.",
              priority: "Low",
              impact: "Builds credibility",
              effort: "Low",
              timeframe: "3-5 days"
            }
          ].map((action, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-lg">{action.title}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  action.priority === 'High' ? 'bg-red-100 text-red-800' :
                  action.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {action.priority} Priority
                </span>
              </div>

              <p className="text-gray-600 mb-3">{action.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Impact:</span>
                  <div className="font-medium">{action.impact}</div>
                </div>
                <div>
                  <span className="text-gray-500">Effort:</span>
                  <div className="font-medium">{action.effort}</div>
                </div>
                <div>
                  <span className="text-gray-500">Timeframe:</span>
                  <div className="font-medium">{action.timeframe}</div>
                </div>
                <div className="flex items-center">
                  <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                    Start Action
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Categories */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Deck Improvements</h3>
            <div className="space-y-3">
              {[
                { item: "Visual Design", score: 7, suggestions: ["Improve color scheme consistency", "Add more visual elements"] },
                { item: "Content Clarity", score: 8, suggestions: ["Simplify complex explanations", "Use more bullet points"] },
                { item: "Data Visualization", score: 6, suggestions: ["Replace text-heavy slides with charts", "Add more compelling graphics"] },
                { item: "Story Flow", score: 7, suggestions: ["Strengthen narrative arc", "Add transition slides"] }
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex-1">
                    <div className="font-medium">{category.item}</div>
                    <div className="text-sm text-gray-600">{category.suggestions[0]}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{category.score}/10</div>
                    <button className="text-xs text-indigo-600 hover:text-indigo-800">View details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Business Improvements</h3>
            <div className="space-y-3">
              {[
                { item: "Market Research", score: 6, suggestions: ["Conduct competitor analysis", "Validate market size assumptions"] },
                { item: "Financial Planning", score: 5, suggestions: ["Create detailed financial projections", "Calculate unit economics"] },
                { item: "Team Building", score: 7, suggestions: ["Identify key hires needed", "Strengthen advisory board"] },
                { item: "Product Development", score: 8, suggestions: ["Define MVP scope clearly", "Create development roadmap"] }
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex-1">
                    <div className="font-medium">{category.item}</div>
                    <div className="text-sm text-gray-600">{category.suggestions[0]}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{category.score}/10</div>
                    <button className="text-xs text-indigo-600 hover:text-indigo-800">View details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-semibold mb-4">AI Improvement Assistant</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              AI
            </div>
            <div className="flex-1">
              <p className="text-gray-700 mb-3">
                Based on your current startup profile, I recommend focusing on financial projections first.
                This will significantly improve your funding readiness score and investor confidence.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                  Generate Action Plan
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Ask for Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
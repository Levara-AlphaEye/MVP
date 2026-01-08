export default function DeckAnalysis() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Deck Analysis</h1>
        <p className="text-gray-600 mt-2">Analyze your pitch deck for strengths, weaknesses, and improvement opportunities.</p>
      </div>

      {/* Analysis Overview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Deck Analysis Results</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-green-800">Strengths</h4>
                <ul className="text-sm text-gray-600 mt-1">
                  <li>• Clear value proposition</li>
                  <li>• Strong market analysis</li>
                  <li>• Compelling team section</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium text-yellow-800">Areas for Improvement</h4>
                <ul className="text-sm text-gray-600 mt-1">
                  <li>• Financial projections could be more detailed</li>
                  <li>• Add more competitor analysis</li>
                  <li>• Include customer testimonials</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium text-red-800">Critical Issues</h4>
                <ul className="text-sm text-gray-600 mt-1">
                  <li>• Missing exit strategy</li>
                  <li>• Revenue model unclear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Analysis Score</h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">7.8</div>
              <div className="text-sm text-gray-500">Out of 10</div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm mt-6">
            <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100">
                Generate Improvement Report
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                Compare with Templates
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                Export Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
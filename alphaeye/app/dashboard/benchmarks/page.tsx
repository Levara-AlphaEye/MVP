export default function Benchmarks() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Industry Benchmarks</h1>
        <p className="text-gray-600 mt-2">Compare your startup's performance against industry standards and successful companies.</p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-1">$45K</div>
            <div className="text-sm text-gray-500 mb-2">Your Performance</div>
            <div className="text-sm text-green-600 font-medium">+15% vs Industry Avg</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">65th percentile</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Customer Acquisition Cost</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-1">$180</div>
            <div className="text-sm text-gray-500 mb-2">Your Performance</div>
            <div className="text-sm text-red-600 font-medium">+8% vs Industry Avg</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">42nd percentile</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Monthly Churn Rate</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-1">3.2%</div>
            <div className="text-sm text-gray-500 mb-2">Your Performance</div>
            <div className="text-sm text-green-600 font-medium">-12% vs Industry Avg</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">78th percentile</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Customer Lifetime Value</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-1">$2,400</div>
            <div className="text-sm text-gray-500 mb-2">Your Performance</div>
            <div className="text-sm text-green-600 font-medium">+22% vs Industry Avg</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">72nd percentile</div>
          </div>
        </div>
      </div>

      {/* Detailed Benchmarks */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Performance Comparison</h3>
            <div className="space-y-6">
              {[
                {
                  category: "Growth Metrics",
                  metrics: [
                    { name: "Monthly Recurring Revenue", your: "$45K", industry: "$38K", percentile: 65 },
                    { name: "Annual Recurring Revenue", your: "$540K", industry: "$456K", percentile: 68 },
                    { name: "Monthly Active Users", your: "2,400", industry: "2,100", percentile: 62 }
                  ]
                },
                {
                  category: "Financial Efficiency",
                  metrics: [
                    { name: "Customer Acquisition Cost", your: "$180", industry: "$165", percentile: 42 },
                    { name: "Customer Lifetime Value", your: "$2,400", industry: "$1,960", percentile: 72 },
                    { name: "LTV/CAC Ratio", your: "13.3x", industry: "11.9x", percentile: 71 }
                  ]
                },
                {
                  category: "Retention & Engagement",
                  metrics: [
                    { name: "Monthly Churn Rate", your: "3.2%", industry: "3.6%", percentile: 78 },
                    { name: "Net Revenue Retention", your: "108%", industry: "105%", percentile: 69 },
                    { name: "Product Qualified Leads", your: "68%", industry: "62%", percentile: 73 }
                  ]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg mb-3">{section.category}</h4>
                  <div className="space-y-3">
                    {section.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div className="flex-1">
                          <div className="font-medium">{metric.name}</div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Your</div>
                            <div className="font-semibold">{metric.your}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Industry</div>
                            <div className="font-semibold">{metric.industry}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-500">Percentile</div>
                            <div className={`font-semibold ${
                              metric.percentile >= 70 ? 'text-green-600' :
                              metric.percentile >= 50 ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {metric.percentile}th
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Benchmark Insights</h3>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <h4 className="font-medium text-green-800 text-sm">Strength</h4>
                <p className="text-xs text-green-700 mt-1">Your churn rate is significantly below industry average, indicating strong product-market fit.</p>
              </div>

              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <h4 className="font-medium text-yellow-800 text-sm">Opportunity</h4>
                <p className="text-xs text-yellow-700 mt-1">CAC could be optimized through better targeting and referral programs.</p>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                <h4 className="font-medium text-blue-800 text-sm">Trend</h4>
                <p className="text-xs text-blue-700 mt-1">Your LTV/CAC ratio is trending in the right direction compared to peers.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm mt-6">
            <h3 className="text-lg font-semibold mb-3">Competitor Comparison</h3>
            <div className="space-y-3">
              {[
                { name: "Competitor A", revenue: "$52K", users: "2,800", status: "Leading" },
                { name: "Competitor B", revenue: "$41K", users: "2,200", status: "Similar" },
                { name: "Competitor C", revenue: "$38K", users: "1,900", status: "Behind" }
              ].map((competitor, index) => (
                <div key={index} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <div className="font-medium text-sm">{competitor.name}</div>
                    <div className="text-xs text-gray-500">{competitor.revenue} MRR</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    competitor.status === 'Leading' ? 'bg-red-100 text-red-800' :
                    competitor.status === 'Similar' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {competitor.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
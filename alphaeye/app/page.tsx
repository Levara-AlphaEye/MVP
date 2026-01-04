import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8">
              Welcome to <span className="text-indigo-400">AlphaEye</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Advanced AI-powered analysis and insights for your projects.
              Get started with intelligent scanning and comprehensive reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/login"
                className="border border-slate-300 text-slate-300 hover:bg-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-slate-300 text-lg">
            Everything you need to analyze and optimize your projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="text-indigo-400 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Scanning</h3>
            <p className="text-slate-300">
              Advanced AI algorithms scan your code and projects for insights and optimizations.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="text-indigo-400 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Detailed Reports</h3>
            <p className="text-slate-300">
              Generate comprehensive reports with actionable recommendations and metrics.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="text-indigo-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Analysis</h3>
            <p className="text-slate-300">
              Get instant feedback and analysis as you work on your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

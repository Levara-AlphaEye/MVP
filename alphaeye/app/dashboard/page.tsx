'use client';

import { UploadDeckModal } from '../../components/UploadDeckModal';
import { useUploadDeck } from '../../components/UploadDeckContext';

export default function Dashboard() {
  const { isModalOpen, closeModal } = useUploadDeck();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, User!</h1>
        <p className="text-gray-600 mt-2">Here&apos;s what&apos;s happening with your account today.</p>
      </div>

      {/* 12-column overview grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* First row: two large cards, each span 6 */}
        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-xl font-semibold mb-3">Funding Readiness Score</h3>
            <div className="text-5xl font-bold text-indigo-600">—</div>
            <p className="text-sm text-gray-500 mt-2">Placeholder for funding readiness description and details.</p>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-xl font-semibold mb-3">Fundraising Probability</h3>
            <div className="text-5xl font-bold text-green-600">—</div>
            <p className="text-sm text-gray-500 mt-2">Placeholder for fundraising probability and metrics.</p>
          </div>
        </div>

        {/* Second row: Top Risks (4) + Top Investors (8) */}
        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-lg font-semibold mb-3">Top Risks</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Risk item placeholder 1</li>
              <li>Risk item placeholder 2</li>
              <li>Risk item placeholder 3</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm h-full">
            <h3 className="text-lg font-semibold mb-3">Top Investors</h3>
            <p className="text-gray-600">Placeholder list of potential investors, interests, and notes.</p>
          </div>
        </div>
      </div>

      <UploadDeckModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

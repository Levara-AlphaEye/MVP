"use client"

export default function DashboardRightPanel({ visible = false }: { visible?: boolean }) {
  // This panel is hidden by default (visible=false). Toggle the `visible` prop or
  // switch the outer class to `block` to display it. Animation/slide logic is intentionally
  // left out — this is only the layout.
  return (
    <aside className={`${visible ? 'block' : 'hidden'} w-72 bg-white border-l p-4`}> 
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Context Panel</h3>
          <p className="text-sm text-gray-500">Hidden by default — used for contextual details.</p>
        </div>

        <div className="flex-1 text-sm text-gray-600">
          <p>Placeholder content: metrics, notes, or details related to the current page.</p>
        </div>

        <div className="mt-4">
          <button className="w-full rounded-md border px-3 py-2 text-sm text-gray-700">Close</button>
        </div>
      </div>
    </aside>
  )
}

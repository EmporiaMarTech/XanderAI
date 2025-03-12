"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { BarChart } from "@/components/ui/chart"

export function FeedbackOverview() {
  const data = [
    { category: "Product", positive: 85, negative: 15 },
    { category: "Support", positive: 92, negative: 8 },
    { category: "Features", positive: 78, negative: 22 },
    { category: "UX/UI", positive: 88, negative: 12 },
    { category: "Performance", positive: 82, negative: 18 }
  ]

  return (
    <div>
      <SectionHeader
        title="Feedback Distribution"
        description="Feedback by category"
      />
      <div className="mt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm text-neutral-400">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-sm text-neutral-400">Negative</span>
          </div>
        </div>
        <BarChart data={data} />
      </div>
    </div>
  )
}
"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { LineChart } from "@/components/ui/chart"
import { useInteractionTimeline } from "@/hooks/use-interactions"

export function InteractionTimeline() {
  const { data } = useInteractionTimeline()

  return (
    <div>
      <SectionHeader
        title="Interaction Timeline"
        description="Hourly interaction patterns"
      />
      <div className="mt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
            <span className="text-sm text-neutral-400">Interactions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
            <span className="text-sm text-neutral-400">Success Rate</span>
          </div>
        </div>
        <LineChart data={data} />
      </div>
    </div>
  )
}
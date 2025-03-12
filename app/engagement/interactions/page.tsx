"use client"

import { Card } from "@/components/ui/card"
import { InteractionTimeline } from "@/components/engagement/interactions/interaction-timeline"
import { InteractionStats } from "@/components/engagement/interactions/interaction-stats"
import { InteractionTypes } from "@/components/engagement/interactions/interaction-types"

export default function InteractionsPage() {
  return (
    <div className="space-y-6">
      <InteractionStats />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 p-6">
          <InteractionTimeline />
        </Card>
        <Card className="p-6">
          <InteractionTypes />
        </Card>
      </div>
    </div>
  )
}
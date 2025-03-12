"use client"

import { Card } from "@/components/ui/card"
import { FeedbackOverview } from "@/components/engagement/feedback/feedback-overview"
import { FeedbackList } from "@/components/engagement/feedback/feedback-list"
import { FeedbackStats } from "@/components/engagement/feedback/feedback-stats"

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <FeedbackStats />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 p-6">
          <FeedbackList />
        </Card>
        <Card className="p-6">
          <FeedbackOverview />
        </Card>
      </div>
    </div>
  )
}
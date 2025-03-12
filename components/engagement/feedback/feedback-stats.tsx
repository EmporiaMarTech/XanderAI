"use client"

import { StatCard } from "@/components/ui/stat-card"
import { MessageSquare, ThumbsUp, AlertCircle, Clock } from "lucide-react"
import { useFeedbackStats } from "@/hooks/use-feedback"

export function FeedbackStats() {
  const stats = useFeedbackStats()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Total Feedback"
        value={stats.total.toLocaleString()}
        description="All-time feedback received"
        icon={MessageSquare}
        trend={{
          value: `+${stats.totalChange}%`,
          direction: "up"
        }}
        gradient="blue"
      />

      <StatCard
        title="Satisfaction Rate"
        value={`${stats.satisfactionRate}%`}
        description="Overall satisfaction"
        icon={ThumbsUp}
        trend={{
          value: `+${stats.satisfactionChange}%`,
          direction: "up"
        }}
        gradient="emerald"
      />

      <StatCard
        title="Response Rate"
        value={`${stats.responseRate}%`}
        description="Feedback response rate"
        icon={Clock}
        trend={{
          value: `${stats.responseChange}%`,
          direction: stats.responseChange >= 0 ? "up" : "down"
        }}
        gradient="amber"
      />

      <StatCard
        title="Issues Reported"
        value={stats.issues}
        description="Active issues"
        icon={AlertCircle}
        trend={{
          value: `${stats.issuesChange}%`,
          direction: stats.issuesChange >= 0 ? "up" : "down"
        }}
        gradient="rose"
      />
    </div>
  )
}
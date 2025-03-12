"use client"

import { Card } from "@/components/ui/card"
import { Users, MessageSquare, Timer, TrendingUp } from "lucide-react"
import { useEngagement } from "@/hooks/use-engagement"
import { StatCard } from "@/components/ui/stat-card"

export function EngagementStats() {
  const stats = useEngagement()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Active Users"
        value={stats.activeUsers.total.toLocaleString()}
        description="Total active users today"
        icon={Users}
        trend={{
          value: `+${stats.activeUsers.change}%`,
          direction: "up"
        }}
        gradient="blue"
      />

      <StatCard
        title="Conversations"
        value={stats.conversations.total.toLocaleString()}
        description="Total conversations"
        icon={MessageSquare}
        trend={{
          value: `+${stats.conversations.change}%`,
          direction: "up"
        }}
        gradient="purple"
      />

      <StatCard
        title="Avg. Session"
        value={stats.avgSession.value}
        description="Time per session"
        icon={Timer}
        trend={{
          value: `+${stats.avgSession.change}%`,
          direction: "up"
        }}
        gradient="amber"
      />

      <StatCard
        title="Engagement Rate"
        value={`${stats.engagementRate.value}%`}
        description="User engagement"
        icon={TrendingUp}
        trend={{
          value: `+${stats.engagementRate.change}%`,
          direction: "up"
        }}
        gradient="emerald"
      />
    </div>
  )
}
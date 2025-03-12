"use client"

import { StatCard } from "@/components/ui/stat-card"
import { MessageSquare, Users, Clock, Target } from "lucide-react"
import { useInteractionStats } from "@/hooks/use-interactions"

export function InteractionStats() {
  const stats = useInteractionStats()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Total Interactions"
        value={stats.total.toLocaleString()}
        description="All-time interactions"
        icon={MessageSquare}
        trend={{
          value: `+${stats.totalChange}%`,
          direction: "up"
        }}
        gradient="blue"
      />

      <StatCard
        title="Unique Users"
        value={stats.uniqueUsers.toLocaleString()}
        description="Distinct users"
        icon={Users}
        trend={{
          value: `+${stats.usersChange}%`,
          direction: "up"
        }}
        gradient="purple"
      />

      <StatCard
        title="Avg. Duration"
        value={stats.avgDuration}
        description="Per interaction"
        icon={Clock}
        trend={{
          value: `${stats.durationChange}%`,
          direction: stats.durationChange >= 0 ? "up" : "down"
        }}
        gradient="amber"
      />

      <StatCard
        title="Success Rate"
        value={`${stats.successRate}%`}
        description="Completed interactions"
        icon={Target}
        trend={{
          value: `+${stats.successChange}%`,
          direction: "up"
        }}
        gradient="emerald"
      />
    </div>
  )
}
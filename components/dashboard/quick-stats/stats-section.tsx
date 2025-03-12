"use client"

import { Activity, Zap, TrendingUp } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"
import { useDashboardStats } from "@/hooks/use-dashboard-stats"

export function StatsSection() {
  const stats = useDashboardStats()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-3 gap-4">
      <StatCard
        title="Live Interactions"
        value={`${stats.liveInteractions.total.toLocaleString()}`}
        description="Active conversations"
        icon={Activity}
        trend={{
          value: `${stats.liveInteractions.change > 0 ? "+" : ""}${stats.liveInteractions.change}%`,
          direction: stats.liveInteractions.change >= 0 ? "up" : "down"
        }}
        gradient="blue"
      />

      <StatCard
        title="Response Time"
        value={`${stats.responseTime.value.toFixed(1)}s`}
        description="Average response"
        icon={Zap}
        trend={{
          value: `${stats.responseTime.change > 0 ? "+" : ""}${stats.responseTime.change}%`,
          direction: stats.responseTime.change >= 0 ? "up" : "down"
        }}
        gradient="purple"
      />

      <StatCard
        title="Success Rate"
        value={`${stats.successRate.value}%`}
        description="Task completion"
        icon={TrendingUp}
        trend={{
          value: `${stats.successRate.change > 0 ? "+" : ""}${stats.successRate.change}%`,
          direction: stats.successRate.change >= 0 ? "up" : "down"
        }}
        gradient="emerald"
      />
    </div>
  )
}
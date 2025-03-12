"use client"

import { Card } from "@/components/ui/card"
import { Users, MessageSquare, Timer, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Active Users",
    value: "32.5K",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    name: "Conversations",
    value: "8.2K",
    change: "+18%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    name: "Avg. Session",
    value: "12m 30s",
    change: "+5%",
    trend: "up",
    icon: Timer,
  },
  {
    name: "Engagement Rate",
    value: "64.8%",
    change: "+7%",
    trend: "up",
    icon: TrendingUp,
  },
]

export function EngagementStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">{stat.name}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm font-medium text-green-500">
                {stat.change}
              </span>
              <span className="text-sm text-neutral-500">vs last month</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
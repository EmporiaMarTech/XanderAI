"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  change: {
    value: string
    trend: "up" | "down"
  }
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export function StatCard({ title, value, change, description, icon: Icon }: StatCardProps) {
  const isPositive = change.trend === "up"
  const trendColor = isPositive ? "text-green-500" : "text-red-500"

  return (
    <Card className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-900/50 border-neutral-800/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-neutral-200">{value}</h3>
          <p className="text-sm text-neutral-400 mt-1">{description}</p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className={cn("text-sm font-medium", trendColor)}>
          {change.value}
        </span>
        <span className="text-sm text-neutral-500">vs last month</span>
      </div>
    </Card>
  )
}
"use client"

import { Card } from "@/components/ui/card"
import { Users, RefreshCw, UserPlus, UserMinus } from "lucide-react"
import { useRetentionMetrics } from "@/hooks/use-retention"

export function UserRetention() {
  const metrics = useRetentionMetrics()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.change.startsWith("+")
        const changeColor = isPositive ? "text-green-500" : "text-red-500"

        return (
          <Card key={metric.name} className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{metric.value}</h3>
                <p className="text-sm text-neutral-500 mt-1">{metric.name}</p>
                <p className={`text-sm font-medium mt-0.5 ${changeColor}`}>
                  {metric.change} vs last month
                </p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
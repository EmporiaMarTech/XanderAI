"use client"

import { Card } from "@/components/ui/card"
import { Brain, Zap, Clock, Cpu } from "lucide-react"

const metrics = [
  {
    name: "Response Time",
    value: "245ms",
    description: "Average response time",
    icon: Clock,
  },
  {
    name: "Daily Interactions",
    value: "12.5K",
    description: "Total interactions per day",
    icon: Zap,
  },
  {
    name: "Model Size",
    value: "2.8GB",
    description: "Compressed model size",
    icon: Brain,
  },
  {
    name: "GPU Utilization",
    value: "42%",
    description: "Average GPU usage",
    icon: Cpu,
  },
]

export function ModelPerformance() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.name} className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{metric.value}</h3>
                <p className="text-sm text-neutral-500 mt-1">{metric.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{metric.description}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
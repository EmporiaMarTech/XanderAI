"use client"

import { Card } from "@/components/ui/card"
import { Database, FileText, GitBranch, Scale } from "lucide-react"

const stats = [
  {
    name: "Total Documents",
    value: "1.2M",
    change: "+12%",
    trend: "up",
    icon: FileText,
  },
  {
    name: "Training Data",
    value: "850K",
    change: "+8%",
    trend: "up",
    icon: Database,
  },
  {
    name: "Model Versions",
    value: "24",
    change: "+2",
    trend: "up",
    icon: GitBranch,
  },
  {
    name: "Avg. Accuracy",
    value: "94.8%",
    change: "+1.2%",
    trend: "up",
    icon: Scale,
  },
]

export function DatasetStats() {
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
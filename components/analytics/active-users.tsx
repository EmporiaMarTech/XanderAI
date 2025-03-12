"use client"

import { Card } from "@/components/ui/card"
import { Users, Clock, DollarSign, Activity } from "lucide-react"

const metrics = [
  {
    name: "Users",
    value: "36K",
    icon: Users,
  },
  {
    name: "Clicks",
    value: "2m",
    icon: Clock,
  },
  {
    name: "Sales",
    value: "435$",
    icon: DollarSign,
  },
  {
    name: "Items",
    value: "43",
    icon: Activity,
  },
]

export function ActiveUsers() {
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
                <p className="text-sm text-neutral-500">{metric.name}</p>
                <h3 className="text-2xl font-semibold mt-1">{metric.value}</h3>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
"use client"

import { Card } from "@/components/ui/card"
import { Users, RefreshCw, UserPlus, UserMinus } from "lucide-react"

const metrics = [
  {
    name: "Total Users",
    value: "124.5K",
    change: "+12%",
    icon: Users,
  },
  {
    name: "Retention Rate",
    value: "68%",
    change: "+5%",
    icon: RefreshCw,
  },
  {
    name: "New Users",
    value: "2.4K",
    change: "+18%",
    icon: UserPlus,
  },
  {
    name: "Churn Rate",
    value: "4.2%",
    change: "-2%",
    icon: UserMinus,
  },
]

export function UserRetention() {
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
"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart } from "lucide-react"

const stats = [
  {
    name: "Today's Money",
    value: "$53,000",
    change: "+55%",
    trend: "up",
    icon: DollarSign,
  },
  {
    name: "Today's Users",
    value: "2,300",
    change: "+5%",
    trend: "up",
    icon: Users,
  },
  {
    name: "New Clients",
    value: "3,462",
    change: "-2%",
    trend: "down",
    icon: Users,
  },
  {
    name: "Sales",
    value: "$103,430",
    change: "+5%",
    trend: "up",
    icon: ShoppingCart,
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        const trendColor = stat.trend === "up" ? "text-green-500" : "text-red-500"

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
              <TrendIcon className={`h-4 w-4 ${trendColor}`} />
              <span className={`text-sm font-medium ${trendColor}`}>
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
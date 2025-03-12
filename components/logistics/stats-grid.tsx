"use client"

import { Card } from "@/components/ui/card"
import { Package, Truck, CheckCircle, AlertCircle } from "lucide-react"
import { type Shipment } from "@/hooks/use-shipments"

interface StatsGridProps {
  shipments: Shipment[]
}

export function StatsGrid({ shipments }: StatsGridProps) {
  const stats = [
    {
      name: "Total Shipments",
      value: shipments.length,
      icon: Package,
      change: "+12%",
    },
    {
      name: "In Transit",
      value: shipments.filter(s => s.status === "In Transit").length,
      icon: Truck,
      change: "+5%",
    },
    {
      name: "Delivered",
      value: shipments.filter(s => s.status === "Delivered").length,
      icon: CheckCircle,
      change: "+18%",
    },
    {
      name: "Exceptions",
      value: shipments.filter(s => s.status === "Exception").length,
      icon: AlertCircle,
      change: "-2%",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{stat.name}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                <p className={`text-sm font-medium mt-0.5 ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} vs last month
                </p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
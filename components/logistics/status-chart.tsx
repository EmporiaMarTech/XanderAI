"use client"

import { Card } from "@/components/ui/card"
import { BarChart } from "@/components/ui/chart"
import { type Shipment } from "@/hooks/use-shipments"

interface StatusChartProps {
  shipments: Shipment[]
}

export function StatusChart({ shipments }: StatusChartProps) {
  const statusData = shipments.length > 0 ? Object.entries(
    shipments.reduce((acc: Record<string, number>, shipment) => {
      acc[shipment.status] = (acc[shipment.status] || 0) + 1
      return acc
    }, {})
  ).map(([name, value]) => ({
    name,
    value
  })) : []

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Status Distribution</h3>
      <BarChart 
        data={statusData}
        xKey="name"
        yKey="value"
        color="hsl(var(--chart-2))"
      />
    </Card>
  )
}
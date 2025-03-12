"use client"

import { Card } from "@/components/ui/card"
import { LineChart } from "@/components/ui/chart"
import { type Shipment } from "@/hooks/use-shipments"

interface TimelineChartProps {
  shipments: Shipment[]
}

export function TimelineChart({ shipments }: TimelineChartProps) {
  const timelineData = shipments.length > 0 ? shipments.reduce((acc: any[], shipment) => {
    const date = new Date(shipment.created_at).toLocaleDateString()
    const existing = acc.find(item => item.date === date)
    if (existing) {
      existing.value++
    } else {
      acc.push({ date, value: 1 })
    }
    return acc
  }, []) : []

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Shipment Timeline</h3>
      <LineChart 
        data={timelineData}
        xKey="date"
        yKey="value"
        color="hsl(var(--chart-1))"
      />
    </Card>
  )
}
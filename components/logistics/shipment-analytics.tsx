"use client"

import { StatsGrid } from "./stats-grid"
import { TimelineChart } from "./timeline-chart"
import { StatusChart } from "./status-chart"
import { type Shipment } from "@/hooks/use-shipments"

interface ShipmentAnalyticsProps {
  shipments: Shipment[]
}

export function ShipmentAnalytics({ shipments }: ShipmentAnalyticsProps) {
  return (
    <div className="space-y-6">
      <StatsGrid shipments={shipments} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TimelineChart shipments={shipments} />
        <StatusChart shipments={shipments} />
      </div>
    </div>
  )
}
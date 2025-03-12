"use client"

import { BarChart } from "@/components/ui/chart"

export function TrainingProgress() {
  const data = [
    { name: "Step 1", value: 100 },
    { name: "Step 2", value: 85 },
    { name: "Step 3", value: 70 },
    { name: "Step 4", value: 55 },
    { name: "Step 5", value: 40 },
    { name: "Step 6", value: 25 },
    { name: "Step 7", value: 15 },
    { name: "Step 8", value: 5 },
  ]

  return <BarChart data={data} />
}
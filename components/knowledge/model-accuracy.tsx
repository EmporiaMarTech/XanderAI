"use client"

import { LineChart } from "@/components/ui/chart"

export function ModelAccuracy() {
  const data = [
    { name: "Week 1", accuracy: 92, validation: 91 },
    { name: "Week 2", accuracy: 93, validation: 92 },
    { name: "Week 3", accuracy: 93.5, validation: 92.5 },
    { name: "Week 4", accuracy: 94, validation: 93 },
    { name: "Week 5", accuracy: 94.2, validation: 93.5 },
    { name: "Week 6", accuracy: 94.5, validation: 93.8 },
    { name: "Week 7", accuracy: 94.8, validation: 94 },
    { name: "Week 8", accuracy: 95, validation: 94.2 },
  ]

  return <LineChart data={data} />
}
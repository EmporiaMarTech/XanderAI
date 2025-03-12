"use client"

import { LineChart } from "@/components/ui/chart"

export function UserActivity() {
  const data = [
    { name: "Mon", users: 2400, sessions: 1800 },
    { name: "Tue", users: 3200, sessions: 2400 },
    { name: "Wed", users: 2800, sessions: 2100 },
    { name: "Thu", users: 3600, sessions: 2700 },
    { name: "Fri", users: 3000, sessions: 2250 },
    { name: "Sat", users: 2000, sessions: 1500 },
    { name: "Sun", users: 1800, sessions: 1350 },
  ]

  return <LineChart data={data} />
}
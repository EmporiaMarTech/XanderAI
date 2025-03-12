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

  return (
    <div className="mt-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
          <span className="text-sm text-neutral-400">Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
          <span className="text-sm text-neutral-400">Sessions</span>
        </div>
      </div>
      <LineChart data={data} />
    </div>
  )
}
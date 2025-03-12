"use client"

import { Card } from "@/components/ui/card"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Globe } from "@/components/analytics/globe"
import { StatsGrid } from "@/components/analytics/stats-grid"
import { CountryTable } from "@/components/analytics/country-table"
import { ActiveUsers } from "@/components/analytics/active-users"

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <StatsGrid />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <p className="text-sm text-neutral-500">Monthly revenue breakdown</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
              <span className="text-sm text-neutral-500">Revenue</span>
            </div>
          </div>
          <BarChart 
            data={[
              { name: "Jan", value: 400 },
              { name: "Feb", value: 300 },
              { name: "Mar", value: 200 },
              { name: "Apr", value: 450 },
              { name: "May", value: 350 },
              { name: "Jun", value: 250 },
              { name: "Jul", value: 480 },
              { name: "Aug", value: 380 },
              { name: "Sep", value: 280 },
            ]}
          />
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Sales by Country</h3>
            <p className="text-sm text-neutral-500">Top performing regions</p>
          </div>
          <CountryTable />
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Global Distribution</h3>
            <p className="text-sm text-neutral-500">User distribution worldwide</p>
          </div>
          <Globe />
        </Card>

        <Card className="xl:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Growth Trends</h3>
              <p className="text-sm text-neutral-500">Users vs Revenue</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
                <span className="text-sm text-neutral-500">Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
                <span className="text-sm text-neutral-500">Revenue</span>
              </div>
            </div>
          </div>
          <LineChart 
            data={[
              { name: "Apr", users: 100, revenue: 240 },
              { name: "May", users: 150, revenue: 320 },
              { name: "Jun", users: 200, revenue: 280 },
              { name: "Jul", users: 320, revenue: 400 },
              { name: "Aug", users: 450, revenue: 380 },
              { name: "Sep", users: 380, revenue: 420 },
              { name: "Oct", users: 420, revenue: 380 },
              { name: "Nov", users: 380, revenue: 450 },
              { name: "Dec", users: 450, revenue: 520 },
            ]}
          />
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-sm text-neutral-500">Real-time user metrics</p>
        </div>
        <ActiveUsers />
      </Card>
    </div>
  )
}
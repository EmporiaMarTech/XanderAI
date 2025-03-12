"use client"

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface BarChartProps {
  data: any[]
  xKey?: string
  yKey?: string
  height?: number
}

export function BarChart({ 
  data, 
  xKey = "name",
  yKey = "value",
  height = 350
}: BarChartProps) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="hsl(var(--neutral-800))" 
            vertical={false}
          />
          <XAxis 
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            stroke="hsl(var(--neutral-500))"
            tick={{ fill: "hsl(var(--neutral-400))", fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            stroke="hsl(var(--neutral-500))"
            tick={{ fill: "hsl(var(--neutral-400))", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: "hsl(var(--neutral-900))",
              border: "1px solid hsl(var(--neutral-800))",
              borderRadius: "0.5rem",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3)"
            }}
            itemStyle={{ color: "hsl(var(--neutral-200))" }}
            labelStyle={{ color: "hsl(var(--neutral-400))", marginBottom: "0.5rem" }}
          />
          <Bar 
            dataKey={yKey} 
            fill="hsl(var(--chart-1))"
            radius={[4, 4, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
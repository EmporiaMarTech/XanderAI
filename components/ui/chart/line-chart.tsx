"use client"

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface LineChartProps {
  data: any[]
  xKey?: string
  yKeys?: string[]
  height?: number
}

export function LineChart({ 
  data, 
  xKey = "name",
  yKeys = Object.keys(data[0] || {}).filter(key => key !== xKey),
  height = 350
}: LineChartProps) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
          {yKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={`hsl(var(--chart-${index + 1}))`}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 2 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
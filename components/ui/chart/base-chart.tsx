"use client"

import { ResponsiveContainer } from "recharts"

interface BaseChartProps {
  children: React.ReactNode
  height?: number
}

export function BaseChart({ children, height = 350 }: BaseChartProps) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  )
}
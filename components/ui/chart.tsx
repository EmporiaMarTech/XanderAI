"use client"

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart as RechartsBarChart,
  Bar,
  TooltipProps
} from 'recharts'

interface ChartDataPoint {
  [key: string]: string | number
}

interface ChartProps {
  data: ChartDataPoint[]
  xKey?: string
  yKey?: string
  color?: string
}

interface CustomTooltipProps extends TooltipProps<any, any> {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
            <span className="font-bold text-muted-foreground">
              {payload[0].value}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return null
}

const EmptyChart = () => (
  <div className="flex items-center justify-center h-[350px] bg-neutral-900/50 rounded-lg">
    <p className="text-neutral-500">No data available</p>
  </div>
)

const defaultAxisProps = {
  stroke: "hsl(var(--muted-foreground))",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
  scale: "auto",
  domain: ["auto", "auto"],
  padding: { left: 10, right: 10 }
}

export function LineChart({ 
  data = [], 
  xKey = 'name',
  yKey = 'value',
  color = 'hsl(var(--chart-1))'
}: ChartProps) {
  const chartData = useMemo(() => data, [data])

  if (!chartData?.length) {
    return <EmptyChart />
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsLineChart data={chartData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="hsl(var(--border))" 
          vertical={false}
        />
        <XAxis 
          dataKey={xKey}
          {...defaultAxisProps}
        />
        <YAxis
          {...defaultAxisProps}
          width={40}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey={yKey}
          stroke={color}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function BarChart({ 
  data = [], 
  xKey = 'name',
  yKey = 'value',
  color = 'hsl(var(--chart-1))'
}: ChartProps) {
  const chartData = useMemo(() => data, [data])

  if (!chartData?.length) {
    return <EmptyChart />
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBarChart data={chartData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="hsl(var(--border))" 
          vertical={false}
        />
        <XAxis
          dataKey={xKey}
          {...defaultAxisProps}
        />
        <YAxis
          {...defaultAxisProps}
          width={40}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey={yKey} 
          fill={color} 
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
"use client"

import * as React from 'react'
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
} from 'recharts'
import { cn } from '@/lib/utils'
import { chartConfig } from './config'
import { CustomTooltip } from './tooltip'
import type { ChartProps } from './types'

export function LineChart({ data, className }: ChartProps) {
  return (
    <div className={cn("h-[400px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={chartConfig.axis.grid.color}
            opacity={chartConfig.axis.grid.opacity}
          />
          <XAxis
            dataKey="name"
            stroke={chartConfig.axis.stroke.color}
            tick={{ fill: chartConfig.axis.style.color }}
            tickLine={{ stroke: chartConfig.axis.stroke.color }}
            style={chartConfig.axis.style}
          />
          <YAxis
            stroke={chartConfig.axis.stroke.color}
            tick={{ fill: chartConfig.axis.style.color }}
            tickLine={{ stroke: chartConfig.axis.stroke.color }}
            style={chartConfig.axis.style}
          />
          <Tooltip content={<CustomTooltip />} />
          {Object.keys(data[0])
            .filter(key => key !== 'name')
            .map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={`hsl(var(--chart-${index + 1}))`}
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: `hsl(var(--chart-${index + 1}))`,
                  stroke: `hsl(var(--background))`,
                  strokeWidth: 2,
                }}
              />
            ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
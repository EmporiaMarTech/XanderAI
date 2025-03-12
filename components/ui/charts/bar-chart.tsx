"use client"

import * as React from 'react'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
} from 'recharts'
import { cn } from '@/lib/utils'
import { chartConfig } from './config'
import { CustomTooltip } from './tooltip'
import type { ChartProps } from './types'

export function BarChart({ data, className }: ChartProps) {
  return (
    <div className={cn("h-[400px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
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
              <Bar
                key={key}
                dataKey={key}
                fill={`hsl(var(--chart-${index + 1}))`}
                radius={[4, 4, 0, 0]}
              />
            ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
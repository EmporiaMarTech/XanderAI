"use client"

import { TooltipProps } from 'recharts'

export function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<any, any>) {
  if (!active || !payload) return null

  return (
    <div 
      style={{
        background: 'hsl(var(--background))',
        border: '1px solid hsl(var(--border))',
        boxShadow: 'hsl(var(--border)) 0px 1px 3px 0px',
        borderRadius: '8px',
        padding: '8px 12px'
      }}
    >
      <p className="mb-2 font-medium text-foreground">
        {label}
      </p>
      {payload.map((item: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="size-3 rounded-full" 
            style={{ background: item.color }}
          />
          <p className="text-sm text-muted-foreground">
            {item.name}: {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}
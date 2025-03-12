"use client"

import { Card } from "./card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon: React.ComponentType<{ className?: string }>
  trend?: {
    value: string
    direction: "up" | "down"
  }
  className?: string
  gradient?: "blue" | "purple" | "amber" | "emerald"
}

const gradients = {
  blue: "from-blue-500/10 via-blue-500/5 to-transparent",
  purple: "from-purple-500/10 via-purple-500/5 to-transparent",
  amber: "from-amber-500/10 via-amber-500/5 to-transparent",
  emerald: "from-emerald-500/10 via-emerald-500/5 to-transparent"
}

const iconColors = {
  blue: "text-blue-500",
  purple: "text-purple-500",
  amber: "text-amber-500",
  emerald: "text-emerald-500"
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trend,
  className,
  gradient = "blue"
}: StatCardProps) {
  return (
    <Card className={cn(
      "p-6 bg-gradient-to-br border-neutral-800/50 hover:border-neutral-700/50 transition-all group",
      gradients[gradient],
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
            {title}
          </p>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
              {value}
            </h3>
            {trend && (
              <span className={cn(
                "text-sm font-medium",
                trend.direction === "up" ? "text-green-500" : "text-red-500"
              )}>
                {trend.value}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
              {description}
            </p>
          )}
        </div>
        <div className={cn(
          "h-12 w-12 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-900/50 flex items-center justify-center border border-neutral-800/50 group-hover:border-neutral-700/50 transition-all shadow-lg",
          "group-hover:scale-110 group-hover:rotate-3 duration-300"
        )}>
          <Icon className={cn("h-6 w-6", iconColors[gradient])} />
        </div>
      </div>
    </Card>
  )
}
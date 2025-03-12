"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { useInteractionTypes } from "@/hooks/use-interactions"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown } from "lucide-react"

export function InteractionTypes() {
  const { types } = useInteractionTypes()

  return (
    <div>
      <SectionHeader
        title="Interaction Types"
        description="Distribution by category"
      />
      <div className="mt-6 space-y-4">
        {types.map((type) => (
          <div 
            key={type.name}
            className="p-4 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-neutral-200">{type.name}</h3>
              <Badge 
                variant="secondary"
                className={type.trend === "up" 
                  ? "bg-green-500/10 text-green-400" 
                  : "bg-red-500/10 text-red-400"}
              >
                {type.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {type.change}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-sm text-neutral-400 min-w-[3rem] text-right">
                {type.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SetupTaskProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  completed: boolean
  action: {
    label: string
    onClick: () => void
    disabled?: boolean
  }
}

export function SetupTask({ 
  icon: Icon, 
  title, 
  description, 
  completed, 
  action 
}: SetupTaskProps) {
  return (
    <div className={cn(
      "p-4 rounded-lg transition-colors",
      completed ? "bg-blue-500/5" : "bg-neutral-800/50"
    )}>
      <div className="flex items-start gap-4">
        <div className={cn(
          "mt-1 size-8 rounded-lg flex items-center justify-center",
          completed ? "bg-blue-500 text-white" : "bg-neutral-700 text-neutral-300"
        )}>
          {completed ? (
            <Check className="size-4" />
          ) : (
            <Icon className="size-4" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className={cn(
                "font-medium",
                completed ? "text-neutral-400 line-through" : "text-neutral-200"
              )}>
                {title}
              </h3>
              <p className="text-sm text-neutral-500 mt-0.5">
                {description}
              </p>
            </div>
            <Button
              size="sm"
              variant={completed ? "outline" : "secondary"}
              className={cn(
                "shrink-0",
                completed && "border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
              )}
              onClick={action.onClick}
              disabled={action.disabled}
            >
              {action.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
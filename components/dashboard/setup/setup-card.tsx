"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SetupTaskProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  completed: boolean
  action: {
    label: string
    onClick: () => void
    disabled?: boolean
  }
}

export function SetupCard({ icon: Icon, title, completed, action }: SetupTaskProps) {
  return (
    <div className="py-2 px-2.5 flex justify-between items-center gap-x-3 bg-neutral-800/50 rounded-lg">
      <span className={cn(
        "size-5 flex shrink-0 justify-center items-center rounded-full",
        completed 
          ? "bg-blue-500 text-white" 
          : "text-neutral-200"
      )}>
        {completed ? (
          <Check className="size-3.5" />
        ) : (
          <Icon className="size-4" />
        )}
      </span>

      <div className="grow">
        <div className="flex justify-between items-center gap-x-1.5">
          <div className="grow">
            {completed ? (
              <s className="text-sm text-neutral-500">
                {title}
              </s>
            ) : (
              <span className="text-sm text-neutral-200">
                {title}
              </span>
            )}
          </div>
          <div>
            <Button
              size="sm"
              variant="secondary"
              className="h-7 px-2 text-xs"
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
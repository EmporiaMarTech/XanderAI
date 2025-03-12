"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface ProjectColumnHeaderProps {
  title: string
  color: string
  count: number
  onAdd: () => void
}

export function ProjectColumnHeader({ 
  title, 
  color, 
  count,
  onAdd 
}: ProjectColumnHeaderProps) {
  return (
    <div className="pe-7 w-full inline-flex justify-between items-center gap-x-2">
      <div className="inline-flex items-center gap-x-2">
        <div className={cn(
          "flex items-center gap-x-1.5 py-px px-2 rounded-md",
          color
        )}>
          <span className="w-1 h-3 rounded-full bg-current" />
          <span className="font-medium text-[13px] text-neutral-200">
            {title}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <span className="text-[13px] text-neutral-400 leading-3">
          {count}
        </span>

        <Button
          size="icon"
          variant="ghost"
          className="h-5 w-5 text-neutral-400 hover:text-neutral-200"
          onClick={onAdd}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add new</span>
        </Button>
      </div>
    </div>
  )
}
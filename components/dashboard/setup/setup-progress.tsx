"use client"

import { cn } from "@/lib/utils"

interface SetupProgressProps {
  completed: number
  total: number
  className?: string
}

export function SetupProgress({ completed, total, className }: SetupProgressProps) {
  const percentage = (completed / total) * 100

  return (
    <div className={cn("w-full", className)}>
      <div className="flex h-2 overflow-hidden bg-neutral-800 rounded-full">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
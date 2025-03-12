"use client"

import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h2 className="text-lg font-semibold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-neutral-400">{description}</p>
      )}
    </div>
  )
}
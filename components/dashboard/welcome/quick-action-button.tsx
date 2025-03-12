"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuickActionButtonProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
  variant?: "primary" | "secondary"
}

export function QuickActionButton({ 
  icon: Icon, 
  label, 
  onClick,
  variant = "secondary"
}: QuickActionButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-2 h-9",
        variant === "primary" && "bg-blue-600 hover:bg-blue-700",
        variant === "secondary" && "bg-neutral-800 hover:bg-neutral-700"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm">{label}</span>
    </Button>
  )
}
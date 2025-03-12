"use client"

import { cn } from "@/lib/utils"

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4"
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl"
}

export function GradientHeading({ 
  children, 
  className,
  as: Component = "h1",
  size = "lg"
}: GradientHeadingProps) {
  return (
    <Component className={cn(
      "font-bold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent",
      sizeClasses[size],
      className
    )}>
      {children}
    </Component>
  )
}
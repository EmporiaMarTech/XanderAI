import { cn } from "@/lib/utils"

interface PageGridProps {
  children: React.ReactNode
  className?: string
}

interface PageGridItemProps {
  children?: React.ReactNode
  className?: string
}

export function PageGrid({ children, className }: PageGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100vh-180px)]",
      className
    )}>
      {children}
    </div>
  )
}

export function PageGridItem({ children, className }: PageGridItemProps) {
  return (
    <div className={cn(
      "bg-gradient-to-b from-neutral-900 to-neutral-900/50 backdrop-blur-xl border border-neutral-800/50 rounded-lg p-4 shadow-lg shadow-black/20",
      className
    )}>
      {children}
    </div>
  )
}
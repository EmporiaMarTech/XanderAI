"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

interface ActionCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  badge?: string
}

export function ActionCard({ title, description, icon: Icon, href, badge }: ActionCardProps) {
  return (
    <Link href={href}>
      <Card className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-900/50 border-neutral-800/50 hover:border-neutral-700/50 transition-all group">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
            <Icon className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                {title}
              </h3>
              {badge && (
                <span className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-400 rounded">
                  {badge}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
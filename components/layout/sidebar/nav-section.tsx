"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { type NavSection } from "./types"
import { Badge } from "@/components/ui/badge"

export function NavSectionLinks({ title, links }: NavSection) {
  const pathname = usePathname()

  return (
    <div className="space-y-1">
      <h3 className="px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
        {title}
      </h3>
      {links.map((link) => {
        const Icon = link.icon
        const isActive = pathname === link.href
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
              isActive 
                ? "bg-gradient-to-r from-blue-500/20 to-transparent text-blue-400 shadow-sm shadow-black/10" 
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            )}
          >
            <Icon className={cn(
              "h-5 w-5",
              isActive && "text-blue-400"
            )} />
            <span className="flex-1">{link.name}</span>
            {link.badge && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-b from-blue-500/20 to-blue-500/10 text-blue-400 rounded shadow-sm shadow-black/10">
                {link.badge}
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
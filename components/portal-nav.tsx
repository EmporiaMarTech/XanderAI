"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
}

type PortalNavProps = {
  items: NavItem[]
}

export function PortalNav({ items }: PortalNavProps) {
  const pathname = usePathname()
  
  return (
    <div className="flex items-center gap-1 bg-gradient-to-b from-neutral-900 to-neutral-900/50 backdrop-blur-xl p-1 rounded-lg border border-neutral-800/50 shadow-lg shadow-black/20">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "py-1.5 px-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 rounded-md transition-all",
            pathname === item.href && "bg-gradient-to-b from-blue-500/20 to-blue-500/10 text-blue-400 shadow-sm shadow-black/10"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
"use client"

import { NavSectionLinks } from "./sidebar/nav-section"
import { ProfileMenu } from "./sidebar/profile-menu"
import { Logo } from "./sidebar/logo"
import { launchpadLinks, platformLinks, toolsLinks, settingsLink } from "./sidebar/nav-sections"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed inset-y-0 z-50 bg-black/30 backdrop-blur-xl border-r border-neutral-800/50">
      <div className="flex h-[60px] items-center border-b border-neutral-800/50 px-6">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col overflow-y-auto px-3 py-4">
        <nav className="flex-1 space-y-8">
          <NavSectionLinks {...launchpadLinks} />
          <NavSectionLinks {...platformLinks} />
          <NavSectionLinks {...toolsLinks} />
        </nav>

        <div className="mt-auto space-y-4">
          <Link
            href={settingsLink.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
              pathname === settingsLink.href
                ? "bg-gradient-to-r from-blue-500/20 to-transparent text-blue-400 shadow-sm shadow-black/10"
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            )}
          >
            <settingsLink.icon className={cn(
              "h-5 w-5",
              pathname === settingsLink.href && "text-blue-400"
            )} />
            <span className="flex-1">{settingsLink.name}</span>
          </Link>

          <div className="border-t border-neutral-800/50 pt-4">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </aside>
  )
}
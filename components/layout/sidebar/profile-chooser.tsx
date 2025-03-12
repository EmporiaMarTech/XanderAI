"use client"

import { UserCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProfileChooser() {
  return (
    <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 transition-all group">
      <div className="size-9 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg">
        <UserCircle className="h-5 w-5" />
      </div>
      
      <div className="flex-1 text-left">
        <div className="font-medium text-neutral-200 group-hover:text-white transition-colors">Guest User</div>
        <div className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors flex items-center gap-1">
          Free Plan
          <div className="px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-400 rounded border border-neutral-700/50">
            Upgrade
          </div>
        </div>
      </div>

      <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
    </button>
  )
}
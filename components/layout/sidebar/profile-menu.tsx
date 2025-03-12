"use client"

import { useState } from "react"
import { UserCircle, ChevronRight, Crown, CreditCard, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ProfileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 transition-all group">
          <ProfileAvatar />
          <ProfileInfo />
          <ChevronRight className={cn(
            "h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-all",
            open && "rotate-90"
          )} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="w-64 p-2 bg-neutral-900 border-neutral-800"
      >
        <div className="px-2 py-1.5 mb-2">
          <h3 className="text-sm font-medium text-neutral-200">Guest User</h3>
          <p className="text-xs text-neutral-500">guest@example.com</p>
        </div>
        <DropdownMenuSeparator className="bg-neutral-800" />
        <DropdownMenuItem className="flex items-center gap-2 py-2 text-neutral-200 focus:bg-neutral-800 focus:text-neutral-200">
          <Crown className="h-4 w-4 text-amber-500" />
          <div className="flex-1">Upgrade to Pro</div>
          <span className="text-xs px-1.5 py-0.5 bg-gradient-to-b from-amber-500/20 to-amber-500/10 text-amber-500 rounded">-20%</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2 text-neutral-200 focus:bg-neutral-800 focus:text-neutral-200">
          <CreditCard className="h-4 w-4 mr-2" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-neutral-800" />
        <DropdownMenuItem className="py-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ProfileAvatar() {
  return (
    <div className="size-9 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg">
      <UserCircle className="h-5 w-5" />
    </div>
  )
}

function ProfileInfo() {
  return (
    <div className="flex-1 text-left">
      <div className="font-medium text-neutral-200 group-hover:text-white transition-colors">
        Guest User
      </div>
      <div className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors flex items-center gap-1">
        Free Plan
        <div className="px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-400 rounded border border-neutral-700/50">
          Upgrade
        </div>
      </div>
    </div>
  )
}
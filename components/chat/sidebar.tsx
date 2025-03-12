"use client"

import { useState } from "react"
import { Search, Edit, ChevronDown } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function ChatSidebar() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <aside className="w-72 border-r border-neutral-800/50 flex flex-col bg-neutral-900/50">
      <div className="p-4 border-b border-neutral-800/50 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-200">Inbox</h2>
        <div className="flex items-center gap-2">
          <select className="bg-transparent text-xs text-neutral-400 border-0 focus:ring-0">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <Button variant="ghost" size="icon" className="text-neutral-400">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border-b border-neutral-800/50">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <Input 
            placeholder="Search messages..."
            className="border-0 focus-visible:ring-0 bg-transparent pl-10 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="border-b border-neutral-800/50 p-2">
        <nav className="flex gap-1">
          {["all", "mentions", "spammed", "blocked"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-3 py-1.5 text-xs rounded-md transition-colors",
                activeTab === tab 
                  ? "bg-blue-500/10 text-blue-400" 
                  : "text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800/50"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 h-full flex flex-col items-center justify-center text-center">
          <div className="w-48 h-48 mb-4 opacity-50">
            <svg className="w-full h-full" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="27" y="50.5" width="124" height="39" rx="7.5" className="fill-neutral-800" />
              <rect x="34.5" y="58" width="24" height="24" rx="12" className="fill-neutral-700" />
              <rect x="66.5" y="61" width="60" height="6" rx="3" className="fill-neutral-700" />
              <rect x="66.5" y="73" width="77" height="6" rx="3" className="fill-neutral-700" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-neutral-200 mb-1">No messages</h3>
          <p className="text-xs text-neutral-500">Your messages will appear here</p>
        </div>
      </div>
    </aside>
  )
}
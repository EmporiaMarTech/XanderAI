"use client"

import { Brain } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 shadow-lg shadow-black/20">
        <Brain className="h-5 w-5 text-blue-400" />
      </div>
      <span className="text-xl font-semibold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
        XanderAI
      </span>
      <VersionBadge />
    </Link>
  )
}

function VersionBadge() {
  return (
    <span className="px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-b from-red-500/20 to-red-500/10 text-red-400 rounded shadow-sm shadow-black/10">
      ALPHA
    </span>
  )
}
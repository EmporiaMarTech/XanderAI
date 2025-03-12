"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UsersFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
        <Input 
          placeholder="Search users..."
          className="pl-9"
        />
      </div>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All</DropdownMenuItem>
            <DropdownMenuItem>Active</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Most Active</DropdownMenuItem>
            <DropdownMenuItem>Recently Active</DropdownMenuItem>
            <DropdownMenuItem>Highest Engagement</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar: string
  status: "Active" | "Inactive"
  lastActive: string
  sessions: number
  engagement: number
}

export function useUsers() {
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://ui-avatars.com/api/?name=John+Doe",
      status: "Active",
      lastActive: "2 min ago",
      sessions: 245,
      engagement: 87
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith",
      status: "Active",
      lastActive: "5 min ago",
      sessions: 189,
      engagement: 92
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "https://ui-avatars.com/api/?name=Mike+Johnson",
      status: "Inactive",
      lastActive: "2 hours ago",
      sessions: 156,
      engagement: 64
    }
  ])

  return { users }
}
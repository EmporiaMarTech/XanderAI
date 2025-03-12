"use client"

import { useState, useEffect } from "react"

export interface EngagementStats {
  activeUsers: {
    total: number
    change: number
  }
  conversations: {
    total: number
    change: number
  }
  avgSession: {
    value: string
    change: number
  }
  engagementRate: {
    value: number
    change: number
  }
}

export function useEngagement() {
  const [stats, setStats] = useState<EngagementStats>({
    activeUsers: {
      total: 32500,
      change: 12
    },
    conversations: {
      total: 8200,
      change: 18
    },
    avgSession: {
      value: "12m 30s",
      change: 5
    },
    engagementRate: {
      value: 64.8,
      change: 7
    }
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: {
          ...prev.activeUsers,
          total: prev.activeUsers.total + Math.floor(Math.random() * 100)
        },
        conversations: {
          ...prev.conversations,
          total: prev.conversations.total + Math.floor(Math.random() * 20)
        }
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return stats
}
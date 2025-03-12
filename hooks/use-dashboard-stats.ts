"use client"

import { useState, useEffect } from 'react'

interface DashboardStats {
  liveInteractions: {
    total: number
    change: number
    percentage: number
  }
  responseTime: {
    value: number
    change: number
  }
  successRate: {
    value: number
    change: number
  }
}

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats>({
    liveInteractions: {
      total: 1432,
      change: 180,
      percentage: 15
    },
    responseTime: {
      value: 1.2,
      change: -8
    },
    successRate: {
      value: 94.3,
      change: 5
    }
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        liveInteractions: {
          ...prev.liveInteractions,
          total: prev.liveInteractions.total + Math.floor(Math.random() * 10)
        },
        responseTime: {
          ...prev.responseTime,
          value: 1.2 + (Math.random() * 0.2 - 0.1)
        }
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return stats
}
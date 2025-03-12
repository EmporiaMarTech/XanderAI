"use client"

import { useState, useEffect } from "react"

interface InteractionStats {
  total: number
  totalChange: number
  uniqueUsers: number
  usersChange: number
  avgDuration: string
  durationChange: number
  successRate: number
  successChange: number
}

interface InteractionType {
  name: string
  percentage: number
  change: string
  trend: "up" | "down"
}

export function useInteractionStats() {
  const [stats, setStats] = useState<InteractionStats>({
    total: 156789,
    totalChange: 15,
    uniqueUsers: 45678,
    usersChange: 12,
    avgDuration: "2m 45s",
    durationChange: -5,
    successRate: 94,
    successChange: 3
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        total: prev.total + Math.floor(Math.random() * 10),
        uniqueUsers: prev.uniqueUsers + Math.floor(Math.random() * 3)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return stats
}

export function useInteractionTimeline() {
  const [data] = useState([
    { hour: "00:00", interactions: 1200, success: 92 },
    { hour: "03:00", interactions: 800, success: 94 },
    { hour: "06:00", interactions: 1500, success: 91 },
    { hour: "09:00", interactions: 2800, success: 95 },
    { hour: "12:00", interactions: 3200, success: 93 },
    { hour: "15:00", interactions: 2900, success: 94 },
    { hour: "18:00", interactions: 2400, success: 92 },
    { hour: "21:00", interactions: 1800, success: 93 }
  ])

  return { data }
}

export function useInteractionTypes() {
  const [types] = useState<InteractionType[]>([
    {
      name: "Query Resolution",
      percentage: 45,
      change: "+8%",
      trend: "up"
    },
    {
      name: "Data Analysis",
      percentage: 25,
      change: "+12%",
      trend: "up"
    },
    {
      name: "Content Generation",
      percentage: 20,
      change: "-3%",
      trend: "down"
    },
    {
      name: "System Integration",
      percentage: 10,
      change: "+5%",
      trend: "up"
    }
  ])

  return { types }
}
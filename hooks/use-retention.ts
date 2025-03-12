"use client"

import { useState, useEffect } from "react"
import { Users, RefreshCw, UserPlus, UserMinus } from "lucide-react"

interface RetentionMetric {
  name: string
  value: string
  change: string
  icon: any
}

export function useRetentionMetrics() {
  const [metrics, setMetrics] = useState<RetentionMetric[]>([
    {
      name: "Total Users",
      value: "124.5K",
      change: "+12%",
      icon: Users,
    },
    {
      name: "Retention Rate",
      value: "68%",
      change: "+5%",
      icon: RefreshCw,
    },
    {
      name: "New Users",
      value: "2.4K",
      change: "+18%",
      icon: UserPlus,
    },
    {
      name: "Churn Rate",
      value: "4.2%",
      change: "-2%",
      icon: UserMinus,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.name === "New Users" 
          ? `${(parseFloat(metric.value) + Math.random() * 0.1).toFixed(1)}K`
          : metric.value
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return metrics
}
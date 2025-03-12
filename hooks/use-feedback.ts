"use client"

import { useState, useEffect } from "react"

interface FeedbackStats {
  total: number
  totalChange: number
  satisfactionRate: number
  satisfactionChange: number
  responseRate: number
  responseChange: number
  issues: number
  issuesChange: number
}

interface FeedbackItem {
  id: string
  user: {
    name: string
    avatar: string
  }
  content: string
  sentiment: "positive" | "negative"
  category: string
  timestamp: string
}

export function useFeedbackStats() {
  const [stats, setStats] = useState<FeedbackStats>({
    total: 1245,
    totalChange: 12,
    satisfactionRate: 92,
    satisfactionChange: 5,
    responseRate: 88,
    responseChange: -2,
    issues: 23,
    issuesChange: -8
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        total: prev.total + Math.floor(Math.random() * 3)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return stats
}

export function useFeedback() {
  const [feedback] = useState<FeedbackItem[]>([
    {
      id: "1",
      user: {
        name: "John Doe",
        avatar: "https://ui-avatars.com/api/?name=John+Doe"
      },
      content: "The new AI features are incredibly intuitive and have significantly improved our workflow.",
      sentiment: "positive",
      category: "Features",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      user: {
        name: "Jane Smith",
        avatar: "https://ui-avatars.com/api/?name=Jane+Smith"
      },
      content: "Response times could be faster during peak hours.",
      sentiment: "negative",
      category: "Performance",
      timestamp: "5 hours ago"
    },
    {
      id: "3",
      user: {
        name: "Mike Johnson",
        avatar: "https://ui-avatars.com/api/?name=Mike+Johnson"
      },
      content: "Customer support team was extremely helpful in resolving our integration issues.",
      sentiment: "positive",
      category: "Support",
      timestamp: "1 day ago"
    }
  ])

  return { feedback }
}
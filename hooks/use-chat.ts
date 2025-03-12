"use client"

import { useState } from "react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm a simulated AI response. In production, this would be replaced with actual AI processing.",
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return {
    messages,
    isLoading,
    addMessage,
  }
}
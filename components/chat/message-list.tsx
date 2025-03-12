"use client"

import { useEffect, useRef } from "react"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex gap-3 max-w-[80%]",
            message.role === "user" ? "ml-auto" : "mr-auto"
          )}
        >
          {message.role === "assistant" && (
            <Avatar className="h-8 w-8 border border-neutral-800">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-full w-full flex items-center justify-center text-white text-sm font-medium">
                AI
              </div>
            </Avatar>
          )}
          <div
            className={cn(
              "rounded-lg p-3",
              message.role === "user"
                ? "bg-blue-600 text-white"
                : "bg-neutral-800/50 text-neutral-200"
            )}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-[10px] text-neutral-400 mt-1 block">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
          {message.role === "user" && (
            <Avatar className="h-8 w-8 border border-neutral-800">
              <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 h-full w-full flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
            </Avatar>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
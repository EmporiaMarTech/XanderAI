"use client"

import { useState } from "react"
import { Send, Paperclip, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { MessageList } from "./message-list"
import { useChat } from "@/hooks/use-chat"

export function ChatContent() {
  const [message, setMessage] = useState("")
  const { messages, isLoading, addMessage } = useChat()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isLoading) return

    await addMessage(message)
    setMessage("")
  }

  return (
    <div className="flex-1 flex flex-col bg-neutral-900/30">
      {messages.length === 0 ? (
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 opacity-50">
              <svg className="w-full h-full" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="27" y="50.5" width="124" height="39" rx="7.5" className="fill-neutral-800" />
                <rect x="34.5" y="58" width="24" height="24" rx="12" className="fill-neutral-700" />
                <rect x="66.5" y="61" width="60" height="6" rx="3" className="fill-neutral-700" />
                <rect x="66.5" y="73" width="77" height="6" rx="3" className="fill-neutral-700" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-neutral-200 mb-2">Welcome to Chat</h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              Start a conversation with XanderAI. Ask questions, get insights, or explore new ideas together.
            </p>
          </div>
        </div>
      ) : (
        <MessageList messages={messages} />
      )}

      <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon" className="text-neutral-400">
            <Paperclip className="h-5 w-5" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              className="bg-neutral-800/50 border-neutral-700/50 text-neutral-200 placeholder:text-neutral-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
            <Button 
              type="button"
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400"
            >
              <Smile className="h-5 w-5" />
            </Button>
          </div>
          <Button 
            type="submit"
            size="icon"
            className={cn(
              "bg-blue-600 hover:bg-blue-700",
              (isLoading || !message) && "opacity-50 cursor-not-allowed"
            )}
            disabled={isLoading || !message}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
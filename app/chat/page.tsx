"use client"

import { ChatSidebar } from "@/components/chat/sidebar"
import { ChatContent } from "@/components/chat/content"

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-160px)] flex">
      <ChatSidebar />
      <ChatContent />
    </div>
  )
}
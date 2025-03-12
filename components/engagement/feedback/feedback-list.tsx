"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { useFeedback } from "@/hooks/use-feedback"

export function FeedbackList() {
  const { feedback } = useFeedback()

  return (
    <div>
      <SectionHeader
        title="Recent Feedback"
        description="Latest user feedback and reviews"
      />
      <div className="mt-6 space-y-4">
        {feedback.map((item) => (
          <div 
            key={item.id}
            className="p-4 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <Avatar>
                <img src={item.user.avatar} alt={item.user.name} />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-medium text-neutral-200">{item.user.name}</div>
                    <div className="text-sm text-neutral-500">{item.timestamp}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="secondary"
                      className={item.sentiment === "positive" 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : "bg-red-500/10 text-red-400"}
                    >
                      {item.sentiment === "positive" ? (
                        <ThumbsUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ThumbsDown className="h-3 w-3 mr-1" />
                      )}
                      {item.sentiment}
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <p className="mt-2 text-neutral-300">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
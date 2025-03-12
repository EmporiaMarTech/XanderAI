"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Paperclip } from "lucide-react"
import { useDraggable } from "@dnd-kit/core"

interface ProjectCardProps {
  id: string
  title: string
  description?: string
  priority?: "low" | "medium" | "high"
  assignees?: Array<{
    name: string
    image?: string
    initials?: string
  }>
  labels?: string[]
  comments?: number
  attachments?: number
  progress?: number
}

const priorityColors = {
  low: "bg-neutral-500/10 text-neutral-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  high: "bg-red-500/10 text-red-500"
}

const priorityIcons = {
  low: "⚪",
  medium: "🌟",
  high: "🔥"
}

export function ProjectCard({ 
  id,
  title,
  description,
  priority = "low",
  assignees = [],
  labels = [],
  comments = 0,
  attachments = 0,
  progress = 0
}: ProjectCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-3 cursor-grab active:cursor-grabbing bg-gradient-to-b from-neutral-900 to-neutral-900/50 border-neutral-800/50 hover:border-neutral-700/50 transition-colors"
    >
      <h3 className="font-medium text-sm text-neutral-200">
        {title}
      </h3>

      {description && (
        <p className="mt-1 text-xs text-neutral-400">
          {description}
        </p>
      )}

      {assignees.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {assignees.map((assignee, index) => (
            <div key={index} className="flex items-center gap-x-1">
              {assignee.image ? (
                <Avatar className="h-5 w-5">
                  <img src={assignee.image} alt={assignee.name} />
                </Avatar>
              ) : (
                <Avatar className="h-5 w-5 bg-blue-500/10 text-blue-500">
                  <span className="text-xs">{assignee.initials}</span>
                </Avatar>
              )}
              <span className="text-xs text-neutral-200">{assignee.name}</span>
            </div>
          ))}
        </div>
      )}

      {labels.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {labels.map((label, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-neutral-800/50 text-neutral-300 border-neutral-700/50"
            >
              {label}
            </Badge>
          ))}
        </div>
      )}

      {priority && (
        <div className="mt-3">
          <Badge
            variant="secondary"
            className={cn(
              "w-fit",
              priorityColors[priority]
            )}
          >
            {priority.charAt(0).toUpperCase() + priority.slice(1)} {priorityIcons[priority]}
          </Badge>
        </div>
      )}

      {(comments > 0 || attachments > 0 || progress > 0) && (
        <div className="mt-3 flex items-center text-xs text-neutral-400">
          {comments > 0 && (
            <div className="flex items-center gap-x-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {comments}
            </div>
          )}

          {attachments > 0 && (
            <div className="flex items-center gap-x-1 ml-3">
              <Paperclip className="h-3.5 w-3.5" />
              {attachments}
            </div>
          )}

          {progress > 0 && (
            <div className="ml-auto flex items-center gap-x-2 min-w-[100px]">
              <Progress value={progress} className="h-1" />
              <span className="w-9 text-right">{progress}%</span>
            </div>
          )}
        </div>
      )}
    </Card>
  )
}
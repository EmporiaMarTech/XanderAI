"use client"

import { cn } from "@/lib/utils"
import { Check, Building2, Users, FolderKanban, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface SetupTask {
  id: string
  title: string
  completed: boolean
  icon: React.ComponentType<{ className?: string }>
  action: {
    label: string
    onClick: () => void
    disabled?: boolean
  }
}

export function ProfileSetup() {
  const tasks: SetupTask[] = [
    {
      id: "desktop",
      title: "Download desktop app",
      completed: true,
      icon: Download,
      action: {
        label: "Download",
        onClick: () => {},
        disabled: true
      }
    },
    {
      id: "company",
      title: "Provide company details",
      completed: false,
      icon: Building2,
      action: {
        label: "Add now",
        onClick: () => {}
      }
    },
    {
      id: "invite",
      title: "Invite 5 talents",
      completed: true,
      icon: Users,
      action: {
        label: "Invite",
        onClick: () => {},
        disabled: true
      }
    },
    {
      id: "projects",
      title: "Add projects",
      completed: false,
      icon: FolderKanban,
      action: {
        label: "Add now",
        onClick: () => {}
      }
    }
  ]

  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length
  const progress = (completedTasks / totalTasks) * 100

  return (
    <Card className="p-4 h-full flex flex-col justify-between bg-gradient-to-b from-neutral-900 to-neutral-900/50">
      <div className="flex justify-between items-center gap-x-2">
        <h2 className="font-semibold text-neutral-200">
          Profile setup
        </h2>
        <Badge 
          variant="secondary" 
          className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-400"
        >
          Getting Started
        </Badge>
      </div>

      <div className="mt-3 w-40">
        <h4 className="mb-1 text-sm text-neutral-200">
          {completedTasks} of {totalTasks} completed
        </h4>
        <div className="grid grid-cols-4 gap-x-1.5">
          {Array.from({ length: totalTasks }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 rounded-sm",
                index < completedTasks 
                  ? "bg-blue-500" 
                  : "bg-blue-500/20"
              )}
            />
          ))}
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-400">
        Your profile needs to be at least{" "}
        <span className="font-semibold text-neutral-200">50% complete</span>{" "}
        to be publicly visible.
      </p>

      <div className="mt-5 space-y-1.5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="py-2 px-2.5 flex justify-between items-center gap-x-3 bg-neutral-800/50 rounded-lg"
          >
            <span className={cn(
              "size-5 flex shrink-0 justify-center items-center rounded-full",
              task.completed 
                ? "bg-blue-500 text-white" 
                : "text-neutral-200"
            )}>
              {task.completed ? (
                <Check className="size-3.5" />
              ) : (
                <task.icon className="size-4" />
              )}
            </span>

            <div className="grow">
              <div className="flex justify-between items-center gap-x-1.5">
                <div className="grow">
                  {task.completed ? (
                    <s className="text-sm text-neutral-500">
                      {task.title}
                    </s>
                  ) : (
                    <span className="text-sm text-neutral-200">
                      {task.title}
                    </span>
                  )}
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-7 px-2 text-xs"
                    onClick={task.action.onClick}
                    disabled={task.action.disabled}
                  >
                    {task.action.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
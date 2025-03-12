"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SetupProgress } from "./setup-progress"
import { SetupTask } from "./setup-task"
import { Download, Building2, Users, FolderKanban } from "lucide-react"

const setupTasks = [
  {
    id: "desktop",
    title: "Download desktop app",
    description: "Get the desktop app for enhanced features",
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
    title: "Company Profile",
    description: "Add your company details and preferences",
    completed: false,
    icon: Building2,
    action: {
      label: "Complete",
      onClick: () => {}
    }
  },
  {
    id: "invite",
    title: "Invite Team Members",
    description: "Collaborate with your team (5 invites sent)",
    completed: true,
    icon: Users,
    action: {
      label: "Invite More",
      onClick: () => {},
      disabled: true
    }
  },
  {
    id: "projects",
    title: "Create First Project",
    description: "Set up your first AI project",
    completed: false,
    icon: FolderKanban,
    action: {
      label: "Create",
      onClick: () => {}
    }
  }
]

export function SetupSection() {
  const completedTasks = setupTasks.filter(task => task.completed).length

  return (
    <Card className="border-neutral-800/50">
      <div className="p-6 border-b border-neutral-800/50">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-neutral-200">
              Complete Your Profile
            </h2>
            <p className="text-sm text-neutral-400">
              {completedTasks} of {setupTasks.length} tasks completed
            </p>
          </div>
          <Badge 
            variant="secondary" 
            className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-400"
          >
            Getting Started
          </Badge>
        </div>

        <SetupProgress 
          completed={completedTasks} 
          total={setupTasks.length} 
          className="mt-4"
        />
      </div>

      <div className="p-6 space-y-4">
        {setupTasks.map((task) => (
          <SetupTask key={task.id} {...task} />
        ))}
      </div>
    </Card>
  )
}
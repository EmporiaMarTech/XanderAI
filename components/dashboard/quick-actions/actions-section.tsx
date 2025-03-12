"use client"

import { MessageSquare, Brain, LineChart, Cpu, Rocket, Users, Settings, Database } from "lucide-react"
import { ActionCard } from "./action-card"

const actions = [
  {
    title: "Chat Interface",
    description: "Interact with AI through natural conversations",
    icon: MessageSquare,
    href: "/chat"
  },
  {
    title: "Knowledge Base",
    description: "Access and manage AI training data",
    icon: Brain,
    href: "/knowledge"
  },
  {
    title: "Analytics",
    description: "Monitor performance and usage metrics",
    icon: LineChart,
    href: "/analytics"
  },
  {
    title: "Automation",
    description: "Set up automated AI workflows",
    icon: Cpu,
    href: "/automation",
    badge: "BETA"
  },
  {
    title: "Deployment",
    description: "Deploy and manage AI models",
    icon: Rocket,
    href: "/deployment"
  },
  {
    title: "Team",
    description: "Manage team members and permissions",
    icon: Users,
    href: "/team"
  },
  {
    title: "Settings",
    description: "Configure system preferences",
    icon: Settings,
    href: "/settings"
  },
  {
    title: "Data Sources",
    description: "Connect and manage data sources",
    icon: Database,
    href: "/data-sources",
    badge: "NEW"
  }
]

export function ActionsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {actions.map((action) => (
        <ActionCard key={action.title} {...action} />
      ))}
    </div>
  )
}
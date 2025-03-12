"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QuickActionButton } from "./quick-action-button"
import { useRouter } from "next/navigation"
import { MessageSquare, Brain, Rocket, Users } from "lucide-react"

export function WelcomeSection() {
  const router = useRouter()

  return (
    <Card className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-900/50 border-neutral-800/50">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Welcome to XanderAI
            </h2>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
              Beta
            </Badge>
          </div>
          <p className="text-neutral-400">
            Get started by completing your profile setup and exploring our features
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 min-w-[280px]">
          <QuickActionButton
            icon={MessageSquare}
            label="Start Chat"
            onClick={() => router.push("/chat")}
            variant="primary"
          />
          <QuickActionButton
            icon={Brain}
            label="Train Model"
            onClick={() => router.push("/knowledge")}
          />
          <QuickActionButton
            icon={Rocket}
            label="Deploy"
            onClick={() => router.push("/automation")}
          />
          <QuickActionButton
            icon={Users}
            label="Team"
            onClick={() => router.push("/team")}
          />
        </div>
      </div>
    </Card>
  )
}
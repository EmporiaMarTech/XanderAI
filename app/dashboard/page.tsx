"use client"

import { Card } from "@/components/ui/card"
import { EngagementStats } from "@/components/engagement/stats/engagement-stats"
import { UserActivity } from "@/components/engagement/activity/user-activity"
import { TopContent } from "@/components/engagement/content/top-content"
import { UserRetention } from "@/components/engagement/retention/user-retention"
import { SectionHeader } from "@/components/ui/section-header"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <EngagementStats />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 p-6">
          <SectionHeader
            title="User Activity"
            description="Daily active users & sessions"
          />
          <UserActivity />
        </Card>

        <Card className="p-6">
          <SectionHeader
            title="Top Content"
            description="Most engaged resources"
          />
          <TopContent />
        </Card>
      </div>

      <Card className="p-6">
        <SectionHeader
          title="User Retention"
          description="User retention metrics"
        />
        <UserRetention />
      </Card>
    </div>
  )
}
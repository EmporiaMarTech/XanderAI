"use client"

import { SetupSection } from "./setup/setup-section"
import { WelcomeSection } from "./welcome/welcome-section"
import { StatsSection } from "./quick-stats/stats-section"
import { ActionsSection } from "./quick-actions/actions-section"

export function DashboardContent() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-8">
      {/* Welcome & Setup Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <WelcomeSection />
          <div className="mt-6">
            <SetupSection />
          </div>
        </div>
        
        <div>
          <StatsSection />
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-200 mb-4">
          Quick Actions
        </h2>
        <ActionsSection />
      </div>
    </div>
  )
}
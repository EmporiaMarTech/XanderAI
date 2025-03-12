"use client"

import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { PortalNav } from "../portal-nav"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const dashboardNav = [
  { name: "Overview", href: "/" },
  { name: "Activity", href: "/dashboard/activity" },
  { name: "Performance", href: "/dashboard/performance" },
  { name: "Infrastructure", href: "/dashboard/infrastructure" },
]

const engagementNav = [
  { name: "Overview", href: "/engagement" },
  { name: "Users", href: "/engagement/users" },
  { name: "Interactions", href: "/engagement/interactions" },
  { name: "Feedback", href: "/engagement/feedback" },
]

const analyticsNav = [
  { name: "Overview", href: "/analytics" },
  { name: "Reports", href: "/analytics/reports" },
  { name: "Metrics", href: "/analytics/metrics" },
  { name: "Predictions", href: "/analytics/predictions" },
]

const knowledgeNav = [
  { name: "Overview", href: "/knowledge" },
  { name: "Database", href: "/knowledge/database" },
  { name: "Training", href: "/knowledge/training" },
  { name: "Models", href: "/knowledge/models" },
]

const automationNav = [
  { name: "Overview", href: "/automation" },
  { name: "Workflows", href: "/automation/workflows" },
  { name: "Tasks", href: "/automation/tasks" },
  { name: "Schedules", href: "/automation/schedules" },
]

const getNavItems = (pathname: string) => {
  if (pathname.startsWith("/dashboard") || pathname === "/") return null
  if (pathname.startsWith("/engagement")) return engagementNav
  if (pathname.startsWith("/analytics")) return analyticsNav
  if (pathname.startsWith("/knowledge")) return knowledgeNav
  if (pathname.startsWith("/automation")) return automationNav
  return null
}

const isOverviewPage = (pathname: string) => {
  return pathname === "/" || 
         pathname === "/engagement" || 
         pathname === "/analytics" || 
         pathname === "/knowledge" || 
         pathname === "/automation"
}

const getPageInfo = (pathname: string) => {
  const routes: Record<string, { title: string; description: string }> = {
    "/engagement": { title: "Engagement", description: "Track user engagement and interactions" },
    "/analytics": { title: "Analytics", description: "View detailed analytics and insights" },
    "/knowledge": { title: "Knowledge", description: "Access and manage AI knowledge base" },
    "/automation": { title: "Automation", description: "Automate AI workflows and tasks" },
    "/chat": { title: "Chat", description: "Communicate with XanderAI" },
    "/projects": { title: "Projects", description: "Manage your AI projects" },
    "/logistics": { title: "Logistics", description: "Manage and track AI model distribution" },
    "/profile": { title: "Profile", description: "Manage your account settings" },
    "/settings": { title: "Settings", description: "Configure application settings" }
  }

  return routes[pathname] || { title: "404", description: "Page not found" }
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const navItems = getNavItems(pathname)
  const { title, description } = getPageInfo(pathname)
  const showComingSoon = !isOverviewPage(pathname)
  const isDashboard = pathname === "/"
  const isCalendar = pathname === "/calendar"

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
      <Header />
      <Sidebar />
      <main className="fixed inset-0 lg:left-64 top-[61px] overflow-hidden">
        <div className={cn(
          "absolute inset-0",
          !isDashboard && !isCalendar && "p-6",
          showComingSoon && !isCalendar && "backdrop-blur-[2px]"
        )}>
          {!isDashboard && !isCalendar && (
            <div className="flex flex-col space-y-1 mb-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
                      {title}
                    </h1>
                    {showComingSoon && (
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400">{description}</p>
                </div>
                
                {navItems && (
                  <div className="flex items-center">
                    <PortalNav items={navItems} />
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className={cn(
            isDashboard ? "h-full p-6" : "h-[calc(100vh-160px)]",
            isCalendar && "h-full"
          )}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
"use client"

import { Brain, Home, BarChart3, Settings, MessageSquare, Layout, LineChart, BookOpen, Truck, Cpu, Rocket } from "lucide-react"
import { type NavSection } from "./types"

export const launchpadLinks: NavSection = {
  title: "OVERVIEW",
  links: [
    { 
      name: "Launch Pad", 
      href: "/", 
      icon: Rocket 
    },
    { 
      name: "Dashboard", 
      href: "/dashboard", 
      icon: BarChart3 
    }
  ]
}

export const dashboardLink = null

export const platformLinks: NavSection = {
  title: "PLATFORM",
  links: [
    { name: "Engagement", href: "/engagement", icon: BarChart3 },
    { name: "Analytics", href: "/analytics", icon: LineChart },
    { name: "Knowledge", href: "/knowledge", icon: BookOpen },
    { 
      name: "Automation", 
      href: "/automation", 
      icon: Cpu,
      badge: "BETA"
    }
  ]
}

export const toolsLinks: NavSection = {
  title: "TOOLS",
  links: [
    { name: "Chat", href: "/chat", icon: MessageSquare },
    { name: "Projects", href: "/projects", icon: Layout },
    { 
      name: "Logistics", 
      href: "/logistics", 
      icon: Truck,
      badge: "BETA"
    }
  ]
}

export const settingsLink = {
  name: "Settings",
  href: "/settings",
  icon: Settings
}
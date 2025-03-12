"use client"

import * as React from "react"
import { Search, Bell, Activity, Share2, UserCircle, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const getPageInfo = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean)
  const mainSection = parts[0] || ''
  
  const mainTitles: Record<string, string> = {
    '': 'Dashboard',
    'dashboard': 'Dashboard',
    'engagement': 'Engagement',
    'analytics': 'Analytics',
    'knowledge': 'Knowledge',
    'chat': 'Chat',
    'calendar': 'Calendar',
    'projects': 'Projects',
    'logistics': 'Logistics',
    'profile': 'Profile',
    'settings': 'Settings',
  }

  const subSection = parts[1]
  const mainTitle = mainTitles[mainSection] || mainTitles['']

  if (!subSection) {
    return {
      mainTitle,
      subSection: 'Overview'
    }
  }

  return {
    mainTitle,
    subSection: subSection.charAt(0).toUpperCase() + subSection.slice(1)
  }
}

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const { mainTitle, subSection } = getPageInfo(pathname)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="lg:pl-64 fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-black/30 backdrop-blur-xl border-b border-neutral-800/50">
      <div className="flex justify-between lg:grid lg:grid-cols-[1fr,auto,1fr] basis-full items-center w-full py-2.5 px-4 sm:px-6">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2.5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <span className="text-lg font-semibold bg-gradient-to-br from-white via-white to-neutral-400 bg-clip-text text-transparent">
                    {mainTitle}
                  </span>
                </BreadcrumbItem>
                {subSection && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-neutral-400">{subSection}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="relative group">
            <Input 
              className="py-2 pl-10 pr-16 bg-gradient-to-b from-neutral-900 to-neutral-900/50 backdrop-blur-xl border-neutral-800/50 text-neutral-300 placeholder:text-neutral-500 focus:bg-neutral-900/75 transition-all shadow-lg shadow-black/20"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <Search className="h-4 w-4 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-20 pr-4">
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-neutral-400 bg-neutral-900 rounded-md border border-neutral-800/50 shadow-sm">
                <span className="text-xs">⌘</span>
                <span>/</span>
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-x-2">
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
          >
            <Activity className="h-5 w-5" />
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white gap-2 shadow-lg shadow-blue-500/20"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <div className="border-l border-neutral-800/50 w-px h-6 mx-3" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="size-9 rounded-full bg-gradient-to-b from-neutral-900 to-neutral-900/50 text-neutral-400 hover:text-white hover:from-neutral-800 hover:to-neutral-800/50 shadow-lg shadow-black/20"
          >
            <UserCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
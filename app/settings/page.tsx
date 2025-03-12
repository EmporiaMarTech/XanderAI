import { Settings, User, CreditCard, Mail, Gift, RotateCcw, Bell, Lock, Palette } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const settingsCards = [
  {
    icon: User,
    title: "Account Settings",
    description: "Manage your profile and preferences",
    href: "/settings/account"
  },
  {
    icon: Lock,
    title: "Security",
    description: "Configure authentication and security options",
    href: "/settings/security",
    badge: "Required"
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Choose what updates you receive",
    href: "/settings/notifications"
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize the interface and theme",
    href: "/settings/appearance"
  },
  {
    icon: CreditCard,
    title: "Billing",
    description: "Manage your subscription and payment methods",
    href: "/settings/billing"
  },
  {
    icon: Mail,
    title: "Email Preferences",
    description: "Control your email notifications",
    href: "/settings/email"
  },
  {
    icon: Gift,
    title: "Beta Features",
    description: "Try out new experimental features",
    href: "/settings/beta",
    badge: "New"
  },
  {
    icon: RotateCcw,
    title: "Backup & Sync",
    description: "Manage your data and sync settings",
    href: "/settings/backup"
  },
  {
    icon: Settings,
    title: "Advanced",
    description: "Developer options and advanced settings",
    href: "/settings/advanced"
  }
]

export default function SettingsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {settingsCards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          className="group relative p-6 bg-gradient-to-b from-neutral-900 to-neutral-900/50 rounded-xl border border-neutral-800/50 transition-all hover:border-neutral-700/50 hover:shadow-lg"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <card.icon className="h-7 w-7 text-neutral-400" />
              {card.badge && (
                <Badge 
                  variant={card.badge === "Required" ? "destructive" : "secondary"}
                  className={cn(
                    card.badge === "Required" 
                      ? "bg-red-500/10 text-red-400 hover:bg-red-500/20" 
                      : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                  )}
                >
                  {card.badge}
                </Badge>
              )}
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                {card.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
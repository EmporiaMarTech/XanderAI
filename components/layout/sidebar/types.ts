export interface NavLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

export interface NavSection {
  title: string
  links: NavLink[]
}
import { LucideIcon } from 'lucide-react'

export interface HighlightStat {
  icon: LucideIcon
  label: string
  value: string
  description: string
}

export interface ExpertiseArea {
  icon: LucideIcon
  title: string
  description: string
  topics: string[]
}

export interface WorkingPrinciple {
  icon: LucideIcon
  title: string
  description: string
}

export interface CommunityHighlight {
  title: string
  description: string
}

export interface Certification {
  title: string
  description: string
  status: 'completed' | 'in-progress'
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  impact: string
  highlights: string[]
  skills: string[]
  current?: boolean
}

export interface CareerHighlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface HeroHighlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface CollaborationArea {
  icon: LucideIcon
  title: string
  description: string
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
  description?: string
  helper?: string
  cta?: string
}

export interface ContactHighlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface CollaborationPath {
  title: string
  description: string
}

export interface NavItem {
  label: string
  href: string
  description: string
}

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
  employmentType?: 'Full-time' | 'Contract' | 'Part-time' | 'Freelance' | 'Internship'
  description: string
  impact: string
  highlights: string[]
  skills: string[]
  current?: boolean
}

export interface Project {
  name: string
  tagline: string
  description: string
  language: string
  tags: string[]
  repoUrl: string
  docsUrl?: string
  packages?: string[]
  highlights: string[]
  featured?: boolean
}

export interface ExternalContribution {
  project: string
  description: string
  url: string
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

export interface ProofStat {
  value: string
  label: string
  context: string
}

export interface WhatIDo {
  title: string
  description: string
}

export interface FeaturedProject {
  title: string
  tagline: string
  description: string
  features: string[]
  links: { label: string; href: string }[]
}

export interface WritingHighlight {
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  context: string
  attribution: string
}

export interface TargetRole {
  title: string
}

export interface IdealCompany {
  label: string
  description: string
}

export interface Strength {
  title: string
  description: string
}

export interface First30Days {
  period: string
  items: string[]
}

export interface RemoteWorkStyle {
  title: string
  description: string
}

export interface CaseStudy {
  id: string
  title: string
  outcome: string
  context: string
  problem: string[]
  constraints: string[]
  role: string
  approach: {
    phase: string
    title: string
    description: string
  }[]
  results: string[]
  nextSteps: string
  media?: {
    type: 'image' | 'video'
    src: string
    alt: string
    caption?: string
  }[]
}

export interface HowIWorkSection {
  id: string
  title: string
  description: string
  items: {
    title: string
    description: string
  }[]
}

export interface WorkValue {
  title: string
  description: string
}

export interface ResumeExperience {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  technologies?: string
}

export interface ResumeSection {
  title: string
  items: string[]
}

import { BadgeCheck, GaugeCircle, Sparkles } from 'lucide-react'
import type { HeroHighlight } from '@/types/content'

export const heroHighlights: HeroHighlight[] = [
  {
    icon: GaugeCircle,
    title: '99.9% uptime systems',
    description: 'Led architecture for platforms processing millions in transactions with observability baked in.',
  },
  {
    icon: Sparkles,
    title: 'Automation-first delivery',
    description: 'Shipped CI/CD pipelines, IaC, and progressive rollouts that kept squads shipping weekly.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted technical leader',
    description: 'Coach engineers, align stakeholders, and translate complex requirements into resilient services.',
  },
]

export const heroFocus = ['Backend Architecture', 'DevOps Leadership', 'Event-Driven Systems', 'Fintech Platforms']

export const heroBadges = ['Platform Engineer', 'Technical Leader', 'Community Builder']

export const heroContent = {
  headline: 'Architecting resilient systems that let teams move fast with confidence',
  intro:
    'I am Mike Attara, an engineer who pairs backend craftsmanship with DevOps discipline. I help product teams launch ambitious platforms, automate delivery, and grow the people who keep it running.',
}

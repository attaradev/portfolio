import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import type { NavItem, SocialLink } from '@/types/content'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', description: 'Overview and current focus' },
  { label: 'About', href: '/about', description: 'Story, principles, strengths' },
  { label: 'Experience', href: '/experience', description: 'Career journey and wins' },
  { label: 'Case Studies', href: '/case-studies', description: 'Problems solved in depth' },
  { label: 'Resume', href: '/resume', description: 'Credentials and history' },
  { label: 'Contact', href: '/contact', description: 'Start the conversation' },
]

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/attaradev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/attaradev', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/attaradev', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@attara.dev', label: 'Email' },
]

export const focusAreas = ['Platform Engineering', 'Backend Architecture', 'Technical Leadership']

export const quickFacts = [
  {
    label: 'Current',
    value: 'Platform Engineer · Purple Wave Auction',
  },
  {
    label: 'Timezone',
    value: 'GMT · Remote globally',
  },
  {
    label: 'Focus',
    value: 'Platform reliability, developer experience, observability',
  },
]

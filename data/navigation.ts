import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import type { NavItem, SocialLink } from '@/types/content'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', description: 'Overview and current focus' },
  { label: 'About', href: '/about', description: 'Story, principles, strengths' },
  { label: 'Experience', href: '/experience', description: 'Career journey and wins' },
  { label: 'Contact', href: '/contact', description: 'Start the conversation' },
]

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/attaradev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/attaradev', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/attaradev', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@attara.dev', label: 'Email' },
]

export const focusAreas = ['Backend Architecture', 'DevOps Enablement', 'Technical Leadership']

export const quickFacts = [
  {
    label: 'Current role',
    value: 'Backend Engineer · Purple Wave Auction',
  },
  {
    label: 'Time zone',
    value: 'GMT · Remote partner across continents',
  },
  {
    label: 'Availability',
    value: 'Advisory, platform builds, speaking',
  },
]

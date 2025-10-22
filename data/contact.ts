import { BookOpen, CalendarDays, Clock, Github, Handshake, Instagram, Linkedin, Twitter } from 'lucide-react'
import type { CollaborationPath, ContactHighlight, SocialLink } from '@/types/content'

export const collaborationAreas: CollaborationPath[] = [
  {
    title: 'Architecture sprints',
    description: 'Partner on platform design reviews, scaling strategies, and event-driven roadmaps.',
  },
  {
    title: 'DevOps & platform enablement',
    description: 'Automate delivery pipelines, observability, and infrastructure so teams ship with confidence.',
  },
  {
    title: 'Technical leadership support',
    description: 'Coach squads, refine engineering practices, and align delivery with product and business goals.',
  },
  {
    title: 'Speaking & workshops',
    description: 'Facilitate sessions on systems design, DevOps culture, and inclusive engineering leadership.',
  },
]

export const contactHighlights: ContactHighlight[] = [
  {
    icon: Clock,
    title: 'Response window',
    description: 'Replies within 48 hours Monday through Friday.',
  },
  {
    icon: CalendarDays,
    title: 'Time zone',
    description: 'Based in GMT—collaborating across North America, Europe, and Africa.',
  },
  {
    icon: Handshake,
    title: 'Collaboration style',
    description: 'Hands-on partnership from discovery to delivery with clear communication along the way.',
  },
]

export const socialLinks: SocialLink[] = [
  {
    icon: BookOpen,
    label: 'Blog',
    helper: 'Deep dives & field notes',
    cta: 'Read articles',
    href: 'https://blog.attara.dev',
  },
  {
    icon: Github,
    label: 'GitHub',
    helper: 'Open-source & code samples',
    cta: 'Explore repos',
    href: 'https://github.com/attaradev',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    helper: 'Professional updates & network',
    cta: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/attaradev',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    helper: 'Behind-the-scenes & highlights',
    cta: 'Follow on Instagram',
    href: 'https://instagram.com/attaradev',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    helper: 'Thoughts on engineering & community',
    cta: 'Follow updates',
    href: 'https://twitter.com/attaradev',
  },
]

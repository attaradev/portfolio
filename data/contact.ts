import { BookOpen, CalendarDays, Clock, Github, Handshake, Linkedin, Twitter, Briefcase, MessageSquare, Mic, HelpCircle } from 'lucide-react'
import type { ContactHighlight, SocialLink } from '@/types/content'

export const contactIntro = {
  headline: 'Start a conversation.',
  description:
    'Architecture challenges, consulting, collaboration. I read every message and respond within 48 hours.',
}

export const contactIntents = [
  {
    id: 'hiring',
    icon: Briefcase,
    label: 'Full-Time Role',
    description: "Remote backend, platform, or reliability role. Let's discuss fit.",
  },
  {
    id: 'consulting',
    icon: MessageSquare,
    label: 'Consulting',
    description: 'Architecture challenge, DevOps initiative, or technical review needing outside eyes.',
  },
  {
    id: 'speaking',
    icon: Mic,
    label: 'Speaking',
    description: 'Conference, meetup, or internal workshop. I speak on architecture, DevOps, and engineering leadership.',
  },
  {
    id: 'other',
    icon: HelpCircle,
    label: 'Other',
    description: 'Question, open source collaboration, or just want to connect.',
  },
] as const

export type ContactIntent = typeof contactIntents[number]['id']

export const intentFields: Record<ContactIntent, { label: string; placeholder: string; type?: string }[]> = {
  hiring: [
    { label: 'Company Name', placeholder: 'Acme Inc.' },
    { label: 'Role Title', placeholder: 'Senior Backend Engineer' },
    { label: 'Team size and stage', placeholder: 'e.g., "Series A, 15 engineers, 3-person platform team"' },
    { label: 'What would I be working on in the first 90 days?', placeholder: 'Describe the initial focus areas and projects...', type: 'textarea' },
  ],
  consulting: [
    { label: 'Company Name (optional)', placeholder: 'Acme Inc.' },
    { label: 'What\'s the challenge or project?', placeholder: 'Brief description of what you\'re trying to accomplish...', type: 'textarea' },
  ],
  speaking: [
    { label: 'Organization / Event Name', placeholder: 'DevConf 2024' },
    { label: 'Event Date', placeholder: 'March 15, 2024' },
    { label: 'What topic are you interested in?', placeholder: 'e.g., "Event-driven architecture patterns", "Building observability from scratch"', type: 'textarea' },
  ],
  other: [
    { label: 'What would you like to discuss?', placeholder: 'Tell me what\'s on your mind...', type: 'textarea' },
  ],
}

export const consultingOptions = {
  timeline: [
    { value: 'urgent', label: 'Urgent (within 2 weeks)' },
    { value: 'near-term', label: 'Near-term (1-2 months)' },
    { value: 'planning', label: 'Planning phase (no immediate deadline)' },
  ],
  engagement: [
    { value: 'review', label: 'Architecture review / audit' },
    { value: 'implementation', label: 'Hands-on implementation' },
    { value: 'advisory', label: 'Advisory / ongoing consultation' },
    { value: 'unsure', label: 'Not sure yet' },
  ],
}

export const speakingFormats = [
  { value: 'conference', label: 'Conference talk' },
  { value: 'meetup', label: 'Meetup presentation' },
  { value: 'workshop', label: 'Internal workshop' },
  { value: 'podcast', label: 'Podcast / interview' },
]

export const contactExpectations: ContactHighlight[] = [
  {
    icon: Clock,
    title: 'Response',
    description: 'Within 48 hours, Monday through Friday. I read everything.',
  },
  {
    icon: CalendarDays,
    title: 'Timezone',
    description: 'GMT-based. Regular overlap with North America, Europe, Africa. Flexible on sync time.',
  },
  {
    icon: Handshake,
    title: 'Next steps',
    description: "Full-time: I'll review and respond with availability. Consulting: clarifying questions first, then scope discussion.",
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
    cta: 'Connect',
    href: 'https://linkedin.com/in/attaradev',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    helper: 'Thoughts on engineering',
    cta: 'Follow',
    href: 'https://twitter.com/attaradev',
  },
]

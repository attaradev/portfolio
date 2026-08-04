import { BadgeCheck, GaugeCircle, Sparkles } from 'lucide-react'
import type {
  HeroHighlight,
  ProofStat,
  WhatIDo,
  FeaturedProject,
  WritingHighlight,
  Testimonial,
} from '@/types/content'

export const heroHighlights: HeroHighlight[] = [
  {
    icon: GaugeCircle,
    title: '99.9% Uptime Architect',
    description: ' designing systems that process $2M+ monthly without blinking. Observability and resilience built-in, not bolted on.',
  },
  {
    icon: Sparkles,
    title: 'Velocity Without Chaos',
    description: 'CI/CD pipelines and IaC that let teams deploy on Fridays. Automated safety nets that catch issues before users do.',
  },
  {
    icon: BadgeCheck,
    title: 'Engineering Multiplier',
    description: 'Translating complex requirements into clear architecture. Mentoring engineers to write cleaner, more maintainable code.',
  },
]

export const heroContent = {
  headline: 'Resilient backend systems that scale with your business.',
  subheadline:
    'I build event-driven architectures, reliable payment rails, and developer platforms for fintech teams who need to ship fast and stay up.',
}

export const heroCtas = {
  primary: {
    label: 'View Case Studies',
    href: '/case-studies',
  },
  secondary: {
    label: 'Start a Conversation',
    href: '/contact',
  },
}

export const proofStats: ProofStat[] = [
  {
    value: '99.9%',
    label: 'System Uptime',
    context: 'Maintained on $2M+ monthly volume',
  },
  {
    value: '25+',
    label: 'Production Systems',
    context: 'Shipped for Fintech, Logistics, & Telecom',
  },
  {
    value: '80%',
    label: 'Toil Eliminated',
    context: 'Via event-driven automation',
  },
  {
    value: '4',
    label: 'AWS Certifications',
    context: 'Solutions Architect & Developer Pro',
  },
]

export const whatIDo: WhatIDo[] = [
  {
    title: 'Resilient Payment Infrastructure',
    description:
      'Ledgers, reconciliation pipelines, and wallet systems. Built with deep observability and idempotent patterns so you never worry about double-spending or lost transactions.',
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Decoupling monoliths using Outbox patterns and reliable messaging. Systems that survive network partitions, handle spikes gracefully, and process every message exactly once.',
  },
  {
    title: 'Platform Engineering & DevOps',
    description:
      'Golden path tooling, CI/CD pipelines, and infrastructure as code. I build the internal platforms that make your engineering team 10x more productive and happy.',
  },
  {
    title: 'Technical Leadership',
    description:
      'RFCs, architecture reviews, and hands-on mentorship. I align technical decisions with business goals and help mid-level engineers grow into seniors.',
  },
]

export const featuredProject: FeaturedProject = {
  title: 'NatsPubsub',
  tagline: 'Event-driven messaging without the boilerplate',
  description:
    'A Ruby and TypeScript library that handles the hard parts of distributed systems: exactly-once delivery, transactional outbox, dead letter queues, and automatic retry with exponential backoff.',
  features: [
    'Drop-in pub/sub for event-driven microservices',
    'Rails generators, migrations, health checks included',
    'Mock NATS server for fast, isolated tests',
    'Stream provisioning with overlap protection',
  ],
  links: [
    { label: 'Documentation', href: 'https://attaradev.github.io/nats-pubsub/' },
    { label: 'GitHub', href: 'https://github.com/attaradev/nats-pubsub' },
  ],
}

export const writingHighlights: WritingHighlight[] = [
  {
    title: 'Idempotency Without the Round-Trip',
    description:
      'Why every distributed system needs idempotent handlers, and how to implement them without hitting the database on every message.',
  },
  {
    title: 'The Transactional Outbox Pattern',
    description:
      'Avoiding dual-write disasters in microservices. Includes Rails implementation patterns you can ship today.',
  },
  {
    title: 'Making On-Call Sustainable',
    description:
      'Runbooks, SLO-based alerting, blameless postmortems. How to transform on-call from dreaded to manageable.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Mike joined during our highest-stakes quarter and immediately earned the team\'s trust. He untangled a payment reconciliation system that had been causing weekly incidents. Within two months, we had proper observability, automated alerting, and a team that actually understood how the money moved through our platform.',
    attribution: 'Engineering Manager, Series B Fintech',
    context: 'On reliability and mentorship',
  },
  {
    quote:
      'Rare combination of deep technical skill and genuine mentorship ability. Mike led the architecture review for our event-driven migration. He didn\'t just design the system. He documented the decisions, trained the team, and stayed engaged through the rollout.',
    attribution: 'Head of Platform, Payments Infrastructure',
    context: 'On architecture leadership',
  },
  {
    quote:
      'He treats operational excellence as a first-class feature. Mike built our entire CI/CD pipeline, observability stack, and incident response process. When something breaks, the team knows exactly where to look and what to do.',
    attribution: 'VP Engineering, Digital Banking Startup',
    context: 'On DevOps and operations',
  },
]

export const closingCta = {
  heading: "Let's build something reliable.",
  description:
    'Architecture challenge? Technical collaboration? I read every message and respond within 48 hours.',
  primaryCta: {
    label: 'Start a Conversation',
    href: '/contact',
  },
  secondaryCta: {
    label: 'View Experience',
    href: '/experience',
  },
}

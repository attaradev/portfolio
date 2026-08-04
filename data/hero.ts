import { BadgeCheck, GaugeCircle, Sparkles } from 'lucide-react'
import type {
  HeroHighlight,
  ProofStat,
  WhatIDo,
  FeaturedProject,
  WritingHighlight,
} from '@/types/content'

export const heroHighlights: HeroHighlight[] = [
  {
    icon: GaugeCircle,
    title: 'Reliability, Measured',
    description:
      'Systems that process $2M+ monthly without blinking. Observability and resilience built-in, not bolted on.',
  },
  {
    icon: Sparkles,
    title: 'Velocity Without Chaos',
    description:
      'CI/CD pipelines and IaC that let teams deploy on Fridays. Automated safety nets that catch issues before users do.',
  },
  {
    icon: BadgeCheck,
    title: 'Security by Default',
    description:
      'Least-privilege IAM, PII-safe data workflows, and supply-chain auditing. Guardrails that make the secure path the easy path.',
  },
]

export const heroContent = {
  headline: 'Secure, resilient cloud platforms that let teams ship with confidence.',
  subheadline:
    'I build the infrastructure, delivery pipelines, and event-driven systems behind high-stakes products — on AWS and Kubernetes, with security designed in from the start.',
}

export const heroCtas = {
  primary: {
    label: 'View Projects',
    href: '/projects',
  },
  secondary: {
    label: 'Get in Touch',
    href: '/contact',
  },
}

export const proofStats: ProofStat[] = [
  {
    value: '$2M+',
    label: 'Monthly Volume',
    context: 'Processed by transaction systems I architected',
  },
  {
    value: '4',
    label: 'AWS Certifications',
    context: 'Solutions Architect, Developer, Cloud Practitioner + 2 Pro in progress',
  },
  {
    value: 'AWS CB',
    label: 'Community Builder',
    context: 'Security category, current cohort',
  },
  {
    value: '3',
    label: 'Package Registries',
    context: 'Open source shipped to Homebrew, RubyGems, and npm',
  },
]

export const whatIDo: WhatIDo[] = [
  {
    title: 'Platform Engineering & DevOps',
    description:
      'Golden-path tooling, CI/CD pipelines, and infrastructure as code on AWS and Kubernetes. I build the internal platforms that make engineering teams faster and happier.',
  },
  {
    title: 'Cloud Security',
    description:
      'Least-privilege IAM, OIDC-based auth, PII-safe data handling, and supply-chain auditing. Security that ships as reusable guardrails, not gate reviews.',
  },
  {
    title: 'Event-Driven Architecture',
    description:
      'Decoupling monoliths using Outbox patterns and reliable messaging. Systems that survive network partitions, handle spikes gracefully, and process every message exactly once.',
  },
  {
    title: 'Resilient Payment Infrastructure',
    description:
      'Ledgers, reconciliation pipelines, and wallet systems. Built with deep observability and idempotent patterns so you never worry about double-spending or lost transactions.',
  },
]

export const featuredProject: FeaturedProject = {
  title: 'Ditto',
  tagline: 'Ephemeral database copies with real schema, real data shape, and no shared state',
  description:
    'A Go CLI and shared-host service that gives every developer and CI job a throwaway copy of production-shaped data — with PII scrubbing baked into the dump, OIDC-secured access, and SDKs for Go, Ruby, and TypeScript.',
  features: [
    'PII scrubbing at dump time — real production data never reaches laptops or CI logs',
    'Warm copy pool: fresh database copies in seconds, not minutes',
    'OIDC or token auth for shared team hosts',
    'Ships via Homebrew, deb/rpm/apk, and Go install',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/attaradev/ditto' },
    { label: 'All Projects', href: '/projects' },
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

export const closingCta = {
  heading: "Let's build something reliable.",
  description:
    "I'm not job-hunting — but I'm always glad to talk platform engineering, cloud security, and open source. I read every message and respond within 48 hours.",
  primaryCta: {
    label: 'Get in Touch',
    href: '/contact',
  },
  secondaryCta: {
    label: 'View Experience',
    href: '/experience',
  },
}

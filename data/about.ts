import { Code, Cpu, Globe2, Lightbulb, Sparkles, Target, Users, Zap } from 'lucide-react'
import type { HighlightStat, ExpertiseArea, WorkingPrinciple, CommunityHighlight, Certification } from '@/types/content'

export const highlightStats: HighlightStat[] = [
  {
    icon: Cpu,
    label: 'Core tools',
    value: 'Rails • Node',
    description: 'Ruby on Rails, NestJS, Spring Boot in production. AWS and PostgreSQL at scale.',
  },
  {
    icon: Globe2,
    label: 'Community',
    value: '8+ groups',
    description:
      "GDG Accra, FOSUniverse, DjangoGirls, RailsGirls. Teaching what I've learned.",
  },
]

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Code,
    title: 'Backend Systems',
    description:
      'Distributed systems that stay up. Microservices, event-driven patterns, APIs designed for the long haul.',
    topics: ['Microservices', 'Event-Driven', 'API Design', 'Data Modeling'],
  },
  {
    icon: Zap,
    title: 'Platform & DevOps',
    description: 'CI/CD, containers, infrastructure as code. The automation layer that makes teams faster.',
    topics: ['Kubernetes', 'Docker', 'CI/CD', 'AWS', 'Terraform'],
  },
  {
    icon: Users,
    title: 'Engineering Leadership',
    description: 'Growing engineers, aligning teams, shipping while maintaining quality and sanity.',
    topics: ['Mentorship', 'Architecture Reviews', 'Code Review', 'RFCs'],
  },
  {
    icon: Lightbulb,
    title: 'Fintech & Payments',
    description:
      "Money movement that doesn't lose transactions. KYC, wallets, payment integrations built for compliance.",
    topics: ['Payments', 'KYC/AML', 'Digital Wallets', 'Reconciliation'],
  },
]

export const workingPrinciples: WorkingPrinciple[] = [
  {
    icon: Target,
    title: 'Business first',
    description:
      'Engineering serves outcomes. I start with the constraint, not the technology.',
  },
  {
    icon: Sparkles,
    title: 'Built for 3 AM',
    description:
      'Every system I ship, I ask: "What happens when this breaks at 3 AM?" Then I build accordingly.',
  },
  {
    icon: Users,
    title: 'Leave it better',
    description:
      "Code, docs, people. The goal is a team that's stronger after I leave than when I arrived.",
  },
]

export const communityHighlights: CommunityHighlight[] = [
  {
    title: 'Workshop facilitator',
    description:
      'DjangoGirls, RailsGirls, university programs. Hands-on teaching for engineers breaking in.',
  },
  {
    title: 'Speaker',
    description:
      'GDG Accra, FOSUniverse. Talks on architecture, operations, and building engineering culture.',
  },
  {
    title: 'Writer',
    description:
      "Field notes at blog.attara.dev. What I've learned building systems that matter.",
  },
]

export const certifications: Certification[] = [
  {
    title: 'AWS Solutions Architect Associate',
    description: 'Architecture design on AWS',
    status: 'completed',
  },
  {
    title: 'AWS Developer Associate',
    description: 'Application development on AWS',
    status: 'completed',
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'Cloud fundamentals',
    status: 'completed',
  },
  {
    title: 'GitHub Copilot',
    description: 'AI-assisted development practices',
    status: 'completed',
  },
  {
    title: 'Cybersecurity',
    description: 'ALX Africa',
    status: 'completed',
  },
  {
    title: 'AWS DevOps Engineer Professional',
    description: 'Automation and reliability at scale',
    status: 'in-progress',
  },
  {
    title: 'AWS Solutions Architect Professional',
    description: 'Complex architecture and migration',
    status: 'in-progress',
  },
]

export const aboutBio = {
  intro:
    "I started in a classroom, teaching science and mathematics. Explaining complex ideas to people who hadn't seen them before. That's still how I approach engineering: clear thinking, clear communication, systems that make sense to the next person.",
  paragraph1:
    "I've spent years building backend systems where failure isn't abstract. Fintech transaction processing, AI assistants serving millions, KYC workflows where getting it wrong means compliance violations. The common thread: systems that need to work, stay up, and remain understandable as they scale.",
  paragraph2:
    "My tools: Ruby on Rails, NestJS, PostgreSQL, AWS, Kubernetes. Event-driven architectures with NATS.io. I write TypeScript when the frontend needs it. But tools change. What stays constant is caring about the humans who operate these systems and the users who depend on them.",
  paragraph3:
    "Outside work, I teach. DjangoGirls, RailsGirls, GDG Accra, university workshops. The industry gave me a lot; I try to give some back.",
  blogLink: {
    text: "blog.attara.dev",
    url: "https://blog.attara.dev",
    context: "I write about what I learn at",
    continuation: ": architecture decisions, operational lessons, leadership notes.",
  },
}

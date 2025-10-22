import { Code, Cpu, Globe2, Layers, Lightbulb, Sparkles, Target, Users, Zap } from 'lucide-react'
import type { HighlightStat, ExpertiseArea, WorkingPrinciple, CommunityHighlight, Certification } from '@/types/content'

export const highlightStats: HighlightStat[] = [
  {
    icon: Layers,
    label: 'Production systems launched',
    value: '25+',
    description: 'Resilient services built across fintech, logistics, and telecom that stay performant under load.',
  },
  {
    icon: Cpu,
    label: 'Core stack expertise',
    value: 'Rails • Node',
    description: 'Architected platforms in Ruby on Rails, NestJS, and Spring Boot backed by AWS and PostgreSQL.',
  },
  {
    icon: Globe2,
    label: 'Communities served',
    value: '8+',
    description:
      'Facilitator and mentor with GDG Accra, FOSUniverse, DjangoGirls, RailsGirls, and local tech collectives.',
  },
]

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Code,
    title: 'Backend Architecture',
    description:
      'Designing resilient, scalable systems with microservices, event-driven architecture, and cloud-native solutions.',
    topics: ['Microservices', 'Event-Driven Systems', 'API Design', 'Database Architecture'],
  },
  {
    icon: Zap,
    title: 'DevOps & Infrastructure',
    description: 'Building robust CI/CD pipelines, container orchestration, and infrastructure automation at scale.',
    topics: ['Kubernetes', 'Docker', 'CI/CD', 'AWS', 'Infrastructure as Code'],
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Mentoring engineers, building high-performing teams, and fostering inclusive tech communities.',
    topics: ['Mentorship', 'Team Building', 'Code Review', 'Knowledge Sharing'],
  },
  {
    icon: Lightbulb,
    title: 'Fintech & Payments',
    description:
      'Crafting secure, compliant payment systems, KYC workflows, and digital wallet solutions with third-party integrations.',
    topics: ['Payment Processing', 'KYC/AML', 'Digital Wallets', 'Transaction Systems'],
  },
]

export const workingPrinciples: WorkingPrinciple[] = [
  {
    icon: Target,
    title: 'Outcome-driven architecture',
    description:
      'Start with the business constraint, model the lifecycle, then align engineering bets with measurable results.',
  },
  {
    icon: Sparkles,
    title: 'Operational empathy',
    description:
      'Design for the humans on-call by investing in clarity, observability, and progressive delivery practices.',
  },
  {
    icon: Users,
    title: 'Scale people with systems',
    description:
      'Coach through pairing, reviews, and playbooks so teams can sustain velocity long after the initial launch.',
  },
]

export const communityHighlights: CommunityHighlight[] = [
  {
    title: 'Inclusive tech facilitator',
    description:
      'Mentor aspiring engineers through DjangoGirls, RailsGirls, and university outreach programs focused on practical software delivery.',
  },
  {
    title: 'Conference & meetup speaker',
    description:
      'Share lessons on architecture, DevOps culture, and developer enablement within GDG Accra, FOSUniverse, and partner events.',
  },
  {
    title: 'Writer & knowledge sharer',
    description:
      'Document systems design field notes, leadership insights, and developer workflows on blog.attara.dev to grow the community.',
  },
]

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Verified cloud fundamentals expertise',
    status: 'completed',
  },
  {
    title: 'AWS Certified Developer Associate',
    description: 'Demonstrated development expertise on AWS',
    status: 'completed',
  },
  {
    title: 'AWS Certified Solutions Architect Associate',
    description: 'Currently preparing for certification',
    status: 'in-progress',
  },
]

export const aboutBio = {
  intro:
    'My journey began in the classroom, teaching science and mathematics and the principles I practiced there still guide how I engineer software today.',
  paragraph1:
    'Over the years, I have designed, built, and scaled systems across fintech, logistics, and telecom — delivering high-impact features like AI agents, KYC workflows, digital wallets, virtual cards, and real-time transaction processing serving thousands of users. I specialize in resilient backend architecture, designing systems that prioritize performance, scalability, long-term maintainability, and measurable user value.',
  paragraph2:
    'My toolkit includes Ruby on Rails, NestJS (Node.js), Spring Boot, Docker, Kubernetes, AWS, and PostgreSQL. I have led the design of event-driven systems using tools like NATS.io and integrated mission-critical services ranging from payments to identity verification. On the frontend, I craft modern interfaces with React, Next.js, and TypeScript.',
  paragraph3:
    'Beyond code, I lead through mentorship and community building. I hold a B.Ed. in Information Technology Education and regularly contribute to inclusive tech spaces like GDG Accra and FOSUniverse, while facilitating learning through DjangoGirls and RailsGirls workshops.',
  blogLink: {
    text: 'my blog',
    url: 'https://blog.attara.dev',
    context: 'I also share insights and field notes on',
    continuation: ', exploring systems architecture, DevOps, and technical leadership.',
  },
}

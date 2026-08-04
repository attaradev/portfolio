import { BriefcaseBusiness, Rocket, Users } from 'lucide-react'
import type { CareerHighlight, Experience } from '@/types/content'

export const careerHighlights: CareerHighlight[] = [
  {
    icon: Rocket,
    title: 'Scale & Reliability',
    description:
      'Built event-driven and cloud-native platforms that process millions in transactions with 99.9% uptime.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Systems Architecture',
    description:
      'Architect resilient microservices, integrations, and automation that keep complex operations aligned.',
  },
  {
    icon: Users,
    title: 'Leadership & Mentorship',
    description: 'Coach engineers, lead cross-functional squads, and create learning communities that amplify impact.',
  },
]

export const focusAreas = [
  'Platform Engineering',
  'Backend Architecture',
  'Event-Driven Systems',
  'Observability',
  'DevOps Automation',
  'Technical Leadership',
]

export const experiences: Experience[] = [
  {
    title: 'Platform Engineer',
    company: 'Purple Wave Auction',
    period: 'Nov 2025 - Present',
    description:
      'Lead platform engineer owning reliability and developer experience. I build the internal tooling, CI/CD pipelines, and observability systems that enable the product engineering organization to ship confidently.',
    impact: 'Architecting the 99.9% reliability platform for high-stakes auction infrastructure',
    highlights: [
      'Engineered infrastructure automation that reduced deployment friction, protecting auction uptime.',
      'Implemented a comprehensive observability stack (metrics, logs, traces) to detect issues before customers do.',
      'Partnering with product teams to define SLOs and error budgets, shifting culture towards reliability.',
    ],
    skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Observability', 'Ruby on Rails', 'Platform Engineering'],
    current: true,
  },
  {
    title: 'Backend Engineer',
    company: 'Purple Wave Auction (via DevOps Africa)',
    period: 'Sep 2024 - Nov 2025',
    description:
      'Built the engine for efficient equipment appraisal. Architected resilient backend services that handle real-time media uploads and keep data properly synced across the distributed auction system.',
    impact: 'Streamlined appraisal workflows, reducing data sync latency by 70%',
    highlights: [
      'Designed an event-driven media ingestion pipeline that processes thousands of images without blocking users.',
      'Instrumented performance dashboards that gave operations leaders real-time visibility into appraisal bottlenecks.',
    ],
    skills: ['Ruby on Rails', 'NestJS', 'PostgreSQL', 'AWS', 'Docker', 'Real-time Sync', 'Media Processing'],
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Wewire Africa',
    period: 'Dec 2022 - Aug 2024',
    description:
      'Core engineer for transaction processing systems. I designed and built the KYC workflows, digital wallet ledgers, and real-time payment integrations that served the platform\'s rapid growth.',
    impact: 'Scaled transaction engine to process millions with 99.9% availability',
    highlights: [
      'Launched PCI-compliant transaction microservices with automated reconciliation, catching errors instantly.',
      'Co-led the squad delivering KYC and virtual cards, enabling the company to expand to new markets.',
    ],
    skills: ['NestJS', 'Next.js', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'turntabl',
    period: 'Sep 2022 - May 2023',
    description:
      'Specialized engineering training and delivery. Developed internal tooling for content generation and collaborated on high-frequency trading components for global financial partners.',
    impact: 'Automated editorial content generation, reducing manual effort by 80%',
    highlights: [
      'Built an OpenAI-powered generation service that allowed editorial teams to produce content 5x faster.',
      'Completed rigorous training in distributed systems and secure coding practices for financial services.',
    ],
    skills: ['Java', 'Spring Boot', 'OpenAI', 'GSuite', 'Python', 'Design Patterns'],
  },
  {
    title: 'Software Engineer',
    company: 'Vodafone',
    period: 'Aug 2021 - Feb 2023',
    description:
      "Maintained the critical microservices powering Vodafone's AI assistant (TOBi). Responsible for ensuring the high availability and performance of a system serving millions of requests.",
    impact:
      'Ensured 99.95% availability for AI assistant serving 2M+ subscribers',
    highlights: [
      'Optimized conversational AI microservices, reducing latency and improving user satisfaction scores.',
      'Maintained SLO-driven monitoring dashboards and served on-call rotation for production incidents.',
    ],
    skills: ['Node.js', 'TypeScript', 'Microservices', 'AWS', 'REST APIs'],
  },
  {
    title: 'Software Developer',
    company: 'Self Employed (Freelance)',
    period: 'Sep 2019 - Dec 2022',
    description:
      'Delivered custom software solutions for clients in fintech and logistics. specialized in taking greenfield ideas to production-ready scalable cloud applications.',
    impact: 'Delivered 10+ production applications with 100% client retention',
    highlights: [
      'Consulted on full-stack architecture for startups, helping them launching products within 3 months.',
      'Containerized legacy applications on AWS, reducing hosting costs and improving deploy reliability.',
    ],
    skills: ['React', 'Node.js', 'AWS', 'GraphQL', 'TypeScript'],
  },
  {
    title: 'Technical Team Lead',
    company: 'BloomTech',
    period: 'Mar 2020 - Aug 2020',
    description:
      'Mentored a cohort of 11 engineering students. Facilitated code reviews, pair programming sessions, and daily standups to simulate a professional engineering environment.',
    impact: 'Improved student retention by 40% through targeted mentorship',
    highlights: [
      'Designed technical curricula that helped students master complex algorithms and React patterns.',
      'Conducted over 100 code reviews, teaching best practices in clean code and version control.',
    ],
    skills: ['Team Leadership', 'Mentoring', 'Code Review', 'Agile', 'Public Speaking'],
  },
  {
    title: 'Frontend Developer',
    company: 'Complete Farmer',
    period: 'May 2019 - Aug 2019',
    description:
      'Worked with the product team to build a responsive, accessible dashboard for agricultural investors. Focused on component reusability and UI performance.',
    impact: 'Improved dashboard load times by 45% via code splitting and optimization',
    highlights: [
      'Refactored the React codebase to use a unified design system, speeding up future feature development.',
      'Implemented accessibility best practices, ensuring the platform was usable by all customers.',
    ],
    skills: ['React', 'Redux', 'JavaScript', 'Agile', 'UI/UX'],
  },
  {
    title: 'Subject Teacher',
    company: 'Ghana Education Service',
    period: 'Sep 2016 - May 2019',
    description:
      'Taught Science and ICT. Developed curriculum and mentored students, fostering a love for technology and problem-solving.',
    impact: 'Mentored 200+ students achieving an 85% distinction rate',
    highlights: [
      'Introduced practical ICT lessons that bridged the gap between theory and real-world application.',
      'Guided students in career selection, with many going on to pursue STEM fields.',
    ],
    skills: ['Teaching', 'Facilitation', 'Public Speaking', 'Leadership'],
  },
]

export const experienceIntro =
  'Platform engineer building reliable infrastructure, deployment pipelines, and observability systems. Previously shipped fintech transaction systems and AI-powered products. I mentor engineers and align technical decisions with business outcomes.'

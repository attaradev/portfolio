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
  'Backend Architecture',
  'Event-Driven Systems',
  'Realtime Processing',
  'DevOps Automation',
  'Technical Leadership',
  'Mentorship & Enablement',
]

export const experiences: Experience[] = [
  {
    title: 'Backend Engineer',
    company: 'Purple Wave Auction (via DevOps Africa)',
    period: 'Sep 2024 - Present',
    description:
      'Building tools for efficient equipment appraisal workflows with real-time media uploads and data syncing between systems. Architecting resilient backend systems and scalable microservices for auction operations.',
    impact: 'Streamlined equipment appraisal workflows with real-time data synchronization and media processing',
    highlights: [
      'Introduced an event-driven media ingestion pipeline that keeps appraisal teams in sync without blocking the UI.',
      'Set up performance dashboards and service health probes that expose cycle-time metrics for operations leaders.',
    ],
    skills: ['Ruby on Rails', 'NestJS', 'PostgreSQL', 'AWS', 'Docker', 'Real-time Sync', 'Media Processing'],
    current: true,
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Wewire Africa',
    period: 'Dec 2022 - Aug 2024',
    description:
      'Designed and built transaction processing systems, KYC workflows, and digital wallet features. Implemented real-time APIs and payment integrations serving thousands of users with TypeScript and NestJS.',
    impact: 'Processed millions in transactions with 99.9% uptime',
    highlights: [
      'Launched PCI-conscious transaction microservices with automated reconciliation and alerting workflows.',
      'Co-led squad delivering KYC, virtual cards, and digital wallet experiences for thousands of customers.',
    ],
    skills: ['NestJS', 'Next.js', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'turntabl',
    period: 'Sep 2022 - May 2023',
    description:
      'Completed intensive post-graduate software development training and developed specialized article generation tool using Java with GSuite and OpenAI API integration. Collaborated on trading system development using Spring Boot.',
    impact: 'Automated content generation reducing manual work by 80%',
    highlights: [
      'Delivered OpenAI-powered article generation service with Java and GSuite automation for editorial teams.',
      'Pair-programmed on equities trading platform components using Spring Boot and AWS tooling.',
    ],
    skills: ['Java', 'Spring Boot', 'OpenAI', 'GSuite', 'Python', 'Design Patterns'],
  },
  {
    title: 'Software Engineer',
    company: 'Vodafone',
    period: 'Aug 2021 - Feb 2023',
    description:
      "Built and maintained microservices powering Vodafone's Digital Assistant (TOBi). Participated in full software development lifecycle from concept to deployment and ongoing support.",
    impact:
      'Maintained critical microservices ensuring high availability and performance of AI-powered customer assistant',
    highlights: [
      'Maintained conversational AI microservices with SLO-driven monitoring and on-call rotations.',
      'Shipped REST APIs that integrate CRM, analytics, and NLP services serving millions of Vodafone subscribers.',
    ],
    skills: ['Node.js', 'TypeScript', 'Microservices', 'AWS', 'REST APIs'],
  },
  {
    title: 'Software Developer',
    company: 'Self Employed (Freelance)',
    period: 'Sep 2019 - Dec 2022',
    description:
      'Offered custom software solutions specializing in web development and cloud DevOps. Developed high-quality bespoke applications including Expensify, 3Blocks, and KnackApp.',
    impact: 'Delivered 10+ projects with 100% client satisfaction',
    highlights: [
      'Consulted on greenfield builds from ideation to launch across fintech, logistics, and education clients.',
      'Containerized deployments on AWS to deliver observable, maintainable platforms tailored to each business.',
    ],
    skills: ['React', 'Node.js', 'AWS', 'GraphQL', 'TypeScript'],
  },
  {
    title: 'Technical Team Lead',
    company: 'BloomTech',
    period: 'Mar 2020 - Aug 2020',
    description:
      'Mentored 11 students on effective learning and problem-solving. Reviewed code, organized 15+ after-hour sessions, facilitated daily standups, and enhanced student engagement.',
    impact: 'Improved student retention by 40% and code quality standards',
    highlights: [
      'Designed curricula and after-hour sessions that boosted learner engagement and shipped production-ready labs.',
      'Facilitated code reviews, agile rituals, and mentorship that elevated 11 engineers-in-training.',
    ],
    skills: ['Team Leadership', 'Mentoring', 'Code Review', 'Agile', 'Public Speaking'],
  },
  {
    title: 'Frontend Developer',
    company: 'Complete Farmer',
    period: 'May 2019 - Aug 2019',
    description:
      'Collaborated with agile team to design and develop reusable components. Significantly improved UI performance and accessibility while ensuring technical feasibility of designs.',
    impact: 'Improved page load time by 45% and accessibility score to 95+',
    highlights: [
      'Refactored React architecture into reusable design system components with better performance budgets.',
      'Partnered with designers to ship accessibility improvements that hit AA targets across the platform.',
    ],
    skills: ['React', 'Redux', 'JavaScript', 'Agile', 'UI/UX'],
  },
  {
    title: 'Subject Teacher - Science, Mathematics, ICT',
    company: 'Ghana Education Service',
    period: 'Sep 2016 - May 2019',
    description:
      'Developed and delivered teaching instructions in multiple subjects. Assessed student performance and mentored students on course selection for further studies.',
    impact: 'Mentored 200+ students with 85% pass rate',
    highlights: [
      'Built interdisciplinary lesson plans that blended science, mathematics, and ICT for diverse classrooms.',
      'Guided students on academic pathways and career planning resulting in 85% exam pass rates.',
    ],
    skills: ['Teaching', 'Facilitation', 'Public Speaking', 'Leadership'],
  },
]

export const experienceIntro =
  'I help teams ship resilient platforms, from high-volume fintech rails to AI-powered customer support systems while mentoring engineers and aligning delivery with business outcomes.'

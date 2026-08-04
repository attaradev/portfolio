export const resumeIntro = {
  headline: 'Resume',
  description:
    'Review credentials below or download the PDF. For deeper context, see Case Studies and Experience.',
  downloads: [{ label: 'Download PDF', href: '/resume.pdf' }],
}

export const resumeHeader = {
  name: 'Mike Attara',
  title: 'Platform Engineer',
  contact: {
    email: 'hello@attara.dev',
    website: 'attara.dev',
    github: 'github.com/attaradev',
    linkedin: 'linkedin.com/in/attaradev',
  },
  location: 'Ghana (GMT) · Remote',
}

export const professionalSummary =
  'Platform engineer building reliable infrastructure, deployment pipelines, and observability systems. 5+ years shipping transaction systems, event-driven architectures, and DevOps automation for fintech and growth-stage companies. Systems processing millions with 99.9% measured uptime. Deep expertise: Kubernetes, Terraform, AWS, Ruby on Rails, NestJS. Technical depth plus mentorship and clear written communication. Open source: NatsPubsub (NATS JetStream library).'

export const coreCompetencies = {
  'Backend Development': 'Ruby on Rails, NestJS, Spring Boot, Node.js, TypeScript, Python, Go',
  'Data & Messaging': 'PostgreSQL, Redis, MongoDB, NATS JetStream, Kafka, RabbitMQ, Event Sourcing',
  'Cloud & Infrastructure': 'AWS (EC2, ECS, Lambda, RDS, S3, SQS), Docker, Kubernetes, Terraform',
  'DevOps & Reliability': 'CI/CD (GitHub Actions, CircleCI), Observability (Grafana, Prometheus), SLO-based alerting',
  'Architecture': 'Microservices, Event-Driven Systems, Transactional Outbox, API Design, Domain-Driven Design',
}

export const resumeExperiences = [
  {
    title: 'Platform Engineer',
    company: 'Purple Wave Auction',
    location: 'Remote',
    period: 'November 2025 – Present',
    bullets: [
      'Owning platform reliability and developer experience for auction infrastructure',
      'Building infrastructure automation and deployment pipelines that reduce release friction',
      'Implementing observability stack with metrics, logging, and alerting for production systems',
    ],
    technologies: 'Kubernetes, Terraform, AWS, CI/CD, Observability, Go, TypeScript, Node.js',
  },
  {
    title: 'Backend Engineer',
    company: 'Purple Wave Auction (via DevOps Africa)',
    location: 'Remote',
    period: 'September 2024 – November 2025',
    bullets: [
      'Designed event-driven media ingestion pipeline for equipment appraisal workflows',
      'Implemented service health monitoring with custom probes and alerting',
      'Built data synchronization layer for offline-capable mobile applications',
    ],
    technologies: 'Ruby on Rails, NestJS, PostgreSQL, AWS, Docker, TypeScript, NATS JetStream',
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'Wewire Africa',
    location: 'Remote',
    period: 'December 2022 – August 2024',
    bullets: [
      'Architected transaction processing microservices handling $2M+ monthly volume with 99.9% uptime',
      'Led squad of 4 engineers delivering KYC verification, virtual card issuance, and digital wallet features',
      'Designed reconciliation pipeline that reduced manual intervention from 15 hours/week to 3 hours/week',
    ],
    technologies: 'NestJS, Next.js, React, PostgreSQL, AWS, Event-Driven Architecture, TypeScript',
  },
  {
    title: 'Software Engineer',
    company: 'Vodafone',
    location: 'Accra, Ghana',
    period: 'August 2021 – February 2023',
    bullets: [
      "Maintained microservices powering TOBi, Vodafone's AI-powered digital assistant",
      'Implemented SLO-driven monitoring and alerting, improving service reliability',
      'Designed REST APIs integrating CRM, analytics, and NLP services',
    ],
    technologies: 'Node.js, TypeScript, AWS, Microservices, REST APIs',
  },
  {
    title: 'Software Developer',
    company: 'Self-Employed (Freelance)',
    location: 'Remote',
    period: 'September 2019 – December 2022',
    bullets: [
      'Delivered 10+ projects across fintech, logistics, and education sectors',
      'Architected and deployed containerized applications on AWS for multiple clients',
    ],
    technologies: 'React, Node.js, AWS, GraphQL, TypeScript, Docker',
  },
  {
    title: 'Technical Team Lead',
    company: 'BloomTech',
    location: 'Remote',
    period: 'March 2020 – August 2020',
    bullets: [
      'Mentored cohort of 11 students through full-stack curriculum',
      'Facilitated code reviews, agile rituals, and after-hour learning sessions',
    ],
    technologies: 'Team Leadership, Mentoring, Code Review, Agile',
  },
]

export const openSource = {
  title: 'NatsPubsub',
  role: 'Creator & Maintainer',
  description: 'Production-grade pub/sub library for NATS JetStream in Ruby and TypeScript',
  highlights: [
    'Transactional outbox and idempotent inbox for exactly-once delivery',
    'Rails-native generators, migrations, and health checks',
    'Mock NATS for fast, infrastructure-free testing',
  ],
  url: 'attaradev.github.io/nats-pubsub',
}

export const technicalWriting = {
  description: 'Regular author at blog.attara.dev covering:',
  topics: [
    'Event-driven architecture patterns and implementation',
    'DevOps practices and observability strategies',
    'Technical leadership and engineering team effectiveness',
  ],
}

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', status: 'completed' as const },
  { name: 'AWS Certified Developer – Associate', status: 'completed' as const },
  { name: 'AWS Certified Cloud Practitioner', status: 'completed' as const },
  { name: 'GitHub Copilot Certified', status: 'completed' as const },
  { name: 'Cybersecurity – ALX', status: 'completed' as const },
]

export const education = {
  degree: 'Bachelor of Education in Information Technology',
  institution: 'University of Cape Coast',
  location: 'Ghana',
}

export const community = [
  'Facilitator: DjangoGirls, RailsGirls, university outreach programs',
  'Speaker: GDG Accra, FOSUniverse on architecture, DevOps, and engineering enablement',
  'Mentor: Supporting underrepresented groups entering technology careers',
]

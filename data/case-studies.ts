import type { CaseStudy } from '@/types/content'

export const caseStudiesIntro = {
  headline: 'Case Studies',
  description:
    'Real problems, real solutions, real numbers. Anonymized, but everything here shipped to production.',
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'payment-reconciliation',
    title: 'Rebuilding a Failing Payment Reconciliation System',
    outcome: 'Reduced daily reconciliation failures from 47 to 0 and cut manual intervention by 80%',
    context:
      'Series B fintech, $2M+ monthly in cross-border transactions. Reconciliation ran on cron jobs and spreadsheets, failing multiple times weekly. Finance burned 15+ hours on manual fixes. Engineering flew blind on stuck transactions.',
    problem: [
      'No single source of truth for transaction state',
      'Race conditions between payment processor webhooks and internal state updates',
      'Zero observability. Failures discovered when customers complained',
      'No retry mechanism; failed reconciliations required manual database queries',
    ],
    constraints: [
      'Could not pause transaction processing during migration',
      'Existing data inconsistencies needed to be resolved without data loss',
      'Team of 3 engineers, two of whom were junior',
      '6-week deadline before audit season',
    ],
    role: 'Sole architect, primary implementer. Mentored two junior engineers on event-driven patterns. Reported to VP Engineering on progress and tradeoffs.',
    approach: [
      {
        phase: 'Phase 1',
        title: 'Visibility First',
        description:
          'Before changing any processing logic, I instrumented the existing system. Added structured logging, created a transaction state dashboard, and built alerts for stuck transactions. This alone cut incident response time from hours to minutes.',
      },
      {
        phase: 'Phase 2',
        title: 'Event-Sourced Transaction Log',
        description:
          'Introduced an append-only transaction event table as the source of truth. Every state change (initiated, confirmed, failed, reconciled) became an immutable event. Reconciliation became a projection over events rather than a brittle comparison of mutable states.',
      },
      {
        phase: 'Phase 3',
        title: 'Idempotent Webhook Handler',
        description:
          'Rebuilt the payment processor integration with idempotency keys and proper retry handling. Webhooks that arrived out of order no longer corrupted state. Used the transactional outbox pattern to guarantee event publication.',
      },
      {
        phase: 'Phase 4',
        title: 'Automated Reconciliation Pipeline',
        description:
          'Replaced cron jobs with an event-driven pipeline using NATS JetStream. Dead letter queue for failed reconciliations with automated retry and alerting. Finance dashboard for real-time reconciliation status.',
      },
    ],
    results: [
      'Daily reconciliation failures: 47 → 0',
      'Manual intervention hours: 15/week → 3/week',
      'Mean time to detect stuck transactions: 4 hours → 8 minutes',
      'Passed financial audit with zero findings on transaction integrity',
      'Both junior engineers confidently deploying to the reconciliation system within 8 weeks',
    ],
    nextSteps:
      'Next: distributed tracing to correlate events across payment processor, core banking, and notifications. Snapshot-based reconciliation for month-end to reduce event replay overhead.',
    media: [
      {
        type: 'image',
        src: '/images/case-studies/payment-reconciliation.png',
        alt: 'Payment Reconciliation Dashboard showing 100% match rate',
        caption: 'The custom reconciliation dashboard built for the finance team.',
      },
    ],
  },
  {
    id: 'event-driven-migration',
    title: 'Event-Driven Migration for a Monolithic API',
    outcome: 'Decomposed critical payment flows into event-driven services with zero downtime',
    context:
      'Mid-stage fintech, 4-year-old Rails monolith. Onboarding, KYC, wallets, payments all in one codebase. 45-minute deploys. Any payment change risked breaking unrelated features.',
    problem: [
      'Single deployment artifact for unrelated business domains',
      'Database contention between KYC batch jobs and real-time payment queries',
      'No ability to scale payment processing independently',
      'Engineers afraid to touch payment code due to blast radius',
    ],
    constraints: [
      'Revenue-critical: system could not go offline',
      'Small platform team (2 engineers + me)',
      'Existing tests were integration-heavy and slow',
      'No existing message broker infrastructure',
    ],
    role: 'Technical lead. Owned architecture decisions, RFC process, rollout strategy. Coordinated feature freeze windows with product. Mentored team on event-driven patterns.',
    approach: [
      {
        phase: 'Phase 1',
        title: 'Strangler Pattern Setup',
        description:
          'Introduced NATS JetStream as the event backbone. Created adapter layer in the monolith to publish domain events without changing existing business logic. Payments began emitting events while still processing synchronously.',
      },
      {
        phase: 'Phase 2',
        title: 'Extract Payment Processing',
        description:
          'Built a new payment service that consumed events from the monolith and handled processor integrations. Used feature flags to gradually shift traffic. The monolith became an event publisher; the new service became the processor.',
      },
      {
        phase: 'Phase 3',
        title: 'Implement Saga Coordination',
        description:
          'Multi-step payment flows (authorize → capture → notify) became explicit sagas with compensation handlers. Failed captures automatically triggered refund workflows. State tracked in the event log, not scattered across service databases.',
      },
      {
        phase: 'Phase 4',
        title: 'Decommission Monolith Payment Code',
        description:
          'Once traffic was fully migrated and stable for 4 weeks, removed payment processing from the monolith. Reduced monolith deployment time and database load.',
      },
    ],
    results: [
      'Payment service deploys independently in 8 minutes (vs 45 for monolith)',
      'Payment processing latency p99: 1200ms → 340ms',
      'Database CPU during peak: 78% → 31%',
      'Zero-downtime migration over 10 weeks',
      'Team velocity on payment features increased measurably',
    ],
    nextSteps:
      'Next: extract KYC verification (still causing DB contention during batches). Add consumer-driven contract testing between monolith and extracted services.',
    media: [
      {
        type: 'image',
        src: '/images/case-studies/event-driven-migration.png',
        alt: 'Architecture diagram showing monolith decomposition',
        caption: 'High-level architecture of the new event-driven payment system.',
      },
    ],
  },
  {
    id: 'observability-from-zero',
    title: 'Building Observability from Zero',
    outcome: 'Reduced mean time to resolution from 4 hours to 23 minutes',
    context:
      'Early-stage startup, growing Rails app serving B2B logistics. No centralized logging, no metrics, no alerting. Incidents discovered via customer complaints. On-call burning out the team.',
    problem: [
      'No centralized logging. Engineers SSH\'d into production to tail logs',
      'No performance metrics. Slow endpoints discovered through customer complaints',
      'Alert fatigue from noisy, threshold-based alerts that cried wolf',
      'No runbooks. Incident response was tribal knowledge',
    ],
    constraints: [
      'Tight budget: needed to use cost-effective tooling',
      'Team of 5 engineers with no dedicated SRE',
      'Could not introduce significant latency to request path',
      'Needed to show value quickly to justify continued investment',
    ],
    role: 'Sole owner. Tooling selection, instrumentation, team training, on-call process design. Reported to CTO on progress and cost.',
    approach: [
      {
        phase: 'Phase 1',
        title: 'Centralized Logging',
        description:
          'Deployed a managed logging solution (Papertrail initially, later migrated to self-hosted Loki). Implemented structured JSON logging across all services. Created saved searches for common failure patterns.',
      },
      {
        phase: 'Phase 2',
        title: 'Application Performance Monitoring',
        description:
          'Instrumented the Rails application with key metrics: request latency by endpoint, error rates by controller, database query time, and background job duration. Built Grafana dashboards for real-time visibility.',
      },
      {
        phase: 'Phase 3',
        title: 'SLO-Based Alerting',
        description:
          'Replaced threshold alerts with SLO-based alerting. Defined error budgets for critical flows (order creation, payment processing). Alerts fired when error budget burn rate indicated a real problem, not transient noise. Reduced alert volume by 70%.',
      },
      {
        phase: 'Phase 4',
        title: 'Runbooks and Incident Process',
        description:
          'Wrote runbooks for the top 10 incident types. Established a blameless postmortem process. Created an incident response channel with clear escalation paths. Trained the team on structured incident communication.',
      },
    ],
    results: [
      'Mean time to detection: 2 hours → 4 minutes',
      'Mean time to resolution: 4 hours → 23 minutes',
      'Alert volume: 45/week → 12/week (with higher signal)',
      'On-call burnout complaints: eliminated',
      'Customer-reported incidents: 8/month → 1/month',
    ],
    nextSteps:
      'Next: distributed tracing across services, synthetic monitoring for critical journeys, automated remediation for common failures.',
    media: [
      {
        type: 'image',
        src: '/images/case-studies/observability-from-zero.png',
        alt: 'Grafana dashboard showing system metrics',
        caption: 'The main observability dashboard used by the engineering team.',
      },
    ],
  },
]

import type { Project, ExternalContribution } from '@/types/content'

export const projectsIntro = {
  headline: 'Projects',
  description:
    'Open source I build and maintain — platform tooling, distributed-systems libraries, and security utilities. Everything here is shipped, versioned, and in use.',
}

export const projects: Project[] = [
  {
    name: 'Ditto',
    tagline: 'Ephemeral database copies with real schema, real data shape, and no shared state',
    description:
      'A Go CLI and shared-host service that gives every developer and CI job a disposable copy of production-shaped data. PII scrubbing is baked into the dump step, access is secured with OIDC or static tokens, and a warm copy pool keeps provisioning down to seconds. The goal: keep real production data out of laptops and CI logs entirely.',
    language: 'Go',
    tags: ['Developer Experience', 'Data Security', 'PII Scrubbing', 'OIDC', 'Docker', 'CI/CD'],
    repoUrl: 'https://github.com/attaradev/ditto',
    packages: ['Homebrew', 'deb/rpm/apk', 'Go, Ruby & TypeScript SDKs'],
    highlights: [
      'PII scrubbing at dump time — sensitive data never leaves the source boundary',
      'Shared-host API keeps dumps fresh and refills warm copies automatically',
      'OIDC bearer or token auth for team deployments',
      'Multi-platform releases with Homebrew tap and three language SDKs',
    ],
    featured: true,
  },
  {
    name: 'JetStream Bridge',
    tagline: 'Exactly-once NATS JetStream pipelines for Rails',
    description:
      'A production-ready bridge implementing the transactional outbox and idempotent inbox patterns for Ruby on Rails — with dead-letter queues, overlap-safe stream provisioning, and mock NATS for infrastructure-free tests. Documented down to a least-privilege permissions guide for locked-down NATS deployments.',
    language: 'Ruby',
    tags: ['Event-Driven', 'Outbox Pattern', 'Exactly-Once', 'Rails', 'NATS'],
    repoUrl: 'https://github.com/attaradev/jetstream_bridge',
    packages: ['RubyGems'],
    highlights: [
      'Transactional outbox + idempotent inbox for exactly-once delivery',
      'Runs under restricted NATS permissions (auto_provision=false) with a dedicated least-privilege guide',
      'Rails generators, migrations, and health checks included',
    ],
  },
  {
    name: 'NatsPubsub',
    tagline: 'Declarative pub/sub for NATS JetStream in Ruby and TypeScript',
    description:
      'Cross-language messaging with full Ruby ↔ TypeScript interoperability: durable pull consumers with exponential backoff, DLQs, middleware pipelines, hierarchical wildcard topics, and automatic stream topology management. Published to two package registries with a full documentation site.',
    language: 'Ruby · TypeScript',
    tags: ['Messaging', 'Distributed Systems', 'Cross-Language', 'NATS'],
    repoUrl: 'https://github.com/attaradev/nats-pubsub',
    docsUrl: 'https://attaradev.github.io/nats-pubsub/',
    packages: ['RubyGems', 'npm'],
    highlights: [
      'Identical semantics across Ruby and TypeScript implementations',
      'DLQ, retry with exponential backoff, and schema validation built in',
      'Docs site with Kubernetes deployment and performance-tuning guides',
    ],
  },
  {
    name: 'AV Scanner',
    tagline: 'Supply-chain compromise auditing for GitHub organizations',
    description:
      'A security CLI built in response to the 2026 axios npm supply-chain attack. It sweeps commit and PR patches across repos, whole orgs, or property-filtered subsets, detects known-bad versions and IOCs, and emits a timestamped Markdown audit report with first-seen dates, risk levels, and remediation steps.',
    language: 'Python',
    tags: ['Security', 'Supply Chain', 'Incident Response', 'GitHub'],
    repoUrl: 'https://github.com/attaradev/av-scanner',
    highlights: [
      'Scans explicit repos, entire orgs, or custom-property-filtered fleets — including private repos',
      'Pre-filters targets by language stats and lockfile presence, down to nested monorepo packages',
      'Audit-ready Markdown reports with IOC matches and remediation guidance',
    ],
  },
  {
    name: 'ScribeCloud',
    tagline: 'Serverless translation platform on AWS, defined entirely in Terraform',
    description:
      'Terraform modules for S3, Lambda, IAM, and API Gateway with a Cognito JWT authorizer, plus a CLI that handles Cognito Hosted UI login and token caching. A compact, end-to-end example of least-privilege IAM and managed-auth patterns on AWS.',
    language: 'Terraform · HCL',
    tags: ['AWS', 'Terraform', 'IAM', 'Cognito', 'Serverless'],
    repoUrl: 'https://github.com/attaradev/scribecloud',
    highlights: [
      'Module-per-service Terraform layout with least-privilege IAM roles',
      'API Gateway HTTP v2 secured by a Cognito JWT authorizer',
    ],
  },
  {
    name: 'Dotfiles',
    tagline: 'Reproducible macOS setup with security-conscious defaults',
    description:
      'Version-controlled machine setup with hardened defaults, quality CI, and one-command reproducible installs. The same care applied to production infrastructure, applied to the workstation.',
    language: 'Shell',
    tags: ['Automation', 'Security Defaults', 'CI'],
    repoUrl: 'https://github.com/attaradev/dotfiles',
    highlights: ['CI-tested installation on every change', 'Security-conscious defaults out of the box'],
  },
]

export const externalContributions: ExternalContribution[] = [
  {
    project: 'floci-io/floci',
    description:
      'Added an option to disable k3s\'s bundled CNI in EKS emulation — merged upstream into the open-source local AWS emulator.',
    url: 'https://github.com/floci-io/floci/pull/1793',
  },
]

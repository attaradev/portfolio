"use client"

import {
  ArrowRight,
  CheckCircle,
  Code,
  Cpu,
  Globe2,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react"

const highlightStats = [
  {
    icon: Layers,
    label: "Production systems launched",
    value: "25+",
    description: "Resilient services built across fintech, logistics, and telecom that stay performant under load.",
  },
  {
    icon: Cpu,
    label: "Core stack expertise",
    value: "Rails • Node • Java • Django",
    description: "Architected platforms in Ruby on Rails, NestJS, Django, and Spring Boot backed by AWS and PostgreSQL.",
  },
  {
    icon: Globe2,
    label: "Communities served",
    value: "8+",
    description: "Facilitator and mentor with GDG Accra, FOSUniverse, DjangoGirls, RailsGirls, and local tech collectives.",
  },
]

const expertiseAreas = [
  {
    icon: Code,
    title: "Backend Architecture",
    description:
      "Designing resilient, scalable systems with microservices, event-driven architecture, and cloud-native solutions.",
    topics: ["Microservices", "Event-Driven Systems", "API Design", "Database Architecture"],
  },
  {
    icon: Zap,
    title: "DevOps & Infrastructure",
    description: "Building robust CI/CD pipelines, container orchestration, and infrastructure automation at scale.",
    topics: ["Kubernetes", "Docker", "CI/CD", "AWS", "Infrastructure as Code"],
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring engineers, building high-performing teams, and fostering inclusive tech communities.",
    topics: ["Mentorship", "Team Building", "Code Review", "Knowledge Sharing"],
  },
  {
    icon: Lightbulb,
    title: "Fintech & Payments",
    description:
      "Crafting secure, compliant payment systems, KYC workflows, and digital wallet solutions with third-party integrations.",
    topics: ["Payment Processing", "KYC/AML", "Digital Wallets", "Transaction Systems"],
  },
]

const workingPrinciples = [
  {
    icon: Target,
    title: "Outcome-driven architecture",
    description:
      "Start with the business constraint, model the lifecycle, then align engineering bets with measurable results.",
  },
  {
    icon: Sparkles,
    title: "Operational empathy",
    description:
      "Design for the humans on-call by investing in clarity, observability, and progressive delivery practices.",
  },
  {
    icon: Users,
    title: "Scale people with systems",
    description:
      "Coach through pairing, reviews, and playbooks so teams can sustain velocity long after the initial launch.",
  },
]

const communityHighlights = [
  {
    title: "Inclusive tech facilitator",
    description:
      "Mentor aspiring engineers through DjangoGirls, RailsGirls, and university outreach programs focused on practical software delivery.",
  },
  {
    title: "Conference & meetup speaker",
    description:
      "Share lessons on architecture, DevOps culture, and developer enablement within GDG Accra, FOSUniverse, and partner events.",
  },
  {
    title: "Writer & knowledge sharer",
    description:
      "Document systems design field notes, leadership insights, and developer workflows on blog.attara.dev to grow the community.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h3>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p className="text-foreground font-medium text-lg sm:text-xl">
            My journey began in the classroom, teaching science and mathematics—and the principles I practiced there
            still guide how I engineer software today.
          </p>

          <p>
            Over the years, I've designed, built, and scaled systems across fintech, logistics, and telecom—delivering
            high-impact features like AI agents, KYC workflows, digital wallets, virtual cards, and real-time transaction
            processing serving thousands of users. I specialize in resilient backend architecture, designing systems
            that prioritize performance, scalability, long-term maintainability, and measurable user value.
          </p>

          <p>
            My toolkit includes Ruby on Rails, NestJS (Node.js), Spring Boot, Docker, Kubernetes, AWS, and PostgreSQL.
            I've led the design of event-driven systems using tools like NATS.io and integrated mission-critical
            services ranging from payments to identity verification. On the frontend, I craft modern interfaces with
            React, Next.js, and TypeScript.
          </p>

          <p>
            Beyond code, I lead through mentorship and community building. I hold a B.Ed. in Information Technology
            Education and regularly contribute to inclusive tech spaces like GDG Accra and FOSUniverse, while
            facilitating learning through DjangoGirls and RailsGirls workshops. I also share insights and field notes on{" "}
            <a
              href="https://blog.attara.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              my blog
            </a>
            , exploring systems architecture, DevOps, and technical leadership.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 sm:mt-10">
          {highlightStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group border border-border/50 rounded-xl p-5 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{stat.description}</p>
              </div>
            )
          })}
        </div>

        <div className="pt-8 sm:pt-10">
          <h4 className="text-2xl font-bold mb-8 text-foreground">Areas of Expertise</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {expertiseAreas.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 via-accent/10 to-transparent text-accent flex items-center justify-center group-hover:from-accent/25 group-hover:via-accent/15 transition-all duration-300 flex-shrink-0">
                      <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h5 className="text-lg font-semibold group-hover:text-accent transition-colors">{item.title}</h5>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 bg-accent/5 text-accent text-xs rounded-full font-semibold border border-accent/15 tracking-wide"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="pt-8 sm:pt-10">
          <h4 className="text-2xl font-bold mb-6 text-foreground">How I Operate</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {workingPrinciples.map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.title}
                  className="border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h5 className="text-lg font-semibold mb-3 text-foreground">{principle.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="pt-8 sm:pt-10">
          <h4 className="text-2xl font-bold mb-6 text-foreground">Community & Advocacy</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {communityHighlights.map((item) => (
              <div
                key={item.title}
                className="border border-accent/20 rounded-xl p-6 bg-accent/5 hover:bg-accent/10 transition-colors smooth-transition"
              >
                <h5 className="text-base font-semibold text-accent mb-3">{item.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 sm:pt-12">
          <h4 className="text-2xl font-bold mb-6 text-foreground">Certifications & Credentials</h4>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all smooth-transition hover-lift">
              <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">AWS Certified Cloud Practitioner</p>
                <p className="text-sm text-muted-foreground">Verified cloud fundamentals expertise</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all smooth-transition hover-lift">
              <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">AWS Certified Developer Associate</p>
                <p className="text-sm text-muted-foreground">Demonstrated development expertise on AWS</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all smooth-transition hover-lift">
              <ArrowRight size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">AWS Certified Solutions Architect Associate</p>
                <p className="text-sm text-muted-foreground">Currently preparing for certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

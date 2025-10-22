"use client"

import { ArrowRight, ArrowUpRight, BadgeCheck, GaugeCircle, Sparkles, Zap } from "lucide-react"

const heroHighlights = [
  {
    icon: GaugeCircle,
    title: "99.9% uptime systems",
    description: "Led architecture for platforms processing millions in transactions with observability baked in.",
  },
  {
    icon: Sparkles,
    title: "Automation-first delivery",
    description: "Shipped CI/CD pipelines, IaC, and progressive rollouts that kept squads shipping weekly.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted technical leader",
    description: "Coach engineers, align stakeholders, and translate complex requirements into resilient services.",
  },
]

const heroFocus = ["Backend Architecture", "DevOps Leadership", "Event-Driven Systems", "Fintech Platforms"]

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 right-12 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-16 left-8 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background"></div>
      </div>

      <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10 fade-in">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent mb-6">
          <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/10">Platform Engineer</span>
          <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-foreground/80">
            Technical Leader
          </span>
          <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-foreground/80">
            Community Builder
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
          Architecting resilient systems that let teams move fast with confidence
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I'm Mike Attara—an engineer who pairs backend craftsmanship with DevOps discipline. I help product teams launch
          ambitious platforms, automate delivery, and grow the people who keep it running.
        </p>

        <div className="flex flex-wrap gap-2 pt-6">
          {heroFocus.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/20 bg-accent/5 text-accent"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-10">
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group glow-accent hover:scale-105"
          >
            Start a Project Conversation
            <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border border-accent/30 text-foreground rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group hover:scale-105"
          >
            <Zap size={18} />
            Explore Experience
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-12 sm:pt-14">
          {heroHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group border border-border/40 rounded-xl p-6 bg-card/60 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 smooth-transition hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ExternalLink, BookOpen, Code2, MessageSquare } from 'lucide-react'
import {
  heroContent,
  heroCtas,
  proofStats,
  whatIDo,
  featuredProject,
  writingHighlights,
  closingCta,
} from '@/data/hero'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function Hero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-16 right-12 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-16 left-8 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background"></div>
        </div>

        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10 fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            {heroContent.headline}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={heroCtas.primary.href}
              prefetch
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group glow-accent hover:scale-105"
            >
              {heroCtas.primary.label}
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={heroCtas.secondary.href}
              prefetch
              className="px-8 py-4 border border-accent/30 text-foreground rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group hover:scale-105"
            >
              <MessageSquare size={18} />
              {heroCtas.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-10 sm:py-12 border-y border-border/40 bg-card/30">
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {proofStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{stat.context}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">What I Do</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div
                  className="group border border-border/40 rounded-xl p-6 bg-card/60 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Open Source */}
      <section className="py-12 sm:py-16 bg-card/30 border-y border-border/40">
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-2">
            <Code2 size={20} className="text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Featured Open Source</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{featuredProject.title}</h2>
          <p className="text-base text-muted-foreground mb-6">{featuredProject.tagline}</p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{featuredProject.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">What it solves:</h4>
            <ul className="space-y-2">
              {featuredProject.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-1">-</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong className="text-foreground">Why it matters:</strong> Seeding staging environments with production
            dumps is how customer data ends up on laptops. Ditto makes the safe path the fast path — scrubbed,
            disposable, and provisioned in seconds.
          </p>

          <div className="flex flex-wrap gap-3">
            {featuredProject.links.map((link) => {
              const isExternal = link.href.startsWith('http')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all"
                >
                  {link.label}
                  {isExternal ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Writing Highlights */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={20} className="text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold">Writing Highlights</h2>
          </div>

          <div className="space-y-4 mb-6">
            {writingHighlights.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.1}>
                <div
                  className="group border border-border/40 rounded-xl p-5 bg-card/60 backdrop-blur-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
                >
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <a
            href="https://blog.attara.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            Read more on the blog
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{closingCta.heading}</h2>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">{closingCta.description}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={closingCta.primaryCta.href}
              prefetch
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group glow-accent hover:scale-105"
            >
              {closingCta.primaryCta.label}
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={closingCta.secondaryCta.href}
              prefetch
              className="px-8 py-4 border border-accent/30 text-foreground rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group hover:scale-105"
            >
              {closingCta.secondaryCta.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/scroll-reveal'
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Target,
  AlertTriangle,
  Lock,
  User,
  Wrench,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'
import { caseStudiesIntro, caseStudies } from '@/data/case-studies'
import type { CaseStudy } from '@/types/content'
import Breadcrumbs from '@/components/breadcrumbs'

function CaseStudyCard({ study, defaultExpanded = false }: { study: CaseStudy; defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <article className="border border-border/40 rounded-xl bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 hover:bg-card/80 transition-colors"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{study.title}</h2>
            <p className="text-sm sm:text-base text-accent font-medium">{study.outcome}</p>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-8 border-t border-border/40">
              {/* Media Gallery */}
              {study.media && study.media.length > 0 && (
                <div className="pt-8">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/40 bg-muted/20">
                    <Image
                      src={study.media[0].src}
                      alt={study.media[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {study.media[0].caption && (
                    <p className="mt-2 text-xs text-center text-muted-foreground italic">
                      {study.media[0].caption}
                    </p>
                  )}
                </div>
              )}

              {/* Context */}
              <section className={!study.media ? "pt-6" : ""}>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Context</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.context}</p>
              </section>

              {/* Problem */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Problem</h3>
                </div>
                <ul className="space-y-2">
                  {study.problem.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Constraints */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Lock size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Constraints</h3>
                </div>
                <ul className="space-y-2">
                  {study.constraints.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Role */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <User size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Role & Ownership</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.role}</p>
              </section>

              {/* Technical Approach */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Technical Approach</h3>
                </div>
                <div className="space-y-4">
                  {study.approach.map((phase, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-accent/30 pl-4 hover:border-accent transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">{phase.phase}</span>
                        <span className="text-sm font-semibold text-foreground">{phase.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Results</h3>
                </div>
                <ul className="space-y-2">
                  {study.results.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-foreground font-medium"
                    >
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* What I'd Do Next */}
              <section className="bg-accent/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">What I&apos;d Do Next</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.nextSteps}</p>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <div className="py-6 sm:py-8 lg:py-10 fade-in">
      <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        {/* Hero */}
        <section className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{caseStudiesIntro.headline}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {caseStudiesIntro.description}
          </p>
        </section>

        {/* Case Studies */}
        <section className="space-y-6 mb-10 sm:mb-12">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 0.1}>
              <CaseStudyCard study={study} defaultExpanded={index === 0} />
            </ScrollReveal>
          ))}
        </section>

        {/* CTA */}
        <section className="border-t border-border/40 pt-12 sm:pt-16">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have a similar challenge?</h2>
            <p className="text-base text-muted-foreground mb-8">
              Architecture consulting, technical advisory, hands-on implementation. Let's talk.
            </p>
            <Link
              href="/contact"
              prefetch
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 font-semibold items-center justify-center gap-2 group glow-accent hover:scale-105"
            >
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

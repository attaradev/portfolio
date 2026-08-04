'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import {
  highlightStats,
  expertiseAreas,
  communityHighlights,
  certifications,
  aboutBio,
} from '@/data/about'
import Breadcrumbs from '@/components/breadcrumbs'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">About</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-accent/20 bg-accent/5">
              <Image
                src="/attara-mark.png"
                alt="Mike Attara"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium text-lg sm:text-xl">{aboutBio.intro}</p>
            <p>{aboutBio.paragraph1}</p>
          </div>
        </div>

        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>{aboutBio.paragraph2}</p>

          <p>
            {aboutBio.paragraph3} {aboutBio.blogLink.context}{' '}
            <a
              href={aboutBio.blogLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              {aboutBio.blogLink.text}
            </a>
            {aboutBio.blogLink.continuation}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8 sm:mt-10">
          {highlightStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div
                  className="group border border-border/50 rounded-xl p-5 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift h-full"
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
              </ScrollReveal>
            )
          })}
        </div>

        <div className="pt-8 sm:pt-10">
          <h4 className="text-2xl font-bold mb-8 text-foreground">Areas of Expertise</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {expertiseAreas.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <div
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
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        <div className="pt-8 sm:pt-10">
          <h4 className="text-2xl font-bold mb-6 text-foreground">Community & Advocacy</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {communityHighlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div
                  className="border border-accent/20 rounded-xl p-6 bg-accent/5 hover:bg-accent/10 transition-colors smooth-transition h-full"
                >
                  <h5 className="text-base font-semibold text-accent mb-3">{item.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="pt-10 sm:pt-12">
          <h4 className="text-2xl font-bold mb-6 text-foreground">Certifications & Credentials</h4>
          <div className="grid gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.status === 'completed' ? CheckCircle : ArrowRight
              return (
                <ScrollReveal key={cert.title} delay={index * 0.1}>
                  <div
                    className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all smooth-transition hover-lift"
                  >
                    <Icon size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

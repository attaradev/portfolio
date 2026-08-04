'use client'

import { useState, useMemo } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  Handshake,
  LineChart,
  Mail,
  Sparkles,
  Filter,
  X,
} from 'lucide-react'
import { careerHighlights, focusAreas, experiences, experienceIntro } from '@/data/experience'
import Breadcrumbs from '@/components/breadcrumbs'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function Experience() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Get all unique skills from experiences
  const allSkills = useMemo(() => {
    const skillSet = new Set<string>()
    experiences.forEach((exp) => {
      exp.skills.forEach((skill) => skillSet.add(skill))
    })
    return Array.from(skillSet).sort()
  }, [])

  // Filter experiences by selected skill
  const filteredExperiences = useMemo(() => {
    if (!selectedSkill) return experiences
    return experiences.filter((exp) => exp.skills.includes(selectedSkill))
  }, [selectedSkill])

  const clearFilter = () => {
    setSelectedSkill(null)
    setShowFilters(false)
  }

  return (
    <section id="experience" className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">{experienceIntro}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {careerHighlights.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div
                  className="group border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-12">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/20 bg-accent/5 text-accent"
            >
              {area}
            </span>
          ))}

          {/* Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-accent transition-colors flex items-center gap-1.5"
            aria-label="Filter by skill"
          >
            <Filter size={12} />
            Filter by Skill
          </button>

          {selectedSkill && (
            <button
              type="button"
              onClick={clearFilter}
              className="px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex items-center gap-1.5"
              aria-label="Clear filter"
            >
              {selectedSkill}
              <X size={12} />
            </button>
          )}
        </div>

        {/* Skill Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-4 sm:p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-foreground">Filter by Technology/Skill</h4>
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => {
                    setSelectedSkill(skill)
                    setShowFilters(false)
                  }}
                  className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all ${selectedSkill === skill
                    ? 'bg-accent text-accent-foreground border border-accent'
                    : 'bg-accent/10 text-accent border border-accent/20 hover:border-accent/50 hover:bg-accent/20'
                    }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            {selectedSkill && (
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Showing {filteredExperiences.length} of {experiences.length} roles
                </p>
                <button
                  type="button"
                  onClick={clearFilter}
                  className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Summary */}
        {selectedSkill && (
          <div className="mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">{filteredExperiences.length}</span> role
              {filteredExperiences.length !== 1 ? 's' : ''} using{' '}
              <span className="font-semibold text-accent">{selectedSkill}</span>
            </p>
          </div>
        )}

        <div className="relative">
          <div
            className="hidden md:block absolute left-5 top-0 bottom-0 border-l border-border/60"
            aria-hidden="true"
          ></div>
          <div className="space-y-7 sm:space-y-9">
            {filteredExperiences.length === 0 ? (
              <div className="text-center py-12 px-6 rounded-xl border border-border/50 bg-card/40">
                <p className="text-muted-foreground">No roles found with the selected skill.</p>
                <button
                  type="button"
                  onClick={clearFilter}
                  className="mt-4 text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  Clear filter
                </button>
              </div>
            ) : (
              filteredExperiences.map((exp, idx) => {
                const isCurrentRole = exp.period.toLowerCase().includes('present')
                return (
                  <ScrollReveal key={`${exp.title}-${idx}`} delay={idx * 0.1}>
                    <article className="relative md:pl-16">
                      <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 items-center justify-center rounded-full border border-border/70 bg-background text-accent">
                        <BriefcaseBusiness size={18} />
                      </div>

                      <div className="group border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-accent font-medium text-sm mt-1">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                            <Calendar size={16} className="hidden sm:block" />
                            <span>{exp.period}</span>
                            {exp.employmentType && (
                              <span className="px-2 py-0.5 text-[11px] font-medium rounded-full border border-border/60 bg-card/60">
                                {exp.employmentType}
                              </span>
                            )}
                          </div>
                        </div>

                        {isCurrentRole && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-3">
                            <Sparkles size={12} />
                            Current Role
                          </span>
                        )}

                        <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                        <div className="flex items-start md:items-center gap-3 text-sm font-medium text-accent mb-4">
                          <LineChart size={16} />
                          <span>{exp.impact}</span>
                        </div>

                        {exp.highlights?.length > 0 && (
                          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                            {exp.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => setSelectedSkill(skill)}
                              className={`px-3 py-1 text-xs rounded-full font-medium border transition-all smooth-transition ${selectedSkill === skill
                                  ? 'bg-accent text-accent-foreground border-accent shadow-sm'
                                  : 'bg-accent/10 text-accent border-accent/20 hover:border-accent/50 hover:bg-accent/20'
                                }`}
                              title={`Filter by ${skill}`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })
            )}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border border-accent/30 rounded-2xl bg-gradient-to-br from-accent/10 via-background to-background p-6 md:p-8 space-y-6 smooth-transition">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
              <Handshake size={18} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground tracking-widest mb-1 uppercase">Next chapter</p>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                Let's design your next resilient platform launch
              </h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                I partner with product, platform, and leadership teams to architect systems, unblock delivery, and
                mentor the engineers who will keep them running.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            {[
              'Architecture sprints for complex integrations and event-driven flows',
              'DevOps enablement that introduces automation without disrupting delivery',
              'Technical leadership support to scale teams and align stakeholders',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group"
            >
              Start a project conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="mailto:hello@attara.dev?subject=Project%20Partnership%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-accent/40 text-accent font-semibold hover:border-accent/60 hover:bg-accent/10 transition-colors"
            >
              <Mail size={18} />
              Share a brief
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

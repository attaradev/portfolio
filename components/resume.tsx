'use client'

import dynamic from 'next/dynamic'
import {
  Mail,
  Globe,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  Code2,
  BookOpen,
  Award,
  GraduationCap,
  Users,
  Download,
} from 'lucide-react'
import {
  resumeIntro,
  resumeHeader,
  professionalSummary,
  coreCompetencies,
  resumeExperiences,
  openSource,
  technicalWriting,
  certifications,
  education,
  community,
} from '@/data/resume'
import Breadcrumbs from '@/components/breadcrumbs'

const ResumeDownloadButton = dynamic(() => import('@/components/resume-download-button'), {
  ssr: false,
  loading: () => (
    <span className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-full opacity-70">
      <Download size={16} />
      Download PDF
    </span>
  ),
})

import ScrollReveal from '@/components/ui/scroll-reveal'

export default function Resume() {
  return (
    <div className="py-6 sm:py-8 lg:py-10 fade-in">
      <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        {/* Intro */}
        <section className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{resumeIntro.headline}</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {resumeIntro.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {resumeIntro.downloads.map((download) => (
              <ResumeDownloadButton key={download.label} label={download.label} />
            ))}
          </div>
        </section>

        {/* Full Resume */}
        <div id="resume-content" className="border border-border/40 rounded-xl bg-card/60 overflow-hidden">
          {/* Header */}
          <header className="p-6 sm:p-8 border-b border-border/40 bg-accent/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">{resumeHeader.name}</h2>
            <p className="text-lg text-accent font-medium mb-4">{resumeHeader.title}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${resumeHeader.contact.email}`}
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                {resumeHeader.contact.email}
              </a>
              <a
                href={`https://${resumeHeader.contact.website}`}
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Globe size={14} />
                {resumeHeader.contact.website}
              </a>
              <a
                href={`https://${resumeHeader.contact.github}`}
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Github size={14} />
                {resumeHeader.contact.github}
              </a>
              <a
                href={`https://${resumeHeader.contact.linkedin}`}
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Linkedin size={14} />
                {resumeHeader.contact.linkedin}
              </a>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
              <MapPin size={14} />
              {resumeHeader.location}
            </p>
          </header>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                Professional Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{professionalSummary}</p>
            </section>

            {/* Core Competencies */}
            <section>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                Core Competencies
              </h3>
              <div className="space-y-2">
                {Object.entries(coreCompetencies).map(([category, skills]) => (
                  <div key={category} className="text-sm">
                    <span className="font-medium text-foreground">{category}:</span>{' '}
                    <span className="text-muted-foreground">{skills}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Professional Experience
                </h3>
              </div>
              <div className="space-y-6">
                {resumeExperiences.map((exp, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="border-l-2 border-accent/30 pl-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <span className="text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm text-accent mb-2">
                        {exp.company} · {exp.location}
                      </p>
                      <ul className="space-y-1 mb-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-0.5">-</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Technologies:</span> {exp.technologies}
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Open Source */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Open Source</h3>
              </div>
              <div className="border-l-2 border-accent/30 pl-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{openSource.title}</h4>
                  <span className="text-xs text-muted-foreground">— {openSource.role}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{openSource.description}</p>
                <ul className="space-y-1 mb-2">
                  {openSource.highlights.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Documentation:</span> {openSource.url}
                </p>
              </div>
            </section>

            {/* Technical Writing */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Technical Writing
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{technicalWriting.description}</p>
              <ul className="space-y-1">
                {technicalWriting.topics.map((topic, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-0.5">-</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Certifications
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent">✓</span>
                    <span className="text-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Education</h3>
              </div>
              <p className="text-sm text-foreground font-medium">{education.degree}</p>
              <p className="text-sm text-muted-foreground">
                {education.institution} · {education.location}
              </p>
            </section>

            {/* Community & Speaking */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Users size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                  Community & Speaking
                </h3>
              </div>
              <ul className="space-y-1">
                {community.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-0.5">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { ArrowUpRight, Code2, ExternalLink, GitPullRequest, Package, Star } from 'lucide-react'
import { projects, projectsIntro, externalContributions } from '@/data/projects'
import Breadcrumbs from '@/components/breadcrumbs'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function Projects() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">{projectsIntro.headline}</h1>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mt-6 leading-relaxed">
            {projectsIntro.description}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.05}>
              <article
                className={`group border rounded-xl p-6 sm:p-8 transition-all duration-300 smooth-transition hover-lift ${
                  project.featured
                    ? 'border-accent/40 bg-gradient-to-br from-accent/10 via-background to-background'
                    : 'border-border/50 hover:border-accent/50 hover:bg-card/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-3">
                        <Star size={12} />
                        Flagship
                      </span>
                    )}
                    <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-accent font-medium text-sm mt-1">{project.tagline}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground whitespace-nowrap">
                    <Code2 size={14} />
                    {project.language}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.packages && (
                  <p className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Package size={14} className="text-accent" />
                    Distributed via {project.packages.join(' · ')}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full font-medium bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all"
                  >
                    GitHub
                    <ExternalLink size={14} />
                  </a>
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all"
                    >
                      Documentation
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="flex items-center gap-3 mb-4">
            <GitPullRequest size={20} className="text-accent" />
            <h2 className="text-xl sm:text-2xl font-bold">Upstream Contributions</h2>
          </div>
          <div className="space-y-3">
            {externalContributions.map((contribution) => (
              <a
                key={contribution.url}
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 border border-border/50 rounded-xl p-5 hover:border-accent/50 hover:bg-card/50 transition-all"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {contribution.project}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{contribution.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors mt-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import Breadcrumbs from '@/components/breadcrumbs'
import { collaborationAreas, contactHighlights, socialLinks } from '@/data/contact'

export default function Contact() {
  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10 fade-in scroll-mt-24 lg:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        <div className="mb-8 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Work Together</h3>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm always interested in architecture challenges, platform transformations, and opportunities to empower
              engineering teams. Whether you're scaling fintech rails, modernizing infrastructure, or shaping developer
              experience, let's build something reliable together.
            </p>
            <p>
              Share context about your goals, timelines, and the team you'll bring to the table. I partner best when we
              can align on outcomes, build momentum quickly, and leave your organization stronger than we found it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] items-start">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-3 tracking-widest uppercase">
                  Collaboration paths
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {collaborationAreas.map((item) => (
                    <div
                      key={item.title}
                      className="border border-border/50 rounded-xl p-5 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 smooth-transition hover-lift"
                    >
                      <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Send a Message</h4>
                <ContactForm />
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="border border-border/50 rounded-xl p-5 sm:p-6 bg-card/40 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-3">
                  What to expect
                </h4>
                <ul className="space-y-4">
                  {contactHighlights.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="rounded-xl bg-accent/5 border border-accent/20 p-5 sm:p-6 space-y-3 smooth-transition hover:border-accent/40">
                <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                  Speaking requests
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Planning a meetup, conference, or internal workshop? Let's craft a session on systems architecture,
                  DevOps culture, or engineering leadership.
                </p>
                <a
                  href="mailto:hello@attara.dev?subject=Speaking%20Invitation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Propose a topic
                  <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>

          <div className="border-t border-border/50 pt-6 sm:pt-7">
            <div className="mb-4 sm:mb-5">
              <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">Connect & follow</p>
              <p className="text-xs text-muted-foreground mt-1">
                Tap into ongoing work, community highlights, and behind-the-scenes build notes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative flex flex-col gap-3 p-5 rounded-xl border border-border/50 bg-card/40 transition-all duration-300 smooth-transition overflow-hidden hover:border-accent/60 hover:bg-card/70 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 h-full"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent transition-colors flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors whitespace-pre-line leading-relaxed">
                        {link.helper}
                      </p>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                        {link.cta}
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import Breadcrumbs from '@/components/breadcrumbs'
import {
  contactIntro,
  contactIntents,
  contactExpectations,
  socialLinks,
  type ContactIntent,
} from '@/data/contact'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function Contact() {
  const [selectedIntent, setSelectedIntent] = useState<ContactIntent | null>(null)

  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10 fade-in">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <Breadcrumbs />
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            {contactIntro.headline}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {contactIntro.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-start">
          {/* Main Content */}
          <div>
            {!selectedIntent ? (
              /* Intent Selection */
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  What brings you here?
                </h2>
                <div className="space-y-3">
                  {contactIntents.map((intent, index) => {
                    const Icon = intent.icon
                    return (
                      <ScrollReveal key={intent.id} delay={index * 0.1}>
                        <button
                          onClick={() => setSelectedIntent(intent.id)}
                          className="w-full text-left p-5 rounded-xl border border-border/50 bg-card/40 hover:border-accent/50 hover:bg-card/70 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {intent.label}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{intent.description}</p>
                            </div>
                          </div>
                        </button>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            ) : (
              /* Contact Form */
              <div className="border border-border/50 rounded-xl p-6 bg-card/40">
                <ContactForm selectedIntent={selectedIntent} onBack={() => setSelectedIntent(null)} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* What to Expect */}
            <div className="border border-border/50 rounded-xl p-5 sm:p-6 bg-card/40 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {contactExpectations.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <ScrollReveal key={item.title} delay={index * 0.1}>
                      <li className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </li>
                    </ScrollReveal>
                  )
                })}
              </ul>
            </div>

            {/* Alternative Contact */}
            <div className="border border-border/50 rounded-xl p-5 sm:p-6 bg-card/40">
              <h3 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-3">
                Alternative Contact
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Prefer email? Reach me directly at
              </p>
              <a
                href="mailto:hello@attara.dev"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                <Mail size={16} />
                hello@attara.dev
              </a>
            </div>

            {/* Quick Links */}
            <div className="border border-border/50 rounded-xl p-5 sm:p-6 bg-card/40">
              <h3 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-3">
                Find Me Online
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <ScrollReveal key={link.label} delay={index * 0.1}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Icon size={18} />
                        <span>{link.label}</span>
                        <span className="text-xs text-muted-foreground/60">— {link.helper}</span>
                      </a>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

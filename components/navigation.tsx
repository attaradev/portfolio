"use client"

import { Github, Linkedin, Mail, Sparkles, Twitter } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: "About", href: "#about", description: "Story, principles, strengths" },
    { label: "Experience", href: "#experience", description: "Career journey and wins" },
    { label: "Contact", href: "#contact", description: "Start the conversation" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/attaradev", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/attaradev", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/attaradev", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@attara.dev", label: "Email" },
  ]

  const focusAreas = ["Backend Architecture", "DevOps Enablement", "Technical Leadership"]

  const quickFacts = [
    {
      label: "Current role",
      value: "Backend Engineer · Purple Wave Auction",
    },
    {
      label: "Time zone",
      value: "GMT · Remote partner across continents",
    },
    {
      label: "Availability",
      value: "Advisory, platform builds, speaking",
    },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-72 bg-card/60 backdrop-blur-lg border-r border-border flex-col px-7 py-8 justify-between overflow-y-auto">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-[1.75rem] font-bold text-foreground tracking-tight">Mike Attara</h1>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Platform engineer crafting resilient backend and DevOps systems for fintech and high-impact products.
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-widest rounded-full border border-accent/30 bg-accent/10 text-accent"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border border-border/50 rounded-lg px-4 py-3 bg-card/70">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{fact.label}</p>
                <p className="text-sm text-foreground mt-1 leading-relaxed">{fact.value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[11px] font-semibold text-muted-foreground mb-4 tracking-widest uppercase">Navigate</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group block rounded-lg border border-transparent px-4 py-3 hover:border-accent/40 hover:bg-card/50 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-1">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
          >
            <Sparkles size={16} />
            Let's collaborate
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">Connect</p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 duration-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="pt-20 px-6 pb-12 space-y-10 h-full overflow-y-auto">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-foreground">Mike Attara</h2>
                  <ThemeToggle size="sm" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Building resilient platforms, mentoring teams, and leading with operational empathy.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-[11px] font-semibold uppercase tracking-widest rounded-full border border-accent/30 bg-accent/10 text-accent"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="border border-border/50 rounded-lg px-4 py-3 bg-card/70">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="text-sm text-foreground mt-1 leading-relaxed">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-4 tracking-widest uppercase">Navigate</p>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group block rounded-xl border border-border/50 px-4 py-3 bg-card/70 hover:border-accent/40 hover:bg-card/90 transition-all duration-200"
                    >
                      <span className="text-base font-semibold text-foreground">{item.label}</span>
                      <span className="block text-xs text-muted-foreground mt-1">{item.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <Sparkles size={16} />
              Let's collaborate
            </a>

            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-6 border-t border-border">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

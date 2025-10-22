'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeToggle } from '@/components/theme-toggle'
import { NAV_ITEMS, socialLinks, focusAreas } from '@/data/navigation'

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Desktop Sidebar */}
      <nav
        className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card/60 backdrop-blur-lg border-r border-border flex-col px-6 py-8 justify-between overflow-y-auto"
        aria-label="Main navigation"
      >
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link
                  href="/"
                  prefetch
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.75rem] font-bold text-foreground tracking-tight hover:text-accent transition-colors"
                >
                  Mike Attara
                </Link>
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

          <div>
            <p className="text-[11px] font-semibold text-muted-foreground mb-4 tracking-widest uppercase">Navigate</p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      prefetch
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group block rounded-lg border px-4 py-3 transition-all duration-200 ${
                        isActive
                          ? 'border-accent/40 bg-card/70'
                          : 'border-transparent hover:border-accent/40 hover:bg-card/50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          isActive ? 'text-accent' : 'text-foreground group-hover:text-accent'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-1">{item.description}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
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
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-sm" id="mobile-navigation">
          <nav className="pt-20 px-6 pb-12 space-y-8 h-full overflow-y-auto" aria-label="Mobile navigation">
            <div>
              <Link
                href="/"
                prefetch
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-foreground hover:text-accent transition-colors inline-block"
              >
                Mike Attara
              </Link>
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

            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-4 tracking-widest uppercase">Navigate</p>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        prefetch
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group block rounded-xl border px-4 py-3 bg-card/70 transition-all duration-200 ${
                          isActive
                            ? 'border-accent/60 bg-card/80'
                            : 'border-border/50 hover:border-accent/40 hover:bg-card/90'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span
                          className={`text-base font-semibold transition-colors ${
                            isActive ? 'text-accent' : 'text-foreground'
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="block text-xs text-muted-foreground mt-1">{item.description}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

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

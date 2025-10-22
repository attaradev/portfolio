'use client'

import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import Navigation from '@/components/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when navigating to a new route.
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Handle escape key to close mobile menu and add focus trap
  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden' // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 md:hidden">
        <ThemeToggle size="sm" className="relative z-50" />
        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="p-2 rounded-full border border-border/60 bg-card/80 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">{mobileMenuOpen ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>

      <div className="flex">
        <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main id="main-content" className="flex-1 md:ml-64" role="main">
          {children}
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 md:hidden">
        <ThemeToggle size="sm" className={mobileMenuOpen ? "hidden" : ""} />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full border border-border/60 bg-card/80 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">{mobileMenuOpen ? "Close navigation" : "Open navigation"}</span>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main Content */}
        <main className="flex-1 md:ml-72">
          <Hero />
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  )
}

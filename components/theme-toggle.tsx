"use client"

import { memo } from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "md"
}

export const ThemeToggle = memo(function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const dimension = size === "sm" ? "h-9 w-9" : "h-10 w-10"
  const label = isDark ? "Switch to light theme" : "Switch to dark theme"
  const Icon = isDark ? Sun : Moon

  const buttonClass =
    "inline-flex items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground hover:text-foreground hover:border-accent/60 hover:bg-card transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${buttonClass} ${dimension} ${className}`.trim()}
      aria-label={label}
      title={label}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </button>
  )
})

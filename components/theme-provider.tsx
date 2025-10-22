"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type Theme = "light" | "dark"
type ThemePreference = Theme | "system"

interface ThemeContextValue {
  theme: ThemePreference
  resolvedTheme: Theme
  setTheme: (value: ThemePreference) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = "theme-preference"
const isBrowser = typeof window !== "undefined"

function getStoredPreference(): ThemePreference {
  if (!isBrowser) return "system"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "light" || stored === "dark" ? stored : "system"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemePreference>(() => getStoredPreference())
  const [systemPrefersDark, setSystemPrefersDark] = useState(false)

  useEffect(() => {
    if (!isBrowser) return

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const updateSystemPreference = (event: MediaQueryListEvent | MediaQueryList) => {
      setSystemPrefersDark(event.matches)
    }

    updateSystemPreference(media)
    media.addEventListener("change", updateSystemPreference)

    return () => {
      media.removeEventListener("change", updateSystemPreference)
    }
  }, [])

  const resolvedTheme: Theme = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme

  useEffect(() => {
    if (!isBrowser) return

    const root = window.document.documentElement

    if (theme === "system") {
      root.classList.remove("dark")
      delete root.dataset.theme
      window.localStorage.removeItem(STORAGE_KEY)
      return
    }

    if (theme === "dark") {
      root.classList.add("dark")
      root.dataset.theme = "dark"
    } else {
      root.classList.remove("dark")
      root.dataset.theme = "light"
    }

    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (!isBrowser || theme !== "system") return

    const root = window.document.documentElement
    if (systemPrefersDark) {
      root.classList.add("dark")
      root.dataset.theme = "dark"
    } else {
      root.classList.remove("dark")
      delete root.dataset.theme
    }
  }, [systemPrefersDark, theme])

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(next)
  }, [resolvedTheme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

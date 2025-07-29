'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark' | 'system'
type ThemeMode = 'sunrise' | 'sunset' | 'moonrise' | 'moonset'

interface ThemeContextType {
  theme: Theme
  themeMode: ThemeMode
  setTheme: (theme: Theme) => void
  setThemeMode: (mode: ThemeMode) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [themeMode, setThemeMode] = useState<ThemeMode>('sunrise')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedMode = localStorage.getItem('themeMode') as ThemeMode

    if (savedTheme) {
      setTheme(savedTheme)
    }

    if (savedMode) {
      setThemeMode(savedMode)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove previous theme classes
    root.classList.remove('light', 'dark')

    // Determine if should be dark
    let shouldBeDark = false
    if (theme === 'dark') {
      shouldBeDark = true
    } else if (theme === 'light') {
      shouldBeDark = false
    } else {
      // system
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      root.classList.add('dark')
    } else {
      root.classList.add('light')
    }

    // Apply theme mode classes
    root.classList.remove(
      'theme-sunrise',
      'theme-sunset',
      'theme-moonrise',
      'theme-moonset'
    )
    root.classList.add(`theme-${themeMode}`)

    // Save to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('themeMode', themeMode)
  }, [theme, themeMode])

  const value: ThemeContextType = {
    theme,
    themeMode,
    setTheme,
    setThemeMode,
    isDark,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

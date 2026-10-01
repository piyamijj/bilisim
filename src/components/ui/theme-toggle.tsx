'use client'

import { useTheme, type Theme } from '@/components/providers/theme-provider'
import { Moon, Sun, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const icons = {
    light: <Sun className="h-5 w-5" aria-hidden="true" />,
    dark: <Moon className="h-5 w-5" aria-hidden="true" />,
    system: <Monitor className="h-5 w-5" aria-hidden="true" />,
  }

  const labels = {
    light: 'Açık',
    dark: 'Koyu',
    system: 'Sistem',
  }

  return (
    <div className="relative group">
      <button
        onClick={() => {
          const themes: Theme[] = ['light', 'dark', 'system']
          const currentIndex = themes.indexOf(theme)
          setTheme(themes[(currentIndex + 1) % 3])
        }}
        className="glass-strong rounded-xl p-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-950"
        aria-label={`Tema değiştir (mevcut: ${labels[theme]})`}
        aria-expanded="false"
      >
        {icons[theme]}
      </button>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className="absolute right-0 top-full mt-2 w-36 origin-top-right rounded-xl glass-strong py-2 shadow-xl border border-white/20 dark:border-dark-700/50"
        role="menu"
        aria-orientation="vertical"
      >
        {(['light', 'dark', 'system'] as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            role="menuitem"
            className={cn(
              'flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors',
              theme === t
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-800'
            )}
          >
            {icons[t]}
            <span>{labels[t]}</span>
            {theme === t && <span className="ml-auto text-primary-600 dark:text-primary-400">✓</span>}
          </button>
        ))}
      </motion.div>
    </div>
  )
}
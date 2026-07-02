import React, { useEffect, useState } from 'react'
import { Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThemeOption {
  name: string
  id: string
  color: string // CSS class or hex to preview
  glow: string
}

const themes: ThemeOption[] = [
  { name: 'Sunset Rose', id: 'default', color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },
  { name: 'Electric Blue', id: 'blue', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Cyberpunk', id: 'cyberpunk', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.4)' },
  { name: 'Emerald', id: 'emerald', color: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
  { name: 'Sunset Amber', id: 'amber', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)' }
]

export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('default')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default'
    setTheme(savedTheme)
  }, [])

  const setTheme = (themeId: string) => {
    setCurrentTheme(themeId)
    localStorage.setItem('portfolio-theme', themeId)
    
    const root = document.documentElement
    if (themeId === 'default') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', themeId)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200"
        title="Customize Color Theme"
      >
        <Palette className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click outside backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 z-50 w-48 rounded-xl border border-white/10 bg-[#0a0a0c] p-2 shadow-accent-lg backdrop-blur-xl"
            >
              <div className="px-2 py-1.5 mb-1.5 border-b border-white/5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Select Theme</span>
              </div>
              <div className="space-y-1">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id)
                      setIsOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
                      currentTheme === theme.id 
                        ? 'bg-white/10 text-white' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span 
                      className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                      style={{ 
                        backgroundColor: theme.color,
                        boxShadow: `0 0 8px ${theme.glow}`
                      }}
                    />
                    <span>{theme.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

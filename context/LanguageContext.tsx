'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface Ctx {
  language: Lang
  toggleLanguage: () => void
  ready: boolean
}

const LanguageContext = createContext<Ctx | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Lang>('es') // Default to Spanish
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('language')
    if (stored === 'en' || stored === 'es') {
      setLanguage(stored)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) {
      localStorage.setItem('language', language)
    }
  }, [language, ready])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  // ❗ Prevent mismatch by deferring render until ready
  if (!ready) return null

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, ready }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

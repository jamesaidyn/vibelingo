'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Flag from 'react-world-flags'

const LANGUAGES = ['gn', 'en', 'es'] as const
type Locale = (typeof LANGUAGES)[number]

const LANG_CONFIG: Record<Locale, { flag: string; label: string }> = {
  gn: { flag: 'PY', label: 'Guarani' },
  en: { flag: 'GB', label: 'English' },
  es: { flag: 'ES', label: 'Español' }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!pathname) return null

  const segments = pathname.split('/')
  const hasLangPrefix = LANGUAGES.includes(segments[1] as Locale)
  const currentLang = (hasLangPrefix ? segments[1] : 'gn') as Locale

  const handleLanguageChange = (nextLang: Locale) => {
    if (nextLang === currentLang) return

    const newSegments = [...segments]
    if (hasLangPrefix) {
      newSegments[1] = nextLang
    } else {
      newSegments.splice(1, 0, nextLang)
    }

    const newPath = newSegments.join('/')
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-slate-800 text-white rounded hover:bg-slate-700 transition focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Flag 
          code={LANG_CONFIG[currentLang].flag} 
          style={{ width: '20px', height: '14px', borderRadius: '2px', objectFit: 'cover' }} 
        />
        <span>{LANG_CONFIG[currentLang].label}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-slate-700 transition ${
                  currentLang === lang ? 'text-purple-400 bg-slate-750' : 'text-white'
                }`}
              >
                <Flag 
                  code={LANG_CONFIG[lang].flag} 
                  style={{ width: '20px', height: '14px', borderRadius: '2px', marginRight: '10px' }} 
                />
                {LANG_CONFIG[lang].label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
'use client'

import { useState } from 'react'
import Flag from 'react-world-flags'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  const isEnglish = lang === 'en'
  const flagCode = isEnglish ? 'ES' : 'GB'
  const label = isEnglish ? 'Español' : 'English'

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-slate-800 text-white rounded hover:bg-slate-700  transition"
      aria-label="Switch language"
    >
      <Flag code={flagCode} style={{ width: '20px', height: '14px', borderRadius: '2px' }} />
      <span>{label}</span>
    </button>
  )
}

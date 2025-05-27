'use client'

import { useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  const flag = lang === 'en' ? '🇪🇸 Español' : '🇬🇧 English'

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium bg-slate-800 text-white rounded hover:bg-slate-700 transition"
      aria-label="Switch language"
    >
      {flag}
    </button>
  )
}

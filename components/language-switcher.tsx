'use client'

import { useLanguage } from '@/context/LanguageContext'
import Flag from 'react-world-flags'

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  // Display current language
  const flagCode = language === 'en' ? 'GB' : 'ES'
  const label = language === 'en' ? 'English' : 'Español'

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium bg-[#4b121b] text-white rounded hover:bg-[#6d1a26] transition flex items-center space-x-2"
      aria-label="Switch language"
    >
      <Flag code={flagCode} style={{ width: 20, height: 14 }} />
      <span>{label}</span>
    </button>
  )
}

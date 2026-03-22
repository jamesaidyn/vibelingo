'use client'

import { usePathname, useRouter } from 'next/navigation'
import Flag from 'react-world-flags'

const LANGUAGES = ['gn', 'en', 'es']

const LANG_CONFIG = {
  gn: { flag: 'PY', label: 'Guarani' },
  en: { flag: 'GB', label: 'English' },
  es: { flag: 'ES', label: 'Español' }
}

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  if (!pathname) return null

  // 1. Split the pathname into segments (e.g., "/en/pricing" becomes ["", "en", "pricing"])
  const segments = pathname.split('/')
  
  // 2. Check if the first segment is a known language
  const hasLangPrefix = LANGUAGES.includes(segments[1])
  
  // 3. Set the current language
  const currentLang = hasLangPrefix ? segments[1] : 'gn'

  const toggleLanguage = () => {
    // Find the next language in our array
    const currentIndex = LANGUAGES.indexOf(currentLang)
    const nextIndex = (currentIndex + 1) % LANGUAGES.length
    const nextLang = LANGUAGES[nextIndex]
    
    // Copy the segments array so we can safely modify it
    const newSegments = [...segments]
    
    if (hasLangPrefix) {
      // If there's already a language prefix, replace it
      newSegments[1] = nextLang
    } else {
      // If there's no language prefix (e.g. root "/"), insert it right after the first slash
      newSegments.splice(1, 0, nextLang)
    }
    
    // Join the segments back into a string and navigate
    const newPath = newSegments.join('/')
    router.push(newPath)
  }

  // Figure out the next language so we can display its label/flag on the button
  const nextIndex = (LANGUAGES.indexOf(currentLang) + 1) % LANGUAGES.length
  const nextLang = LANGUAGES[nextIndex]
  const { flag, label } = LANG_CONFIG[nextLang as keyof typeof LANG_CONFIG]

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-slate-800 text-white rounded hover:bg-slate-700 transition"
      aria-label={`Switch to ${label}`}
    >
      <Flag code={flag} style={{ width: '20px', height: '14px', borderRadius: '2px', objectFit: 'cover' }} />
      <span>{label}</span>
    </button>
  )
}
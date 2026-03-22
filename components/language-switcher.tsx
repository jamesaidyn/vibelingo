'use client'

import { usePathname, useRouter } from 'next/navigation'
import Flag from 'react-world-flags'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  // Ensure pathname exists before trying to read it
  if (!pathname) return null

  const isEnglish = pathname.startsWith('/en')
  
  const toggleLanguage = () => {
    const currentLang = isEnglish ? 'en' : 'es'
    const nextLang = isEnglish ? 'es' : 'en'
    
    // Swap the language prefix in the current URL path
    const newPath = pathname.replace(`/${currentLang}`, `/${nextLang}`)
    router.push(newPath)
  }

  const flagCode = isEnglish ? 'ES' : 'GB'
  const label = isEnglish ? 'Español' : 'English'

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-slate-800 text-white rounded hover:bg-slate-700 transition"
      aria-label="Switch language"
    >
      <Flag code={flagCode} style={{ width: '20px', height: '14px', borderRadius: '2px' }} />
      <span>{label}</span>
    </button>
  )
}
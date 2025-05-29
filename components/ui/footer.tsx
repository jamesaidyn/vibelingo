'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  const { language } = useLanguage()

  const t = {
    copyright: language === 'en'
      ? '© 2025 VibeLingo. All rights reserved.'
      : '© 2025 VibeLingo. Todos los derechos reservados.',
  }

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
          <SocialIcons className="ml-4" />
          </ul>

          {/* Copyright text */}
          <div className="text-sm text-slate-500 mr-4">{t.copyright}</div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import LanguageSwitcher from '@/components/language-switcher'
import InPersonNotice from '@/components/in-person-notice'
import SocialIcons from '@/components/SocialIcons'
import { useLanguage } from '@/context/LanguageContext'


export default function Header({ mode = 'dark' }: { mode?: string }) {
 const { language } = useLanguage()

  const t = {
    home: {
      en: 'Home',
      es: 'Inicio',
    },
    pricing: {
      en: 'Pricing',
      es: 'Precios',
    },
  }

  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <InPersonNotice />
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow justify-between items-center w-full">

            <ul className="flex justify-start items-center">
              <li>
                <Link href="/" className="font-medium text-xl text-slate-800 hover:text-crimson-600 dark:text-slate-400 dark:hover:text-crimson-600 px-3 lg:px-5 py-2 transition duration-150">
                  {t.home[language]}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="font-medium text-xl text-slate-800 hover:text-crimson-600 dark:text-slate-400 dark:hover:text-crimson-600 px-3 lg:px-5 py-2 transition duration-150">
                  {t.pricing[language]}
                </Link>
              </li>
            </ul>

            <ul className="flex items-center space-x-4">
              <li><LanguageSwitcher /></li>
           
            <SocialIcons className="ml-4" />
            </ul>

          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

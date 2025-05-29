'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import SocialIcons from '@/components/SocialIcons'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  const t = {
    home: language === 'es' ? 'Inicio' : 'Home',
    pricing: language === 'es' ? 'Precios' : 'Pricing',
  }

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className="group inline-flex w-8 h-8 text-slate-300 hover:text-white items-center justify-center transition"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16">
          <rect className="origin-center transition-all duration-300 -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0" y="7" width="16" height="2" rx="1" />
          <rect className="origin-center group-aria-expanded:rotate-45 transition-all duration-300" y="7" width="16" height="2" rx="1" />
          <rect className="origin-center transition-all duration-300 translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0" y="7" width="16" height="2" rx="1" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full left-0 w-full h-screen bg-white z-20 px-5 py-8 overflow-y-scroll transition ease-out duration-200"
        >
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block text-xl font-medium text-slate-800 hover:text-crimson-600" onClick={() => setMobileNavOpen(false)}>
                {t.home}
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block text-xl font-medium text-slate-800 hover:text-crimson-600" onClick={() => setMobileNavOpen(false)}>
                {t.pricing}
              </Link>
            </li>

            <hr className="my-6 border-gray-200" />

           <SocialIcons className="ml-4" />
          </ul>
        </Transition>
      </div>
    </div>
  )
}

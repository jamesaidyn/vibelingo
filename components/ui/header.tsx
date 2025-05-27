'use client'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LanguageSwitcher from '@/components/language-switcher'
import  InPersonNotice  from '@/components/in-person-notice'
export default function Header({ mode = 'dark' }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <InPersonNotice/>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow justify-between items-center w-full">

            {/* Navigation Links */}
            <ul className="flex justify-start items-center">
              <li>
                <Link href="/" className="font-medium text-xl text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150">
                  Home
                </Link>
              </li>
 
              <li>
                <Link href="/pricing" className="font-medium text-xl text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 transition duration-150">
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Language + Socials */}
            <ul className="flex items-center space-x-4">
              <li><LanguageSwitcher /></li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-500 hover:text-blue-600 transition duration-150">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.5.3.9.7 1.2 1.2.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.5-.7.9-1.2 1.2-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6a3.2 3.2 0 0 1-1.2-1.2c-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.5.7-.9 1.2-1.2.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.3-1.9.5-.4.2-.7.5-.9.9-.2.4-.4.9-.5 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .3 1.5.5 1.9.2.4.5.7.9.9.4.2.9.4 1.9.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.3 1.9-.5.4-.2.7-.5.9-.9.2-.4.4-.9.5-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.3-1.5-.5-1.9a1.8 1.8 0 0 0-.9-.9c-.4-.2-.9-.4-1.9-.5-1.2-.1-1.6-.1-4.7-.1zm0 3.2a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.2-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-blue-500 hover:text-blue-600 transition duration-150">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.2 8.7c-1.4 0-2.7-.4-3.8-1.2v7.3c0 3.4-2.8 6.2-6.2 6.2S5 18.2 5 14.8s2.8-6.2 6.2-6.2c.3 0 .5 0 .8.1V11c-.3-.1-.5-.1-.8-.1-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V2.5h3c.3 1.6 1.6 2.9 3.2 3.2v3Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-blue-500 hover:text-blue-600 transition duration-150">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.5 6.5c-.3-1.2-1.2-2.1-2.4-2.4C19 3.5 12 3.5 12 3.5s-7 0-9.1.6c-1.2.3-2.1 1.2-2.4 2.4C0 8.7 0 12 0 12s0 3.3.5 5.5c.3 1.2 1.2 2.1 2.4 2.4 2.1.6 9.1.6 9.1.6s7 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-2.2.5-5.5.5-5.5s0-3.3-.5-5.5Zm-14 9.1V8.4l6.4 3.6-6.4 3.6Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

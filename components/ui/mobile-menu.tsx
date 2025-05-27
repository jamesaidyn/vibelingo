'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Close menu on outside click
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

  // Close menu on Escape key
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
      {/* Hamburger button */}
      <button
        ref={trigger}
        className="group inline-flex w-8 h-8 text-slate-300 hover:text-white items-center justify-center transition"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16">
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
        </svg>
      </button>

      {/* Mobile navigation panel */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full left-0 w-full h-screen bg-white z-20 px-5 py-8 overflow-y-scroll transition ease-out duration-200"
        >
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/pricing" className="block text-xl font-medium text-slate-800 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Pricing</Link>
            </li>

            {/* Divider */}
            <hr className="my-6 border-gray-200" />

            {/* Social Icons */}
            <li>
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-500 hover:text-blue-600">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.5.3.9.7 1.2 1.2.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.5-.7.9-1.2 1.2-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6a3.2 3.2 0 0 1-1.2-1.2c-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.5.7-.9 1.2-1.2.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.3-1.9.5-.4.2-.7.5-.9.9-.2.4-.4.9-.5 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .3 1.5.5 1.9.2.4.5.7.9.9.4.2.9.4 1.9.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.3 1.9-.5.4-.2.7-.5.9-.9.2-.4.4-.9.5-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.3-1.5-.5-1.9a1.8 1.8 0 0 0-.9-.9c-.4-.2-.9-.4-1.9-.5-1.2-.1-1.6-.1-4.7-.1zm0 3.2a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.2-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-blue-500 hover:text-blue-600">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.2 8.7c-1.4 0-2.7-.4-3.8-1.2v7.3c0 3.4-2.8 6.2-6.2 6.2S5 18.2 5 14.8s2.8-6.2 6.2-6.2c.3 0 .5 0 .8.1V11c-.3-.1-.5-.1-.8-.1-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V2.5h3c.3 1.6 1.6 2.9 3.2 3.2v3Z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-blue-500 hover:text-blue-600">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.5 6.5c-.3-1.2-1.2-2.1-2.4-2.4C19 3.5 12 3.5 12 3.5s-7 0-9.1.6c-1.2.3-2.1 1.2-2.4 2.4C0 8.7 0 12 0 12s0 3.3.5 5.5c.3 1.2 1.2 2.1 2.4 2.4 2.1.6 9.1.6 9.1.6s7 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-2.2.5-5.5.5-5.5s0-3.3-.5-5.5Zm-14 9.1V8.4l6.4 3.6-6.4 3.6Z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}

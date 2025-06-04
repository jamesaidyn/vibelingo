'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { SocialProvider } from '@/context/SocialProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <LanguageProvider>
      <SocialProvider>{children}</SocialProvider>
    </LanguageProvider>
  )
}

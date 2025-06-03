'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface SocialContextType {
  whatsappLink: string
  instagramLink: string
  youtubeLink: string
  tiktokLink: string
  setWhatsappLink: (value: string) => void
  setInstagramLink: (value: string) => void
  setYoutubeLink: (value: string) => void
  setTiktokLink: (value: string) => void
}

const SocialContext = createContext<SocialContextType | undefined>(undefined)

export function SocialProvider({ children }: { children: ReactNode }) {
  const [whatsappLink, setWhatsappLink] = useState<string>('https://wa.me/16472620658')
  const [instagramLink, setInstagramLink] = useState<string>('https://www.instagram.com/vibelingoco')
  const [youtubeLink, setYoutubeLink] = useState<string>('https://www.youtube.com/@VibeLingoCo')
  const [tiktokLink, setTiktokLink] = useState<string>('https://www.tiktok.com/@vibelingoco')

  return (
    <SocialContext.Provider value={{
      whatsappLink,
      instagramLink,
      youtubeLink,
      tiktokLink,
      setWhatsappLink,
      setInstagramLink,
      setYoutubeLink,
      setTiktokLink
    }}>
      {children}
    </SocialContext.Provider>
  )
}

export function useSocial() {
  const ctx = useContext(SocialContext)
  if (!ctx) throw new Error('useSocial must be used within a SocialProvider')
  return ctx
}

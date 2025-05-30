'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface WhatsAppContextType {
  number: string
  setNumber: (value: string) => void
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined)

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  // Default value set here
  const [number, setNumber] = useState<string>('+16472620658')

  return (
    <WhatsAppContext.Provider value={{ number, setNumber }}>
      {children}
    </WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsApp must be used within a WhatsAppProvider')
  return ctx
}

'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useSocial } from '@/context/SocialProvider'
import { FaMapMarkerAlt, FaWhatsapp, FaBroadcastTower } from 'react-icons/fa'

export default function InPersonNotice() {
  const { language } = useLanguage()
  const { whatsappLink } = useSocial()
  const liveStreamUrl = '' // <-- Add your stream URL here

  const t = {
    notice: {
      en: 'Currently doing in-person meetings in',
      es: 'Actualmente estamos haciendo reuniones presenciales en',
    },
    viewMap: {
      en: 'View on Google Maps →',
      es: 'Ver en Google Maps →',
    },
    contact: {
      en: 'Contact on WhatsApp',
      es: 'Contactar por WhatsApp',
    },
    liveSoon: {
      en: 'Live Stream (Coming Soon)',
      es: 'Transmisión en vivo (Próximamente)',
    },
    liveNow: {
      en: 'Watch Live Stream',
      es: 'Ver Transmisión en Vivo',
    },
  }

  // WhatsApp link
  const whatsappUrl = `${whatsappLink}?text=Hola!%20Estoy%20interesado%20en%20una%20reunión%20en%20persona%20de%20VibeLingo`

  return (
    <div className="w-full bg-emerald-600 text-white text-sm md:text-base py-2 px-4 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 sticky top-0 z-50">
      <div className="flex items-center space-x-2 text-center md:text-left">
        <FaMapMarkerAlt className="text-white" />
        <span>
          {t.notice[language]} <strong>Asunción, Paraguay</strong>.{' '}
          <a
            href="https://www.google.com/maps/place/Asunción,+Paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-200"
          >
            {t.viewMap[language]}
          </a>
        </span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 bg-white text-emerald-700 px-3 py-1 rounded-md hover:bg-emerald-100 transition"
      >
        <FaWhatsapp className="text-green-500" />
        <span>{t.contact[language]}</span>
      </a>

      {/* Live Stream Button */}
      {liveStreamUrl ? (
        <a
          href={liveStreamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 bg-white text-emerald-700 px-3 py-1 rounded-md hover:bg-emerald-100 transition"
        >
          <FaBroadcastTower className="text-red-500" />
          <span>{t.liveNow[language]}</span>
        </a>
      ) : (
        <div className="flex items-center space-x-1 bg-white text-slate-400 px-3 py-1 rounded-md cursor-not-allowed opacity-70">
          <FaBroadcastTower className="text-slate-400" />
          <span>{t.liveSoon[language]}</span>
        </div>
      )}
    </div>
  )
}

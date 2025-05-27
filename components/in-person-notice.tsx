'use client'

import { FaMapMarkerAlt, FaWhatsapp, FaBroadcastTower } from 'react-icons/fa'

export default function InPersonNotice() {
  const liveStreamUrl = '' // <-- Add your stream URL here when available

  return (
    <div className="w-full bg-emerald-600 text-white text-sm md:text-base py-2 px-4 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-white" />
        <span>
          Currently doing in-person meetings in <strong>Asunción, Paraguay</strong>.{' '}
          <a
            href="https://www.google.com/maps/place/Asunción,+Paraguay"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-200"
          >
            View on Google Maps →
          </a>
        </span>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/595981234567?text=Hola!%20Estoy%20interesado%20en%20una%20reunión%20en%20persona%20de%20VibeLingo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 bg-white text-emerald-700 px-3 py-1 rounded-md hover:bg-emerald-100 transition"
      >
        <FaWhatsapp className="text-green-500" />
        <span>Contact on WhatsApp</span>
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
          <span>Watch Live Stream</span>
        </a>
      ) : (
        <div className="flex items-center space-x-1 bg-white text-slate-400 px-3 py-1 rounded-md cursor-not-allowed opacity-70">
          <FaBroadcastTower className="text-slate-400" />
          <span>Live Stream (Coming Soon)</span>
        </div>
      )}
    </div>
  )
}

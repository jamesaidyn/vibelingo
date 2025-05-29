'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const t = {
  heading: {
    en: 'How Your English Journey Unfolds',
    es: 'Cómo se desarrolla tu camino en inglés',
  },
  subheading: {
    en: 'Learn by doing, not memorizing. This is how your journey looks — from finding your purpose to building your voice in English.',
    es: 'Aprende haciendo, no memorizando. Así se ve tu camino — desde encontrar tu propósito hasta construir tu voz en inglés.',
  },
  tabs: [
    {
      title: {
        en: 'Start with Purpose',
        es: 'Empieza con un propósito',
      },
      desc: {
        en: 'Before learning anything, you’ll define a personal WHY — a real reason to learn English that keeps you motivated. It could be for your family, your dream job, or your online brand.',
        es: 'Antes de aprender cualquier cosa, definirás un “por qué” personal — una razón real para aprender inglés que te mantenga motivado. Puede ser por tu familia, tu trabajo soñado o tu marca online.',
      },
    },
    {
      title: {
        en: 'Get Familiar, Not Overwhelmed',
        es: 'Familiarízate sin agobiarte',
      },
      desc: {
        en: 'Instead of jumping into grammar, you start by watching selected YouTube videos and curated playlists. You absorb sounds, patterns, and confidence — even if you don’t speak yet.',
        es: 'En lugar de comenzar con gramática, verás videos seleccionados de YouTube y listas curadas. Absorbes sonidos, patrones y confianza — aunque aún no hables.',
      },
    },
    {
      title: {
        en: 'Begin Speaking in Small Steps',
        es: 'Comienza a hablar con pasos pequeños',
      },
      desc: {
        en: 'You’ll start by labeling objects and sending voice notes. As your confidence builds, you’ll practice real situations like food orders or voice memes with your coach.',
        es: 'Comenzarás nombrando objetos y enviando notas de voz. Luego, practicarás situaciones reales como pedir comida o enviar memes de voz con tu coach.',
      },
    },
    {
      title: {
        en: 'Create, Get Feedback, Improve',
        es: 'Crea, recibe feedback y mejora',
      },
      desc: {
        en: 'Once you’re ready, you’ll post TikTok-style assignments, talk to peers, and meet weekly with a coach who gives real feedback. Your English grows with your content.',
        es: 'Cuando estés listo, harás tareas tipo TikTok, hablarás con compañeros y te reunirás semanalmente con un coach que te dará feedback real. Tu inglés crecerá con tu contenido.',
      },
    },
  ],
}

export default function FeaturesHome() {
  const [tab, setTab] = useState(0)
  const { language } = useLanguage()

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative bg-slate-100 text-slate-800"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 id="how-it-works-heading" className="h2 font-playfair-display text-slate-800 mb-4">
              {t.heading[language]}
            </h2>
            <p className="text-xl text-slate-600">{t.subheading[language]}</p>
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 text-center"
              role="tablist"
              aria-label="Program Steps"
            >
              {t.tabs.map((item, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={tab === i}
                  aria-controls={`feature-tab-${i}`}
                  className={`flex flex-col items-center p-2 transition-opacity h-36 justify-start rounded-xl ${
                    tab !== i ? 'opacity-50 hover:opacity-75' : 'shadow-md bg-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(i)
                  }}
                >
                  <div className="inline-flex rounded-full bg-gradient-to-br from-gray-900 to-gray-700 w-14 h-14 mb-2 items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div className="md:text-sm text-sm font-semibold leading-tight text-slate-800 text-center">
                    {item.title[language]}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mt-6 text-center" id={`feature-tab-${tab}`} role="tabpanel">
              <p className="text-lg text-slate-600">{t.tabs[tab].desc[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

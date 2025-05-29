'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function FeaturesBlocks() {
  const { language } = useLanguage()

  const t = {
    heading: {
      en: 'Why VibeLingo Works',
      es: 'Por qué funciona VibeLingo',
    },
    subheading: {
      en: 'We don’t just say “memorize this.” We give you feedback, tools, and a real purpose for learning English.',
      es: 'No solo decimos “memoriza esto”. Te damos retroalimentación, herramientas y un propósito real para aprender inglés.',
    },
    features: [
      {
        title: {
          en: 'Not Just Grammar',
          es: 'Más que gramática',
        },
        desc: {
          en: 'We teach English with TikToks, voice chats, and real-world conversation — not random worksheets.',
          es: 'Enseñamos inglés con TikToks, chats de voz y conversaciones reales — no hojas de trabajo al azar.',
        },
      },
      {
        title: {
          en: 'Start With Your WHY',
          es: 'Empieza con tu “por qué”',
        },
        desc: {
          en: 'Before anything else, we talk about what English will do for you. That purpose keeps you motivated.',
          es: 'Antes que nada, hablamos de lo que el inglés hará por ti. Ese propósito te mantiene motivado.',
        },
      },
      {
        title: {
          en: 'AI Voice Coaching',
          es: 'Entrenamiento de voz con IA',
        },
        desc: {
          en: 'Speak English with ChatGPT’s voice mode — we’ll guide you live to build fluency and confidence fast.',
          es: 'Habla inglés con el modo de voz de ChatGPT — te guiamos en vivo para mejorar tu fluidez y confianza rápidamente.',
        },
      },
      {
        title: {
          en: 'Weekly Feedback',
          es: 'Retroalimentación semanal',
        },
        desc: {
          en: 'Each week, check in and get personal feedback on your progress. It’s simple, supportive, and flexible.',
          es: 'Cada semana, recibe retroalimentación personalizada sobre tu progreso. Es simple, flexible y con apoyo.',
        },
      },
      {
        title: {
          en: 'Content-Based Learning',
          es: 'Aprendizaje basado en contenido',
        },
        desc: {
          en: 'You’ll learn English by actually creating content — reels, stories, captions, and real-life interactions.',
          es: 'Aprenderás inglés creando contenido real — reels, historias, subtítulos e interacciones auténticas.',
        },
      },
      {
        title: {
          en: 'Free to Start',
          es: 'Gratis para empezar',
        },
        desc: {
          en: 'No pressure. Join the WhatsApp group, follow us, and start learning. You only pay when you want live support.',
          es: 'Sin presión. Únete al grupo de WhatsApp, síguenos y empieza a aprender. Solo pagas si quieres apoyo en vivo.',
        },
      },
    ],
  }

  return (
    <section
      id="why-vibelingo-works"
      aria-labelledby="features-heading"
      className="bg-white text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <header>
              <h2 id="features-heading" className="h2 font-playfair-display mb-4">
                {t.heading[language]}
              </h2>
              <p className="text-xl text-slate-500">{t.subheading[language]}</p>
            </header>
          </div>

          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
            role="list"
            aria-label="VibeLingo Features"
          >
            {t.features.map((item, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                data-aos-delay={index * 100}
                role="listitem"
              >
                <h3 className="h4 font-playfair-display mb-2">{item.title[language]}</h3>
                <p className="text-lg text-slate-500">{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

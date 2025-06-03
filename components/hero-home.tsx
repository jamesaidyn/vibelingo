'use client'

import Link from 'next/link'
import Image from 'next/image'
import ImageThumb from '@/public/images/vibe/splash_pic.png'
import { useLanguage } from '@/context/LanguageContext'
import { useSocial } from '@/context/SocialProvider'
import SocialContactButtons from '@/components/SocialContactButtons'


export default function HeroHome() {
  const { language } = useLanguage()
  const { instagramLink, tiktokLink } = useSocial()

  const t = {
    heading: {
      en: 'Speak English. Make Content. Meet the World.',
      es: 'Habla inglés. Crea contenido. Conecta con el mundo.',
    },
  subheading: {
    en: 'Learn English the fun way — quick vids, AI voice chats, and real tasks on Insta & TikTok. VibeLingo shows you how to sound real. DM us to start free!',
    es: 'Aprende inglés a tu ritmo — videos cortitos, chats con IA y retos reales en Insta y TikTok. VibeLingo te muestra cómo sonar natural. Escríbenos y arranca gratis.',
  },

    howItWorks: {
      en: 'How It Works',
      es: 'Cómo Funciona',
    },
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-slate-900 text-slate-100"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Text content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <header>
                <h1 id="hero-heading" className="h1 font-playfair-display text-slate-100 mb-4">
                  {t.heading[language]}
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                  {t.subheading[language]}
                </p>
              </header>

              {/* CTA buttons */}
              <nav
                aria-label="Call to Action"
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start md:justify-start flex-wrap gap-4"
              >

            <SocialContactButtons />

              </nav>
            </div>

            {/* Static splash image */}
            <div className="shrink-0" data-aos="fade-left">
              <Image
                src={ImageThumb}
                alt="Illustration of a learner using VibeLingo"
                width={540}
                height={405}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

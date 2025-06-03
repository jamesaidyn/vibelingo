'use client'

import Link from 'next/link'
import Image from 'next/image'
import ImageThumb from '@/public/images/vibe/splash_pic.png'
import { useLanguage } from '@/context/LanguageContext'
import { useSocial } from '@/context/SocialProvider'

export default function HeroHome() {
  const { language } = useLanguage()
  const { whatsappLink, instagramLink, tiktokLink } = useSocial()

  const t = {
    heading: {
      en: 'Speak English. Make Content. Meet the World.',
      es: 'Habla inglés. Crea contenido. Conecta con el mundo.',
    },
    subheading: {
      en: 'Learn English the smart way — with short videos, advanced AI conversations, and practical tasks on Instagram and TikTok. VibeLingo gives you a clear path to real fluency.',
      es: 'Aprende inglés de forma inteligente — con videos cortos, conversaciones con IA avanzada y tareas prácticas en Instagram y TikTok. VibeLingo te da un camino claro hacia la fluidez real.',
    },
    contact: {
      en: 'Contact on WhatsApp',
      es: 'Contáctanos por WhatsApp',
    },
    howItWorks: {
      en: 'How It Works',
      es: 'Cómo Funciona',
    },
  }

  const whatsappUrl = whatsappLink || '#'

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
                {/* WhatsApp */}
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto group"
                  aria-label="Join VibeLingo on WhatsApp"
                >
                  {t.contact[language]}
                  <span className="tracking-normal text-emerald-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>

                {/* How It Works */}
                <Link
                  href="#how-it-works"
                  className="btn text-white bg-slate-700 hover:bg-slate-800 w-full sm:w-auto"
                  aria-label="Watch how VibeLingo works"
                >
                  {t.howItWorks[language]}
                </Link>

                {/* Instagram circular icon */}
                <Link
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-pink-600 hover:bg-pink-700 p-3 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.5.3.9.7 1.2 1.2.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.5-.7.9-1.2 1.2-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6a3.2 3.2 0 0 1-1.2-1.2c-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.5.7-.9 1.2-1.2.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.3-1.9.5-.4.2-.7.5-.9.9-.2.4-.4.9-.5 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .3 1.5.5 1.9.2.4.5.7.9.9.4.2.9.4 1.9.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.3 1.9-.5.4-.2.7-.5.9-.9.2-.4.4-.9.5-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.3-1.5-.5-1.9a1.8 1.8 0 0 0-.9-.9c-.4-.2-.9-.4-1.9-.5-1.2-.1-1.6-.1-4.7-.1zm0 3.2a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm6.2-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
                  </svg>
                </Link>

                {/* TikTok circular icon */}
                <Link
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black hover:bg-gray-800 p-3 flex items-center justify-center"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M21.2 8.7c-1.4 0-2.7-.4-3.8-1.2v7.3c0 3.4-2.8 6.2-6.2 6.2S5 18.2 5 14.8s2.8-6.2 6.2-6.2c.3 0 .5 0 .8.1V11c-.3-.1-.5-.1-.8-.1-2.1 0-3.8 1.7-3.8 3.8S8.1 18.5 10.2 18.5s3.8-1.7 3.8-3.8V2.5h3c.3 1.6 1.6 2.9 3.2 3.2v3Z" />
                  </svg>
                </Link>
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

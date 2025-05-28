'use client'

import Link from 'next/link'
import Image from 'next/image'
import ImageThumb from '@/public/images/vibe/splash_pic.png'

export default function HeroHome() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-slate-900 text-slate-100"
    >
      {/* Decorative background */}
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
                  Speak English. Make Content. Meet the World.
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                  Learn English by doing — not memorizing. VibeLingo uses TikTok challenges,
                  WhatsApp check-ins, and AI voice chats to help you sound natural, grow your audience,
                  and connect globally.
                </p>
              </header>

              {/* CTA buttons */}
              <nav
                aria-label="Call to Action"
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <div>
                  <Link
                    href="https://wa.me/573001234567?text=Hi!%20I%20want%20to%20join%20Vibe%20Lingo%20from%20the%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white bg-emerald-600 hover:bg-emerald-700 w-full group"
                    aria-label="Join VibeLingo on WhatsApp"
                  >
                    Contact on WhatsApp
                    <span className="tracking-normal text-emerald-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
                <div>
              <Link
                href="#how-it-works"
                className="btn text-white bg-slate-700 hover:bg-slate-800 w-full"
                aria-label="Watch how VibeLingo works"
              >
                How It Works
              </Link>

                </div>
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

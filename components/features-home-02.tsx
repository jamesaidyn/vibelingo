'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesImage from '@/public/images/vibe/define_why.png'

const TABS = [
  {
    title: 'Define Your WHY',
    description:
      'Before any English practice, you’ll define your personal purpose. Whether it’s traveling, freelancing, or family — your WHY will keep you consistent.',
    icon: (
      <path d="M9.4 6.6c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-5-7.8-5-7.8s7 4.2 7.8 5Z" />
    ),
  },
  {
    title: 'Familiarize First',
    description:
      'You’ll spend the first few weeks watching curated playlists to recognize patterns and sounds — no pressure to speak yet.',
    icon: (
      <path d="M4.019 15.276.034 1.329A1.058 1.058 0 0 1 1.33.034L15.276 4.02c.896.299.996 1.494.1 1.893L8.8 8.8l-2.79 6.574c-.498.897-1.693.797-1.992-.1Z" />
    ),
  },
  {
    title: 'Grow With Content',
    description:
      'You’ll start making content (like duets, captions, memes) while checking in weekly via WhatsApp for real feedback from your coach.',
    icon: (
      <path d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Z" />
    ),
  },
]

export default function FeaturesHome02() {
  const [tab, setTab] = useState(1)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">From Purpose to Progress</h2>
            <p className="text-xl text-slate-600">
              VibeLingo isn’t about rules — it’s about real motivation, consistent exposure, and creative feedback that fits your life.
            </p>
          </div>

          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Left: Image */}
            <div className="md:w-5/12 lg:w-1/2 order-1 md:order-none">
              <div className="relative flex flex-col" data-aos="fade-down">
                {TABS.map((_, i) => (
                  <Transition
                    key={i}
                    show={tab === i + 1}
                    className="absolute w-full"
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded-sm"
                        src={FeaturesImage}
                        width={540}
                        height={620}
                        alt={`Step ${i + 1} visual`}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>

            {/* Right: Tab Buttons */}
            <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
              <div className="mb-8 text-center md:text-left">
                <h3 className="h3 text-slate-800 font-playfair-display mb-3">How it Actually Works</h3>
              </div>

              {TABS.map((item, i) => (
                <button
                  key={i}
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded-sm shadow-md transition duration-300 ease-in-out mb-3 ${
                    tab !== i + 1
                      ? 'border-transparent opacity-50 hover:opacity-75'
                      : 'border-crimson-600 opacity-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(i + 1)
                  }}
                >
                  <svg
                    className="w-4 h-4 fill-current text-crimson-500 shrink-0 mt-1 mr-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {item.icon}
                  </svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">{item.title}</div>
                    <div className="text-slate-500">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

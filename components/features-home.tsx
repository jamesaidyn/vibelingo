'use client'

import { useState } from 'react'

const TABS = [
  {
    title: 'Start with Purpose',
    description:
      'Before learning anything, you’ll define a personal WHY — a real reason to learn English that keeps you motivated. It could be for your family, your dream job, or your online brand.',
  },
  {
    title: 'Get Familiar, Not Overwhelmed',
    description:
      'Instead of jumping into grammar, you start by watching selected YouTube videos and curated playlists. You absorb sounds, patterns, and confidence — even if you don’t speak yet.',
  },
  {
    title: 'Begin Speaking in Small Steps',
    description:
      'You’ll start by labeling objects and sending voice notes. As your confidence builds, you’ll practice real situations like food orders or voice memes with your coach.',
  },
  {
    title: 'Create, Get Feedback, Improve',
    description:
      'Once you’re ready, you’ll post TikTok-style assignments, talk to peers, and meet weekly with a coach who gives real feedback. Your English grows with your content.',
  },
]

export default function FeaturesHome() {
  const [tab, setTab] = useState(0)

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
              How Your English Journey Unfolds
            </h2>
            <p className="text-xl text-slate-600">
              Learn by doing, not memorizing. This is how your journey looks — from finding your purpose to building your voice in English.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 text-center"
              role="tablist"
              aria-label="Program Steps"
            >
              {TABS.map((item, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={tab === i}
                  aria-controls={`feature-tab-${i}`}
                  className={`flex flex-col items-center p-2 transition-opacity h-36 justify-start ${
                    tab !== i ? 'opacity-50 hover:opacity-75' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(i)
                  }}
                >
                  <div className="inline-flex bg-white rounded-full shadow-md mb-2">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill={tab === i ? '#2174EA' : '#5091EE'}
                        fillOpacity={tab === i ? '1' : '0.64'}
                      />
                    </svg>
                  </div>
                  <div className="md:text-sm text-sm font-semibold leading-tight text-slate-800">
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mt-6 text-center" id={`feature-tab-${tab}`} role="tabpanel">
              <p className="text-lg text-slate-600">{TABS[tab].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

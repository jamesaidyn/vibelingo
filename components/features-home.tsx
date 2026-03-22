'use client'

import { useState } from 'react'

// 1. Accept the dict prop
export default function FeaturesHome({ dict }: { dict: any }) {
  const [tab, setTab] = useState(0)
  
  // 2. Reference the tabs from the dictionary
  const journeyTabs = dict.home.features_home.tabs

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
              {/* 3. Use dictionary for title and description */}
              {dict.home.features_home.title}
            </h2>
            <p className="text-xl text-slate-600">
              {dict.home.features_home.description}
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto">
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-8 text-center"
              role="tablist"
              aria-label="Program Steps"
            >
              {journeyTabs.map((item: any, i: number) => (
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
                        fill={tab === i ? '#1A1A1A' : '#1A1A1A'}
                        fillOpacity={tab === i ? '1' : '0.64'}
                      />
                    </svg>
                  </div>
                  <div className="md:text-sm text-sm font-semibold leading-tight text-slate-800">
                    {/* 4. Use the item title from dictionary */}
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mt-6 text-center" id={`feature-tab-${tab}`} role="tabpanel">
              {/* 5. Use the item description from dictionary */}
              <p className="text-lg text-slate-600">{journeyTabs[tab].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
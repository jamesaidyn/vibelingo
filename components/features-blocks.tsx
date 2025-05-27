export default function FeaturesBlocks() {
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
                Why VibeLingo Works
              </h2>
              <p className="text-xl text-slate-500">
                We don’t just say “memorize this.” We give you feedback, tools, and a real purpose for learning English.
              </p>
            </header>
          </div>

          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
            role="list"
            aria-label="VibeLingo Features"
          >

            {/* Feature Item */}
            {[
              {
                title: 'Not Just Grammar',
                desc: 'We teach English with TikToks, voice chats, and real-world conversation — not random worksheets.',
              },
              {
                title: 'Start With Your WHY',
                desc: 'Before anything else, we talk about what English will do for you. That purpose keeps you motivated.',
              },
              {
                title: 'AI Voice Coaching',
                desc: 'Speak English with ChatGPT’s voice mode — we’ll guide you live to build fluency and confidence fast.',
              },
              {
                title: 'Weekly Feedback',
                desc: 'Each week, check in and get personal feedback on your progress. It’s simple, supportive, and flexible.',
              },
              {
                title: 'Content-Based Learning',
                desc: 'You’ll learn English by actually creating content — reels, stories, captions, and real-life interactions.',
              },
              {
                title: 'Free to Start',
                desc: 'No pressure. Join the WhatsApp group, follow us, and start learning. You only pay when you want live support.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                data-aos-delay={index * 100}
                role="listitem"
              >
                <h3 className="h4 font-playfair-display mb-2">{item.title}</h3>
                <p className="text-lg text-slate-500">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}

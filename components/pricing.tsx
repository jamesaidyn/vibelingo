import PricingTables from './pricing-tables'

export default function HeroPricing() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-1/3 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 font-playfair-display text-slate-100">
              Start free. Pay only when you're growing.
            </h1>
            <p className="text-xl text-slate-400 mt-4">
              VibeLingo is free to start — you unlock lessons by posting, not paying. Only pay for personalized coaching or advanced tools when you’re ready.
            </p>
          </div>

          <PricingTables />

        </div>
      </div>

    </section>
  )
}

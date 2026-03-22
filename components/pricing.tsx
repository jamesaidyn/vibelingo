// vibelingo/components/pricing.tsx (or hero-pricing.tsx)
import PricingTables from './pricing-tables' // ✅ Now imports the fixed file above

export default function PricingSection({ dict }: { dict: any }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-1/3 lg:h-[48rem]" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 font-playfair-display text-slate-100">
              {dict.home.pricing.title}
            </h1>
            <p className="text-xl text-slate-400 mt-4">
              {dict.home.pricing.subtitle}
            </p>
          </div>
          
          <PricingTables dict={dict}/> {/* ✅ Will render the cards, not itself */}
          
        </div>
      </div>
    </section>
  )
}
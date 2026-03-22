'use client'

export default function PricingTables({ dict }: { dict: any }) {
  // Shortcut to make the code cleaner
  const pricing = dict.home.pricing

  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* Row 1 of 3 */}
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4 mb-12">

        {/* Free Start */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">{pricing.plans.free.name}</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{pricing.plans.free.price}</span>
              <span className="font-medium text-slate-400"> {pricing.plans.free.billing}</span>
            </div>
            <div className="text-slate-500">{pricing.plans.free.desc}</div>
          </div>
          <div className="font-medium mb-3">{pricing.includes_label}</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            {pricing.plans.free.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(pricing.plans.free.whatsapp_msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
            >
              {pricing.plans.free.button} <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Weekly Coaching */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">{pricing.plans.weekly.name}</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{pricing.plans.weekly.price}</span>
              <span className="font-medium text-slate-400"> {pricing.plans.weekly.billing}</span>
            </div>
            <div className="text-slate-500">{pricing.plans.weekly.desc}</div>
          </div>
          <div className="font-medium mb-3">{pricing.includes_label}</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            {pricing.plans.weekly.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(pricing.plans.weekly.whatsapp_msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
            >
              {pricing.plans.weekly.button} <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* AI Deep-Dive */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">{pricing.plans.ai.name}</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{pricing.plans.ai.price}</span>
              <span className="font-medium text-slate-400"> {pricing.plans.ai.billing}</span>
            </div>
            <div className="text-slate-500">{pricing.plans.ai.desc}</div>
          </div>
          <div className="font-medium mb-3">{pricing.includes_label}</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            {pricing.plans.ai.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(pricing.plans.ai.whatsapp_msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
            >
              {pricing.plans.ai.button} <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 of 2 */}
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

        {/* Western English Audit */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">{pricing.plans.audit.name}</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">{pricing.plans.audit.price}</span>
              <span className="font-medium text-slate-400"> {pricing.plans.audit.billing}</span>
            </div>
            <div className="text-slate-500">{pricing.plans.audit.desc}</div>
          </div>
          <div className="font-medium mb-3">{pricing.includes_label}</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            {pricing.plans.audit.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(pricing.plans.audit.whatsapp_msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
            >
              {pricing.plans.audit.button} <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Content Assistance */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">{pricing.plans.content.name}</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-playfair-display text-slate-800">{pricing.plans.content.price}</span>
              <span className="font-medium text-slate-400"> {pricing.plans.content.billing}</span>
            </div>
            <div className="text-slate-500">{pricing.plans.content.desc}</div>
          </div>
          <div className="font-medium mb-3">{pricing.includes_label}</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            {pricing.plans.content.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(pricing.plans.content.whatsapp_msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-slate-600 hover:bg-slate-700 w-full group"
            >
              {pricing.plans.content.button} <span className="text-slate-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
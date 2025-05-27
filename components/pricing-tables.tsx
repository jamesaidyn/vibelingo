'use client'

export default function PricingTables() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* Row 1 of 3 */}
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4 mb-12">

        {/* Free Start */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Free Start</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">0</span>
              <span className="font-medium text-slate-400"> / once</span>
            </div>
            <div className="text-slate-500">Follow-first model. Start learning with free videos, tasks, and challenges.</div>
          </div>
          <div className="font-medium mb-3">Includes:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li>✅ Purpose Talk</li>
            <li>🎥 Video playlists</li>
            <li>📱 WhatsApp proof tasks</li>
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href="https://wa.me/1234567890?text=Hi!%20I%20want%20to%20start%20the%20Free%20Start%20plan."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
            >
              Join Free <span className="text-blue-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Weekly Coaching */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          {/*
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">Most Popular</div>
          </div>
           */}
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Weekly Coaching</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">7</span>
              <span className="font-medium text-slate-400"> / week</span>
            </div>
            <div className="text-slate-500">Stay on track with a 10-min weekly call, voice feedback, and unlock our MP3 pack.</div>
          </div>
          <div className="font-medium mb-3">Includes:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li>📞 Weekly check-ins</li>
            <li>🎧 Full MP3/MP4 pack access</li>
            <li>🗣️ Feedback on pronunciation</li>
            <li>📲 WhatsApp goal tracking</li>
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href="https://wa.me/1234567890?text=Hi!%20I%20want%20Weekly%20Coaching%20for%207%20dollars."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
            >
              Start Coaching <span className="text-blue-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* AI Deep-Dive */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">AI Deep-Dive</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">7</span>
              <span className="font-medium text-slate-400"> / hour</span>
            </div>
            <div className="text-slate-500">Practice English live using ChatGPT Voice mode. You speak, we guide.</div>
          </div>
          <div className="font-medium mb-3">Includes:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li>🧠 Guided voice sessions</li>
            <li>🗣️ Real-time pronunciation feedback</li>
            <li>🎓 Conversation training</li>
            <li>📦 5-hour pack: $35</li>
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href="https://wa.me/1234567890?text=Hi!%20I%20want%20to%20book%20an%20AI%20Deep-Dive%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
            >
              Book Session <span className="text-blue-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 of 2 */}
      <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

        {/* Western English Audit */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Western English Audit</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h3 font-medium text-slate-500">$</span>
              <span className="h2 leading-7 font-playfair-display text-slate-800">20</span>
              <span className="font-medium text-slate-400"> / once</span>
            </div>
            <div className="text-slate-500">
              We’ll analyze your local store (in the country you're currently in) — signage, speech, tone — and suggest how to sound more modern and native.
            </div>
          </div>
          <div className="font-medium mb-3">Includes:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li>🕵️ English vibe audit</li>
            <li>📊 Video & bio feedback</li>
            <li>🎯 Accent, phrases, energy tips</li>
            <li>📥 Delivered in 48 hours</li>
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href="https://wa.me/1234567890?text=Hi!%20I%20want%20a%20Western%20English%20Audit%20for%20my%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
            >
              Get Audit <span className="text-blue-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>

        {/* Content Assistance */}
        <div className="relative flex flex-col h-full px-6 py-5 bg-white shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4 pb-4 border-b border-slate-200">
            <div className="text-lg font-semibold text-slate-800 mb-1">Content Assistance</div>
            <div className="inline-flex items-baseline mb-3">
              <span className="h2 leading-7 font-playfair-display text-slate-800">TBD</span>
              <span className="font-medium text-slate-400"> / project</span>
            </div>
            <div className="text-slate-500">Need help editing your videos or creating engaging content in English? We’ve got your back.</div>
          </div>
          <div className="font-medium mb-3">Includes:</div>
          <ul className="text-slate-500 space-y-3 grow mb-6">
            <li>✂️ Video editing tips or support</li>
            <li>📄 English caption clean-up</li>
            <li>🎬 Feedback on hooks & delivery</li>
            <li>🧑‍🎨 Collaboration on scripts & stories</li>
          </ul>
          <div className="p-3 rounded-sm bg-slate-50">
            <a
              href="https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20Content%20Assistance%20for%20my%20videos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
            >
              Request Support <span className="text-blue-300 group-hover:translate-x-0.5 ml-1 transition-transform">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

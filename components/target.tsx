import Image from 'next/image'
import TargetImage from '@/public/images/target.png'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800 mb-3">
              Real Impact. Real Growth.
            </h2>
            <p className="text-xl text-slate-500">
              VibeLingo helps students go from watching videos to confidently speaking English in the real world — with metrics to prove it.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-right">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-blue-500 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203..." />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">79%</div>
                  </div>
                  <div className="text-slate-500 text-lg">
                    Of students say they feel more confident speaking English after just 3 weeks of our challenges and calls.
                  </div>
                </li>
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-rose-400 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203..." />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">1M+</div>
                  </div>
                  <div className="text-slate-500 text-lg">
                    Views generated across TikTok and Instagram by VibeLingo students practicing through content.
                  </div>
                </li>
                <li>
                  <div className="flex items-center mb-4">
                    <svg className="h-4 w-4 shrink-0 fill-current text-yellow-400 mr-3">
                      <path d="M15.722 4.008C14.408 1.214 10.954-.635 7.318.203..." />
                    </svg>
                    <div className="h2 font-playfair-display text-slate-800">500K</div>
                  </div>
                  <div className="text-slate-500 text-lg">
                    Minutes of English spoken through AI roleplays, duet reels, and WhatsApp check-ins — and counting.
                  </div>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="fade-left">
              <Image className="mx-auto md:max-w-none" src={TargetImage} width={540} height={540} alt="Target Results" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

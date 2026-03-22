// 1. Import your dictionary helper
import { getDictionary } from '@/dictionaries/get-dictionary'

export const metadata = {
  title: 'Home - VibeLingo',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'

// 2. Make the function async and accept the params Promise
export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  // 3. Await the params and load the dictionary
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang)

  return (
    <>
      {/* 4. Pass the dictionary down to your translated component! */}
      <Hero dict={dict} />
      
      {/* These stay as they are until you are ready to translate them */}
      <FeaturesBlocks dict={dict} />
      <Features dict={dict}/>
      <Features02 />
      <Features03 />
      <PricingSection />
    </>
  )
}
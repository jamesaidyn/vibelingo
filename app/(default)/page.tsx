export const metadata = {
  title: 'Home - VibeLingo',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import PricingSection from '@/components/pricing'


export default function Home() {
  return (
    <>
    
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Features02 />
      <Features03 />
      <PricingSection />
      
    </>
  )
}

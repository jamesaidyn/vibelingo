import { getDictionary } from '@/dictionaries/get-dictionary'

export const metadata = {
  title: 'Pricing - VibeLingo',
  description: 'Page description',
}

import Hero from '@/components/hero-pricing'
import CtaPricing from '@/components/cta-pricing'
import Features from '@/components/features-pricing'
import FeaturesTable from '@/components/features-table'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta-dark'

// 1. Make the component async and accept params
export default async function Pricing({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  // 2. Await the params and fetch the dictionary
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang)

  return (
    <>
      {/* 3. Pass the dictionary down to Hero! */}
      <Hero dict={dict} />
      
      {/* Keep the rest commented out until you are ready to translate them */}
      {/*
      <CtaPricing />
      <Features />
      <FeaturesTable />
      <Faqs />
      <Cta />
      */}
    </>
  )
}
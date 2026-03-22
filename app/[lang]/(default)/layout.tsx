import AosInit from '@/components/utils/aos-init'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

// 1. Import your global helper instead of redefining it here!
import { getDictionary } from '@/dictionaries/get-dictionary'

export default async function DefaultLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: 'en' | 'es' | 'gn' }> // 2. Add 'gn' to the allowed types
}) {  
  // Await the params
  const resolvedParams = await params
  const lang = resolvedParams.lang

  // Load the dictionary based on the URL parameter
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Initialize AOS animations on the client */}
      <AosInit />
      
      {/* Pass the dictionary and lang down to the header! */}
      <Header dict={dict} lang={lang} />
      
      <main className="grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
import AosInit from '@/components/utils/aos-init'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

// Helper to fetch the right JSON file
const getDictionary = async (lang: 'en' | 'es') => {
  const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    es: () => import('@/dictionaries/es.json').then((module) => module.default),
  }
  return dictionaries[lang]()
}

export default async function DefaultLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: 'en' | 'es' }> // Type as a Promise for Next 15
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
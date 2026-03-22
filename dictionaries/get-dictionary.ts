const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  gn: () => import('./gn.json').then((module) => module.default), // <-- Added Guarani
}

// Update the type to include 'gn'
export const getDictionary = async (locale: 'en' | 'es' | 'gn') => dictionaries[locale]()
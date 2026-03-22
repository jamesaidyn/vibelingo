import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define your supported languages
const locales = ['en', 'es']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a supported locale (e.g. /en/pricing)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // If no locale is in the URL, redirect to the default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Don't run middleware on static files, API routes, or images
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|css).*)'],
}
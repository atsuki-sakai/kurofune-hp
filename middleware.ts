import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ja', request.url))
  }

  const pathnameIsMissingValidLocale = ['en', 'ja'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingValidLocale) {
    return NextResponse.redirect(new URL(`/ja${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
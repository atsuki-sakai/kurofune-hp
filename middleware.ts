import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 許可する言語のリスト
const locales = ['en', 'ja']

// ユーザーの言語設定を取得する関数
function getLocale(request: NextRequest) {
  // URLからlocaleを取得
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(locale => pathname.startsWith(`/${locale}/`) || pathname.startsWith(`/${locale}`))
  if (pathnameLocale) return pathnameLocale

  // Accept-Languageヘッダーからlocaleを取得
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0])
      .find(lang => locales.includes(lang))
    if (preferredLocale) return preferredLocale
  }

  // デフォルトのlocale
  return 'ja'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 画像やその他の静的アセットに対してはミドルウェアを適用しない
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|ico)$/i)) {
    return NextResponse.next()
  }

  // 既に言語パスが含まれているかチェック
  const hasLocale = locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // ルートパスへのアクセスを適切な言語にリダイレクト
  if (pathname === '/') {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // パスに言語が含まれていない場合のみ、言語を追加
  if (!hasLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
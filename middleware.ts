import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 画像やその他の静的アセットに対してはミドルウェアを適用しない
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|ico)$/i)) {
    return NextResponse.next()
  }

  // ルートパスへのアクセスを/jaにリダイレクト
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ja', request.url))
  }

  // パスに言語が含まれていない場合、デフォルトで/jaを追加
  if (!pathname.startsWith('/ja') && !pathname.startsWith('/en')) {
    return NextResponse.redirect(new URL(`/ja${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
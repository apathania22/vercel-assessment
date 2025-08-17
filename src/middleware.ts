// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|assets/).*)',
  ],
};

export function middleware(req: NextRequest) {
  const username = process.env.BASIC_AUTH_USER || '';
  const password = process.env.BASIC_AUTH_PASS || '';

  if (process.env.NODE_ENV === 'development') return NextResponse.next();

  if (!username || !password) return NextResponse.next();

  const auth = req.headers.get('authorization');

  if (auth?.startsWith('Basic ')) {
    const base64 = auth.split(' ')[1] || '';
    const [user, pass] = atob(base64).split(':');

    if (user === username && pass === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area", charset="UTF-8"',
    },
  });
}

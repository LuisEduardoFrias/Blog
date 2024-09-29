//
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {

  /*
    if (request.nextUrl.pathname !== '/home' && request.nextUrl.pathname !== '/posts') {
      const jwt = request.cookies.get('access_token');
  
      if (jwt === undefined) {
        return NextResponse.redirect(new URL('/login', request.url))
      }
  
      try {
        const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode(process.env.SECRET_JWT_KEY))
        return NextResponse.next();
      } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
  */

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }
  
  if (request.nextUrl.pathname === '/loguot') {
    return NextResponse.redirect(new URL('/home', request.url))
  }
}

export const config = {
  matcher: ['/', '/home/:path*'],
}
import { NextResponse } from 'next/server'

export function middleware(request: Request) {
   if(request.url.includes('/api/'))

   console.log('middleware')
   console.log(request.url)

   const origin = request.headers.get('origin')
   console.log(origin)

   return NextResponse.next()
}

export const config = {
   matcher: '/api/:path*'
}
import { NextRequest, NextResponse } from "next/server";
import { getSessionPayload } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get('session')?.value
  if (!session) return NextResponse.redirect(new URL('/login?redirect='+req.nextUrl.pathname, req.url))
    try {
      await getSessionPayload(session)
      return NextResponse.next()
  } catch (error) {
      if ((error as Error).message !== 'Invalid token') console.log('middleware error message', error)
      return NextResponse.redirect(new URL('/login?redirect='+req.nextUrl.pathname, req.url))
  }
}

export const config = {
  matcher: '/(new.*)',
}
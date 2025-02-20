import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of paths that require authentication
const protectedPaths = ['/dashboard', '/profile', '/settings']

// List of paths that should redirect to dashboard if user is already authenticated
const authPaths = ['/signin', '/signup']

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const { data: { session } } = await supabase.auth.getSession()
  const path = request.nextUrl.pathname

  // Handle protected routes
  if (protectedPaths.some(protectedPath => path.startsWith(protectedPath))) {
    if (!session) {
      const redirectUrl = new URL('/signin', request.url)
      redirectUrl.searchParams.set('redirectTo', path)
      return NextResponse.redirect(redirectUrl)
    }
  }

  // Handle auth routes (prevent authenticated users from accessing signin/signup)
  if (authPaths.includes(path) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}

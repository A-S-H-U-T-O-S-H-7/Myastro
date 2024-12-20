import { NextResponse } from 'next/server';

/** 
 * Middleware to handle authentication and role-based access.
 */
export function middleware(req) {
  const token = req.cookies.get('token'); // Retrieve auth token
  const role = req.cookies.get('role'); // Retrieve user role
  const pathname = req.nextUrl.pathname;
  return NextResponse.next(); 

  // Public routes that don't need protection
  const publicRoutes = ['/login', '/signup', '/'];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Define role-based access
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  if (pathname.startsWith('/astrologer') && role !== 'astrologer') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  if (pathname.startsWith('/user') && role !== 'user') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // Allow access if valid
  return NextResponse.next();
}

// Middleware configuration for matching specific routes
export const config = {
  matcher: ['/admin/:path*', '/astrologer/:path*', '/user/:path*'], // Protect these routes
};
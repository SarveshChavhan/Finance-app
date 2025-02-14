import {NextResponse} from 'next/server'
import { clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server'


const isProtectedRoute = createRouteMatcher(['/','/api(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
      const authObject = await auth();
      if (!authObject.userId) {
          // Check if the request is for an API route
          if (request.nextUrl.pathname.startsWith('/api')) {
              return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { 'Content-Type': 'application/json' } });
          }
          return NextResponse.redirect('http://localhost:3000/sign-in');
      }
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  try {
    const { supabase, response } = createClient(request)

    // 1. Define the CSP string
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fast.wistia.com https://*.wistia.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fast.wistia.com;
      font-src 'self' data: https://fonts.gstatic.com;
      img-src 'self' blob: data: https://fast.wistia.com https://*.wistia.com;
      connect-src 'self' https://fast.wistia.com https://*.wistia.com wss://distillery.wistia.com *.supabase.co;
      frame-src 'self' https://fast.wistia.net https://fast.wistia.com;
      worker-src 'self' blob:;
    `.replace(/\s{2,}/g, ' ').trim();

    // 2. Set the header on the existing Supabase response
    response.headers.set('Content-Security-Policy', cspHeader);

    // Refresh session
    await supabase.auth.getSession()

    return response
  } catch (e) {
    const response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
    
    // Ensure CSP is even in the catch block so your site doesn't break during errors
    const fallbackCsp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
    response.headers.set('Content-Security-Policy', fallbackCsp);
    
    return response
  }
}
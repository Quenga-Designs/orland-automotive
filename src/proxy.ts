import { NextRequest, NextResponse } from "next/server";

// Per-request nonce CSP.
//
// A static CSP header cannot carry a nonce, so Next.js could not attach nonces
// to the inline <script> tags it emits for hydration and RSC streaming — an
// enforcing browser then blocks them and the client never hydrates. Generating
// the nonce here (and echoing it on the request headers) lets Next.js stamp the
// same nonce onto its inline scripts, so `script-src 'self' 'nonce-…'
// 'strict-dynamic'` allows exactly those scripts and nothing else.
//
// Note: <script type="application/ld+json"> blocks are data, not executable
// JS, so they are not covered by script-src and need no nonce.
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://quengadesigns.dev",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  // Next.js reads the nonce from the CSP on the request headers and applies it
  // to its own inline scripts.
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets, so prefetch
    // requests and static files aren't needlessly processed.
    //
    // NOTE: this string intentionally keeps escaped backslashes instead of
    // String.raw. Next.js statically analyzes `export const config = { matcher }`
    // at build time, and a tagged-template expression here fails that static
    // extraction ("Invalid segment configuration export detected").
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

/* © 2026 Quenga Designs — All rights reserved. Proprietary; see LICENSE. Unauthorized copying or deployment prohibited. */
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConceptBanner } from "@/components/ConceptBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: { "qd-provenance": "qd-prov:orland-automotive:dab34766" },
  title: "Orland Automotive Oil & Lube — Concept Site (Not Official) | Quenga Designs",
  description:
    "An unsolicited concept redesign for Orland Automotive Oil & Lube in Orland, CA. Built as a design demo by Quenga Designs — not the shop's official website.",
  robots: {
    index: false,
    follow: false,
  },
};

// The per-request nonce CSP (src/proxy.ts) requires per-request rendering so
// Next.js can stamp the current request's nonce onto its inline hydration
// scripts. Static prerendering would bake nonce-less scripts at build time,
// which a nonce + 'strict-dynamic' policy then blocks.
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <div className="sticky top-0 z-50 flex flex-col">
          <ConceptBanner />
          <SiteHeader />
        </div>
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script src="/qd-beacon.js" defer nonce={nonce}></script>
      </body>
    </html>
  );
}

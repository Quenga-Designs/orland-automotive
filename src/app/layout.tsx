/* © 2026 Quenga Designs — All rights reserved. Proprietary; see LICENSE. Unauthorized copying or deployment prohibited. */
import type { Metadata } from "next";
import { Damion, Passion_One, Red_Hat_Text } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ConceptBanner } from "@/components/ConceptBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PreviewRibbon } from "@/components/PreviewRibbon";
import { MobileCta } from "@/components/MobileCta";
import { siteUrl } from "@/lib/site-data";

const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400",
});

const passion = Passion_One({
  variable: "--font-passion",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const redhat = Red_Hat_Text({
  variable: "--font-redhat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: { "qd-provenance": "qd-prov:orland-automotive:dab34766" },
  metadataBase: new URL(siteUrl),
  title: "Orland Automotive Oil & Lube — oil changes & repair, Orland CA (Concept Site)",
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
    <html lang="en" className={`${damion.variable} ${passion.variable} ${redhat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-asphalt text-ink">
        <div className="sticky top-0 z-50">
          <ConceptBanner />
        </div>
        <SiteHeader />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCta />
        <PreviewRibbon />
        <script src="/qd-beacon.js" defer nonce={nonce}></script>
      </body>
    </html>
  );
}

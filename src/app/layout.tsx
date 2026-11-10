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
  // Branch previews resolve relative URLs (og:image) against their own host; the canonical stays on the preview host.
  metadataBase: new URL(
    process.env.VERCEL_ENV === "preview" && process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : siteUrl,
  ),
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    siteName: "Orland Automotive Oil & Lube (concept)",
    title: "Orland Automotive Oil & Lube | Oil changes & repair in Orland, CA",
    description: "Oil changes and complete repair for any make and model, foreign or domestic, at 615 Fifth St in Orland.",
    url: `${siteUrl}/`,
  },
  title: "Orland Automotive Oil & Lube | Oil changes & repair in Orland, CA (Concept Site)",
  description:
    "An unsolicited concept redesign for Orland Automotive Oil & Lube in Orland, CA. Built as a design demo by Quenga Designs, not the shop's official website.",
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
        <div className="relative z-50">
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

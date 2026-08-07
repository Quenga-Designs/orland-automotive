import type { Metadata } from "next";
import { Teko, Inter } from "next/font/google";
import "./globals.css";
import { ConceptBanner } from "@/components/ConceptBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orland Automotive Oil & Lube — Concept Site (Not Official) | Quenga Designs",
  description:
    "An unsolicited concept redesign for Orland Automotive Oil & Lube in Orland, CA. Built as a design demo by Quenga Designs — not the shop's official website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-asphalt text-chalk">
        <div className="sticky top-0 z-50 flex flex-col">
          <ConceptBanner />
          <SiteHeader />
        </div>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

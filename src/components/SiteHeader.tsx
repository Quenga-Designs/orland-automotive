import Link from "next/link";
import { business } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-line-dark bg-bezel/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl uppercase tracking-[0.04em] text-mist sm:text-3xl">
            Orland Automotive
          </span>
          <span className="font-display text-xs uppercase tracking-[0.5em] text-teal-light sm:text-sm">
            Oil &amp; Lube
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-display text-base uppercase tracking-[0.1em] text-mist-dim md:flex">
          <Link href="/#services" className="transition hover:text-amber-light">
            Services
          </Link>
          <Link href="/services" className="transition hover:text-amber-light">
            Full Menu
          </Link>
          <Link href="/#visit" className="transition hover:text-amber-light">
            Visit
          </Link>
        </nav>

        <a
          href={`tel:${business.phoneHref}`}
          className="shrink-0 rounded-sm border-2 border-amber bg-amber px-4 py-2 font-display text-sm uppercase tracking-[0.08em] text-paper-raised transition hover:border-amber-light hover:bg-amber-light sm:px-5 sm:text-base"
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}

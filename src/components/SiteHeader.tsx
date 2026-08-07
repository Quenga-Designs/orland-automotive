import Link from "next/link";
import { business } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-asphalt/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-3xl uppercase tracking-[0.04em] text-chalk sm:text-4xl">
            Orland Automotive
          </span>
          <span className="font-display text-xs uppercase tracking-[0.5em] text-safety-yellow sm:text-sm">
            Oil &amp; Lube
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-display text-lg uppercase tracking-[0.1em] text-chalk-dim md:flex">
          <Link href="/#services" className="transition hover:text-safety-yellow">
            Services
          </Link>
          <Link href="/services" className="transition hover:text-safety-yellow">
            Full Menu
          </Link>
          <Link href="/#visit" className="transition hover:text-safety-yellow">
            Visit
          </Link>
        </nav>

        <a
          href={`tel:${business.phoneHref}`}
          className="shrink-0 rounded-sm border-2 border-safety-yellow bg-safety-yellow px-4 py-2 font-display text-base uppercase tracking-[0.08em] text-asphalt-darker transition hover:bg-safety-yellow-light hover:border-safety-yellow-light sm:px-5"
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}

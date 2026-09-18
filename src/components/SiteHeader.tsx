import Link from "next/link";
import { business, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="brick border-b-4 border-wall-deep">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="painted flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sign">
          <span className="font-script text-2xl">Orland Automotive</span>
          <span className="font-block text-lg tracking-wide">OIL &amp; LUBE</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-bold text-sign underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-sky">
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={business.phoneHref} className="btn btn-sign hidden !min-h-10 !py-2 text-sm sm:inline-flex">
          Call {business.phone}
        </a>
      </div>
    </header>
  );
}

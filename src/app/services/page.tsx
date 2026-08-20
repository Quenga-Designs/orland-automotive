import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { business, pricingNote, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services — Orland Automotive Oil & Lube Concept | Quenga Designs",
  description:
    "Concept services menu for Orland Automotive Oil & Lube in Orland, CA — oil changes, brakes, diagnostics, and full auto repair.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="dot-grid border-b border-line-dark bg-bezel">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-teal-light">
            The Full Menu
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-5xl uppercase leading-[0.9] tracking-tight text-mist sm:text-7xl">
            Services
          </h1>
          <p className="mt-5 max-w-xl text-mist-dim">{pricingNote}</p>
        </div>
        <div className="tick-divider-dark" />
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service.name}
                className="border-t-2 border-transparent bg-paper-raised p-7 transition hover:border-amber"
              >
                <h2 className="font-display text-2xl uppercase tracking-wide text-ink">
                  {service.name}
                </h2>
                <p className="mt-2 text-ink-dim">{service.description}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-ink-dim/80">
            Have something specific in mind? Call {business.phone} — the team
            {" "}can tell you exactly what the shop offers.
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

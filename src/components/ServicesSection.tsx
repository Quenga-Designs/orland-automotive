import Link from "next/link";
import { pricingNote, services } from "@/lib/site-data";

export function ServicesSection() {
  const preview = services.slice(0, 6);

  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-teal">
              What We Do
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="font-display text-lg uppercase tracking-[0.08em] text-teal transition hover:text-amber"
          >
            View Full Menu &rarr;
          </Link>
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => (
            <li
              key={service.name}
              className="border-t-2 border-transparent bg-paper-raised p-6 transition hover:border-amber"
            >
              <h3 className="font-display text-xl uppercase tracking-wide text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-ink-dim">{service.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ink-dim/80">{pricingNote}</p>
      </div>
    </section>
  );
}

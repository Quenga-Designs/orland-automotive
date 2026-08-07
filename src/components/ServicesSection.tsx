import Link from "next/link";
import { pricingNote, services } from "@/lib/site-data";

export function ServicesSection() {
  const preview = services.slice(0, 6);

  return (
    <section id="services" className="border-b border-line bg-asphalt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-safety-yellow">
              What We Do
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-chalk sm:text-5xl">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="font-display text-lg uppercase tracking-[0.08em] text-safety-yellow transition hover:text-safety-yellow-light"
          >
            View Full Menu &rarr;
          </Link>
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => (
            <li key={service.name} className="bg-panel p-6">
              <h3 className="font-display text-xl uppercase tracking-wide text-chalk">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-chalk-dim">{service.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-chalk-dim/80">{pricingNote}</p>
      </div>
    </section>
  );
}

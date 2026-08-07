import { business } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b border-line bg-asphalt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-safety-yellow sm:text-base">
          Since {business.establishedYear} &middot; Orland, California
        </p>

        <h1 className="mt-5 max-w-3xl text-balance font-display text-6xl uppercase leading-[0.9] tracking-tight text-chalk gauge-glow sm:text-8xl md:text-9xl">
          Orland
          <br />
          <span className="text-safety-yellow">Automotive</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-chalk-dim sm:text-xl">
          {business.description}
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`tel:${business.phoneHref}`}
            className="rounded-sm border-2 border-safety-yellow bg-safety-yellow px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-asphalt-darker transition hover:bg-safety-yellow-light hover:border-safety-yellow-light"
          >
            Call {business.phone}
          </a>
          <a
            href="#services"
            className="rounded-sm border-2 border-chalk-dim/40 px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-chalk transition hover:border-safety-yellow hover:text-safety-yellow"
          >
            See Services
          </a>
        </div>
      </div>
      <div className="checker-stripe" />
    </section>
  );
}

import { business } from "@/lib/site-data";

// Sixteen evenly spaced tread lugs around the tire ring — rectangular
// blocks (tread pattern) rather than triangular gear teeth, so the
// silhouette reads as a tire, not a plain gear cog.
const TREAD_LUGS = Array.from({ length: 16 }, (_, i) => i * (360 / 16));

// Five lug nuts around the hub, evenly spaced.
const LUG_NUTS = [0, 72, 144, 216, 288];

function TireWrenchIcon() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-48 w-48 text-asphalt-darker sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      aria-hidden="true"
    >
      {/* Tire tread ring */}
      <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="13" />
      {TREAD_LUGS.map((deg) => (
        <rect
          key={deg}
          x="94"
          y="16"
          width="12"
          height="18"
          fill="currentColor"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}

      {/* Hub */}
      <circle cx="100" cy="100" r="36" fill="currentColor" />
      {LUG_NUTS.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const lx = 100 + Math.cos(rad) * 19;
        const ly = 100 + Math.sin(rad) * 19;
        return <circle key={deg} cx={lx} cy={ly} r="4.5" fill="var(--color-safety-yellow)" />;
      })}

      {/* Wrench laid diagonally across the tire */}
      <g transform="rotate(-38 100 100)">
        <rect x="42" y="93" width="116" height="13" rx="6.5" fill="currentColor" />
        <circle cx="32" cy="100" r="21" fill="none" stroke="currentColor" strokeWidth="13" />
        <circle cx="168" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="11" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-asphalt">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy column */}
        <div className="relative min-h-[24rem] px-5 py-16 sm:min-h-[28rem] sm:px-8 sm:py-20 lg:py-24">
          {/* Corner badge — replaces the old top eyebrow line */}
          <div className="absolute left-5 top-6 inline-flex items-center gap-2 rounded-full border border-safety-yellow/50 bg-asphalt-darker/80 px-3.5 py-1.5 sm:left-8 sm:top-8">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-safety-yellow" />
            <span className="whitespace-nowrap font-display text-[0.65rem] uppercase tracking-[0.25em] text-safety-yellow sm:text-xs">
              Since {business.establishedYear} &middot; Orland, CA
            </span>
          </div>

          <div className="pt-16 sm:pt-20">
            <h1 className="text-outline max-w-2xl text-balance font-display text-6xl uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl">
              Orland
              <br />
              Automotive
            </h1>

            <p className="mt-6 max-w-md text-balance text-lg text-chalk-dim sm:text-xl">
              {business.description}
            </p>
          </div>

          {/* CTAs: stacked in normal flow on small screens; at lg+ the
              wrapper collapses (display: contents) and each button pins to
              an opposite corner of the column via absolute positioning. */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center lg:contents">
            <a
              href={`tel:${business.phoneHref}`}
              className="rounded-sm border-2 border-safety-yellow bg-safety-yellow px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-asphalt-darker transition hover:bg-safety-yellow-light hover:border-safety-yellow-light lg:absolute lg:right-8 lg:top-8 lg:px-5 lg:py-2.5 lg:text-base"
            >
              Call {business.phone}
            </a>
            <a
              href="#services"
              className="rounded-sm border-2 border-chalk-dim/40 px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-chalk transition hover:border-safety-yellow hover:text-safety-yellow lg:absolute lg:bottom-8 lg:left-8 lg:px-5 lg:py-2.5 lg:text-base"
            >
              See Services
            </a>
          </div>
        </div>

        {/* Graphic panel */}
        <div className="grain relative flex items-center justify-center border-t border-line bg-safety-yellow py-14 lg:border-l lg:border-t-0">
          <TireWrenchIcon />
        </div>
      </div>

      <div className="hero-angle-cut" aria-hidden="true" />
    </section>
  );
}

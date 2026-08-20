import { business } from "@/lib/site-data";

// Thirteen minor ticks across a 240° sweep (-120° to 120°, 0° = 12 o'clock),
// matching a speedometer/odometer dial rather than a generic gear or tire.
const DIAL_ANGLES = Array.from({ length: 13 }, (_, i) => -120 + i * 20);

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function GaugeDialIcon() {
  const cx = 100;
  const cy = 110;
  const outerR = 82;
  const tickR1 = 68;
  const tickR2 = 82;
  const needleAngle = 60;

  return (
    <svg
      viewBox="0 0 200 200"
      className="h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      aria-hidden="true"
    >
      {/* Full track */}
      <path
        d={describeArc(cx, cy, outerR, -120, 120)}
        fill="none"
        stroke="var(--color-line-dark)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Steady segment */}
      <path
        d={describeArc(cx, cy, outerR, -120, -20)}
        fill="none"
        stroke="var(--color-teal-light)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Quick-service segment, where the needle sits */}
      <path
        d={describeArc(cx, cy, outerR, -20, needleAngle + 5)}
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {DIAL_ANGLES.map((deg) => {
        const p1 = polarToCartesian(cx, cy, tickR1, deg);
        const p2 = polarToCartesian(cx, cy, tickR2, deg);
        return (
          <line
            key={deg}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="var(--color-mist-dim)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}

      <g transform={`rotate(${needleAngle} ${cx} ${cy})`}>
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy - 64}
          stroke="var(--color-amber)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>

      <circle cx={cx} cy={cy} r="14" fill="var(--color-mist)" />
      <circle cx={cx} cy={cy} r="14" fill="none" stroke="var(--color-amber)" strokeWidth="3" />

      {/* Oil-drop accent beneath the dial */}
      <path
        d="M100 150c-9 12-16 21-16 30a16 16 0 0 0 32 0c0-9-7-18-16-30z"
        fill="var(--color-amber)"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy column */}
        <div className="relative flex flex-col justify-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/30 bg-paper-raised px-3.5 py-1.5 shadow-sm shadow-ink/5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <span className="whitespace-nowrap font-display text-xs uppercase tracking-[0.25em] text-teal">
              Since {business.establishedYear} &middot; Orland, CA
            </span>
          </div>

          <div>
            <h1 className="max-w-xl text-balance font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Orland Automotive
              <span className="mt-2 block text-amber">Oil &amp; Lube</span>
            </h1>
            <p className="mt-6 max-w-md text-balance text-lg text-ink-dim sm:text-xl">
              {business.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${business.phoneHref}`}
              className="rounded-sm border-2 border-amber bg-amber px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-paper-raised transition hover:border-amber-light hover:bg-amber-light"
            >
              Call {business.phone}
            </a>
            <a
              href="#services"
              className="rounded-sm border-2 border-ink/15 px-7 py-3.5 text-center font-display text-lg uppercase tracking-[0.08em] text-ink transition hover:border-teal hover:text-teal"
            >
              See Services
            </a>
          </div>

          {/* Quick-read stat strip — dial-style readouts of facts already
              stated elsewhere on the site (walk-in service, founding year,
              universal fit), not new claims. */}
          <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6 sm:max-w-lg">
            <div>
              <dt className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-ink-dim">
                Wait
              </dt>
              <dd className="tabular-nums mt-1 font-display text-xl text-ink sm:text-2xl">
                Walk-in
              </dd>
            </div>
            <div>
              <dt className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-ink-dim">
                Serving Since
              </dt>
              <dd className="tabular-nums mt-1 font-display text-xl text-ink sm:text-2xl">
                {business.establishedYear}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-ink-dim">
                Fits
              </dt>
              <dd className="mt-1 font-display text-xl text-ink sm:text-2xl">Any Make</dd>
            </div>
          </dl>
        </div>

        {/* Gauge panel */}
        <div className="dot-grid relative flex items-center justify-center border-t border-line-dark bg-bezel py-16 lg:border-l lg:border-t-0">
          <GaugeDialIcon />
        </div>
      </div>

      <div className="gauge-bar" aria-hidden="true" />
    </section>
  );
}

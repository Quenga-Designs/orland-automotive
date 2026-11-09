import Image from "next/image";
import { board, boardPrices, business, reviews, ratings, type Photo } from "@/lib/site-data";

const starPath = "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z";

/** Five drawn stars (Yelp is 5.0 over all 10 reviews, so each Yelp quote is a 5-star review). */
export function Stars({ className = "" }: { className?: string }) {
  return (
    <span role="img" aria-label="5 out of 5 stars" className={`inline-flex gap-0.5 text-tab ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d={starPath} />
        </svg>
      ))}
    </span>
  );
}

export function RatingStrip() {
  return (
    <ul className="grid gap-3 lg:grid-cols-3">
      {ratings.map((r) => (
        <li key={r.platform}>
          <a href={r.href} target="_blank" rel="noopener noreferrer" className="flex h-full items-center gap-4 rounded-xl bg-white px-5 py-4 ring-1 ring-line hover:ring-ink">
            <span className="font-block text-4xl leading-none text-wall">{r.value}</span>
            <span className="text-sm">
              <span className="block font-bold">{r.platform}</span>
              <span className="text-ink/80">{r.count}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Column({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div>
      <p className="tab">
        <span className="tab-dot" aria-hidden="true">
          {icon}
        </span>
        {title}
      </p>
      <ul className="mt-4 space-y-1.5 pl-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-tab">▸</span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Drop = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" /></svg>
);
const Check = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
);
const Glass = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" strokeLinecap="round" /></svg>
);
const Spark = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" /></svg>
);

/** Their oil-change package, set like the board on their waiting-room wall. */
export function PackageBoard() {
  return (
    <div className="board p-6 sm:p-10">
      <p className="font-script text-3xl text-sign sm:text-4xl">Orland Automotive</p>
      <p className="font-block text-2xl tracking-wide text-sign">Oil &amp; Lube package</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Column icon={Drop} title="Change" items={board.change} />
        <Column icon={Check} title="Check / Fill" items={board.checkFill} />
        <Column icon={Glass} title="Inspect" items={board.inspect} />
        <Column icon={Spark} title="Clean (add-on)" items={board.clean} />
      </div>
      <div className="mt-10 border-t-2 border-tab-deep pt-8">
        <p className="font-block text-2xl tracking-wide text-sign">Pick your oil</p>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {boardPrices.tiers.map((t) => (
            <li key={t} className="overflow-hidden rounded-lg bg-white text-center text-ink">
              <p className="bg-tab-deep px-2 py-2 text-sm font-bold text-white">{t}</p>
              <p className="px-2 py-3 text-sm font-bold">Ask at the counter</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-white/85">{boardPrices.note}</p>
        <a href={business.phoneHref} className="btn btn-sign mt-5">
          Call {business.phone} for today&rsquo;s price
        </a>
      </div>
    </div>
  );
}

export function ReviewGrid({ limit = reviews.length }: { limit?: number }) {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.slice(0, limit).map((r) => (
        <li key={r.name} className="flex flex-col rounded-xl bg-white p-6 ring-1 ring-line">
          {/* Yelp is 5.0 across all 10 reviews, so every Yelp quote is 5 stars; Google raters weren't verified individually. */}
          {r.platform === "Yelp" ? <Stars /> : <span className="text-xs font-bold tracking-wide text-ink/70 uppercase">Google review</span>}
          <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm">
            <span className="font-bold">{r.name}</span>
            <span className="text-ink/80">
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center underline underline-offset-2">
                {r.platform}, {r.date}
              </a>
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export function Framed({ photo, sizes, priority = false, className = "" }: { photo: Photo; sizes: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl bg-white p-2 shadow-[0_20px_36px_-26px_rgba(0,0,0,0.7)] ${className}`}>
      <Image src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes={sizes} priority={priority} className="h-auto w-full rounded-lg" />
      <figcaption className="px-1 pt-2 text-xs text-ink/80">{photo.caption}</figcaption>
    </figure>
  );
}

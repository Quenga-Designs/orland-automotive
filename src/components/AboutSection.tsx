import { business } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-safety-yellow">
            Since {business.establishedYear}
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-chalk sm:text-5xl">
            Your Neighborhood Shop
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-chalk-dim">
          <p>
            Orland Automotive Oil &amp; Lube has been keeping local cars and trucks
            running since {business.establishedYear} — foreign or domestic, no
            appointment needed for a standard oil change.
          </p>
          <p className="italic text-chalk/90">&ldquo;{business.tagline}&rdquo;</p>
          <p>
            The shop handles everything from a quick lube to full-vehicle
            repair, right here in Orland.
          </p>
        </div>
      </div>
    </section>
  );
}

import { business } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="border-y border-line bg-paper-raised">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-teal">
            No Appointment Needed
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
            Swing by, or give us a call first.
          </h2>
          <p className="mt-3 max-w-xl text-ink-dim">
            Oil changes are walk-in — for anything bigger, call ahead and the
            team can tell you what to expect.
          </p>
        </div>
        <a
          href={`tel:${business.phoneHref}`}
          className="shrink-0 rounded-sm border-2 border-amber bg-amber px-8 py-4 text-center font-display text-lg uppercase tracking-[0.08em] text-paper-raised transition hover:border-amber-light hover:bg-amber-light"
        >
          Call {business.phone}
        </a>
      </div>
    </section>
  );
}

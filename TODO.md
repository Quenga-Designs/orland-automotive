<!-- audit:start -->
## Audit sweep — 2026-08-08

Automated audit sweep completed 2026-08-08. Tier: deep (cohort — shared scaffold + per-repo divergence check).

## Fixed since 2026-08-08
- [x] [redacted - see private audit]
- [x] [redacted - see private audit]

- [ ] **P1 — The disclosure banner's required link to the real business's actual web presence is only implemented in 2 of 6 sampled repos.** (shared scaffold) — chicosbarbershop and orland-automotive link to the real Facebook page. tacoselcentenario links to a phone number instead. iceburgie, houseoffades, royaltyhair have no real-business link at all — only a link back to quengadesigns.dev/demo. — Standardize ConceptBanner.tsx to always link the best available real-presence signal (Facebook/Yelp/Google) from site-data.ts, falling back to phone only when no web presence exists. Sweep all ~50 sites.
- [ ] **P2 — [redacted - see private audit]** ((shared scaffold))
- [ ] **P2 — [redacted - see private audit]** (.gitignore)
- [ ] **P2 — Publishes a named individual's identity (a manager's name) sourced from a third-party business aggregator rather than a primary/business-owned source, on a site that is unsolicited and whose source is now publicly visible on GitHub.** src/lib/site-data.ts:34 — site-data.ts comment confirms the name was verified via a Birdeye aggregator listing. This is the only repo in the batch naming a specific employee, as opposed to a sole owner-practitioner whose own booking page is the business itself. — Given the elevated exposure from this repo being public, consider whether naming a specific employee is necessary for the concept pitch, or re-confirm via a primary source before keeping it.
- [ ] **P3 — [redacted - see private audit]** ((shared scaffold))
<!-- audit:end -->

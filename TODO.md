<!-- audit:start -->
## Audit sweep — 2026-08-09

Automated audit re-verification 2026-08-09. Tier: deep (cohort — shared scaffold + per-repo divergence check).

## Fixed since 2026-08-08
- [x] Disclosure banner now links both quengadesigns.dev/demo and the real business Facebook page.
- [x] qd-beacon.js now reduces document.referrer to hostname client-side before sending.

- [ ] **P2 — [redacted - see private audit]** ((shared scaffold))
- [ ] **P2 — [redacted - see private audit]** (.gitignore)
- [ ] **P2 — Publishes a named individual's identity (a manager's name) sourced from a third-party business aggregator rather than a primary/business-owned source, on a site that is unsolicited and whose source is now publicly visible on GitHub.** src/lib/site-data.ts:34 — site-data.ts comment confirms the name was verified via a Birdeye aggregator listing. This is the only repo in the batch naming a specific employee, as opposed to a sole owner-practitioner whose own booking page is the business itself. — Given the elevated exposure from this repo being public, consider whether naming a specific employee is necessary for the concept pitch, or re-confirm via a primary source before keeping it.
<!-- audit:end -->

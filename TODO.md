<!-- audit:start -->
## Deep audit — 2026-08-13

Forced-DEEP full-portfolio cycle. Literal coverage: 28/29 tracked files read (exempt: package-lock.json). `npm run build` pass, `npm run lint` 3 pre-existing unused-var warnings in public/qd-beacon.js (no errors). Deploy READY on Vercel at orland-automotive.quengadesigns.dev. Secret history scan clean (8 patterns, full `--all` history). No `.env` ever tracked, working tree clean. Ownership layer verified: LICENSE (proprietary) present, package.json has license: "UNLICENSED" + author. Live-verified triple-layer noindex (X-Robots-Tag header, meta robots, robots.txt Disallow all present together), full per-request nonce CSP + strict-dynamic + HSTS from src/proxy.ts/next.config.ts, `qd-provenance` canary meta (qd-prov:orland-automotive:dab34766) and the beacon's provenance tripwire block all confirmed live. This repo is PUBLIC — one security finding below is redacted per policy; full detail is in the private audit only.

## Fixed since 2026-08-10
- Nothing fixed; both 2026-08-10 P3s remain open, unchanged. New this cycle: a high-severity nanoid advisory appeared (transitive, not present at the 2026-08-10 pass) — same advisory affecting sibling sites solo-salon, candacleaning, showlovethrift.

## Open findings
- [x] **P2 — high-severity dep advisory: nanoid <3.3.18 (transitive via next).** package.json — `npm audit` 2026-08-14 reports 1 high: GHSA-2v37-7h3g-55p8, node_modules/nanoid, fixAvailable true. — fix: `npm audit fix`. (verified fixed 2026-08-19 -- npm audit clean)
- [x] **P3 — Dependency drift: eslint-config-next 16.2.10->16.3.1, react/react-dom 19.2.4->19.2.8, next 16.3.0->16.3.1, and @types/node 20.19.43->26.2.0 are available bumps not yet applied; eslint 9.39.5->10.8.1 and typescript 5.9.3->7.0.2 majors are blocked by upstream peer ranges.** package.json — Re-confirmed 2026-08-14, unchanged from the 2026-08-10 pass. — fix: bump eslint-config-next, next, and react/react-dom (safe), evaluate typescript ->~6.0.x, hold eslint at 9.x. (fixed 2026-08-19 -- safe bumps applied: next/eslint-config-next/react/@types/node latest; eslint 9.x + typescript held, upstream-blocked)
- [x] **NEEDS MARCEL 2026-08-19 — the private audit's own recommendation is to accept this as low-risk (the exposed detail is already public elsewhere) unless the business objects; resolving it for real would mean a destructive git-history rewrite (force-push), which needs Marcel's explicit sign-off, not something to do unilaterally.** **P3 — [redacted - see private audit]** src/lib/site-data.ts

## Audit sweep — 2026-08-09

Automated audit re-verification 2026-08-09. Tier: deep.

No open findings.
<!-- audit:end -->

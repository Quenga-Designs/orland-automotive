<!-- audit:start -->
## Audit sweep — 2026-08-10

Full portfolio deep-audit sweep (forced deep tier). Coverage: 27/28 tracked files read (excluded: package-lock.json). Build pass, 0 npm audit vulns, Vercel deploy READY. No Supabase usage. SonarCloud could not be verified (no SONAR_TOKEN in repo). No secrets found in git history. This repo is PUBLIC — one security finding below is redacted per policy; full detail is in the private audit only. 0 P0, 0 P1, 0 P2, 2 P3 open.

- [ ] **P3 — Dependency drift: eslint-config-next 16.2.10->16.3.0, react/react-dom 19.2.4->19.2.8, and @types/node 20.19.43->26.2.0 are available bumps not yet applied; eslint 9.39.5->10.8.1 and typescript 5.9.3->7.0.2 majors are blocked by upstream peer ranges.** package.json — npm outdated confirms the same eslint-plugin-react/typescript-eslint blocker chain seen elsewhere in this portfolio. — Bump eslint-config-next and react/react-dom (safe), evaluate typescript ->~6.0.x, hold eslint at 9.x.
- [ ] **P3 — [redacted - see private audit]** src/lib/site-data.ts

## Audit sweep — 2026-08-09

Automated audit re-verification 2026-08-09. Tier: deep.

No open findings.
<!-- audit:end -->

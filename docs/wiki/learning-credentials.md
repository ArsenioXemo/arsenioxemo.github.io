# Learning & Credentials

## Inventory status

26 source PDFs: 10 identified unique titles, 2 duplicate copies, 1 partially identified SCRUMstudy document and 13 PDFs without extractable text. The public catalog is a selection, not a complete inventory. Known training duration: 45 hours. Do not publish source PDFs, personal identifiers or credential serial numbers. Expired secure-development credentials are historical training only. MIT Professional Education developed audiovisual content; do not imply it issued the certificate.

## Welcome host

Local WebP assets, responsive layout, reduced-motion alternative and replay control. Verify actual animation duration, loop behavior, keyboard interaction, mobile layout and Lighthouse before release.

## Release status

PR #6 draft. Full inventory and quality review pending.

## QA remediation (HUB-061–067)

External same-origin deferred script; CSP unchanged. Reduced-motion preference disables replay. Added desktop/mobile Playwright coverage for catalog navigation, overflow, keyboard replay, CSP violations and static fallback. Lighthouse includes learning route. Package and lockfile version 0.3.0. Final CI, visual review and release approval pending. Replay test verifies image reload, not frame timing or loop count.

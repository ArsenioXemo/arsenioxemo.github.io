# Release v0.1.1

Scope: own static site and repository only; non-destructive checks.

- [x] Consent defaults to no tracking in source; external script loaded only on acceptance.
- [x] Keyboard focus and skip link implemented.
- [ ] CI build, static smoke and npm audit pass.
- [ ] Browser checks: no tracker request before consent or after rejection/reload; accept loads tracker; revoke and reload stops new tracking. Verify vendor cookies and retention separately.
- [ ] Mobile widths 320/375/768 and desktop; keyboard and screen reader; contrast and accessibility scan.
- [ ] Review HTTPS, response headers, exposed files, secret scanning, dependency lockfile and action pinning. GitHub Pages limits custom response headers.
- [ ] Review privacy notice and vendor processing details before merge.
- [ ] Verify production routes and Metricool Web/RSS; feed currently empty.

No penetration test or WCAG certification claimed. No tests against third-party infrastructure.

# Security hardening — v0.1.1

## Residual risks (pending owner acceptance)
- GitHub Pages does not expose arbitrary response-header configuration. CSP meta cannot enforce frame-ancestors, and X-Frame-Options requires an HTTP header. Clickjacking remains a potential risk until production headers are checked; static public content and no authenticated transactions reduce impact, but consent UI can still be targeted. Do not use JavaScript frame busting as a substitute.
- CSP now restricts styles to same-origin external files and disallows style attributes; regression and actual Metricool compatibility must be verified.
- Local passive ZAP findings are not production findings. Check HTTPS response headers on all five routes and record results for CSP, X-Frame-Options, HSTS, X-Content-Type-Options, Permissions-Policy and cross-origin policies. No active scanning of shared hosting.
- Missing cross-origin isolation is not necessarily a vulnerability for a static site; assess actual resource requirements. Asset caching and MIME findings require individual review.
- Deployment action versions are release tags, not immutable SHA pins; pinning remains pending.

## Release gates
1. Require PR to main and successful build status, disable force pushes and deletion. For a solo maintainer do not require an unavailable independent reviewer; record owner review.
2. New head must pass npm ci, audit, build, smoke, Playwright, Lighthouse and passive ZAP; inspect reports and explicitly accept residual risks before merge.
3. After merge verify Pages deployment, HTTP headers and navigation. Confirm no Metricool traffic before consent or after rejection, real tracking after acceptance and no further tracking after revocation/reload. Verify receipt in Metricool.
4. Tag/release v0.1.1 only after production verification. Roll back via revert PR if needed.

Status: pending validation; not a security certification.

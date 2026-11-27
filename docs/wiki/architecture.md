# Architecture and decisions

- Static Astro site on GitHub Pages; Markdown blog and RSS.
- Native CSS; no database or backend required.
- GitHub Actions: npm ci, dependency audit, build, smoke tests, Playwright, Lighthouse and local passive ZAP.
- Metricool loads only after affirmative consent; preserve revocation and privacy controls.
- SEO uses canonical URLs, Open Graph and Person microdata without inline JSON-LD.
- Public portfolio uses independent examples and synthetic data; Salesforce Opportunity Discount remains under development pending org validation.
- KISS: add dependencies only for justified requirements.

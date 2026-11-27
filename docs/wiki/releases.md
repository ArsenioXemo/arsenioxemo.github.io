# Release history and roadmap

| Version | Scope | Status |
| --- | --- | --- |
| 0.1.0 | Static site, blog, projects, profile, privacy, RSS | Published |
| 0.1.1 | Consent-gated analytics and quality gates | Deployed (main 4328b81) |
| 0.2.0 | Professional profile, portfolio, Trailhead, visual identity, SEO | Merged (a91db01) |
| 0.2.1 | Credential cards and homepage navigation | Merged (849e259) |
| 0.3.0 | Credentials, learning catalog and animated host | Merged (3eefc89); owner confirmed desktop/mobile presentation |
| 0.4.0 | Technical blog content | Draft PR #7; QA pending |

## 0.2.0 traceability

- HUB-042–046: profile, experience, credentials and public profile links.
- HUB-047: cyan X brand identity.
- HUB-048–049: canonical, social metadata and Person microdata.
- HUB-050: extended smoke tests and CI validation; run #29 passed; profile URL metadata corrected in cff3490; run #30 passed.
- HUB-051: version synchronized to 0.2.0; final CI, visual validation, merge, production verification and tag pending.

## Release checklist

- Verify final commit CI and inspect quality reports.
- Verify desktop/mobile layout and public links.
- Review residual security risks and obtain release approval.
- Merge PR, verify deployment and production behavior, then tag release.

## Credentials backlog

Drive inventory: 26 PDFs; 10 titles identified and one SCRUMstudy document partially identified. Complete verification, deduplicate, distinguish course completion from professional certification, and keep original documents private. No publication of personal identifiers.

## 0.2.1 traceability

- HUB-052: reuse blue cards for certifications and align credential badge.
- HUB-053: direct homepage links to profile, blog and projects.
- Owner approved design and deployment. Final CI and production verification pending.
- v0.2.0 merged in a91db01; visual feedback received, deployment run not independently verified.

## 0.4.0 traceability

- HUB-068: prior release status reconciled; formal tags and full production checks remain pending.
- HUB-069–076: article layout, categories, reading time, related articles, SEO, RSS, sharing and three editorial drafts integrated for branch preview.
- HUB-077: version 0.4.0 synchronized, article routes added to Lighthouse, Playwright checks added. Final CI and visual review pending.
- Static publication dates are metadata, not scheduling. Owner must approve publication timing before merge.

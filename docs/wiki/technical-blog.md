# Technical blog

Articles use Markdown under src/pages/blog with ArticleLayout. Required metadata: title, description, pubDate, category, tags. Optional cover, coverAlt and coverCaption. Use local optimized images, meaningful alt text, synthetic examples and no client information. Review every article before publication. Keep drafts outside src/pages. No external scripts or new dependencies.

Implemented in v0.4.0: reading time, related articles, social metadata, RSS, category anchors, responsive layout and optimized WebP covers. CI #55 passed; PR #7 merged. Owner accepted the listing visually. Category navigation uses anchors, not dynamic filters.

## First editorial batch

| Article | Route | Editorial date |
| --- | --- | --- |
| KISS architecture | /blog/kiss-architecture/ | 2026-12-01 |
| Responsible automation | /blog/responsible-automation/ | 2026-12-04 |
| Understand your code | /blog/understand-your-code/ | 2026-12-07 |

All three approved for simultaneous publication. Dates are editorial metadata, not scheduled deployment. Drafts outside src/pages are excluded from the website but remain visible in the public repository. Production article-level acceptance and formal release tag remain pending.

## LinkedIn conversation (v0.4.1)

Optional frontmatter `linkedinPost` accepts an HTTPS www.linkedin.com posts or feed/update activity URL. Until a public post URL is available, the conversation card links to the author profile. Sharing remains available. No embeds, scripts or dependencies. Add verified public post URLs through a PR after publication; never use Metricool planner URLs.

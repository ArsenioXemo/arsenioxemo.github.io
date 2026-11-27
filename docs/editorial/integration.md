# Editorial integration — v0.4.2 proposal

Scope: personal professional brand only. Existing XEMO Tech and La Papa Runner workflows remain unchanged.

## Shared record

One editorial ID, article slug, approved copy, cover path, planned LinkedIn date/time (America/Mexico_City), Metricool post ID, public article URL, public LinkedIn post URL, approval evidence and status. Keep approval and operational records private; only approved article content belongs in the public repository.

## Workflow

1. SMF prepares a draft article and LinkedIn copy with matching editorial ID.
2. Validate originality, privacy, links, cover size, metadata and duplicate IDs.
3. Owner approves exact content and publication schedule.
4. Create GitHub PR; require successful CI and explicit release authorization.
5. Verify public article URL before activating LinkedIn publication in Metricool.
6. After LinkedIn publication, verify public post URL and add linkedinPost frontmatter through a PR.
7. Record results and failures in the existing private editorial checkpoints.

Never use a Metricool planner URL as a public LinkedIn URL. Never create duplicate posts or overwrite approved content without new approval. If any dependency fails, stop that item and report it. No new paid services, dependencies or external scripts.

## Existing pilot mapping

| Editorial ID | LinkedIn ID | Article slug |
| --- | --- | --- |
| ART-001 | LN-001 | kiss-architecture |
| ART-002 | LN-002 | responsible-automation |
| ART-003 | LN-003 | understand-your-code |

Existing scheduled posts are not modified by this documentation. Verify their current state before any edit.

## Acceptance

Dry run one new editorial item, with no publication or activation. Verify both outputs, matching IDs, duplicate prevention and approval gate. Only after owner acceptance may the production automation be changed.

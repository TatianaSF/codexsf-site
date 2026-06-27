# SEO Metadata Map

This file is the working source of truth for page-level SEO metadata.

Implementation targets:

- global metadata: `app/layout.tsx`
- page metadata: `app/*/page.tsx`
- sitemap: `app/sitemap.ts`
- robots: `app/robots.ts`

## Current Public Routes

| URL | Page Purpose | Primary Intent | Primary Keywords | Recommended Title | Recommended Description | H1 | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Brand and site overview | Understand what Codex SF is | Codex SF, San Francisco AI builders, Codex workflows | Codex SF | Community hub for San Francisco builders, hackathons, and practical Codex workflows. | Codex SF | Keep as the main brand landing page. |
| `/hackkit` | HackKit playbook hub | Find a practical hackathon playbook | HackKit, hackathon playbook, AI hackathon guide, hackathon checklist | HackKit | Practical open-source playbook for running community hackathons, including formats, timelines, roles, judging, templates, and lessons. | HackKit | Strong candidate for future child pages. |
| `/events` | Event hub | Find public Codex SF events and recaps | AI events San Francisco, AI hackathon San Francisco, Codex SF events | Events | Upcoming events, public recaps, highlights, and demo projects from the Codex SF builder community. | Events | Add event structured data when real public event dates exist. |
| `/resources` | Organizer resource library | Find reusable templates | hackathon templates, run of show template, judging rubric, volunteer plan template | Resources | Public templates and organizer resources for community hackathons, speakers, volunteers, judging, promotion, and follow-up. | Resources | Strong candidate for template-specific child pages. |
| `/community` | Participation paths | Decide how to join | AI builder community San Francisco, Codex SF community, volunteer AI event | Community | Join Codex SF as a participant, volunteer, speaker, partner, or subscriber. | Community | Add public signup links only when ready to publish. |
| `/tatianasf` | Creator profile | Find the public creator reference | TatianaSF, Codex SF creator, HackKit creator | TatianaSF | TatianaSF is the creator of Codex SF, a public hub for San Francisco builders, HackKit, and practical Codex workflows. | TatianaSF | Dedicated page for the creator keyword. Visible mentions must use the reusable link component. |
| `/about` | Organization context | Understand the project and creator | about Codex SF, HackKit, TatianaSF | About | About Codex SF, HackKit, TatianaSF, and the public community hub for San Francisco builders. | About | Keep private operations boundaries clear. |
| `/log` | Version history | Review public site updates | Codex SF changelog, site updates | Log | Public Codex SF site version log and update history. | Log | Useful for transparency, lower SEO priority. |

## Metadata Implementation Notes

- Keep title length practical and readable. Avoid keyword stuffing.
- Keep descriptions specific to the route.
- The global `metadataBase` should remain `https://codexsf.com`.
- Canonical paths are implemented with trailing slashes to match `next.config.ts`.
- Page metadata is centralized through `createPageMetadata` in `lib/seo.ts`.
- Default Open Graph and Twitter cards use `public/hero-workspace.png`.
- If a route becomes non-public or operational, remove it from `sitemap.ts`.
- Future child pages should be added to this map before implementation.

## Future Child Route Candidates

| Future URL | Source Content | Primary Intent | SEO Value | Notes |
| --- | --- | --- | --- | --- |
| `/hackkit/start-here/` | `content/hackkit/start-here.md` | Start planning a hackathon | High | Implemented through `app/hackkit/[slug]/page.tsx`. |
| `/hackkit/organizer-checklist/` | `content/hackkit/organizer-checklist.md` | Find a hackathon checklist | High | Implemented through `app/hackkit/[slug]/page.tsx`. |
| `/hackkit/judging-pitches/` | `content/hackkit/judging-pitches.md` | Find judging and pitch guidance | Medium | Implemented through `app/hackkit/[slug]/page.tsx`. |
| `/resources/volunteer-plan-template/` | `content/resources/volunteer-plan-template.md` | Find a volunteer plan template | High | Implemented through `app/resources/[slug]/page.tsx`. |
| `/resources/judging-rubric/` | `content/resources/judging-rubric.md` | Find a judging rubric | High | Implemented through `app/resources/[slug]/page.tsx`. |
| `/resources/run-of-show-template/` | `content/resources/run-of-show-template.md` | Find a run of show template | High | Implemented through `app/resources/[slug]/page.tsx`. |
| `/events/upcoming-events` | `content/events/upcoming-events.md` | Find upcoming events | Medium | Should only be expanded when real public dates exist. |

# SEO Content Roadmap

This roadmap turns the current public site into a more searchable content system
without changing the public-safety boundary.

## Phase 1: Optimize Existing Routes

Goal: make the current site clearer to search engines without changing the route
structure.

Tasks:

- Update page metadata using `docs/seo/metadata-map.md`.
- Tighten homepage copy around Codex SF, San Francisco builders, HackKit, and
  practical Codex workflows.
- Add more descriptive internal links from the homepage to HackKit, resources,
  events, and community.
- Review Markdown titles and descriptions for clarity.
- Keep `/log` indexed unless there is a reason to hide it.

## Phase 2: Strengthen Content Hubs

Goal: make `/hackkit`, `/resources`, and `/events` better hub pages.

Tasks:

- Add short introductory copy to each hub explaining who it is for.
- Add internal cross-links between related HackKit and Resource sections.
- Make template descriptions more specific.
- Keep event content evergreen until real public event pages exist.

## Phase 3: Add Child Routes For High-Intent Content

Goal: give high-value Markdown documents their own URLs.

Recommended first routes:

- `/hackkit/start-here`
- `/hackkit/organizer-checklist`
- `/resources/volunteer-plan-template`
- `/resources/judging-rubric`
- `/resources/run-of-show-template`

Implementation notes:

- [x] Reuse the existing Markdown loader.
- [x] Add `generateStaticParams` for collection routes.
- [x] Add page-specific metadata from frontmatter.
- [x] Add each generated route to `sitemap.ts`.
- [x] Add backlinks from child pages to their hub pages.
- [x] Add breadcrumb and `CreativeWork` JSON-LD for child content pages.

## Phase 4: Add Structured Data

Goal: give search engines clearer machine-readable context.

Candidates:

- `WebSite` on the root layout.
- `Organization` when public organization details are final.
- `Person` for the public `TatianaSF` creator page.
- `Event` only for real public events.
- `BreadcrumbList` after child routes exist.

## Phase 5: Use Search Data

Goal: prioritize based on real search behavior.

Tasks:

- Document the Search Console submission workflow.
- Keep a priority URL list for manual inspection.
- Verify Google Search Console.
- Submit the sitemap.
- Review query and page data after indexing.
- Expand pages that already receive impressions.
- Add new pages only when there is a clear audience and public-safe content.

## Do Not Publish

- Private contacts.
- Private signup forms.
- Private event logistics.
- Speaker notes.
- Volunteer assignments.
- Budgets or partner terms.
- Internal planning documents.
- Drafts that are not ready for public indexing.

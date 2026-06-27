# Technical SEO Checklist

Use this checklist before publishing SEO-related changes.

## Existing Foundation

- [x] Static export is enabled in `next.config.ts`.
- [x] `metadataBase` is set in `app/layout.tsx`.
- [x] `app/sitemap.ts` exists.
- [x] `app/robots.ts` exists.
- [x] Public routes use one visible H1.
- [x] Public content is stored in Markdown under `content/`.

## Metadata

- [x] Every public route has a unique `title`.
- [x] Every public route has a unique `description`.
- [x] The homepage title is brand-first.
- [x] Section pages have intent-specific descriptions.
- [x] Open Graph title and description are aligned with page metadata.
- [x] Add `alternates.canonical` if canonical handling needs to be explicit.

## Sitemap And Robots

- [x] `app/sitemap.ts` includes all indexable routes.
- [x] `app/sitemap.ts` excludes any private, draft, or operational routes.
- [x] `app/robots.ts` allows public content.
- [x] Sitemap URL points to `https://codexsf.com/sitemap.xml`.

## Content Structure

- [ ] Each page has one clear H1.
- [ ] H2 and H3 headings describe page sections clearly.
- [ ] Homepage links to the highest-value public pages.
- [ ] Related pages link to each other with descriptive anchor text.
- [ ] Markdown content uses public-safe titles and descriptions.
- [ ] No private contacts, private forms, budgets, assignments, or credentials.

## Images And Social Sharing

- [ ] Homepage has a useful hero image.
- [ ] Add a default social sharing image when available.
- [ ] Add route-specific OG images only when they are public-safe and maintained.
- [ ] Image alt text describes the visible subject.

## Structured Data

- [x] Add `WebSite` structured data.
- [x] Add `Organization` structured data if public organization details are final.
- [ ] Add `Event` structured data only for real public events with dates, location,
      and public URLs.
- [x] Add `BreadcrumbList` if child content routes are introduced.

## Performance And Quality

- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Confirm `out/sitemap.xml` is generated.
- [x] Confirm `out/robots.txt` is generated.
- [x] Confirm important pages render without client-side data dependencies.
- [ ] Keep JavaScript minimal for static content pages.

## Search Console

- [x] Document Search Console verification workflow.
- [x] Document priority URLs for manual inspection.
- [ ] Add and verify `codexsf.com` in Google Search Console.
- [ ] Submit `https://codexsf.com/sitemap.xml`.
- [ ] Check indexing coverage after deployment.
- [ ] Review queries and pages after data is available.
- [ ] Use Search Console data to prioritize future child pages.

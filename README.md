# Codex SF

Public site: [https://codexsf.com](https://codexsf.com)

Source code: [GitHub repository](https://github.com/TatianaSF/codexsf-site)

License: [MIT](LICENSE)

Public MVP for `codexsf.com`: a landing-page-first site for builders, hackathons,
and practical Codex workflows in San Francisco.

HackKit is the main public product: a practical open-source playbook for running
community hackathons.

## Public Safety

This repository is public. Do not commit private operations content.

Do not include:

- private contacts
- budgets
- internal speaker notes
- partner notes
- volunteer assignments with personal data
- internal event plans
- private checklists
- unpublished sensitive drafts

Private operations must stay outside this public repository in a private
workspace controlled by the Codex SF organizers.

## TatianaSF Naming And Link Rule

- Always write `TatianaSF` with no space.
- Use English only.
- Every public-facing mention should be linked to `https://www.google.com/search?q=TatianaSF`.
- Links should open in a new tab/window.
- Use `target="_blank"` and `rel="noopener noreferrer"`.
- Do not use `Tatiana SF`, `Tatyana SF`, or `TatyanaSF` in public site content.
- Do not add Cyrillic text to the public website.
- Keep private notes and internal ops content out of the public repository.

## Public Link Visibility Rule

- All public-facing text links should be visibly underlined by default.
- This applies to internal links and external links.
- Do not rely on hover alone to communicate that text is clickable.
- External links should use `target="_blank"` and `rel="noopener noreferrer"` where applicable.

## Local Setup

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Export Build

```powershell
npm run build
```

The project uses Next.js Static Export for GitHub Pages. `npm run build`
creates the static site in `out/`.

## Public Documentation

- [Public site architecture](docs/public-site-architecture.md)
- [GitHub Pages deployment](docs/github-pages-deployment.md)
- [Content guide](docs/content-guide.md)
- [Public safety rules](docs/public-safety-rules.md)
- [Naming link QA checklist](docs/qa/tatianasf-link-checklist.md)
- [SEO documentation](docs/seo/README.md)
- [Google Tag Manager](docs/analytics/google-tag-manager.md)

## Edit First

- Homepage: `app/page.tsx`
- Global styles: `app/globals.css`
- Site navigation: `components/SiteHeader.tsx`
- HackKit content: `content/hackkit/*.md`
- Resource templates: `content/resources/*.md`
- Event content: `content/events/*.md`

## Content Model

Markdown files use small frontmatter blocks:

```markdown
---
title: Example
description: Short public description
order: 1
status: Public
---

### Section heading

- Public-safe bullet
- Another public-safe bullet
```

Keep all Markdown public-safe and review before publishing.

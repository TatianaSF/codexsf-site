# Codex SF

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

## Local Setup

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```powershell
npm run build
npm run start
```

The project uses a Vercel-friendly Next.js App Router structure.

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

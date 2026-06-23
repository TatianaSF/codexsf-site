# Public Site Architecture

Codex SF is the public community hub for builders, founders, organizers, and people exploring practical Codex-powered workflows in San Francisco.

HackKit is the public open-source Markdown-based playbook inside this site. It shares reusable formats, checklists, templates, and lessons for community hackathons.

## Site Structure

- `app/` contains the Next.js App Router pages, metadata, sitemap, and robots configuration.
- `components/` contains reusable public UI components.
- `content/` is the public Markdown content database.
- `content/hackkit/` contains the public HackKit playbook.
- `content/resources/` contains public templates and reusable organizer resources.
- `content/events/` contains public event notes, recaps, highlights, and demo project summaries.
- `public/` contains static public assets.
- `docs/` contains public contributor documentation for this repository.

## Static Export

The site uses Next.js Static Export. `next.config.ts` sets `output: "export"`, so `npm run build` creates an `out/` directory with static HTML, CSS, JavaScript, and assets.

GitHub Pages serves the generated `out/` directory. The public domain is expected to be `codexsf.com`, so the project does not use a repository subpath or `basePath`.

## Markdown Content Flow

Markdown files in `content/` include small frontmatter blocks with public metadata such as `title`, `description`, `order`, `date`, and `status`.

At build time, the site reads these Markdown files and renders them into public pages. Every Markdown file in this repository must be safe to publish.

## Out Of Scope

This repository is only for the public Codex SF website and public HackKit playbook.

Do not add private operations content, private contacts, budgets, internal strategy, speaker notes, volunteer assignments, partner-specific planning, credentials, or unpublished sensitive drafts.

Private operations should stay in a separate private workspace controlled by the organizers.

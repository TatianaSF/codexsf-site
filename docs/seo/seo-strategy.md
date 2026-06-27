# SEO Strategy

This document defines the public SEO direction for Codex SF.

Codex SF should rank for practical, community-focused searches around San
Francisco AI builders, Codex workflows, and reusable hackathon operating
materials.

## Goals

- Make the public purpose of Codex SF clear to search engines and visitors.
- Help builders find Codex SF when searching for AI builder events in San Francisco.
- Help organizers find HackKit when searching for practical hackathon playbooks,
  checklists, templates, and demo guidance.
- Keep all indexed content public-safe and free of private operations material.
- Build a structure that can grow from broad landing pages into specific,
  search-focused content pages.

## Primary Audiences

- Builders in San Francisco looking for practical AI and Codex events.
- Hackathon organizers looking for reusable public event formats and templates.
- Speakers, volunteers, and partners evaluating whether Codex SF is relevant.
- People searching for examples of practical Codex-powered workflows.

## Search Positioning

Codex SF should be positioned as:

- a San Francisco builder community;
- a practical AI and Codex event hub;
- the public home of HackKit;
- an open playbook for running clearer community hackathons.

## Core Topic Clusters

### Codex SF Community

Primary pages:

- `/`
- `/community`
- `/about`

Example search intents:

- San Francisco AI builders
- AI builder community San Francisco
- Codex community San Francisco
- practical AI events San Francisco

### HackKit

Primary page:

- `/hackkit`

Future child pages:

- `/hackkit/start-here`
- `/hackkit/event-formats`
- `/hackkit/timeline`
- `/hackkit/organizer-checklist`
- `/hackkit/judging-pitches`

Example search intents:

- hackathon playbook
- hackathon organizer checklist
- AI hackathon format
- hackathon judging guide
- hackathon pitch rules

### Organizer Resources

Primary page:

- `/resources`

Future child pages:

- `/resources/volunteer-plan-template`
- `/resources/judging-rubric`
- `/resources/speaker-instructions`
- `/resources/run-of-show-template`

Example search intents:

- hackathon run of show template
- hackathon volunteer plan template
- hackathon judging rubric
- speaker instructions for hackathon
- post event follow up template

### Events

Primary page:

- `/events`

Future child pages:

- `/events/upcoming-events`
- `/events/past-events`
- `/events/event-recaps`
- `/events/demo-projects`

Example search intents:

- AI hackathon San Francisco
- Codex events San Francisco
- AI demo night San Francisco
- San Francisco builder events

## Content Principles

- One clear search intent per major page.
- One clear H1 per page.
- Metadata should describe the page, not the whole organization.
- Public-safe content only.
- Avoid private contacts, private forms, budgets, volunteer assignments, and
  unpublished operations notes.
- Link related pages together with descriptive anchor text.
- Prefer durable evergreen wording over event-specific language unless the page is
  actually an event page.

## Technical Principles

- Keep `sitemap.ts` aligned with all indexable routes.
- Keep `robots.ts` permissive for public content.
- Use canonical URLs rooted at `https://codexsf.com`.
- Add page-specific Open Graph metadata where possible.
- Use static export-compatible metadata and routes.
- Add dedicated OG images only when they are ready and public-safe.

## Growth Path

1. Optimize metadata for the existing seven public routes.
2. Improve page copy so each route has a distinct search intent.
3. Add internal links from the homepage to the most valuable public resources.
4. Split high-value Markdown sections into dedicated routes when search demand
   justifies it.
5. Add structured data for the organization, website, and future events.

# Google Tag Manager

Codex SF uses Google Tag Manager as the public analytics and marketing tag
container.

## Container

```text
GTM-W57BDKGX
```

## App Integration

The container is loaded from:

```text
components/GoogleTagManager.tsx
```

The component is mounted in:

```text
app/layout.tsx
```

The GTM ID is configured in:

```text
lib/seo.ts
```

## Environment Variable

The site has a built-in fallback to the current GTM container. If the container
ever changes, set this environment variable before building:

```text
NEXT_PUBLIC_GTM_ID=GTM-W57BDKGX
```

## Recommended Tags Inside GTM

Add tags inside Google Tag Manager, not directly in the codebase.

Recommended first tags:

- Google Analytics 4 configuration tag.
- Google Search Console verification tag only if needed.
- Consent Mode configuration if ad or remarketing tags are added later.
- Link click tracking for important outbound links.
- Page view tracking for all public routes.

## Recommended Triggers

- All Pages.
- Click - Just Links.
- Custom events only after a real measurement plan exists.

## Suggested Data Hygiene

- Do not collect private contacts, attendee data, budgets, internal planning
  notes, or unpublished event operations.
- Do not send form fields or personally identifying information through GTM.
- Keep GTM changes documented in this file when new tags are added.

## Copy Blocks

When sharing values that need to be copied into Google Tag Manager or another
service, use standalone fenced code blocks.

Example:

```text
GTM-W57BDKGX
```

# Project Instructions

## Chat Reporting

- User-facing reports should be written in Russian unless the user asks for another language.
- Any text that the user may need to copy and paste elsewhere must be shown in a separate fenced copy-code block.
- Put only the copyable content inside that block, without extra prose, bullets, or surrounding quotes.
- When recommending a next step, also include the recommended Codex reasoning level and model in the same user-facing format as the Codex UI.
  Use reasoning labels exactly as shown in the UI: `Low`, `Medium`, `High`, or `Extra High`.
  Use model names exactly as shown in the UI, for example `GPT-5.5`.
  Preferred report format:

```text
Рекомендуемая настройка Codex:
Reasoning: High
Model: GPT-5.5
```

Example:

```text
GTM-W57BDKGX
```

## Public Site Rules

- Keep public content in English.
- Keep private operations, contacts, budgets, credentials, internal notes, and unpublished plans out of this public repository.
- Public-facing mentions of `TatianaSF` must use the exact spelling `TatianaSF`.
- All public-facing text links, internal and external, must be visibly underlined by default without requiring hover.
- If one clickable public block contains both a primary title and secondary description that go to the same URL, underline only the primary title or first line, not the secondary description.
- Browser identity icons must be configured site-wide. Keep `favicon.ico`, 16x16/32x32/48x48 favicons, `icon.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, and `manifest.webmanifest` in `public/`, generated from the CodexSF mark with a readable light badge. Keep `app/layout.tsx` metadata wired to stable icon URLs without query parameters so every public route exposes the same favicon, app icon, Apple touch icon, and web manifest. The `48x48` and `192x192` icons are especially important for Google Search favicon eligibility.
- After changing icons or global metadata, run `npm run build` and verify the generated `out/**/*.html` files include `favicon.ico`, `apple-touch-icon`, and `manifest.webmanifest`.

# Search Console And Indexing Readiness

This file tracks the production indexing workflow for `codexsf.com`.

## Current Status

- Local static export builds successfully.
- `out/sitemap.xml` is generated.
- `out/robots.txt` is generated.
- Public sitemap target: `https://codexsf.com/sitemap.xml`
- Primary Search Console property recommendation: Domain property for
  `codexsf.com`.

## Recommended Verification

Use a Google Search Console Domain property:

```text
codexsf.com
```

Do not include `https://` or a path when creating the Domain property.

Domain properties cover protocols and subdomains, but they require DNS
verification.

## Fallback URL-prefix Verification

If a URL-prefix property is needed, use:

```text
https://codexsf.com/
```

The app supports HTML tag verification through:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

Set this environment variable to the content value from the Google verification
meta tag, then rebuild and redeploy.

Example meta tag from Google:

```html
<meta name="google-site-verification" content="TOKEN_FROM_GOOGLE" />
```

Use only:

```text
TOKEN_FROM_GOOGLE
```

## Submit Sitemap

After the deployed site is live:

1. Open Google Search Console.
2. Select the `codexsf.com` property.
3. Open the Sitemaps report.
4. Submit:

```text
https://codexsf.com/sitemap.xml
```

5. Confirm the sitemap status becomes `Success`.

## Request Indexing

Use URL Inspection for the highest-priority pages:

```text
https://codexsf.com/
https://codexsf.com/tatianasf/
https://codexsf.com/resources/judging-rubric/
https://codexsf.com/resources/run-of-show-template/
https://codexsf.com/hackkit/organizer-checklist/
```

For each URL:

1. Run URL Inspection.
2. Confirm the live URL is accessible.
3. Request indexing.

## Post-submit Monitoring

Check Search Console after deployment:

- sitemap fetch status;
- indexed versus discovered URLs;
- impressions for `TatianaSF`;
- impressions for `hackathon judging rubric`;
- impressions for `hackathon run of show template`;
- impressions for `hackathon organizer checklist`;
- pages with impressions but low click-through rate.

## Official References

- Google Search Console Sitemaps report:
  `https://support.google.com/webmasters/answer/7451001`
- Google Search Console ownership verification:
  `https://support.google.com/webmasters/answer/9008080`
- Google Search Console property setup:
  `https://support.google.com/webmasters/answer/34592`

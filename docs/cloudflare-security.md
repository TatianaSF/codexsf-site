# Cloudflare Security Checklist

This site is served as a static GitHub Pages site behind Cloudflare.
Repository code can build the public site, but HTTPS redirects and response
security headers should be managed in Cloudflare.

## Goal 1: Force HTTPS

Expected behavior:

```text
http://codexsf.com
301 -> https://codexsf.com

http://www.codexsf.com
301 -> https://codexsf.com
```

Recommended Cloudflare setting:

1. Open Cloudflare.
2. Select `codexsf.com`.
3. Open `SSL/TLS`.
4. Open `Edge Certificates`.
5. Enable `Always Use HTTPS`.
6. Wait several minutes for edge propagation.
7. Verify with:

```powershell
curl.exe -I http://codexsf.com
curl.exe -IL http://www.codexsf.com
```

## Goal 2: Add Response Security Headers

Recommended first-pass headers:

```text
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
X-Frame-Options: DENY
```

Recommended Cloudflare path:

1. Open Cloudflare.
2. Select `codexsf.com`.
3. Open `Rules`.
4. Open `Transform Rules`.
5. Create a `Modify Response Header` rule.
6. Apply it to:

```text
Hostname equals codexsf.com
or
Hostname equals www.codexsf.com
```

7. Set the headers listed above.
8. Deploy the rule.
9. Verify with:

```powershell
curl.exe -I https://codexsf.com
curl.exe -I https://www.codexsf.com
```

## Content Security Policy

Do not add an enforcing `Content-Security-Policy` until it has been tested.
The site currently uses Next.js inline scripts, JSON-LD, and Google Tag Manager.
An overly strict CSP can break analytics or page hydration.

Recommended next step:

1. Start with `Content-Security-Policy-Report-Only`.
2. Test the homepage, mobile menu, and Google Tag Manager.
3. Move to an enforcing CSP only after no required resource is blocked.

Starter report-only policy:

```text
Content-Security-Policy-Report-Only: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; frame-src https://www.googletagmanager.com; upgrade-insecure-requests
```

## Verification Checklist

Passing state:

- `http://codexsf.com` redirects to `https://codexsf.com`.
- `http://www.codexsf.com` redirects to `https://codexsf.com`.
- `https://codexsf.com` returns `200 OK`.
- `https://www.codexsf.com` redirects to `https://codexsf.com`.
- HTTPS responses include the first-pass security headers.
- Site pages still render correctly.
- Google Tag Manager still loads only the approved public container.

## References

- [Cloudflare: Always Use HTTPS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/always-use-https/)
- [Cloudflare: Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/)
- [Cloudflare: Response Header Transform Rules](https://developers.cloudflare.com/rules/transform/response-header-modification/)
- [Cloudflare: Create a response header transform rule](https://developers.cloudflare.com/rules/transform/response-header-modification/create-dashboard/)

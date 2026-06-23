# GitHub Pages Deployment

GitHub Pages is the public hosting target for `codexsf.com`.

The site is built with GitHub Actions. The workflow lives at `.github/workflows/pages.yml`.

## Build Flow

1. A push to `main` or a manual `workflow_dispatch` starts the workflow.
2. GitHub Actions checks out the repository.
3. Node.js is installed with npm caching.
4. Dependencies are installed with `npm ci`.
5. `npm run lint` validates the public codebase.
6. `npm run build` runs the Next.js Static Export build.
7. Next.js writes the static site to `out/`.
8. The workflow uploads `out/` as a GitHub Pages artifact.
9. `actions/deploy-pages` publishes the artifact to GitHub Pages.

## Repository Settings

GitHub Pages should use GitHub Actions as the publishing source:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

The custom domain should be:

```text
codexsf.com
```

After the custom domain is saved and DNS is correct, enable:

```text
Settings -> Pages -> Enforce HTTPS
```

## DNS Plan

Configure the custom domain in GitHub Pages before adding DNS records. This reduces custom domain takeover risk.

For the apex domain:

```text
A     codexsf.com  185.199.108.153
A     codexsf.com  185.199.109.153
A     codexsf.com  185.199.110.153
A     codexsf.com  185.199.111.153
```

Optional IPv6 records:

```text
AAAA  codexsf.com  2606:50c0:8000::153
AAAA  codexsf.com  2606:50c0:8001::153
AAAA  codexsf.com  2606:50c0:8002::153
AAAA  codexsf.com  2606:50c0:8003::153
```

For `www`:

```text
CNAME www          TatianaSF.github.io
```

GitHub Pages should redirect `www.codexsf.com` to `codexsf.com` when the apex domain is the configured custom domain.

Do not create wildcard DNS records. Do not create private operations DNS records.

## Troubleshooting

- Confirm the workflow finished successfully in the Actions tab.
- Confirm `out/index.html` exists in local builds.
- Confirm `out/404.html` exists in local builds.
- Confirm GitHub Pages source is set to GitHub Actions.
- Confirm the custom domain is `codexsf.com`.
- Confirm Cloudflare DNS records match the GitHub Pages records.
- Confirm HTTPS enforcement is enabled after GitHub allows it.
- Confirm no private or sensitive files were added to the repository.

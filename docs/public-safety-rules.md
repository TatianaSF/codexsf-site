# Public Safety Rules

Everything in this repository is public.

Before committing any file, assume it can be read by participants, partners, sponsors, journalists, search engines, and future contributors.

## Do Not Commit Secrets

Never commit:

- API tokens
- passwords
- private keys
- credentials
- `.env` files
- Cloudflare tokens
- GitHub tokens
- Vercel tokens
- service account files

## Do Not Commit Private Operations Content

Never commit:

- private contacts
- budgets
- internal strategy
- internal checklists
- private drafts
- speaker notes
- volunteer assignments
- partner notes
- contract terms
- venue logistics that are not public
- attendee lists
- private feedback
- private admin links

## Keep Public And Private Work Separate

This repository is for the public Codex SF website and the public HackKit playbook.

Private operations should stay outside this repository in a separate private workspace controlled by the organizers.

## Public Markdown Rule

Markdown in `content/` is published into the website during the static build. Treat every Markdown file as public website content.

## Review Checklist

Before opening a pull request or pushing to `main`, check:

- The content is useful to public readers.
- The content does not expose private people, plans, budgets, or contacts.
- The content does not include credentials or tokens.
- The content does not reference private admin systems.
- The content fits the public Codex SF and HackKit mission.

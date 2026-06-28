import type { Metadata } from "next";
import Link from "next/link";
import { TatianaLink } from "@/components/TatianaLink";
import { createPageMetadata, GITHUB_REPO_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About CodexSF",
  description:
    "About CodexSF, the open-source San Francisco builder hub by TatianaSF with HackKit resources, Codex workflows, and GitHub-based tools.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>About</h1>
          <p>
            CodexSF is an open-source community hub by TatianaSF for builders,
            hackathons, HackKit resources, and practical Codex workflows in San
            Francisco.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid two">
          <article className="card">
            <h3>What this site is for</h3>
            <p>
              The public site helps visitors understand the community, explore
              HackKit, find events, and reuse public organizer resources.
            </p>
          </article>
          <article className="card">
            <h3>What stays private</h3>
            <p>
              Private operations, budgets, internal notes, partner details, and
              personal data should stay out of this public repository.
            </p>
          </article>
          <article className="card">
            <h3>
              Created by <TatianaLink />
            </h3>
            <p>
              CodexSF is created as a practical, community-friendly home for
              San Francisco builders and hackathon organizers.
            </p>
            <div className="article-actions">
              <Link className="button secondary" href="/tatianasf">
                Creator profile
              </Link>
            </div>
          </article>
          <article className="card">
            <h3>HackKit first</h3>
            <p>
              HackKit is the main public product: an open playbook for planning
              clearer, kinder, more useful community hackathons.
            </p>
          </article>
          <article className="card">
            <h3>Open source on GitHub</h3>
            <p>
              The public website, HackKit docs, and reusable builder resources
              are published from an open GitHub repository.
            </p>
            <div className="article-actions">
              <a
                className="button secondary"
                href={GITHUB_REPO_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                View repository
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

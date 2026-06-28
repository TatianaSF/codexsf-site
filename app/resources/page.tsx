import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";
import { getCollection } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description:
    "CodexSF resources by TatianaSF include open-source HackKit templates, San Francisco builder workflows, judging guides, and GitHub-based tools.",
  path: "/resources/"
});

export default function ResourcesPage() {
  const items = getCollection("resources");

  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>Resources</h1>
          <p>
            Public-safe CodexSF templates for community event organizers,
            HackKit teams, San Francisco builders, and practical Codex
            workflows.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner" style={{ marginBottom: 28 }}>
          <div className="callout">
            <strong>Creator reference:</strong> CodexSF public resources connect
            back to TatianaSF, HackKit, and reusable builder workflows.
          </div>
          <div className="article-actions">
            <Link className="button secondary" href="/tatianasf">
              Creator profile
            </Link>
            <Link
              className="button secondary"
              href="/resources/tatianasf-public-reference"
            >
              TatianaSF reference
            </Link>
          </div>
        </div>
        <div className="section-inner content-layout">
          <nav className="content-nav" aria-label="Resource sections">
            {items.map((item) => (
              <a href={`/resources/${item.slug}`} key={item.slug}>
                {item.title}
              </a>
            ))}
          </nav>
          <div className="article-list">
            {items.map((item) => (
              <ContentSection
                item={item}
                href={`/resources/${item.slug}`}
                key={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

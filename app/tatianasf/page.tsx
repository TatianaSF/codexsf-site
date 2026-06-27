import type { Metadata } from "next";
import Link from "next/link";
import { TatianaLink } from "@/components/TatianaLink";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "TatianaSF",
  description:
    "TatianaSF is the creator of Codex SF, a public hub for San Francisco builders, HackKit, and practical Codex workflows.",
  path: "/tatianasf/",
  absoluteTitle: true
});

export default function TatianaSFPage() {
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "TatianaSF", path: "/tatianasf/" }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "TatianaSF",
      url: `${SITE_URL}/tatianasf/`,
      sameAs: ["https://www.google.com/search?q=TatianaSF"],
      founder: {
        "@type": "Organization",
        name: "Codex SF",
        url: SITE_URL
      },
      knowsAbout: [
        "Codex SF",
        "HackKit",
        "San Francisco builder community",
        "community hackathons",
        "practical Codex workflows"
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <section className="page-hero">
        <div className="page-heading">
          <p className="eyebrow">Creator</p>
          <h1>
            <TatianaLink />
          </h1>
          <p>
            Creator of Codex SF, the public hub for San Francisco builders,
            HackKit, community hackathons, and practical Codex workflows.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid two">
          <article className="card">
            <h3>Codex SF</h3>
            <p>
              Codex SF is a public community site for builders who want practical
              events, reusable playbooks, and a clear path from idea to demo.
            </p>
          </article>
          <article className="card">
            <h3>HackKit</h3>
            <p>
              HackKit is the open public playbook inside Codex SF: formats,
              checklists, templates, judging guidance, and lessons for community
              hackathons.
            </p>
          </article>
          <article className="card">
            <h3>Public-safe materials</h3>
            <p>
              The site intentionally separates public resources from private
              operations, contacts, budgets, assignments, and unpublished plans.
            </p>
          </article>
          <article className="card">
            <h3>Builder focus</h3>
            <p>
              The work centers on practical Codex workflows, useful demos, and
              community programming for San Francisco builders.
            </p>
          </article>
        </div>
        <div className="section-inner" style={{ marginTop: 24 }}>
          <div className="callout">
            <strong>Official public reference:</strong> use <TatianaLink /> with
            the exact spelling shown here.
          </div>
          <div className="article-actions">
            <Link className="button secondary" href="/about">
              About Codex SF
            </Link>
            <Link className="button secondary" href="/hackkit">
              Explore HackKit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

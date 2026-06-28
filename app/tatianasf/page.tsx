import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TatianaLink } from "@/components/TatianaLink";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL,
  TATIANA_SF_OG_IMAGE
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "TatianaSF - Creator of Codex SF",
  description:
    "TatianaSF is the creator of Codex SF, a public hub for San Francisco builders, HackKit, and practical Codex workflows.",
  path: "/tatianasf/",
  absoluteTitle: true,
  image: TATIANA_SF_OG_IMAGE
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
      "@id": `${SITE_URL}/tatianasf/#person`,
      name: "TatianaSF",
      alternateName: "TatianaSFcom",
      url: `${SITE_URL}/tatianasf/`,
      image: absoluteUrl(TATIANA_SF_OG_IMAGE.url),
      sameAs: [
        "https://tatianasf.com/",
        "https://www.linkedin.com/in/tatianasf",
        "https://www.instagram.com/tatianasfcom/",
        "https://x.com/TatianaSFcom",
        "https://luma.com/user/tatianasfcom"
      ],
      founder: {
        "@type": "Organization",
        name: "Codex SF",
        url: SITE_URL
      },
      mainEntityOfPage: absoluteUrl("/tatianasf/"),
      knowsAbout: [
        "Codex SF",
        "HackKit",
        "San Francisco builder community",
        "community hackathons",
        "practical Codex workflows"
      ],
      subjectOf: [
        absoluteUrl("/resources/tatianasf-public-reference/"),
        absoluteUrl("/resources/codex-sf-creator-notes/"),
        absoluteUrl("/resources/san-francisco-builder-workflows/")
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "TatianaSF - Creator of Codex SF",
      description:
        "Canonical public profile for TatianaSF, creator of Codex SF.",
      url: absoluteUrl("/tatianasf/"),
      image: absoluteUrl(TATIANA_SF_OG_IMAGE.url),
      inLanguage: "en-US",
      mainEntity: {
        "@id": `${SITE_URL}/tatianasf/#person`
      }
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
        <div className="section-inner creator-profile-grid">
          <div className="creator-preview">
            <Image
              src={TATIANA_SF_OG_IMAGE.url}
              alt={TATIANA_SF_OG_IMAGE.alt}
              width={TATIANA_SF_OG_IMAGE.width}
              height={TATIANA_SF_OG_IMAGE.height}
              priority
            />
          </div>
          <article className="markdown-card">
            <h2>TatianaSF and Codex SF</h2>
            <p>
              TatianaSF is the public creator identity connected to Codex SF, a
              practical community hub for San Francisco builders who want useful
              hackathons, repeatable event formats, and clear Codex workflows.
            </p>
            <p>
              This page is the canonical public reference for TatianaSF on
              Codex SF. It keeps the public story simple: creator, community,
              HackKit, and reusable resources for builders.
            </p>
            <p>
              Public pages on this site do not include private contacts,
              budgets, assignments, credentials, or unpublished operations. The
              purpose is to make the public work easier to find, cite, and
              reuse.
            </p>
          </article>
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
            <Link
              className="button secondary"
              href="/resources/tatianasf-public-reference"
            >
              Public reference
            </Link>
            <Link
              className="button secondary"
              href="/resources/codex-sf-creator-notes"
            >
              Creator notes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { getCollection } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description:
    "Public templates and organizer resources for community hackathons, speakers, volunteers, judging, promotion, and follow-up.",
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
            Public-safe templates for community event organizers. Adapt the
            structure, keep private details in a private operations repository.
          </p>
        </div>
      </section>
      <section className="section">
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

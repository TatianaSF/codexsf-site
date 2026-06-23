import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Public templates and organizer resources for Codex SF events."
};

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
              <a href={`#${item.slug}`} key={item.slug}>
                {item.title}
              </a>
            ))}
          </nav>
          <div className="article-list">
            {items.map((item) => (
              <ContentSection item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

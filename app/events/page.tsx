import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { getCollection } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Events",
  description:
    "Upcoming events, public recaps, highlights, and demo projects from the Codex SF builder community.",
  path: "/events/"
});

export default function EventsPage() {
  const items = getCollection("events");

  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>Events</h1>
          <p>
            Upcoming events, past events, recaps, public photos and highlights, and
            demo projects from the Codex SF builder community.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner content-layout">
          <nav className="content-nav" aria-label="Event sections">
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

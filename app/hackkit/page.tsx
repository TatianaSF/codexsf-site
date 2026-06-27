import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { getCollection } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "HackKit",
  description:
    "Practical open-source playbook for running community hackathons, including formats, timelines, roles, judging, templates, and lessons.",
  path: "/hackkit/"
});

export default function HackKitPage() {
  const items = getCollection("hackkit");

  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>HackKit</h1>
          <p>
            Practical open-source playbook for running community hackathons:
            formats, timelines, checklists, roles, judging, templates, and lessons
            learned.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner content-layout">
          <nav className="content-nav" aria-label="HackKit sections">
            {items.map((item) => (
              <a href={`/hackkit/${item.slug}`} key={item.slug}>
                {item.title}
              </a>
            ))}
          </nav>
          <div className="article-list">
            {items.map((item) => (
              <ContentSection
                item={item}
                href={`/hackkit/${item.slug}`}
                key={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

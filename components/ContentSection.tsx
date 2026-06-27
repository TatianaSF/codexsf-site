import { MarkdownBody } from "@/components/MarkdownBody";
import type { ContentItem } from "@/lib/content";
import Link from "next/link";

export function ContentSection({
  item,
  href
}: {
  item: ContentItem;
  href?: string;
}) {
  return (
    <article className="markdown-card" id={item.slug}>
      <h2>{item.title}</h2>
      {item.description ? <p className="description">{item.description}</p> : null}
      <MarkdownBody body={item.body} />
      {href ? (
        <div className="article-actions">
          <Link className="button secondary" href={href}>
            Open full page
          </Link>
        </div>
      ) : null}
    </article>
  );
}

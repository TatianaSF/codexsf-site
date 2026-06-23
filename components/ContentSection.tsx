import { MarkdownBody } from "@/components/MarkdownBody";
import type { ContentItem } from "@/lib/content";

export function ContentSection({ item }: { item: ContentItem }) {
  return (
    <article className="markdown-card" id={item.slug}>
      <h2>{item.title}</h2>
      {item.description ? <p className="description">{item.description}</p> : null}
      <MarkdownBody body={item.body} />
    </article>
  );
}

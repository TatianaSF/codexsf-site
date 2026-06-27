import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { getCollection, getContentItem } from "@/lib/content";
import {
  createBreadcrumbJsonLd,
  createCreativeWorkJsonLd,
  createPageMetadata,
  serializeJsonLd
} from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getCollection("hackkit").map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("hackkit", slug);

  if (!item) {
    notFound();
  }

  return createPageMetadata({
    title: `${item.title} - HackKit`,
    description: item.description,
    path: `/hackkit/${item.slug}/`
  });
}

export default async function HackKitItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("hackkit", slug);

  if (!item) {
    notFound();
  }

  const path = `/hackkit/${item.slug}/` as const;
  const jsonLd = [
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "HackKit", path: "/hackkit/" },
      { name: item.title, path }
    ]),
    createCreativeWorkJsonLd({
      title: item.title,
      description: item.description,
      path,
      isPartOf: "HackKit"
    })
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <section className="page-hero">
        <div className="page-heading">
          <p className="eyebrow">HackKit</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner narrow-content">
          <article className="markdown-card">
            <MarkdownBody body={item.body} />
          </article>
          <div className="article-actions">
            <Link className="button secondary" href="/hackkit">
              Back to HackKit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

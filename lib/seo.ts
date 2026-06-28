import type { Metadata } from "next";

export const SITE_URL = "https://codexsf.com";
export const SITE_NAME = "Codex SF";
export const SITE_DESCRIPTION =
  "Community hub for San Francisco builders, hackathons, and practical Codex workflows.";
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
export const GOOGLE_TAG_MANAGER_ID =
  process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-W57BDKGX";

export const DEFAULT_OG_IMAGE = {
  url: "/hero-workspace.png",
  width: 1536,
  height: 864,
  alt: "A bright San Francisco builder workspace prepared for a hackathon"
} as const;

export const TATIANA_SF_OG_IMAGE = {
  url: "/og-tatianasf.png",
  width: 1200,
  height: 630,
  alt: "TatianaSF creator reference card for Codex SF"
} as const;

type OgImage = {
  url: `/${string}`;
  width: number;
  height: number;
  alt: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  absoluteTitle?: boolean;
  image?: OgImage;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = DEFAULT_OG_IMAGE
}: PageMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [image],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url]
    }
  };
}

export const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    founder: {
      "@type": "Person",
      name: "TatianaSF",
      url: `${SITE_URL}/tatianasf/`,
      image: absoluteUrl(TATIANA_SF_OG_IMAGE.url),
      sameAs: [
        "https://tatianasf.com/",
        "https://www.linkedin.com/in/tatianasf",
        "https://www.instagram.com/tatianasfcom/",
        "https://x.com/TatianaSFcom",
        "https://luma.com/user/tatianasfcom"
      ]
    }
  }
] as const;

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function absoluteUrl(path: `/${string}`) {
  return new URL(path, SITE_URL).toString();
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: `/${string}` }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function createCreativeWorkJsonLd({
  title,
  description,
  path,
  isPartOf
}: {
  title: string;
  description: string;
  path: `/${string}`;
  isPartOf: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    headline: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebPage",
      name: isPartOf,
      url: absoluteUrl(isPartOf === "HackKit" ? "/hackkit/" : "/resources/")
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    inLanguage: "en-US"
  };
}

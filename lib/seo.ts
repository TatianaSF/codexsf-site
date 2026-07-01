import type { Metadata } from "next";

export const SITE_URL = "https://codexsf.com";
export const SITE_NAME = "CodexSF";
export const SITE_TITLE = "TatianaSF | CodexSF Open-Source Builder Hub";
export const ENTITY_NAME = "TatianaSF";
export const ENTITY_PATH = "/tatianasf/" as const;
export const BRAND_QUERY = "TatianaSF";
export const CANONICAL_PROFILE_URL = "https://tatianasf.com/";
export const LOCATION_CONTEXT = "San Francisco builder community";
export const GITHUB_REPO_URL = "https://github.com/TatianaSF/codexsf-site";
export const PROJECT_LICENSE = "MIT";
export const PROJECT_LICENSE_URL = `${GITHUB_REPO_URL}/blob/main/LICENSE`;
export const SITE_DESCRIPTION =
  "TatianaSF builds CodexSF, an open-source San Francisco hub for Codex workflows, HackKit resources, community events, and GitHub-based builder tools.";
export const SITE_UPDATED_AT = "2026-06-30";
export const SITE_TOPICS = [
  ENTITY_NAME,
  "CodexSF",
  "open-source builder hub",
  "San Francisco builders",
  "HackKit",
  "community hackathons",
  "practical Codex workflows",
  "GitHub-based builder tools",
  "AI-readable public resources"
] as const;
export const SITE_KEYWORDS = [
  BRAND_QUERY,
  "CodexSF",
  "TatianaSF CodexSF",
  "Codex SF",
  "OpenAI Codex",
  "San Francisco builders",
  "HackKit",
  "community hackathons",
  "builder workflows",
  "open source project",
  "GitHub builder resources",
  "AI crawler friendly site"
] as const;
export const SITE_SAME_AS = [
  GITHUB_REPO_URL,
  CANONICAL_PROFILE_URL,
  "https://www.linkedin.com/in/tatianasf",
  "https://www.instagram.com/tatianasfcom/",
  "https://x.com/TatianaSFcom",
  "https://luma.com/user/tatianasfcom"
] as const;
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
  alt: "TatianaSF creator reference card for CodexSF"
} as const;

export const OPEN_SOURCE_GITHUB_IMAGE = {
  url: "/open-source-github.png",
  width: 1200,
  height: 630,
  alt: "CodexSF open source project card linking the public site to GitHub"
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
    keywords: [...SITE_KEYWORDS],
    authors: [{ name: ENTITY_NAME, url: absoluteUrl(ENTITY_PATH) }],
    creator: ENTITY_NAME,
    publisher: SITE_NAME,
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
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ["Codex SF", `${BRAND_QUERY} CodexSF`],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US",
    keywords: [...SITE_KEYWORDS],
    about: [...SITE_TOPICS],
    sameAs: [GITHUB_REPO_URL],
    hasPart: [
      {
        "@type": "Dataset",
        name: "CodexSF machine-readable profile",
        url: `${SITE_URL}/profile.json`,
        encodingFormat: "application/json"
      },
      {
        "@type": "Dataset",
        name: "CodexSF machine-readable sections",
        url: `${SITE_URL}/sections.json`,
        encodingFormat: "application/json"
      },
      {
        "@type": "CreativeWork",
        name: "CodexSF LLM summary",
        url: `${SITE_URL}/llms.txt`,
        encodingFormat: "text/plain"
      }
    ],
    mainEntity: {
      "@id": `${SITE_URL}${ENTITY_PATH}#person`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    knowsAbout: [...SITE_TOPICS],
    sameAs: [GITHUB_REPO_URL],
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}${ENTITY_PATH}#person`,
      name: ENTITY_NAME,
      url: absoluteUrl(ENTITY_PATH),
      image: absoluteUrl(TATIANA_SF_OG_IMAGE.url),
      sameAs: SITE_SAME_AS.filter((url) => url !== GITHUB_REPO_URL)
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "CodexSF website and HackKit",
    description:
      "Open-source CodexSF website, HackKit playbook, and reusable GitHub-based builder resources by TatianaSF.",
    url: SITE_URL,
    codeRepository: GITHUB_REPO_URL,
    license: PROJECT_LICENSE_URL,
    image: absoluteUrl(OPEN_SOURCE_GITHUB_IMAGE.url),
    keywords: [...SITE_KEYWORDS],
    about: [...SITE_TOPICS],
    programmingLanguage: ["TypeScript", "TSX", "Markdown"],
    runtimePlatform: "Next.js",
    creator: {
      "@type": "Person",
      "@id": `${SITE_URL}${ENTITY_PATH}#person`,
      name: ENTITY_NAME,
      url: absoluteUrl(ENTITY_PATH)
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL
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

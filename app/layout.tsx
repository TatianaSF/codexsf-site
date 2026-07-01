import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteVersionBadge } from "@/components/SiteVersionBadge";
import {
  DEFAULT_OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
  GOOGLE_TAG_MANAGER_ID,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  serializeJsonLd,
  siteJsonLd
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  alternates: {
    canonical: "/",
    types: {
      "application/json": [{ url: "/profile.json" }, { url: "/sections.json" }],
      "text/plain": "/llms.txt"
    }
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION
      }
    : undefined
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="alternate"
          type="application/json"
          title="Machine-readable profile"
          href="/profile.json"
        />
        <link
          rel="alternate"
          type="application/json"
          title="Machine-readable sections"
          href="/sections.json"
        />
        <link
          rel="alternate"
          type="text/plain"
          title="LLM summary"
          href="/llms.txt"
        />
      </head>
      <body>
        <GoogleTagManager containerId={GOOGLE_TAG_MANAGER_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <SiteVersionBadge />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://codexsf.com"),
  title: {
    default: "Codex SF",
    template: "%s | Codex SF"
  },
  description:
    "Community hub for builders, hackathons, and practical Codex workflows in San Francisco.",
  openGraph: {
    title: "Codex SF",
    description:
      "Community hub for builders, hackathons, and practical Codex workflows in San Francisco.",
    url: "https://codexsf.com",
    siteName: "Codex SF",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

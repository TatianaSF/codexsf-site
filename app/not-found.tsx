import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description:
    "This CodexSF page is not available. Return to the TatianaSF open-source builder hub or explore HackKit resources.",
  path: "/404/"
});

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-heading">
        <h1>Page Not Found</h1>
        <p>
          This public CodexSF page is not available. Return home or explore
          HackKit for public playbooks and resources.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/">
            Go Home
          </Link>
          <Link className="button secondary" href="/hackkit">
            Explore HackKit
          </Link>
        </div>
      </div>
    </section>
  );
}

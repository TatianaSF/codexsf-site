import type { Metadata } from "next";
import { CURRENT_VERSION, VERSION_LOG } from "@/lib/siteVersion";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Log",
  description:
    "Public CodexSF version log for site updates, SEO improvements, favicon changes, HackKit resources, and open-source GitHub releases.",
  path: "/log/"
});

export default function LogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>Log</h1>
          <p>
            Public site versions and short update notes for CodexSF. Current
            version: <strong>{CURRENT_VERSION}</strong>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="version-log">
            {VERSION_LOG.map((entry) => (
              <article className="version-entry" key={entry.version}>
                <div className="version-entry-meta">
                  <h2>{entry.version}</h2>
                  <time dateTime={entry.date}>{entry.date}</time>
                </div>
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

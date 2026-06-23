import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-heading">
        <h1>Page Not Found</h1>
        <p>
          This public Codex SF page is not available. Return home or explore
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

import Link from "next/link";
import { SiteSignature } from "@/components/SiteSignature";
import { GITHUB_REPO_URL } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link href="/hackkit">HackKit</Link>
          <Link href="/events">Events</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/community">Community</Link>
          <Link href="/tatianasf">Creator</Link>
          <a href={GITHUB_REPO_URL} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </div>
        <div className="footer-copy">
          <SiteSignature className="footer-signature" />
          <p>Made with ❤️ in San Francisco 🌉</p>
        </div>
      </div>
    </footer>
  );
}

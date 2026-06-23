import Link from "next/link";
import { TatianaLink } from "@/components/TatianaLink";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          Created by <TatianaLink />. Public-safe community materials for builders.
        </p>
        <div className="footer-links">
          <Link href="/hackkit">HackKit</Link>
          <Link href="/events">Events</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/community">Community</Link>
        </div>
      </div>
    </footer>
  );
}

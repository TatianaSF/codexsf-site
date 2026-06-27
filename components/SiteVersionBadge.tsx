import Link from "next/link";
import { CURRENT_VERSION } from "@/lib/siteVersion";

export function SiteVersionBadge() {
  return (
    <Link
      aria-label={`View site update log, current version ${CURRENT_VERSION}`}
      className="version-badge"
      href="/log"
    >
      {CURRENT_VERSION}
    </Link>
  );
}

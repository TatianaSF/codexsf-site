import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["HackKit", "/hackkit"],
  ["Events", "/events"],
  ["Resources", "/resources"],
  ["Community", "/community"],
  ["About", "/about"]
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark">SF</span>
          <span>Codex SF</span>
        </Link>
        <nav className="nav-links" aria-label="Main menu">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/community">
          Join Community
        </Link>
      </div>
    </header>
  );
}

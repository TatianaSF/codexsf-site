"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/"],
  ["HackKit", "/hackkit"],
  ["Events", "/events"],
  ["Resources", "/resources"],
  ["Community", "/community"],
  ["About", "/about"]
] as const;

function OpenAIIcon() {
  return (
    <svg
      aria-hidden="true"
      className="signature-icon openai-icon"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.3 3.1a4.2 4.2 0 0 1 6.7 2.3 4.23 4.23 0 0 1 3.02 6.3 4.2 4.2 0 0 1-1.76 6.96 4.2 4.2 0 0 1-6.55 2.29 4.2 4.2 0 0 1-6.74-2.28 4.2 4.2 0 0 1-3.03-6.35 4.2 4.2 0 0 1 1.77-6.95 4.2 4.2 0 0 1 6.59-2.27Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m7.1 8.2 4.9-2.82 4.9 2.82v5.62L12 16.65l-4.9-2.83V8.2Zm4.9 8.45V21m4.9-7.18 3.3 1.9M16.9 8.2l3.3-1.9M7.1 8.2 3.8 6.3m3.3 7.52-3.3 1.9M12 5.38V1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function CodexIcon() {
  return (
    <svg
      aria-hidden="true"
      className="signature-icon codex-icon"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="codexIconGradient" x1="3" x2="21" y1="4" y2="20">
          <stop offset="0" stopColor="#8b7cff" />
          <stop offset="1" stopColor="#246bfe" />
        </linearGradient>
      </defs>
      <rect
        width="22"
        height="22"
        x="1"
        y="1"
        fill="url(#codexIconGradient)"
        rx="7"
      />
      <path
        d="m9.3 8.2 3.75 3.8-3.75 3.8M14 15.9h3.35"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.1"
      />
    </svg>
  );
}

function MadeWithSignature() {
  return (
    <div className="made-with-signature" aria-label="Made with OpenAI Codex">
      <span>Made with</span>
      <OpenAIIcon />
      <span>OpenAI</span>
      <CodexIcon />
      <span>Codex</span>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" className="menu-icon" viewBox="0 0 24 24">
      {open ? (
        <path
          d="m6.5 6.5 11 11m0-11-11 11"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M4.5 7h15M4.5 12h15M4.5 17h15"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell" data-menu-open={menuOpen}>
        <div className="nav-primary-row">
          <Link className="brand" href="/" onClick={closeMenu}>
            <span className="brand-mark">SF</span>
            <span>Codex SF</span>
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close main menu" : "Open main menu"}
            className="mobile-menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
        <nav className="nav-links desktop-nav" aria-label="Main menu">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <MadeWithSignature />
        <Link className="nav-cta" href="/community">
          Join Community
        </Link>
        <div className="mobile-menu" id="mobile-menu" aria-hidden={!menuOpen}>
          <nav className="mobile-nav-links" aria-label="Mobile main menu">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            className="button primary mobile-menu-cta"
            href="/community"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Join Community
          </Link>
        </div>
      </div>
    </header>
  );
}

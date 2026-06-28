import Image from "next/image";
import Link from "next/link";
import { TatianaLink } from "@/components/TatianaLink";
import { getCollection } from "@/lib/content";
import {
  createPageMetadata,
  GITHUB_REPO_URL,
  OPEN_SOURCE_GITHUB_IMAGE
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Codex SF",
  description:
    "Open-source community hub for San Francisco builders, hackathons, and practical Codex workflows.",
  path: "/",
  absoluteTitle: true
});

export default function Home() {
  const hackkit = getCollection("hackkit").slice(0, 4);
  const events = getCollection("events").slice(0, 3);
  const resources = getCollection("resources").slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>Codex SF</h1>
            <p className="hero-copy">
              Community hub for builders, hackathons, and practical Codex
              workflows in San Francisco.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/hackkit">
                Explore HackKit
              </Link>
              <Link className="button secondary" href="/community">
                Join Community
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/hero-workspace.png"
              alt="A bright San Francisco builder workspace prepared for a hackathon"
              width={1536}
              height={864}
              priority
            />
            <div className="hero-note">
              <div>
                <strong>HackKit is the public playbook.</strong>
                <span>Formats, checklists, templates, and lessons organizers can reuse.</span>
              </div>
              <span className="status-dot" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner feature-strip">
          <div className="product-panel">
            <div>
              <h2>HackKit</h2>
              <p>Practical open-source playbook for running community hackathons.</p>
            </div>
            <Link className="button secondary" href="/hackkit">
              Explore HackKit
            </Link>
          </div>
          <div className="steps">
            {hackkit.map((item, index) => (
              <Link className="step-row" href={`/hackkit/${item.slug}`} key={item.slug}>
                <span className="step-number">{index + 1}</span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-title">
              <h2>Upcoming Events</h2>
              <p>
                Public-friendly event notes and recaps for builders who want to join,
                volunteer, speak, or learn from the format.
              </p>
            </div>
            <Link className="button secondary" href="/events">
              View Events
            </Link>
          </div>
          <div className="grid three">
            {events.map((item) => (
              <Link className="card" href={`/events#${item.slug}`} key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="mini-meta">
                  <span className="tag">{item.status ?? "Public"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-title">
              <h2>Organizer Resources</h2>
              <p>
                Ready-to-adapt public templates for volunteer planning, speakers,
                judging, run of show, promotion, and follow-up.
              </p>
            </div>
            <Link className="button secondary" href="/resources">
              Browse Resources
            </Link>
          </div>
          <div className="grid three">
            {resources.map((item) => (
              <Link className="card" href={`/resources/${item.slug}`} key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-title">
              <h2>Join the Community</h2>
              <p>
                Come as a participant, volunteer, speaker, partner, or curious builder.
                The public site keeps the invitation clear and the private operations private.
              </p>
            </div>
            <Link className="button primary" href="/community">
              Join Community
            </Link>
          </div>
          <div className="community-actions">
            {[
              "Join as Participant",
              "Become a Volunteer",
              "Apply as Speaker",
              "Partner with Us",
              "Stay Updated"
            ].map((label) => (
              <Link className="action-tile" href="/community" key={label}>
                <strong>{label}</strong>
                <span>Start with a public interest form or community update.</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-title" style={{ marginBottom: 24 }}>
            <h2>
              Created by <TatianaLink />
            </h2>
            <p>
              A practical public home for San Francisco builders, community
              hackathons, and reusable Codex workflows.
            </p>
          </div>
          <div className="callout">
            <strong>Public-safe by default.</strong> Private operations, budgets,
            assignments, and unpublished plans belong outside this public repository.
          </div>
          <div className="article-actions">
            <Link className="button secondary" href="/tatianasf">
              Creator profile
            </Link>
            <Link
              className="button secondary"
              href="/resources/tatianasf-public-reference"
            >
              TatianaSF reference
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="open-source">
        <div className="section-inner open-source-panel">
          <div className="open-source-copy">
            <p className="eyebrow">Open source</p>
            <h2>Public code on GitHub</h2>
            <p>
              Codex SF is an open-source public website. The repository contains
              the site, HackKit docs, reusable builder resources, and deployment
              workflow that publishes this project.
            </p>
            <div className="article-actions">
              <a
                className="button primary"
                href={GITHUB_REPO_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                View source on GitHub
              </a>
              <Link className="button secondary" href="/about">
                About the project
              </Link>
            </div>
          </div>
          <a
            className="open-source-media"
            href={GITHUB_REPO_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={OPEN_SOURCE_GITHUB_IMAGE.url}
              alt={OPEN_SOURCE_GITHUB_IMAGE.alt}
              width={OPEN_SOURCE_GITHUB_IMAGE.width}
              height={OPEN_SOURCE_GITHUB_IMAGE.height}
            />
          </a>
        </div>
      </section>
    </>
  );
}

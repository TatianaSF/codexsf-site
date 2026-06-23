import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Codex SF and HackKit."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>About</h1>
          <p>
            Codex SF is a community hub for builders, hackathons, and practical Codex
            workflows in San Francisco.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid two">
          <article className="card">
            <h3>What this site is for</h3>
            <p>
              The public site helps visitors understand the community, explore
              HackKit, find events, and reuse public organizer resources.
            </p>
          </article>
          <article className="card">
            <h3>What stays private</h3>
            <p>
              Private operations, budgets, internal notes, partner details, and
              personal data should stay out of this public repository.
            </p>
          </article>
          <article className="card">
            <h3>Created by Tatiana SF</h3>
            <p>
              Codex SF is created as a practical, community-friendly home for
              San Francisco builders and hackathon organizers.
            </p>
          </article>
          <article className="card">
            <h3>HackKit first</h3>
            <p>
              HackKit is the main public product: an open playbook for planning
              clearer, kinder, more useful community hackathons.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

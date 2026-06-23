import type { Metadata } from "next";

const paths = [
  {
    title: "Join as Participant",
    description:
      "Come to build, learn, ship a small demo, and meet other practical AI builders."
  },
  {
    title: "Become a Volunteer",
    description:
      "Help with welcoming, room flow, project support, demos, or public recap materials."
  },
  {
    title: "Apply as Speaker",
    description:
      "Share a practical workflow, a field lesson, or a short demo that helps builders move."
  },
  {
    title: "Partner with Us",
    description:
      "Support public community programming through venue, education, or builder resources."
  },
  {
    title: "Stay Updated",
    description:
      "Follow public announcements and new HackKit resources as they are published."
  }
];

export const metadata: Metadata = {
  title: "Community",
  description: "Join Codex SF as a participant, volunteer, speaker, partner, or subscriber."
};

export default function CommunityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-heading">
          <h1>Community</h1>
          <p>
            Codex SF is for builders who want practical events, useful workflows,
            and a friendly path from idea to demo.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="grid two">
            {paths.map((path) => (
              <article className="card" key={path.title}>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </article>
            ))}
          </div>
          <div className="callout" style={{ marginTop: 24 }}>
            <strong>Public-safe note:</strong> This page intentionally avoids private
            contacts, private forms, volunteer assignments, and unpublished event
            details. Add public links only when they are ready to publish.
          </div>
        </div>
      </section>
    </>
  );
}

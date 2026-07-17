import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Now",
  description: "What Ananya Gupta is learning, building, and looking for now.",
};
export default function Now() {
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Now · July 2026</p>
        <h1>
          Present
          <br />
          <span className="serif">tense.</span>
        </h1>
        <p>A quick look at what I’m building, learning, and looking for right now.</p>
      </header>
      <section className="now-grid section">
        {[
          [
            "Building",
            "Improving MyVigi’s real-time workflows and working through the less obvious cases, especially reconnection and stale data.",
          ],
          [
            "Learning",
            "Backend fundamentals, practical observability, and better ways to design and query PostgreSQL databases.",
          ],
          [
            "Reading",
            "Writing about engineering judgment, product decisions, creativity, and how good teams solve problems.",
          ],
          [
            "Looking for",
            "Software engineering internships and full-stack roles where I can own real work, contribute to a team, and learn through direct feedback.",
          ],
          [
            "Away from the screen",
            "Taking photographs, editing videos, watching science fiction, and finding something useful to do because I’m not very good at sitting idle.",
          ],
        ].map((x) => (
          <div key={x[0]}>
            <span>{x[0]}</span>
            <p>{x[1]}</p>
          </div>
        ))}
      </section>
      <p className="last-updated">
        Last meaningfully updated July 13, 2026 · Delhi, India
      </p>
    </>
  );
}

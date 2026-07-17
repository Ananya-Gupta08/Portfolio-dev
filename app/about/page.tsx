import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ananya Gupta, a B.Tech Computer Science student at Bennett University who enjoys building useful full-stack products.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <header className="page-hero about-hero">
        <p className="eyebrow">About · The story so far</p>
        <h1>
          Curiosity got me
          <br />
          <em>started.</em>
        </h1>
        <p>
          I like understanding how things work, building my own version, and
          finding the small changes that make it better.
        </p>
      </header>
      <section className="story section">
        <div className="story-pull">
          <span>“</span>
          <p>
            The best part of building something is seeing another person
            <em> actually use it.</em>
          </p>
        </div>
        <div className="story-copy">
          <p>
            Technology first became real to me in ninth grade, when I built the
            classic T-Rex game during a WhiteHat Jr course. Watching something I
            had made actually work was a small moment, but it left me wanting to
            understand what else I could create.
          </p>
          <p>
            Around the same time, my father asked me to help with his startup’s
            videos and online presence. I learned digital marketing, managed
            social media, and discovered that building for people starts with
            paying attention to them. Later, photography and video editing gave
            me another way to experiment; a few reels crossed a million views.
          </p>
          <p>
            College turned that curiosity into software. Through projects,
            hackathons, and internships, I realised I enjoy the whole process:
            understanding a problem, making technical choices, and polishing the
            result until it feels complete. I’m still learning, but I’m happiest
            when I’m building something with a reason to exist.
          </p>
        </div>
      </section>
      <section className="values section">
        <p className="eyebrow">How I work</p>
        {[
          [
            "01",
            "Understand before building",
            "I ask questions, look at the problem from the user’s side, and make sure I understand why a feature matters before deciding how to build it.",
          ],
          [
            "02",
            "Take ownership",
            "If I’m responsible for something, I want to see it through. That includes the awkward bugs, the final checks, and the details people notice when they use it.",
          ],
          [
            "03",
            "Learn by doing",
            "New tools don’t intimidate me. I break the problem into smaller pieces, build a first version, and improve my understanding as I go.",
          ],
          [
            "04",
            "Know when to stop polishing",
            "I naturally spend extra time refining my work because quality matters to me. I’m learning to balance that instinct with deadlines and ship the right version on time.",
          ],
        ].map((x) => (
          <div className="value-row" key={x[0]}>
            <span>{x[0]}</span>
            <h2>{x[1]}</h2>
            <p>{x[2]}</p>
          </div>
        ))}
      </section>
      <section className="journey section">
        <div>
          <p className="eyebrow">A short timeline</p>
          <h2>
            Still early.
            <br />
            <span className="serif">Very intentional.</span>
          </h2>
        </div>
        <div className="timeline">
          {[
            [
              "2023",
              "Computer Science at Bennett",
              "Started my B.Tech and moved from experimenting with technology to learning the foundations behind working software.",
            ],
            [
              "2024",
              "Learning by building",
              "Built full-stack and machine-learning projects, joined hackathons, and became more interested in solving the problem than simply finishing the code.",
            ],
            [
              "2025",
              "Thinking in products",
              "Worked on MyVigi, CitySetu, and TurningPoint and learned to connect user needs, interface choices, and backend decisions.",
            ],
            [
              "Now",
              "Ready for the next challenge",
              "Looking for a software engineering internship or full-stack role where I can contribute to real work and learn from a strong team.",
            ],
          ].map((x) => (
            <div key={x[0]}>
              <span>{x[0]}</span>
              <div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="about-cta section">
        <p>
          I’m proud of what I know.
          <br />
          <span>I’m even more excited by what’s next.</span>
        </p>
        <Link className="button primary" href="/resume">
          View my resume <Arrow />
        </Link>
      </section>
    </>
  );
}

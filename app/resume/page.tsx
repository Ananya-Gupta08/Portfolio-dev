import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PrintButton } from "@/components/print-button";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Ananya Gupta, a B.Tech Computer Science student and full-stack developer at Bennett University.",
  alternates: { canonical: "/resume" },
};
export default function Resume() {
  return (
    <>
      <header className="resume-top">
        <div>
          <p className="eyebrow">Resume · Last updated July 2026</p>
          <h1>Ananya Gupta</h1>
          <p>Computer Science Student · Full Stack Developer</p>
        </div>
      <PrintButton />
      </header>
      <article className="resume-sheet">
        <section className="resume-intro">
          <p>
            B.Tech Computer Science student at Bennett University who enjoys
            turning real problems into practical full-stack products. Looking
            for a software engineering internship or full-stack developer role
            where I can contribute, take ownership, and keep learning.
          </p>
          <div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.github}>GitHub ↗</a>
            <a href={site.linkedin}>LinkedIn ↗</a>
            <span>Delhi, India</span>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div className="resume-entry">
            <span>2023—2027</span>
            <div>
              <h3>B.Tech, Computer Science</h3>
              <b>Bennett University</b>
              <p>
                Coursework and project work in data structures, databases, web
                development, software engineering, and machine learning.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Selected project experience</h2>
          {projects.slice(0, 3).map((p) => (
            <div className="resume-entry" key={p.slug}>
              <span>{p.year}</span>
              <div>
                <h3>
                  {p.title} — {p.eyebrow}
                </h3>
                <b>{p.role}</b>
                <p>
                  {p.summary} {p.decisions[0].body}
                </p>
                <small>{p.stack.join(" · ")}</small>
              </div>
            </div>
          ))}
        </section>
        <section>
          <h2>Technical toolkit</h2>
          <div className="resume-skills">
            <p>
              <b>Languages</b> TypeScript, JavaScript, Python, SQL
            </p>
            <p>
              <b>Frontend</b> React, Next.js, Tailwind CSS, accessibility
            </p>
            <p>
              <b>Backend</b> Node.js, Express, FastAPI, REST, Socket.IO, JWT
            </p>
            <p>
              <b>Data & tools</b> MongoDB, PostgreSQL, Firebase, Git, GitHub
            </p>
          </div>
        </section>
        <section>
          <h2>How I work</h2>
          <p>
            I learn quickly, break complex problems into manageable pieces, and
            communicate openly. I’m comfortable working across the stack and I
            pay attention to both the technical details and the person using
            what I build.
          </p>
        </section>
      </article>
      <div className="resume-foot">
        <Link className="text-link" href="/projects">
          Explore my projects <ArrowUpRight />
        </Link>
        <Link className="text-link" href="/contact">
          Discuss an opportunity <ArrowUpRight />
        </Link>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, real-time, civic technology, AI, and machine-learning projects built by Ananya Gupta.",
  alternates: { canonical: "/projects" },
};
export default function Projects() {
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Selected projects · 2024–26</p>
        <h1>
          Built to solve
          <br />
          <span className="serif">something real.</span>
        </h1>
        <p>
          These case studies explain why I built each project, the choices I
          made, what challenged me, and what I would improve next.
        </p>
      </header>
      <section className="project-index-grid">
        {projects.map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            className="project-index-card"
            key={p.slug}
          >
            <ProjectVisual kind={p.color} compact />
            <div>
              <span>0{i + 1}</span>
              <small>
                {p.eyebrow} · {p.year}
              </small>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <b>
                View case study <ArrowUpRight />
              </b>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

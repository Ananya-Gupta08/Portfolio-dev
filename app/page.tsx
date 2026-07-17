import Link from "next/link";
import { Arrow, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="home-hero">
        <div className="hero-status">
          <span>
            <i />
            Available for internships
          </span>
            <span> Delhi, India</span>
        </div>
        <div className="hero-title">
          <Reveal>
            <h1>
              I like building
              <br />
              software that solves
              <br />
              <em>real problems.</em>
            </h1>
          </Reveal>
          <Reveal className="hero-intro" delay={0.15}>
            <p>
              I’m Ananya, a Computer Science student and full-stack developer.
              I turn ideas into products people can actually use.
            </p>
            <div>
              <Link className="button primary" href="/projects">
                Explore selected work <Arrow />
              </Link>
              <Link className="button" href="/about">
                My story
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hero-foot">
          <span>Product thinking</span>
          <span>Full-stack development</span>
          <span>Creative problem solving</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>
      <section className="manifesto section">
        <Reveal>
          <p className="eyebrow">How I approach a project</p>
          <h2>
            Understand first.
            <br />
            Then <em>build.</em>
          </h2>
        </Reveal>
        <div className="manifesto-grid">
          <Reveal>
            <span>01</span>
            <h3>Start with the person using it.</h3>
            <p>
              Before I write code, I try to understand the actual problem,
              who has it, and what would make the product genuinely useful.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span>02</span>
            <h3>Break the problem down.</h3>
            <p>
              Large problems become manageable when I separate them into
              smaller decisions I can build, test, and explain.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <span>03</span>
            <h3>Polish what matters.</h3>
            <p>
              I’m particular about the details. I keep improving a product
              until the experience feels clear, consistent, and complete.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="selected section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected projects · 2024–26</p>
            <h2>
              Things I’ve
              <br />
              <span className="serif">built.</span>
            </h2>
          </div>
          <p>
            Each project started with a problem I wanted to understand. The case
            studies cover what mattered, how I approached it, and what I learned.
          </p>
        </div>
        <div className="project-stack">
          {featured.map((p, i) => (
            <Reveal className="home-project" key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="home-project-visual"
                aria-label={`Read ${p.title} case study`}
              >
                <ProjectVisual kind={p.color} />
                <span className="project-index">
                  0{i + 1} / 0{featured.length}
                </span>
              </Link>
              <div className="home-project-copy">
                <div>
                  <p className="eyebrow">
                    {p.eyebrow} · {p.year}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </div>
                <div className="project-meta">
                  <span>{p.role}</span>
                  <span>{p.stack.slice(0, 3).join(" · ")}</span>
                </div>
                <Link className="text-link" href={`/projects/${p.slug}`}>
                  Read the case study <ArrowUpRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="center-link">
          <Link className="button" href="/projects">
            View all projects <Arrow />
          </Link>
        </div>
      </section>
      <section className="proof section">
        <Reveal className="proof-card">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>
              Curious enough to ask why.
              <br />
              <em>Patient enough to improve it.</em>
            </h2>
            <p>
              I’m Ananya, a B.Tech Computer Science student at Bennett
              University. I learn best by building, asking questions, and
              working through the details until I understand them properly.
            </p>
            <Link className="text-link" href="/about">
              More about how I think <Arrow />
            </Link>
          </div>
          <div className="proof-notes">
            <span>Currently</span>
            <p>
              Improving my full-stack projects and looking for the next useful
              problem to work on.
            </p>
            <span>Learning</span>
            <p>
              More about backend systems, product decisions, and writing code
              that is easier to maintain.
            </p>
            <span>Looking for</span>
            <p>
              A software engineering internship or full-stack role where I can
              take ownership, contribute, and keep learning.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="home-close section">
        <Reveal>
          <p>
            Have a role, idea, or
            <br />problem worth discussing?
          </p>
          <Link href="/contact">
            Let’s talk <ArrowUpRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

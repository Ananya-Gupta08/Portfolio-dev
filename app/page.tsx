import Link from "next/link";
import { Arrow, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { SkillCloud } from "@/components/skill-cloud";
import { projects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";

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
              softwares that solve
              <br />
              <em>real problems.</em>
            </h1>
          </Reveal>
          <Reveal className="hero-intro" delay={0.15}>
            <p>
              I’m Ananya, a Computer Science student and full-stack developer. I
              turn ideas into products people can actually use.
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
            studies cover what mattered, how I approached it, and what I
            learned.
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
      <section className="capabilities section home-skills">
        <Reveal>
          <p className="eyebrow">Technologies I’ve worked with</p>
          <h2 className="skills-heading">
            Tools I use to turn ideas
            <br />
            <span className="serif">into working products.</span>
          </h2>
        </Reveal>
        <SkillCloud groups={skillGroups} />
        <p>
          I choose tools based on the problem and I’m comfortable learning
          something new when a project needs it.
        </p>
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
            <br />
            problem worth discussing?
          </p>
          <Link href="/contact">
            Let’s talk <ArrowUpRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

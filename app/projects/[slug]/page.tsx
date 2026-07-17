import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${p.title} — Ananya Gupta`,
      description: p.summary,
      url: `/projects/${p.slug}`,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug),
    next = projects[(i + 1) % projects.length];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    creator: { "@type": "Person", name: site.name },
    description: p.summary,
    url: `${site.url}/projects/${p.slug}`,
    keywords: p.stack.join(", "),
  };
  return (
    <article className="case">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="case-hero">
        <div className="crumbs">
          <Link href="/projects">Projects</Link> / {p.title}
        </div>
        <p className="eyebrow">
          {p.eyebrow} · {p.year}
        </p>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
        {(p.liveUrl || p.repoUrl) && (
          <div className="case-links">
            {p.liveUrl && (
              <a
                className="button primary"
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View live project <ArrowUpRight />
              </a>
            )}
            {p.repoUrl && (
              <a
                className="button"
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub repository <ArrowUpRight />
              </a>
            )}
          </div>
        )}
        <div className="case-facts">
          <span>
            <small>Role</small>
            {p.role}
          </span>
          <span>
            <small>Duration</small>
            {p.duration}
          </span>
          <span>
            <small>Stack</small>
            {p.stack.slice(0, 4).join(", ")}
          </span>
        </div>
      </header>
      <div className="case-visual">
        <ProjectVisual kind={p.color} />
      </div>
      <section className="case-section case-opening">
        <div>
          <p className="eyebrow">01 · The problem</p>
          <h2>
            Why this was
            <br />
            <em>worth building.</em>
          </h2>
        </div>
        <p>{p.problem}</p>
      </section>
      <section className="case-section">
          <p className="eyebrow">02 · What I wanted to achieve</p>
        <div className="goal-grid">
          {p.goals.map((g, n) => (
            <div key={g}>
              <span>0{n + 1}</span>
              <p>{g}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="case-section architecture">
        <div>
          <p className="eyebrow">03 · System architecture</p>
          <h2>
            How the pieces<br />
            <span className="serif">work together.</span>
          </h2>
        </div>
        <div className="arch-flow">
          {p.architecture.map((x, n) => (
            <div key={x}>
              <span>0{n + 1}</span>
              <b>{x}</b>
              {n < p.architecture.length - 1 && <i>↓</i>}
            </div>
          ))}
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">04 · Technical decisions</p>
        <div className="decision-grid">
          {p.decisions.map((d, n) => (
            <div key={d.title}>
              <span>0{n + 1}</span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="case-section metrics">
        <p className="eyebrow">05 · Project targets</p>
        <div>
          {p.metrics.map((m) => (
            <span key={m.label}>
              <b>{m.value}</b>
              <small>{m.label}</small>
            </span>
          ))}
        </div>
        <p>
          These are design targets and project measures, not claims about
          production usage.
        </p>
      </section>
      <section className="case-section case-notes">
        <div>
          <span>Challenge</span>
          <h3>The hardest part</h3>
          <p>{p.challenges}</p>
        </div>
        <div>
          <span>Tradeoff</span>
          <h3>The choice I made</h3>
          <p>{p.tradeoffs}</p>
        </div>
        <div>
          <span>Lesson</span>
          <h3>What I learned</h3>
          <p>{p.lessons}</p>
        </div>
      </section>
      <section className="case-section next-steps">
        <p className="eyebrow">06 · What I would build next</p>
        <h2>
          The next
          <br />
          <span className="serif">iteration.</span>
        </h2>
        {p.future.map((f, n) => (
          <div key={f}>
            <span>0{n + 1}</span>
            <p>{f}</p>
          </div>
        ))}
      </section>
      <nav className="next-project" aria-label="Next case study">
        <p>Next case study</p>
        <Link href={`/projects/${next.slug}`}>
          <span>{next.title}</span>
          <ArrowUpRight />
        </Link>
      </nav>
    </article>
  );
}

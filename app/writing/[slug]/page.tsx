import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/reading-progress";
import { articles, getArticle } from "@/lib/writing";
import { site } from "@/lib/site";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a
    ? {
        title: a.title,
        description: a.excerpt,
        alternates: { canonical: `/writing/${a.slug}` },
      }
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    author: { "@type": "Person", name: site.name },
    description: a.excerpt,
  };
  return (
    <article className="article">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header>
        <div className="crumbs">
          <Link href="/writing">Notes</Link> / {a.tag}
        </div>
        <p className="eyebrow">
          {a.tag} · {a.read}
        </p>
        <h1>{a.title}</h1>
        <p>{a.excerpt}</p>
        <small>
          {new Date(a.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · Written by Ananya Gupta
        </small>
      </header>
      <div className="article-body">
        {a.content.map((p, i) => (
          <p className={i === 0 ? "lead" : ""} key={p}>
            {p}
          </p>
        ))}
        <hr />
        <p className="article-end">
          Thanks for reading. If this sparked a thought,{" "}
          <Link href="/contact">send me a note</Link>.
        </p>
      </div>
    </article>
  );
}

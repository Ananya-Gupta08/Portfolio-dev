import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { articles } from "@/lib/writing";
export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Ananya Gupta on engineering, product thinking, real-time systems, and responsible AI.",
  alternates: { canonical: "/writing" },
};
export default function Writing() {
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Notes · What building taught me</p>
        <h1>
          Writing things down
          <br />
          <span className="serif">helps me learn.</span>
        </h1>
        <p>
          Short notes on problems I ran into, decisions I made, and ideas I want
          to understand better.
        </p>
      </header>
      <section className="writing-list section">
        {articles.map((a, i) => (
          <Link href={`/writing/${a.slug}`} key={a.slug}>
            <span>0{i + 1}</span>
            <div>
              <small>
                {new Date(a.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {a.read}
              </small>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <b>
                Read note <ArrowUpRight />
              </b>
            </div>
            <em>{a.tag}</em>
          </Link>
        ))}
      </section>
    </>
  );
}

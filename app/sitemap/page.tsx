import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/writing";
export const metadata: Metadata = { title: "Sitemap" };
export default function HumanSitemap() {
  const groups = [
    [
      "Main",
      [
        ["Home", "/"],
        ["About", "/about"],
        ["Experience", "/experience"],
        ["Résumé", "/resume"],
        ["Contact", "/contact"],
      ],
    ],
    [
      "Work",
      [
        ["All projects", "/projects"],
        ...projects.map((p) => [p.title, `/projects/${p.slug}`]),
      ],
    ],
    [
      "Notebook",
      [
        ["Writing", "/writing"],
        ...articles.map((a) => [a.title, `/writing/${a.slug}`]),
        ["Now", "/now"],
      ],
    ],
    [
      "Information",
      [
        ["Privacy", "/privacy"],
        ["RSS feed", "/rss.xml"],
        ["XML sitemap", "/sitemap.xml"],
      ],
    ],
  ];
  return (
    <>
      <header className="page-hero">
        <p className="eyebrow">Sitemap</p>
        <h1>
          Every path,
          <br />
          <span className="serif">in one place.</span>
        </h1>
      </header>
      <section className="sitemap-grid">
        {groups.map((g) => (
          <div key={g[0] as string}>
            <h2>{g[0]}</h2>
            {(g[1] as string[][]).map((x) => (
              <Link key={x[1]} href={x[1]}>
                {x[0]}
              </Link>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

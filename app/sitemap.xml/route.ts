import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { articles } from "@/lib/writing";

type Entry = {
  path: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

function escapeXml(value: string) {
  return value.replace(
    /[<>&'\"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '\"': "&quot;",
      })[character]!,
  );
}

export function GET() {
  const now = new Date();
  const pages = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/writing",
    "/resume",
    "/contact",
    "/now",
    "/privacy",
    "/sitemap",
  ];

  const entries: Entry[] = [
    ...pages.map((path) => ({
      path,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      path: `/writing/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.65,
    })),
  ];

  const urls = entries
    .map(
      (entry) => `<url>
  <loc>${escapeXml(`${site.url}${entry.path}`)}</loc>
  <lastmod>${entry.lastModified.toISOString()}</lastmod>
  <changefreq>${entry.changeFrequency}</changefreq>
  <priority>${entry.priority.toFixed(2)}</priority>
</url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    },
  );
}

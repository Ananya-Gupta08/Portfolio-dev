import { articles } from "@/lib/writing";
import { site } from "@/lib/site";
const escape = (s: string) =>
  s.replace(
    /[<>&'\"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[c]!,
  );
export function GET() {
  const items = articles
    .map(
      (a) =>
        `<item><title>${escape(a.title)}</title><link>${site.url}/writing/${a.slug}</link><guid>${site.url}/writing/${a.slug}</guid><pubDate>${new Date(a.date).toUTCString()}</pubDate><description>${escape(a.excerpt)}</description></item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ananya Gupta — Field Notes</title><link>${site.url}/writing</link><description>Notes on engineering, systems, and product thinking.</description>${items}</channel></rss>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

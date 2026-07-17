import Link from "next/link";
import { Arrow } from "@/components/icons";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · A useful dead end</p>
      <h1>
        This route took
        <br />
        the scenic route.
      </h1>
      <p>
        The page may have moved, or perhaps it never existed. The good work is
        still where you left it.
      </p>
      <div>
        <Link className="button primary" href="/">
          Return home <Arrow />
        </Link>
        <Link className="button" href="/projects">
          Browse work
        </Link>
      </div>
    </section>
  );
}

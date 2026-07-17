import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-lead">
        <p>Have something worth building?</p>
        <Link href="/contact">
          Let’s talk about it.
          <ArrowUpRight />
        </Link>
      </div>
      <div className="footer-grid">
        <div>
          <Link className="brand" href="/">
            <span>AG</span>
            <b>Ananya Gupta</b>
          </Link>
          <p>Computer Science student building useful full-stack products.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/projects">Selected work</Link>
          <Link href="/about">About</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/resume">Resume</Link>
        </div>
        <div>
          <b>Elsewhere</b>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${site.email}`}>Email ↗</a>
        </div>
        <div>
          <b>Small print</b>
          <Link href="/now">Now</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ananya Gupta</span>
        <span>Built with care in Delhi, India</span>
        <span className="availability">
          <i />
          Open to internships
        </span>
      </div>
    </footer>
  );
}

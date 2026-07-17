"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";

export function Header() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Ananya Gupta, home">
          <span>AG</span>
          <b>Ananya Gupta</b>
        </Link>
        <nav
          className={menu ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <Link
              onClick={() => setMenu(false)}
              className={path.startsWith(item.href) ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            onClick={() => setMenu(false)}
            className="nav-contact"
            href="/contact"
          >
            Let’s talk
          </Link>
        </nav>
        <div className="header-actions">
          <CommandMenu />
          <ThemeToggle />
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}

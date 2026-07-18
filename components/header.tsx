"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import { nav } from "@/lib/site";
import { motion as motionSystem } from "@/lib/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";

export function Header() {
  const path = usePathname();
  const reduce = useReducedMotion();
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const links = (close = false) => (
    <>
      {nav.map((item) => (
        <Link
          onClick={() => close && setMenu(false)}
          className={path.startsWith(item.href) ? "active" : ""}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
      <Link
        onClick={() => close && setMenu(false)}
        className="nav-contact"
        href="/contact"
      >
        Let’s talk
      </Link>
    </>
  );

  return (
    <header className="site-header">
      <div className="header-inner">
        <LayoutGroup>
          <motion.div
            layout={!reduce}
            className="expanding-nav"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            onFocusCapture={() => setExpanded(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setExpanded(false);
            }}
            transition={motionSystem.spring}
          >
            <motion.div layout={!reduce} transition={motionSystem.spring}>
              <Link className="brand" href="/" aria-label="Ananya Gupta, home">
                <span>AG</span>
                <b>Ananya Gupta</b>
              </Link>
            </motion.div>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.nav
                  className="nav desktop-nav"
                  aria-label="Primary navigation"
                  initial={reduce ? false : { opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={reduce ? {} : { opacity: 0, width: 0 }}
                  transition={{
                    duration: motionSystem.duration.base,
                    ease: motionSystem.ease,
                  }}
                >
                  {links()}
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <nav
          className={menu ? "nav mobile-nav open" : "nav mobile-nav"}
          aria-label="Mobile navigation"
        >
          {links(true)}
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

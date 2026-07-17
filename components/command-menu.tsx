"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Close, Search } from "@/components/icons";
import { projects } from "@/lib/projects";

const pages = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About Ananya", "/about"],
  ["Experience", "/experience"],
  ["Writing", "/writing"],
  ["Résumé", "/resume"],
  ["Now", "/now"],
  ["Contact", "/contact"],
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const items = useMemo(
    () =>
      [
        ...pages,
        ...projects.map((p) => [p.title, `/projects/${p.slug}`]),
      ].filter(([label]) => label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (open) setTimeout(() => input.current?.focus(), 10);
    else setQuery("");
  }, [open]);
  function go(href: string) {
    setOpen(false);
    router.push(href);
  }
  return (
    <>
      <button
        className="command-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
      >
        <Search />
        <span>Explore</span>
        <kbd>⌘ K</kbd>
      </button>
      {open && (
        <div
          className="command-backdrop"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="command-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="command-input">
              <Search />
              <input
                ref={input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages and projects…"
                aria-label="Search"
              />
              <button onClick={() => setOpen(false)} aria-label="Close">
                <Close />
              </button>
            </div>
            <div className="command-results">
              {items.length ? (
                items.map(([label, href]) => (
                  <button key={href} onClick={() => go(href)}>
                    <span>{label}</span>
                    <small>
                      {href.startsWith("/projects/") ? "Case study" : "Page"}
                    </small>
                  </button>
                ))
              ) : (
                <p>No results. Try “work” or “about”.</p>
              )}
            </div>
            <div className="command-hint">
              <span>
                <kbd>↑</kbd>
                <kbd>↓</kbd> to navigate
              </span>
              <span>
                <kbd>esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

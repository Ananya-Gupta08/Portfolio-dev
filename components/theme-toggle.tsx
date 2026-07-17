"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(
    () => setDark(document.documentElement.dataset.theme === "dark"),
    [],
  );
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return (
    <button
      className="icon-button"
      onClick={toggle}
      aria-label={`Use ${dark ? "light" : "dark"} theme`}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

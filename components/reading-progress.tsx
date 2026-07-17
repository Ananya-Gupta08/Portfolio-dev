"use client";
import { useEffect, useState } from "react";
export function ReadingProgress() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setV(h > 0 ? (scrollY / h) * 100 : 0);
    };
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  return <span className="reading-progress" style={{ width: `${v}%` }} />;
}

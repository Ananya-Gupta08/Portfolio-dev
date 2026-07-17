"use client";

import { Download } from "@/components/icons";

export function PrintButton() {
  return (
    <button className="button primary" onClick={() => window.print()}>
      <Download /> Print / save PDF
    </button>
  );
}

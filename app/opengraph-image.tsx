import { ImageResponse } from "next/og";
export const alt = "Ananya Gupta — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
        background: "#f3f0e8",
        color: "#171915",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          fontSize: 18,
        }}
      >
        <b>Ananya Gupta</b>
        <span>Full Stack Developer · India</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 84,
          lineHeight: 0.92,
          letterSpacing: "-5px",
        }}
      >
        Software for the
        <br />
        <span style={{ color: "#315ee7", fontStyle: "italic" }}>
          messy real world.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          fontSize: 16,
        }}
      >
        <span>
          Product thinking · Systems engineering · Considered interfaces
        </span>
        <span>ananyagupta.dev</span>
      </div>
    </div>,
    size,
  );
}

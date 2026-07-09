import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lucyd: Being awake inside your own dreams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card. Deep black, one steel accent, heavy type.
export default function OpengraphImage() {
  const steel = "#a3adb8";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="44" height="44" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7.25" stroke={steel} strokeWidth="1.5" />
            <circle cx="11.4" cy="6.6" r="2.1" fill={steel} />
          </svg>
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Lucyd
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "980px",
            }}
          >
            Being awake inside your own dreams.
          </div>
          <div style={{ fontSize: 34, color: "#9aa4af", maxWidth: "900px" }}>
            Train lucid dreaming with your phone, grounded in real sleep science.
          </div>
        </div>

        {/* footer accent */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "56px", height: "4px", background: steel }} />
          <div style={{ fontSize: 26, color: steel, letterSpacing: "0.14em" }}>
            LUCID DREAMING TRAINER
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

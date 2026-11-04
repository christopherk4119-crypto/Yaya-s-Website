import { ImageResponse } from "next/og";

export const alt = "YAYA General Contractor Incorporated — Electrician, Plumber & Appliance Repair in Calgary";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card. Replaces the old 512x512 favicon, which was below the
 * 1200x630 minimum and rendered as a tiny thumbnail everywhere it was shared.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 104, fontWeight: 900, color: "#FFD700", letterSpacing: "-0.03em" }}>
          YAYA
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#9ca3af", marginTop: 4 }}>
          General Contractor Incorporated
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 40,
            lineHeight: 1.2,
          }}
        >
          Electrician · Plumber · Appliance Repair
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#d1d5db", marginTop: 24 }}>
          Calgary, AB — 24/7, no after-hours fee
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            padding: "18px 44px",
            borderRadius: 999,
            background: "#FFD700",
            color: "#0a0a0a",
            fontSize: 40,
            fontWeight: 900,
            alignSelf: "flex-start",
          }}
        >
          (403) 400-3055
        </div>
      </div>
    ),
    size
  );
}

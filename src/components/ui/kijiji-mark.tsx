import React from "react";

const letters = [
  { ch: "k", dot: null },
  { ch: "i", dot: "#F5A623" },
  { ch: "j", dot: "#E8453C" },
  { ch: "i", dot: "#3B82D6" },
  { ch: "j", dot: "#34A853" },
  { ch: "i", dot: "#9B59B6" },
];

export default function KijijiMark({ size = 64, radius }: { size?: number; radius?: number }) {
  const r = radius ?? size * 0.25;
  const dotSize = size * 0.12;
  const dotGap = size * 0.06;
  const fontSize = size * 0.34;

  return (
    <div
      style={{
        width: size,
        height: size,
        background: "#2D1B4E",
        borderRadius: r,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: dotGap, marginBottom: size * 0.02 }}>
        {letters.map((l, i) => (
          <span
            key={i}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              background: l.dot ?? "transparent",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: size * 0.01,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 800,
          fontSize,
          color: "#fff",
          lineHeight: 1,
        }}
      >
        {letters.map((l, i) => (
          <span key={i}>{l.ch}</span>
        ))}
      </div>
    </div>
  );
}

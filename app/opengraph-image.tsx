import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} · ${site.title}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: 90, background: "#f6f4ee", color: "#1b201d",
        }}
      >
        <div style={{ width: 90, height: 8, background: "#2c6a4e", marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ fontSize: 38, color: "#2c6a4e", marginTop: 16 }}>{site.title}</div>
        <div style={{ fontSize: 28, color: "#4c5650", marginTop: 32, maxWidth: 900 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}

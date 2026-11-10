"use client";

import { useSyncExternalStore } from "react";

/**
 * "Quenga Designs" corner ribbon on preview.* hosts (shared across every prospect demo, 2026-11-10,
 * per Argus's demo-chrome spec). Decorative only: pointer-events none, absolutely positioned in the
 * page's top-right corner (it scrolls away with the page, never fixed over the body), clipped to an
 * 88px square inside the viewport. Shown only at 1280px and wider, where the content column leaves a
 * margin for it; hidden on phones and tablets (the top concept banner already credits the studio).
 */
const MIN_WIDTH = 1280;

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}
function getSnapshot() {
  return window.location.hostname.startsWith("preview.") && window.innerWidth >= MIN_WIDTH;
}
function getServerSnapshot() {
  return false;
}

const wrap: React.CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  width: 88,
  height: 88,
  overflow: "hidden",
  zIndex: 60,
  pointerEvents: "none",
};

const band: React.CSSProperties = {
  position: "absolute",
  top: 27,
  right: -34,
  width: 140,
  transform: "rotate(45deg)",
  textAlign: "center",
  background: "#B8912A",
  color: "#12100D",
  fontSize: 9,
  lineHeight: "18px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 600,
  boxShadow: "0 3px 10px -5px rgba(0,0,0,.5)",
  pointerEvents: "none",
};

export function PreviewRibbon() {
  const show = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!show) return null;
  return (
    <div style={wrap} aria-hidden="true">
      <span style={band}>Quenga Designs</span>
    </div>
  );
}

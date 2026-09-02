"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return window.location.hostname.startsWith("preview.");
}

function getServerSnapshot() {
  return false;
}

const ribbonStyle: React.CSSProperties = {
  position: "fixed",
  right: -46,
  bottom: 34,
  zIndex: 60,
  transform: "rotate(-45deg)",
  background: "#B8912A",
  color: "#12100D",
  textDecoration: "none",
  fontSize: 10,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 600,
  padding: "5px 52px",
  boxShadow: "0 4px 14px -6px rgba(0,0,0,.5)",
};

export function PreviewRibbon() {
  const isPreview = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!isPreview) return null;
  return (
    <a href="https://quengadesigns.dev" rel="noopener" style={ribbonStyle}>
      Quenga Designs
    </a>
  );
}

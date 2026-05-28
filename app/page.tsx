import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { CinePlate } from "@/components/sections/CinePlate";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";

export const metadata: Metadata = {
  title: "VesselIQ. The marine intelligence layer.",
  description:
    "Two layers. One hull record per boat, owner authorized. One intelligence layer across the fleet, AI trained. The platform the marine industry runs on.",
};

const RAIL_ITEMS: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "layers", label: "Two layers" },
  { id: "primitives", label: "Primitives" },
  { id: "live", label: "Live now" },
  { id: "uses", label: "Uses" },
  { id: "proof", label: "Proof" },
  { id: "cta", label: "Access" },
];

// ---------------------------------------------------------------------------
// Inline style blocks for classes that exist in the source HTML but not yet
// in app/globals.css. Kept colocated here so the page reads top to bottom.
// ---------------------------------------------------------------------------

const styles = {
  // Two layer 3D stack (hero visual)
  twoLayer: {
    position: "relative",
    aspectRatio: "1 / 1.05",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    perspective: "1600px",
  } as React.CSSProperties,
  twoLayerInner: {
    position: "absolute",
    inset: 0,
    transformStyle: "preserve-3d",
    transform: "rotateX(14deg) rotateY(-18deg)",
  } as React.CSSProperties,
  layerCardBase: {
    position: "absolute",
    left: 0,
    right: 0,
    borderRadius: "22px",
    background: "white",
    border: "1px solid var(--line)",
    boxShadow: "var(--shadow-xl)",
    overflow: "hidden",
    transformStyle: "preserve-3d",
  } as React.CSSProperties,
  layerIntel: {
    top: 0,
    height: "44%",
    transform: "translateZ(80px)",
    background:
      "radial-gradient(ellipse at 80% 0%, rgba(58,58,166,0.10) 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #fafbfd 100%)",
    padding: "24px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  } as React.CSSProperties,
  layerRecord: {
    bottom: 0,
    height: "44%",
    transform: "translateZ(-40px)",
    background:
      "radial-gradient(ellipse at 20% 100%, rgba(10,138,120,0.10) 0%, transparent 60%), linear-gradient(180deg, #fcfaf4 0%, #f1efe8 100%)",
    padding: "24px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  } as React.CSSProperties,
  layerHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  intelNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    color: "var(--indigo)",
    textTransform: "uppercase",
  } as React.CSSProperties,
  recordNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    color: "var(--teal)",
    textTransform: "uppercase",
  } as React.CSSProperties,
  layerH4: {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: "22px",
    letterSpacing: "-0.02em",
    color: "var(--ink)",
  } as React.CSSProperties,
  authIndigo: {
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--indigo)",
    padding: "6px 10px",
    border: "1px solid rgba(58,58,166,0.25)",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,
  authTeal: {
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--teal)",
    padding: "6px 10px",
    border: "1px solid rgba(10,138,120,0.25)",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,
  intelViz: { flex: 1, position: "relative", minHeight: 0 } as React.CSSProperties,
  intelVizSvg: { position: "absolute", inset: 0, width: "100%", height: "100%" } as React.CSSProperties,
  meta: {
    display: "flex",
    gap: "18px",
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.18em",
    color: "var(--ink-3)",
    textTransform: "uppercase",
  } as React.CSSProperties,
  metaB: { color: "var(--ink)", fontWeight: 500, letterSpacing: "0.06em" } as React.CSSProperties,
  layerBridge: {
    position: "absolute",
    top: "44%",
    left: "50%",
    transform: "translateX(-50%) translateZ(40px)",
    width: "60%",
    height: "12%",
    pointerEvents: "none",
  } as React.CSSProperties,
  recordRows: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px 16px",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.04em",
    color: "var(--ink-3)",
  } as React.CSSProperties,
  pill3dBase: {
    position: "absolute",
    padding: "10px 14px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "999px",
    boxShadow: "var(--shadow-lg)",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "var(--ink-2)",
  } as React.CSSProperties,

  // Layers explainer tiles
  layersExplain: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "stretch",
  } as React.CSSProperties,
  layerTileBase: {
    padding: "36px 32px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "18px",
    boxShadow: "var(--shadow-md)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,
  layerTileStripeTeal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, var(--teal) 0%, var(--teal-2) 100%)",
  } as React.CSSProperties,
  layerTileStripeIndigo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, var(--indigo) 0%, var(--blue) 100%)",
  } as React.CSSProperties,
  badgeTeal: {
    display: "inline-flex",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "6px 12px",
    borderRadius: "999px",
    color: "var(--teal)",
    background: "var(--teal-soft)",
  } as React.CSSProperties,
  badgeIndigo: {
    display: "inline-flex",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "6px 12px",
    borderRadius: "999px",
    color: "var(--indigo)",
    background: "var(--indigo-soft)",
  } as React.CSSProperties,
  layerTileH3: {
    fontSize: "clamp(26px, 2vw, 36px)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    color: "var(--ink)",
    lineHeight: 1.1,
    maxWidth: "16ch",
  } as React.CSSProperties,
  layerTileP: {
    fontSize: "15px",
    lineHeight: 1.55,
    color: "var(--ink-2)",
    maxWidth: "42ch",
  } as React.CSSProperties,
  who: {
    marginTop: "auto",
    paddingTop: "20px",
    borderTop: "1px solid var(--line-faint)",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  } as React.CSSProperties,
  whoLbl: {
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ink-3)",
  } as React.CSSProperties,
  whoVal: { fontSize: "13px", color: "var(--ink)", fontWeight: 500 } as React.CSSProperties,

  // Primitives grid
  primitives: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  } as React.CSSProperties,
  primBase: {
    padding: "32px 28px 28px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "16px",
    boxShadow: "var(--shadow-md)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    gridColumn: "span 2",
  } as React.CSSProperties,
  primIconTeal: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "radial-gradient(circle at 30% 30%, #ffffff, #def7f0 70%, #b9ebdb 100%)",
    boxShadow:
      "inset 0 1px 0 white, inset 0 -6px 14px rgba(10,138,120,0.18), 0 5px 12px -5px rgba(10,138,120,0.32)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--teal)",
  } as React.CSSProperties,
  primIconIndigo: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "radial-gradient(circle at 30% 30%, #ffffff, #ece9fa 70%, #c6c1ec 100%)",
    boxShadow:
      "inset 0 1px 0 white, inset 0 -6px 14px rgba(58,58,166,0.18), 0 5px 12px -5px rgba(58,58,166,0.32)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--indigo)",
  } as React.CSSProperties,
  primNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--teal)",
  } as React.CSSProperties,
  primH3: {
    fontFamily: "var(--font-sans)",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "var(--ink)",
    lineHeight: 1.15,
  } as React.CSSProperties,
  primP: { fontSize: "13.5px", lineHeight: 1.55, color: "var(--ink-2)" } as React.CSSProperties,
  tech: {
    marginTop: "auto",
    paddingTop: "16px",
    borderTop: "1px solid var(--line-faint)",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.12em",
    color: "var(--ink-3)",
    textTransform: "uppercase",
  } as React.CSSProperties,
  techB: { color: "var(--ink)", fontWeight: 500, letterSpacing: "0.04em" } as React.CSSProperties,

  // Live snapshot widget
  liveWrap: {
    maxWidth: "1300px",
    margin: "0 auto",
    background: "linear-gradient(180deg, #0c1117 0%, #131a25 100%)",
    borderRadius: "28px",
    padding: "clamp(40px, 5vw, 64px)",
    color: "white",
    boxShadow: "var(--shadow-xl)",
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,
  liveHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "36px",
    position: "relative",
    zIndex: 1,
  } as React.CSSProperties,
  liveHeadH3: {
    fontSize: "clamp(28px, 2.4vw, 42px)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    color: "white",
    marginTop: "14px",
    maxWidth: "18ch",
  } as React.CSSProperties,
  livePill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    background: "rgba(94,234,212,0.12)",
    border: "1px solid rgba(94,234,212,0.3)",
    borderRadius: "999px",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--teal-2)",
    alignSelf: "flex-start",
  } as React.CSSProperties,
  livePillDot: {
    width: "7px",
    height: "7px",
    background: "var(--teal-2)",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(94,234,212,0.15)",
  } as React.CSSProperties,
  liveGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
  } as React.CSSProperties,
  liveCell: {
    background: "rgba(12,17,23,0.7)",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  } as React.CSSProperties,
  liveLbl: {
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
  } as React.CSSProperties,
  liveNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(32px, 3vw, 48px)",
    letterSpacing: "-0.04em",
    color: "white",
    lineHeight: 1,
  } as React.CSSProperties,
  liveUnit: { fontSize: "0.42em", color: "var(--teal-2)", marginLeft: "2px", letterSpacing: 0 } as React.CSSProperties,
  liveSub: { fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "4px" } as React.CSSProperties,
  ticker: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.04em",
    color: "var(--teal-2)",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,
  liveStream: {
    marginTop: "28px",
    padding: "20px 24px",
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(94,234,212,0.18)",
    borderRadius: "14px",
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    letterSpacing: "0.02em",
    color: "rgba(255,255,255,0.7)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "relative",
    zIndex: 1,
    maxHeight: "180px",
    overflow: "hidden",
    WebkitMaskImage: "linear-gradient(180deg, black 50%, transparent 100%)",
    maskImage: "linear-gradient(180deg, black 50%, transparent 100%)",
  } as React.CSSProperties,
  streamLine: { display: "flex", gap: "12px" } as React.CSSProperties,
  streamT: { color: "var(--teal-2)" } as React.CSSProperties,
  streamOk: { color: "var(--teal-2)" } as React.CSSProperties,

  // Uses cards
  uses: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  } as React.CSSProperties,
  useBase: {
    padding: "32px 28px 28px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "18px",
    boxShadow: "var(--shadow-md)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    gridColumn: "span 2",
    color: "inherit",
  } as React.CSSProperties,
  useLead: {
    gridColumn: "span 4",
    padding: "44px 40px",
    background:
      "radial-gradient(ellipse at 0% 0%, var(--teal-soft) 0%, transparent 55%), white",
    borderColor: "rgba(10,138,120,0.18)",
  } as React.CSSProperties,
  useLeadGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
    gap: "48px",
    alignItems: "center",
  } as React.CSSProperties,
  useHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,
  useNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--teal)",
  } as React.CSSProperties,
  useIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "var(--teal-soft)",
    color: "var(--teal)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(10,138,120,0.18)",
  } as React.CSSProperties,
  useH3: {
    fontSize: "clamp(20px, 1.5vw, 26px)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "var(--ink)",
    lineHeight: 1.15,
    maxWidth: "18ch",
  } as React.CSSProperties,
  useLeadH3: {
    fontSize: "clamp(28px, 2.4vw, 42px)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "var(--ink)",
    lineHeight: 1.05,
    maxWidth: "14ch",
    marginTop: "24px",
  } as React.CSSProperties,
  verb: { fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--teal)" } as React.CSSProperties,
  useList: { listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" } as React.CSSProperties,
  useLi: {
    fontSize: "13.5px",
    lineHeight: 1.5,
    color: "var(--ink-2)",
    paddingLeft: "18px",
    position: "relative",
  } as React.CSSProperties,
  useLink: {
    marginTop: "auto",
    paddingTop: "18px",
    borderTop: "1px solid var(--line-faint)",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--ink)",
  } as React.CSSProperties,

  // Proof block
  proof: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
    gap: "28px",
    alignItems: "stretch",
  } as React.CSSProperties,
  proofFocus: {
    padding: "44px 40px",
    background:
      "radial-gradient(ellipse at 0% 0%, var(--teal-soft) 0%, transparent 50%), white",
    border: "1px solid var(--line)",
    borderRadius: "22px",
    boxShadow: "var(--shadow-lg)",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    position: "relative",
  } as React.CSSProperties,
  anchorTag: {
    display: "inline-flex",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "6px 12px",
    borderRadius: "999px",
    color: "var(--teal)",
    background: "var(--teal-soft)",
  } as React.CSSProperties,
  proofFocusH3: {
    fontSize: "clamp(28px, 2.4vw, 44px)",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    color: "var(--ink)",
    lineHeight: 1.05,
    maxWidth: "16ch",
  } as React.CSSProperties,
  proofFocusP: {
    fontSize: "15px",
    lineHeight: 1.55,
    color: "var(--ink-2)",
    maxWidth: "48ch",
  } as React.CSSProperties,
  focusLogo: {
    marginTop: "auto",
    padding: "24px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    boxShadow: "var(--shadow-sm)",
  } as React.CSSProperties,
  focusMark: {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: "22px",
    letterSpacing: "0.04em",
    color: "var(--ink)",
    lineHeight: 1.05,
  } as React.CSSProperties,
  focusMeta: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--ink-3)",
    textAlign: "right",
  } as React.CSSProperties,
  proofStats: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" } as React.CSSProperties,
  proofStat: {
    padding: "28px 24px",
    background: "white",
    border: "1px solid var(--line)",
    borderRadius: "18px",
    boxShadow: "var(--shadow-md)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  } as React.CSSProperties,
  proofStatIdx: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--teal)",
  } as React.CSSProperties,
  proofStatNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(36px, 3vw, 52px)",
    letterSpacing: "-0.04em",
    color: "var(--ink)",
    lineHeight: 1,
  } as React.CSSProperties,
  proofStatLbl: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ink-3)",
    marginTop: "auto",
    lineHeight: 1.4,
  } as React.CSSProperties,

  // CTA two doors
  ctaWrap: {
    margin: "80px auto 100px",
    maxWidth: "1400px",
    borderRadius: "28px",
    background:
      "radial-gradient(ellipse at 20% 0%, rgba(94,234,212,0.16) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(31,100,215,0.18) 0%, transparent 50%), linear-gradient(180deg, #0c1117 0%, #131a25 100%)",
    color: "white",
    padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)",
    boxShadow: "var(--shadow-xl)",
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,
  ctaStamp: {
    position: "absolute",
    top: "28px",
    right: "32px",
    fontFamily: "var(--font-mono)",
    fontSize: "9px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.55)",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "10px 16px",
    borderRadius: "10px",
    lineHeight: 1.7,
    textAlign: "right",
  } as React.CSSProperties,
  ctaStampAccent: { color: "var(--teal-2)", fontSize: "16px", letterSpacing: "0.04em" } as React.CSSProperties,
  ctaHead: { maxWidth: "60ch" } as React.CSSProperties,
  ctaHeadH2: { color: "white", marginTop: "24px" } as React.CSSProperties,
  ctaHeadP: {
    color: "rgba(255,255,255,0.7)",
    marginTop: "24px",
    maxWidth: "50ch",
    fontSize: "clamp(16px, 1.2vw, 19px)",
    lineHeight: 1.5,
  } as React.CSSProperties,
  doors: { marginTop: "56px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px" } as React.CSSProperties,
  doorBase: {
    padding: "32px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  } as React.CSSProperties,
  doorPrimary: {
    background: "rgba(94,234,212,0.08)",
    borderColor: "rgba(94,234,212,0.3)",
  } as React.CSSProperties,
  doorNum: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--teal-2)",
  } as React.CSSProperties,
  doorH4: {
    fontSize: "clamp(20px, 1.6vw, 28px)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "white",
    lineHeight: 1.15,
    maxWidth: "18ch",
  } as React.CSSProperties,
  doorP: { fontSize: "14px", lineHeight: 1.55, color: "rgba(255,255,255,0.7)", maxWidth: "38ch" } as React.CSSProperties,
  doorLinks: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" } as React.CSSProperties,
  doorLink: {
    padding: "14px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  } as React.CSSProperties,
  doorLinkLabel: { display: "flex", flexDirection: "column", gap: "2px" } as React.CSSProperties,
  doorLinkRole: { fontSize: "14px", color: "white", fontWeight: 500 } as React.CSSProperties,
  doorLinkBlurb: { fontSize: "12px", color: "rgba(255,255,255,0.55)" } as React.CSSProperties,
  doorArrow: {
    width: "14px",
    height: "1px",
    background: "rgba(255,255,255,0.5)",
    position: "relative",
  } as React.CSSProperties,
};

// ---------------------------------------------------------------------------
// Reusable inline SVG marks
// ---------------------------------------------------------------------------

function IntelViz() {
  return (
    <svg viewBox="0 0 280 80" preserveAspectRatio="xMidYMid meet">
      <g stroke="var(--indigo)" strokeWidth="0.8" opacity="0.18">
        <line x1="20" y1="20" x2="60" y2="40" />
        <line x1="60" y1="40" x2="100" y2="25" />
        <line x1="100" y1="25" x2="140" y2="50" />
        <line x1="140" y1="50" x2="180" y2="30" />
        <line x1="180" y1="30" x2="220" y2="55" />
        <line x1="220" y1="55" x2="260" y2="35" />
        <line x1="20" y1="60" x2="60" y2="40" />
        <line x1="60" y1="40" x2="100" y2="65" />
        <line x1="100" y1="65" x2="140" y2="50" />
        <line x1="140" y1="50" x2="180" y2="70" />
        <line x1="180" y1="70" x2="220" y2="55" />
        <line x1="220" y1="55" x2="260" y2="65" />
      </g>
      <g fill="var(--indigo)" opacity="0.7">
        <circle cx="20" cy="20" r="3" />
        <circle cx="60" cy="40" r="3.5" />
        <circle cx="100" cy="25" r="3" />
        <circle cx="140" cy="50" r="4" />
        <circle cx="180" cy="30" r="3" />
        <circle cx="220" cy="55" r="3.5" />
        <circle cx="260" cy="35" r="3" />
        <circle cx="20" cy="60" r="2.5" />
        <circle cx="100" cy="65" r="3" />
        <circle cx="180" cy="70" r="2.5" />
        <circle cx="260" cy="65" r="3" />
      </g>
    </svg>
  );
}

function BridgeArrows() {
  return (
    <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <marker id="ahead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path fill="var(--teal)" d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <path stroke="var(--teal)" strokeWidth="1.4" fill="none" strokeDasharray="4 4" opacity="0.7" d="M 40 50 L 40 10" markerEnd="url(#ahead)" />
      <path stroke="var(--teal)" strokeWidth="1.4" fill="none" strokeDasharray="4 4" opacity="0.7" d="M 100 50 L 100 10" markerEnd="url(#ahead)" />
      <path stroke="var(--teal)" strokeWidth="1.4" fill="none" strokeDasharray="4 4" opacity="0.7" d="M 160 50 L 160 10" markerEnd="url(#ahead)" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Two layer hero visual (3D stack)
// ---------------------------------------------------------------------------

function TwoLayerVisual() {
  return (
    <div style={styles.twoLayer} aria-hidden>
      <div style={styles.twoLayerInner}>

        {/* Intelligence layer (top) */}
        <div style={{ ...styles.layerCardBase, ...styles.layerIntel }}>
          <div style={styles.layerHead}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={styles.intelNum}>Layer 02 . Intelligence</span>
              <h4 style={styles.layerH4}>Patterns across the fleet</h4>
            </div>
            <span style={styles.authIndigo}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--indigo)", display: "inline-block" }} />
              AI trained
            </span>
          </div>
          <div style={styles.intelViz}>
            <div style={styles.intelVizSvg}>
              <IntelViz />
            </div>
          </div>
          <div style={styles.meta}>
            <span><b style={styles.metaB}>142</b> hulls</span>
            <span><b style={styles.metaB}>47</b> OEMs</span>
            <span>anonymized</span>
          </div>
        </div>

        {/* Bridge */}
        <div style={styles.layerBridge}>
          <BridgeArrows />
        </div>

        {/* Hull record (bottom) */}
        <div style={{ ...styles.layerCardBase, ...styles.layerRecord }}>
          <div style={styles.layerHead}>
            <div>
              <span style={styles.recordNum}>Layer 01 . Hull record</span>
              <h4 style={{ ...styles.layerH4, marginTop: "6px" }}>M/Y Atlas . 32m</h4>
            </div>
            <span style={styles.authTeal}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
              Owner authorized
            </span>
          </div>
          <div style={styles.recordRows}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
              <span>HIN</span><b style={{ color: "var(--ink)", fontWeight: 500 }}>NL FCS 2024 018</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
              <span>Builder</span><b style={{ color: "var(--ink)", fontWeight: 500 }}>Focus Motor Y.</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderTop: "1px solid var(--line-faint)" }}>
              <span>Engines</span><b style={{ color: "var(--ink)", fontWeight: 500 }}>2x MTU 16V</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderTop: "1px solid var(--line-faint)" }}>
              <span>Voyages</span><b style={{ color: "var(--ink)", fontWeight: 500 }}>847 logged</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderTop: "1px solid var(--line-faint)" }}>
              <span>Events</span><b style={{ color: "var(--ink)", fontWeight: 500 }}>12,400 signed</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderTop: "1px solid var(--line-faint)" }}>
              <span>Status</span><b style={{ color: "var(--teal)", fontWeight: 500 }}>. live</b>
            </div>
          </div>
        </div>

        <div style={{ ...styles.pill3dBase, left: "-6%", top: "14%", transform: "translateZ(140px)" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--indigo)" }} />
          Pattern detection
        </div>
        <div style={{ ...styles.pill3dBase, right: "-6%", bottom: "14%", transform: "translateZ(140px)" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--teal)" }} />
          Owner scoped
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PlatformPage() {
  return (
    <>
      <Rail items={RAIL_ITEMS} />

      {/* HERO */}
      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>∕</span>
            <span className="accent">Platform</span>
          </>
        }
        headline={
          <>
            Every hull
            <br />
            smarter. <span className="italic">Every player sharper.</span>
          </>
        }
        tag={<>Live on 142 hulls . 47 OEMs . since 2025</>}
        sub={
          <>
            Two layers, one platform. <b>The hull record</b>, one per boat, owner authorized. <b>The intelligence layer</b>, patterns across the fleet, AI trained. The marine industry runs on both.
          </>
        }
        actions={[
          { href: "#cta", label: "Request access", variant: "primary" },
          { href: "#layers", label: "See how it works", variant: "ghost" },
        ]}
        visual={<TwoLayerVisual />}
      />

      {/* TWO LAYERS — EXPLAINER */}
      <Section
        id="layers"
        eyebrow="The architecture"
        title={<>A specific boat. <span className="italic">An entire industry.</span></>}
        lead={<>VesselIQ runs as two cooperating layers. The bottom layer keeps every hull&apos;s story. The top layer learns from all of them.</>}
        className="shell"
      >
        <div style={styles.layersExplain}>
          <Reveal>
            <div style={styles.layerTileBase}>
              <div style={styles.layerTileStripeTeal} />
              <span style={styles.badgeTeal}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--teal)" }} />
                Layer 01 . Hull record
              </span>
              <h3 style={styles.layerTileH3}>The boat&apos;s own file. Identified. Authorized.</h3>
              <p style={styles.layerTileP}>
                Spec, history, current state, every signed event since commissioning. Identifiable data. The owner decides which yards, OEMs, brokers, insurers, or apps get to see what, and can pull the grant at any time.
              </p>
              <div style={styles.who}>
                <span style={styles.whoLbl}>Belongs to</span>
                <span style={styles.whoVal}>
                  <span style={{ color: "var(--teal)" }}>.</span> The owner of the hull.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={styles.layerTileBase}>
              <div style={styles.layerTileStripeIndigo} />
              <span style={styles.badgeIndigo}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--indigo)" }} />
                Layer 02 . Intelligence
              </span>
              <h3 style={styles.layerTileH3}>The pattern. Anonymized. Learning.</h3>
              <p style={styles.layerTileP}>
                Failure modes, fleet benchmarks, equipment performance, market signals. Aggregated across the network so no single boat is identifiable, then licensed to builders, OEMs, developers, brokers, and insurers to make decisions with.
              </p>
              <div style={styles.who}>
                <span style={styles.whoLbl}>Belongs to</span>
                <span style={styles.whoVal}>
                  <span style={{ color: "var(--indigo)" }}>.</span> The platform. Powering everyone on it.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CINEMATIC 01 - Red hull */}
      <CinePlate
        image="/assets/yacht-red.jpg"
        eyebrow="A hull. A record. A network."
        headline="Every hull starts as one. Every record outlives it."
        body="From the first frame in the yard to the last voyage of its life. One file. Owner authorized. Carried forward through every refit, sale, and survey."
      />

      {/* PRIMITIVES */}
      <Section
        id="primitives"
        eyebrow="The primitives"
        title={<>Five bricks. <span className="italic">Everything else stacks.</span></>}
        className="shell"
      >
        <div style={styles.primitives}>
          <Reveal as="article">
            <div style={styles.primBase}>
              <div style={styles.primIconTeal}>
                <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <span style={styles.primNum}>P . 01</span>
              <h3 style={styles.primH3}>Hull record</h3>
              <p style={styles.primP}>One canonical file per boat. Versioned from frame zero to scrap. The single source of truth that travels with the hull.</p>
              <div style={styles.tech}><b style={styles.techB}>One file</b> . per hull . forever</div>
            </div>
          </Reveal>

          <Reveal as="article" delay={1}>
            <div style={styles.primBase}>
              <div style={styles.primIconIndigo}>
                <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12c2-4 6-6 9-6s7 2 9 6c-2 4-6 6-9 6s-7-2-9-6z" />
                </svg>
              </div>
              <span style={{ ...styles.primNum, color: "var(--indigo)" }}>P . 02</span>
              <h3 style={styles.primH3}>Intelligence layer</h3>
              <p style={styles.primP}>Anonymized patterns across every hull on the platform. AI trained on a corpus that exists nowhere else. Carfax level signal for marine.</p>
              <div style={styles.tech}><b style={styles.techB}>Aggregate</b> . across the fleet</div>
            </div>
          </Reveal>

          <Reveal as="article" delay={2}>
            <div style={styles.primBase}>
              <div style={styles.primIconTeal}>
                <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h4l2-6 4 12 2-6h6" />
                </svg>
              </div>
              <span style={styles.primNum}>P . 03</span>
              <h3 style={styles.primH3}>Live telemetry</h3>
              <p style={styles.primP}>Sensor to cloud to subscriber, p50 118ms. Real time stream from every connected system on the boat, normalized into one model.</p>
              <div style={styles.tech}><b style={styles.techB}>118ms</b> . sensor to pocket</div>
            </div>
          </Reveal>

          <Reveal as="article">
            <div style={{ ...styles.primBase, gridColumn: "2 / span 2" }}>
              <div style={styles.primIconTeal}>
                <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
              </div>
              <span style={styles.primNum}>P . 04</span>
              <h3 style={styles.primH3}>Authorization model</h3>
              <p style={styles.primP}>Granular, revocable consent for anything that identifies a boat. The owner stays in the loop. Hull, voyage, maintenance, alarms, each its own scope.</p>
              <div style={styles.tech}><b style={styles.techB}>Owner scoped</b> . revocable</div>
            </div>
          </Reveal>

          <Reveal as="article" delay={1}>
            <div style={styles.primBase}>
              <div style={styles.primIconTeal}>
                <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="8 6 2 12 8 18" />
                  <polyline points="16 6 22 12 16 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
              <span style={styles.primNum}>P . 05</span>
              <h3 style={styles.primH3}>Developer surface</h3>
              <p style={styles.primP}>A real API for boats. SDK in four runtimes. Sandbox hulls. AI training endpoints. Documentation that knows what a bilge is.</p>
              <div style={styles.tech}><b style={styles.techB}>@vesseliq/sdk</b> . four runtimes</div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* LIVE NOW */}
      <Section
        id="live"
        eyebrow="Live, right now"
        title={<>The platform <span className="italic">in motion.</span></>}
        className="shell"
      >
        <Reveal delay={2}>
          <div style={styles.liveWrap}>
            <div style={styles.liveHead}>
              <div>
                <span className="eyebrow" style={{ color: "var(--teal-2)" }}>142 hulls streaming</span>
                <h3 style={styles.liveHeadH3}>What&apos;s flowing through VesselIQ right now</h3>
              </div>
              <span style={styles.livePill}>
                <span style={styles.livePillDot} />
                Live . 22:14:08 UTC
              </span>
            </div>

            <div style={styles.liveGrid}>
              <div style={styles.liveCell}>
                <span style={styles.liveLbl}>Events / sec</span>
                <span style={styles.liveNum}>12,400</span>
                <span style={styles.ticker}>streaming</span>
              </div>
              <div style={styles.liveCell}>
                <span style={styles.liveLbl}>Hulls online</span>
                <span style={styles.liveNum}>142<span style={styles.liveUnit}>/ 142</span></span>
                <span style={styles.liveSub}>99.4% fleet uptime . 90d</span>
              </div>
              <div style={styles.liveCell}>
                <span style={styles.liveLbl}>Sensor to pocket . p50</span>
                <span style={styles.liveNum}>118<span style={styles.liveUnit}>ms</span></span>
                <span style={styles.liveSub}>end to end</span>
              </div>
              <div style={styles.liveCell}>
                <span style={styles.liveLbl}>Signed events . today</span>
                <span style={styles.liveNum}>847,221</span>
                <span style={styles.ticker}>+12 / sec</span>
              </div>
            </div>

            <div style={styles.liveStream}>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:08</span> <b style={{ color: "white", fontWeight: 500 }}>M/Y Atlas</b> . bearing 03 temp +0.4°C/hr . <span style={styles.streamOk}>signed . MTU.MFG.v4</span></div>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:07</span> <b style={{ color: "white", fontWeight: 500 }}>S/Y Halcyon</b> . voyage start . Antibes to Porto Cervo . <span style={styles.streamOk}>signed . CAPT.J.LIRA</span></div>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:06</span> <b style={{ color: "white", fontWeight: 500 }}>M/Y Northwind</b> . genset 2 idle . <span style={styles.streamOk}>signed . KOHLER.TLM.v2</span></div>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:05</span> <b style={{ color: "white", fontWeight: 500 }}>M/Y Solace</b> . service event . raw water impeller . <span style={styles.streamOk}>signed . YARD.AMB</span></div>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:04</span> <b style={{ color: "white", fontWeight: 500 }}>M/Y Sirius</b> . HVAC zone 3 setpoint 22°C . <span style={styles.streamOk}>signed . CRESTRON.v9</span></div>
              <div style={styles.streamLine}><span style={styles.streamT}>22:14:03</span> <b style={{ color: "white", fontWeight: 500 }}>M/Y Atlas</b> . fuel transfer port to stbd . <span style={styles.streamOk}>signed . ENG.M.ROSS</span></div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* USES */}
      <Section
        id="uses"
        eyebrow="Built on top"
        title={<>What you can do <span className="italic">with both layers.</span></>}
        lead="Five entry points. Five dedicated pages. Pick yours."
        className="shell"
      >
        <div style={styles.uses}>
          {/* Builders - lead */}
          <Reveal>
            <Link href="/builders" style={{ ...styles.useBase, ...styles.useLead, textDecoration: "none" }}>
              <div style={styles.useLeadGrid}>
                <div>
                  <div style={styles.useHead}>
                    <div style={styles.useIcon}>
                      <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
                      </svg>
                    </div>
                    <span style={styles.useNum}>U . 01 . Builders</span>
                  </div>
                  <h3 style={styles.useLeadH3}>Build hulls that get <span style={styles.verb}>smarter</span> after they leave the yard.</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <ul style={styles.useList}>
                    <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Live telemetry and management insight on every hull you&apos;ve delivered</li>
                    <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Warranty cost down. Failure patterns across your whole book, predicted not reacted to</li>
                    <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Pick equipment with data. What actually lasts, on what kind of boat, in what kind of water</li>
                    <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />A smart app where every supplier you chose collaborates in one cloud, by default</li>
                  </ul>
                  <span style={styles.useLink}>Builder partner program <span className="arrow" /></span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Manufacturers */}
          <Reveal>
            <Link href="/manufacturers" style={{ ...styles.useBase, textDecoration: "none" }}>
              <div style={styles.useHead}>
                <div style={styles.useIcon}>
                  <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  </svg>
                </div>
                <span style={styles.useNum}>U . 02 . Manufacturers</span>
              </div>
              <h3 style={styles.useH3}>See your gear in the wild. <span style={styles.verb}>Build software around it.</span></h3>
              <ul style={styles.useList}>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Failure pattern detection across every install of your kit</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Warranty exposure modeled on real signal, not guessed</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Ship software in our cloud, or interop with what&apos;s already there</li>
              </ul>
              <span style={styles.useLink}>Integrate your equipment <span className="arrow" /></span>
            </Link>
          </Reveal>

          {/* Developers */}
          <Reveal delay={1}>
            <Link href="/developers" style={{ ...styles.useBase, textDecoration: "none" }}>
              <div style={styles.useHead}>
                <div style={styles.useIcon}>
                  <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="8 6 2 12 8 18" />
                    <polyline points="16 6 22 12 16 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                  </svg>
                </div>
                <span style={styles.useNum}>U . 03 . Developers</span>
              </div>
              <h3 style={styles.useH3}>The first real data layer <span style={styles.verb}>for marine software.</span></h3>
              <ul style={styles.useList}>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Train models on a corpus that doesn&apos;t exist anywhere else</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Build against a real API, with sandbox hulls to test on</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Skip the integration work. Protocols normalized at the layer</li>
              </ul>
              <span style={styles.useLink}>Request developer access <span className="arrow" /></span>
            </Link>
          </Reveal>

          {/* Brokers */}
          <Reveal>
            <Link href="/brokers" style={{ ...styles.useBase, textDecoration: "none" }}>
              <div style={styles.useHead}>
                <div style={styles.useIcon}>
                  <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M16 16l5 5" />
                  </svg>
                </div>
                <span style={styles.useNum}>U . 04 . Brokers</span>
              </div>
              <h3 style={styles.useH3}>The HIN lookup the industry has <span style={styles.verb}>been missing.</span></h3>
              <ul style={styles.useList}>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Universal HIN search to confirmed spec, single source</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Owner authorized unified record from YMH or any management app</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Telemetry devices and owner app you can attach to a listing or a policy</li>
              </ul>
              <span style={styles.useLink}>See broker tools <span className="arrow" /></span>
            </Link>
          </Reveal>

          {/* Insurers */}
          <Reveal delay={1}>
            <Link href="/insurers" style={{ ...styles.useBase, textDecoration: "none" }}>
              <div style={styles.useHead}>
                <div style={styles.useIcon}>
                  <svg viewBox="0 0 24 24" width={22} height={22} stroke="currentColor" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span style={styles.useNum}>U . 05 . Insurers</span>
              </div>
              <h3 style={styles.useH3}>Underwrite on signal. <span style={styles.verb}>Adjudicate in hours.</span></h3>
              <ul style={styles.useList}>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Price on real telemetry, not a 40 page submission</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Claims pre populated from the canonical record, signed at source</li>
                <li style={styles.useLi}><span style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%", boxShadow: "0 0 0 3px var(--teal-glow)" }} />Loss prevention with predictive failure modeling from the intelligence layer</li>
              </ul>
              <span style={styles.useLink}>See the insurer page <span className="arrow" /></span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* PROOF */}
      <Section
        id="proof"
        eyebrow="Standing today"
        title={<>Quietly real <span className="italic">for eleven months.</span></>}
        lead="VesselIQ has been running on real yachts since last summer. Eight founding yards. Three continents. No marketing site until now."
        className="shell"
      >
        <div style={styles.proof}>
          <Reveal>
            <div style={styles.proofFocus}>
              <span style={styles.anchorTag}>
                <span style={{ width: "6px", height: "6px", background: "var(--teal)", borderRadius: "50%" }} />
                Anchor builder partner
              </span>
              <h3 style={styles.proofFocusH3}>Focus Motor Yachts is the <span className="italic">first.</span></h3>
              <p style={styles.proofFocusP}>
                Focus is the first builder in the world to make VesselIQ standard equipment on every hull they deliver. Their boats ship with the platform built in, ready for every equipment partner to integrate against from day one.
              </p>
              <div style={styles.focusLogo}>
                <div style={styles.focusMark}>
                  FOCUS<br />MOTOR<br /><span style={{ color: "var(--teal)" }}>YACHTS</span>
                </div>
                <div style={styles.focusMeta}>
                  <b style={{ color: "var(--ink)" }}>Builder . Netherlands</b><br />
                  Anchor partner . 2026<br />
                  <span style={{ color: "var(--teal)" }}>. Every hull, every build</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div style={styles.proofStats}>
              <div style={styles.proofStat}>
                <span style={styles.proofStatIdx}>N . 01</span>
                <span style={styles.proofStatNum}>8</span>
                <span style={styles.proofStatLbl}>Founding shipyards . 3 continents</span>
              </div>
              <div style={styles.proofStat}>
                <span style={styles.proofStatIdx}>N . 02</span>
                <span style={styles.proofStatNum}>47</span>
                <span style={styles.proofStatLbl}>OEM partners signing specs</span>
              </div>
              <div style={styles.proofStat}>
                <span style={styles.proofStatIdx}>N . 03</span>
                <span style={styles.proofStatNum}>142</span>
                <span style={styles.proofStatLbl}>Hulls live on the platform</span>
              </div>
              <div style={styles.proofStat}>
                <span style={styles.proofStatIdx}>N . 04</span>
                <span style={styles.proofStatNum}>0</span>
                <span style={styles.proofStatLbl}>Proprietary protocols required</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CINEMATIC 02 - Black hull */}
      <CinePlate
        image="/assets/yacht-black.jpg"
        eyebrow="Eight founding yards . 142 hulls . 47 OEMs"
        headline="Quietly real for eleven months."
        body="No marketing site until now. Just hulls on the water, talking to the platform, and an anchor partner who shipped every new build on the layer."
      />

      {/* CTA - two doors */}
      <section className="shell" id="cta">
        <div style={styles.ctaWrap}>
          <div style={styles.ctaStamp}>
            Anchor program<br />
            <span style={styles.ctaStampAccent}>4 of 12</span><br />
            yard seats left . 2026
          </div>

          <div style={styles.ctaHead}>
            <span className="eyebrow" style={{ color: "var(--teal-2)" }}>Access</span>
            <h2 className="display display-xl" style={styles.ctaHeadH2}>Pick a door.</h2>
            <p style={styles.ctaHeadP}>VesselIQ is invited, not bought. Yards come in through the anchor program. Everyone else comes in through their role.</p>
          </div>

          <div style={styles.doors}>
            {/* Door 01 - shipyards */}
            <div style={{ ...styles.doorBase, ...styles.doorPrimary }}>
              <span style={styles.doorNum}>Door . 01, for shipyards</span>
              <h4 style={styles.doorH4}>Anchor program . four seats for 2026</h4>
              <p style={styles.doorP}>If you build, refit, or operate yachts above 24m and want to ship hulls that already know themselves, apply.</p>
              <form style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }} action="/api/cta" method="post">
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "12px", alignItems: "center", padding: "10px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Yard</span>
                  <input type="text" name="yard" placeholder="Shipyard or company" style={{ background: "transparent", border: "none", color: "white", fontFamily: "inherit", fontSize: "14px", outline: "none", width: "100%" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "12px", alignItems: "center", padding: "10px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>You</span>
                  <input type="text" name="name" placeholder="Name and title" style={{ background: "transparent", border: "none", color: "white", fontFamily: "inherit", fontSize: "14px", outline: "none", width: "100%" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "12px", alignItems: "center", padding: "10px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Email</span>
                  <input type="email" name="email" placeholder="hello@yard.com" style={{ background: "transparent", border: "none", color: "white", fontFamily: "inherit", fontSize: "14px", outline: "none", width: "100%" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "12px", alignItems: "center", padding: "10px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Hulls / yr</span>
                  <select name="hulls" style={{ background: "transparent", border: "none", color: "white", fontFamily: "inherit", fontSize: "14px", outline: "none", width: "100%" }}>
                    <option style={{ color: "var(--ink)" }}>1, 2</option>
                    <option style={{ color: "var(--ink)" }}>3, 6</option>
                    <option style={{ color: "var(--ink)" }}>7, 12</option>
                    <option style={{ color: "var(--ink)" }}>13+</option>
                  </select>
                </div>
                <button type="submit" style={{ marginTop: "14px", padding: "14px 20px", background: "var(--teal-2)", color: "var(--ink)", borderRadius: "999px", display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: "10px", fontWeight: 500, fontSize: "14px" }}>
                  <span>Request access</span>
                  <span className="arrow" />
                </button>
              </form>
            </div>

            {/* Door 02 - everyone else */}
            <div style={styles.doorBase}>
              <span style={styles.doorNum}>Door . 02, for everyone else</span>
              <h4 style={styles.doorH4}>Pick your role.</h4>
              <p style={styles.doorP}>Each path has its own contact, terms, and onboarding flow.</p>
              <div style={styles.doorLinks}>
                <Link href="/manufacturers" style={{ ...styles.doorLink, textDecoration: "none" }}>
                  <span style={styles.doorLinkLabel}>
                    <span style={styles.doorLinkRole}>Manufacturers</span>
                    <span style={styles.doorLinkBlurb}>Integrate your equipment</span>
                  </span>
                  <span style={styles.doorArrow} />
                </Link>
                <Link href="/developers" style={{ ...styles.doorLink, textDecoration: "none" }}>
                  <span style={styles.doorLinkLabel}>
                    <span style={styles.doorLinkRole}>Developers</span>
                    <span style={styles.doorLinkBlurb}>API . SDK . sandbox hulls</span>
                  </span>
                  <span style={styles.doorArrow} />
                </Link>
                <Link href="/brokers" style={{ ...styles.doorLink, textDecoration: "none" }}>
                  <span style={styles.doorLinkLabel}>
                    <span style={styles.doorLinkRole}>Brokers and surveyors</span>
                    <span style={styles.doorLinkBlurb}>HIN lookup . unified record</span>
                  </span>
                  <span style={styles.doorArrow} />
                </Link>
                <Link href="/insurers" style={{ ...styles.doorLink, textDecoration: "none" }}>
                  <span style={styles.doorLinkLabel}>
                    <span style={styles.doorLinkRole}>Insurers</span>
                    <span style={styles.doorLinkBlurb}>Telemetry backed underwriting</span>
                  </span>
                  <span style={styles.doorArrow} />
                </Link>
                <a href="https://yachtmastershub.com" target="_blank" rel="noopener noreferrer" style={{ ...styles.doorLink, textDecoration: "none" }}>
                  <span style={styles.doorLinkLabel}>
                    <span style={styles.doorLinkRole}>Owners and captains</span>
                    <span style={styles.doorLinkBlurb}>Go to Yacht Masters Hub</span>
                  </span>
                  <span style={styles.doorArrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { CinePlate } from "@/components/sections/CinePlate";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";

export const metadata: Metadata = {
  title: "Builders",
  description:
    "Telemetry and management insight, warranty cost down, equipment picked on data, and one cloud where every supplier you chose actually collaborates. Anchor: Focus Motor Yachts.",
};

const railItems: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "wins", label: "What you get" },
  { id: "console", label: "Build console" },
  { id: "selection", label: "Equipment" },
  { id: "anchor", label: "Anchor" },
  { id: "cta", label: "Access" },
];

// Builders specific styles. The shared globals cover the hero, section, eyebrow,
// reveal, and cine-plate primitives. Everything below is page local: the 3D
// hero card stack, the four win cards, the live build console, the three
// equipment modes, the Focus anchor block, and the multi field CTA form.
const buildersCss = `
/* Hero 3D continuum */
.hero-3d { aspect-ratio: 1 / 1.05; width: 100%; max-width: 580px; margin: 0 auto; perspective: 1500px; }
.hero-3d-inner {
  position: absolute; inset: 0;
  transform-style: preserve-3d;
  transform: rotateX(12deg) rotateY(-18deg);
  animation: tilt3d 18s ease-in-out infinite;
}
@keyframes tilt3d {
  0%,100% { transform: rotateX(12deg) rotateY(-18deg) translateY(0); }
  50%     { transform: rotateX(14deg) rotateY(-15deg) translateY(-8px); }
}
.card3d {
  position: absolute;
  border-radius: 22px;
  background: white;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  transform-style: preserve-3d;
}
.card3d.b-build {
  left: 0; bottom: 0;
  width: 80%; height: 44%;
  transform: translateZ(-40px);
  background:
    radial-gradient(ellipse at 20% 100%, #fff7e8 0%, transparent 60%),
    linear-gradient(180deg, #fcfaf4 0%, #f0ede5 100%);
  padding: 20px 22px;
  display: flex; flex-direction: column; gap: 10px;
}
.b-build .top { display: flex; justify-content: space-between; align-items: center; }
.b-build .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #c5790a; }
.b-build h4 { font-family: var(--font-sans); font-weight: 500; font-size: 17px; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.b-build .progress {
  margin-top: 6px;
  height: 6px; background: var(--canvas-2); border-radius: 999px; overflow: hidden;
  position: relative;
}
.b-build .progress .fill {
  height: 100%; width: 64%;
  background: linear-gradient(90deg, #c5790a 0%, var(--teal) 100%);
  border-radius: 999px;
}
.b-build .markers {
  display: flex; justify-content: space-between;
  font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-3); margin-top: 6px;
}
.b-build .markers .now { color: var(--teal); font-weight: 500; }
.b-build .meta { margin-top: auto; display: flex; gap: 18px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-3); }
.b-build .meta b { color: var(--ink); font-weight: 500; letter-spacing: 0.06em; }

.card3d.b-live {
  right: 0; top: 0;
  width: 78%; height: 50%;
  transform: translateZ(60px);
  background:
    radial-gradient(ellipse at 80% 0%, var(--teal-soft) 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%);
  border: 1px solid rgba(10,138,120,0.18);
  padding: 20px 22px;
  display: flex; flex-direction: column; gap: 12px;
}
.b-live .top { display: flex; justify-content: space-between; align-items: flex-start; }
.b-live .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.b-live h4 { font-family: var(--font-sans); font-weight: 500; font-size: 17px; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.b-live .pulse-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--teal);
  padding: 4px 9px;
  background: var(--teal-soft); border-radius: 999px;
}
.b-live .pulse-tag::before {
  content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--teal);
  box-shadow: 0 0 0 3px var(--teal-glow);
  animation: pulseTag 1.8s ease-in-out infinite;
}
@keyframes pulseTag { 0%,100% { box-shadow: 0 0 0 3px var(--teal-glow);} 50% { box-shadow: 0 0 0 6px rgba(10,138,120,0.05);} }
.b-live .systems {
  display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px;
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.04em;
  color: var(--ink-3);
}
.b-live .systems .row { display: flex; justify-content: space-between; padding: 4px 0; border-top: 1px solid var(--line-faint); }
.b-live .systems .row:first-child, .b-live .systems .row:nth-child(2) { border-top: none; }
.b-live .systems .row b { color: var(--ink); font-weight: 500; }
.b-live .systems .ok { color: var(--teal); }
.b-live .spark { margin-top: auto; }
.b-live .spark svg { width: 100%; height: 28px; }

.hero-bridge {
  position: absolute;
  left: 30%;
  top: 38%;
  width: 40%;
  height: 22%;
  transform: translateZ(20px);
  pointer-events: none;
}
.hero-bridge svg { width: 100%; height: 100%; overflow: visible; }
.bridge-arc { stroke: var(--teal); stroke-width: 1.4; fill: none; stroke-dasharray: 4 5; opacity: 0.7; animation: dash 1.8s linear infinite; }
@keyframes dash { to { stroke-dashoffset: -18; } }
.bridge-head { fill: var(--teal); }

.pill3d {
  position: absolute;
  padding: 9px 13px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 999px;
  box-shadow: var(--shadow-lg);
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase;
  display: inline-flex; align-items: center; gap: 7px;
  color: var(--ink-2);
}
.pill3d .dot { width: 7px; height: 7px; border-radius: 50%; }
.pill-build { left: -6%; bottom: 22%; transform: translateZ(120px); }
.pill-build .dot { background: #c5790a; }
.pill-live  { right: -4%; top: 14%; transform: translateZ(140px); }
.pill-live .dot { background: var(--teal); box-shadow: 0 0 0 3px var(--teal-glow); }
@media (max-width: 1000px) { .hero-3d { max-width: 480px; } }

/* Wins */
.wins {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1400px; margin: 0 auto;
}
.win {
  padding: 32px 28px 28px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-md);
  display: flex; flex-direction: column; gap: 20px;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
  position: relative;
  overflow: hidden;
}
.win:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.win::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--teal) 0%, var(--teal-2) 100%);
  opacity: 0.5;
}
.win-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 30%, #ffffff, #def7f0 70%, #b9ebdb 100%);
  box-shadow:
    inset 0 1px 0 white,
    inset 0 -6px 14px rgba(10,138,120,0.18),
    0 5px 12px -5px rgba(10,138,120,0.32);
  display: flex; align-items: center; justify-content: center;
  color: var(--teal);
}
.win-icon svg { width: 24px; height: 24px; stroke: currentColor; fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.win-num { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.win h3 {
  font-family: var(--font-sans); font-size: 19px; font-weight: 500;
  letter-spacing: -0.02em; color: var(--ink); line-height: 1.2; max-width: 18ch;
}
.win p { font-size: 13.5px; line-height: 1.55; color: var(--ink-2); }
.win .stat {
  margin-top: auto; padding-top: 16px;
  border-top: 1px solid var(--line-faint);
  display: flex; justify-content: space-between; align-items: baseline; gap: 10px;
}
.win .stat .n { font-family: var(--font-mono); font-size: 24px; letter-spacing: -0.03em; color: var(--ink); line-height: 1; }
.win .stat .l { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3); text-align: right; max-width: 14ch; line-height: 1.4; }
@media (max-width: 1100px) { .wins { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .wins { grid-template-columns: 1fr; } }

/* Build Console */
.console-wrap {
  max-width: 1400px; margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(40px, 5vw, 80px);
  align-items: center;
}
.console-text h3 { font-size: clamp(28px, 2.4vw, 44px); font-weight: 500; letter-spacing: -0.025em; color: var(--ink); line-height: 1.05; margin-top: 22px; max-width: 16ch; }
.console-text p { margin-top: 22px; font-size: 16px; line-height: 1.6; color: var(--ink-2); max-width: 44ch; }
.console-list { margin-top: 28px; display: flex; flex-direction: column; gap: 10px; }
.console-list li {
  list-style: none;
  padding-left: 22px;
  position: relative;
  font-size: 14px; color: var(--ink-2); line-height: 1.5;
}
.console-list li::before {
  content: ""; position: absolute; left: 0; top: 8px;
  width: 6px; height: 6px; background: var(--teal); border-radius: 50%;
  box-shadow: 0 0 0 3px var(--teal-glow);
}
.console-list li b { color: var(--ink); font-weight: 500; }

.console-window {
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
}
.console-chrome {
  background: var(--canvas-2);
  border-bottom: 1px solid var(--line);
  padding: 12px 16px;
  display: flex; align-items: center; gap: 12px;
}
.console-chrome .dots { display: flex; gap: 6px; }
.console-chrome .dots i {
  width: 11px; height: 11px; border-radius: 50%;
  background: var(--ink-4); opacity: 0.5;
}
.console-chrome .dots i:nth-child(1) { background: #e87167; opacity: 0.7; }
.console-chrome .dots i:nth-child(2) { background: #e8b958; opacity: 0.7; }
.console-chrome .dots i:nth-child(3) { background: #67c97f; opacity: 0.7; }
.console-chrome .title {
  flex: 1;
  text-align: center;
  font-family: var(--font-mono); font-size: 11px;
  color: var(--ink-3); letter-spacing: 0.04em;
}
.console-chrome .url {
  font-family: var(--font-mono); font-size: 11px; color: var(--ink-3);
  padding: 4px 10px;
  background: white; border: 1px solid var(--line);
  border-radius: 6px;
}
.console-body { padding: 24px 28px 24px; }

.console-header {
  display: grid; grid-template-columns: 1fr auto auto auto;
  gap: 24px; align-items: center;
  padding-bottom: 20px; border-bottom: 1px solid var(--line-faint);
}
.console-header .overline { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-3); }
.console-header .ttl { font-family: var(--font-sans); font-weight: 500; font-size: 22px; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.console-header .val { font-family: var(--font-mono); font-size: 13px; color: var(--ink); margin-top: 2px; letter-spacing: 0.02em; }
.console-header .val .muted { color: var(--ink-3); }

.console-progress {
  margin: 28px 0 20px;
  height: 8px; background: var(--canvas-2); border-radius: 999px;
  position: relative;
}
.console-progress .fill {
  position: absolute; inset: 0; right: auto; width: 78%;
  background: linear-gradient(90deg, #c5790a 0%, var(--teal) 80%, var(--teal-2) 100%);
  border-radius: 999px;
}
.console-marks {
  display: flex; justify-content: space-between;
  margin-bottom: 28px;
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3);
}
.console-marks .here { color: var(--teal); font-weight: 500; }

.console-section-head {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 16px 0 12px; border-top: 1px solid var(--line-faint);
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--ink-3);
}
.console-section-head .accent { color: var(--teal); }

.feed { display: flex; flex-direction: column; gap: 0; }
.feed-row {
  display: grid; grid-template-columns: 60px 110px 110px 1fr;
  gap: 14px; align-items: baseline;
  padding: 12px 0;
  border-top: 1px solid var(--line-faint);
  font-size: 13px;
}
.feed-row:first-child { border-top: none; }
.feed-row .t { font-family: var(--font-mono); font-size: 11px; color: var(--teal); letter-spacing: 0.04em; }
.feed-row .tag {
  font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
  padding: 4px 9px; border-radius: 999px;
  display: inline-flex; align-items: center; gap: 5px;
  width: max-content;
}
.feed-row .tag.ok { color: var(--teal); background: var(--teal-soft); }
.feed-row .tag.ok::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--teal); }
.feed-row .tag.pending { color: #c5790a; background: #fbecd0; }
.feed-row .tag.pending::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: #c5790a; }
.feed-row .ref { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--ink-3); }
.feed-row .what { color: var(--ink-2); line-height: 1.4; }
.feed-row .what b { color: var(--ink); font-weight: 500; }

.console-foot {
  display: flex; gap: 20px;
  padding: 16px 0 0;
  margin-top: 16px;
  border-top: 1px solid var(--line-faint);
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-3);
}
.console-foot b { color: var(--ink); font-weight: 500; }
.console-foot .accent { color: var(--teal); }
.console-foot .pass { margin-left: auto; color: var(--teal); }

@media (max-width: 1100px) { .console-wrap { grid-template-columns: 1fr; } }
@media (max-width: 700px) {
  .console-header { grid-template-columns: 1fr 1fr; }
  .feed-row { grid-template-columns: 50px 1fr; gap: 8px; }
  .feed-row .tag, .feed-row .ref { grid-column: 2; }
}

/* Equipment modes */
.modes {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1400px; margin: 0 auto;
}
.mode {
  padding: 36px 32px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow-md);
  display: flex; flex-direction: column; gap: 18px;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
  position: relative;
}
.mode:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.mode.is-featured {
  background:
    radial-gradient(ellipse at 0% 0%, var(--teal-soft) 0%, transparent 50%),
    white;
  border-color: rgba(10,138,120,0.20);
}
.mode-head { display: flex; justify-content: space-between; align-items: center; }
.mode-num {
  font-family: var(--font-mono); font-size: 32px; letter-spacing: -0.04em;
  color: var(--ink); line-height: 1; font-weight: 500;
}
.mode-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase;
  padding: 6px 12px; border-radius: 999px;
  background: var(--canvas-2); color: var(--ink-2);
}
.mode.is-featured .mode-tag { background: var(--teal-soft); color: var(--teal); }
.mode h4 {
  font-family: var(--font-sans); font-size: clamp(22px, 1.7vw, 28px); font-weight: 500;
  letter-spacing: -0.02em; color: var(--ink); line-height: 1.15;
}
.mode p { font-size: 14px; line-height: 1.55; color: var(--ink-2); }
.mode .examples {
  padding: 12px 16px;
  background: var(--canvas);
  border-radius: 10px;
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ink-3); line-height: 1.6;
}
.mode .examples b { color: var(--ink); font-weight: 500; letter-spacing: 0.06em; }
.mode .pick {
  margin-top: auto;
  padding-top: 18px; border-top: 1px solid var(--line-faint);
  font-size: 13px; color: var(--ink); line-height: 1.5;
}
.mode .pick b { color: var(--teal); font-weight: 500; }
@media (max-width: 1000px) { .modes { grid-template-columns: 1fr; } }

.mode-note {
  max-width: 900px; margin: 48px auto 0;
  padding: 28px 32px;
  background: white; border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  display: flex; gap: 24px; align-items: center;
}
.mode-note-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); flex-shrink: 0; }
.mode-note p { font-size: 14.5px; line-height: 1.55; color: var(--ink-2); }
@media (max-width: 700px) { .mode-note { flex-direction: column; align-items: flex-start; gap: 12px; padding: 24px; } }

/* Anchor */
.anchor-wrap {
  max-width: 1300px; margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 32px; align-items: stretch;
}
.anchor-text {
  padding: 44px 40px;
  background:
    radial-gradient(ellipse at 0% 0%, var(--teal-soft) 0%, transparent 50%),
    white;
  border: 1px solid var(--line); border-radius: 22px;
  box-shadow: var(--shadow-lg);
  display: flex; flex-direction: column; gap: 22px;
}
.anchor-text .tag {
  display: inline-flex; align-self: flex-start; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  padding: 6px 12px; border-radius: 999px;
  color: var(--teal); background: var(--teal-soft);
}
.anchor-text .tag::before { content: ""; width: 6px; height: 6px; background: var(--teal); border-radius: 50%; }
.anchor-text h3 { font-size: clamp(28px, 2.4vw, 44px); font-weight: 500; letter-spacing: -0.025em; color: var(--ink); line-height: 1.05; max-width: 18ch; }
.anchor-text p { font-size: 15px; line-height: 1.55; color: var(--ink-2); max-width: 50ch; }

.anchor-card {
  padding: 40px 36px;
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow-lg);
  display: flex; flex-direction: column; justify-content: space-between; gap: 32px;
  background:
    radial-gradient(circle at 100% 0%, var(--canvas-2) 0%, transparent 60%),
    white;
}
.anchor-card .tag {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-3);
}
.anchor-card .mark {
  font-family: var(--font-sans); font-weight: 500; font-size: clamp(36px, 4vw, 56px);
  letter-spacing: 0.04em; color: var(--ink); line-height: 1.0;
}
.anchor-card .mark .accent { color: var(--teal); }
.anchor-card .stats { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--ink-3); }
.anchor-card .stats b { color: var(--ink); font-weight: 500; }
.anchor-card .stats .live { color: var(--teal); }
@media (max-width: 1000px) { .anchor-wrap { grid-template-columns: 1fr; } }

/* CTA yard application */
.cta-wrap {
  margin: 80px auto 100px;
  max-width: 1400px;
  border-radius: 28px;
  background:
    radial-gradient(ellipse at 20% 0%, rgba(94,234,212,0.16) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(31,100,215,0.18) 0%, transparent 50%),
    linear-gradient(180deg, #0c1117 0%, #131a25 100%);
  color: white;
  padding: clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px);
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(40px, 5vw, 80px);
}
.cta-stamp {
  position: absolute; top: 28px; right: 32px;
  font-family: var(--font-mono);
  font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 10px 16px; border-radius: 10px;
  line-height: 1.7; text-align: right;
}
.cta-stamp .accent { color: var(--teal-2); font-size: 16px; letter-spacing: 0.04em; }
.cta-wrap .eyebrow { color: var(--teal-2); }
.cta-wrap .eyebrow::before { background: var(--teal-2); }
.cta-wrap h2 { color: white; margin-top: 24px; font-family: var(--font-sans); font-weight: 500; letter-spacing: -0.035em; }
.cta-wrap p { color: rgba(255,255,255,0.7); margin-top: 24px; max-width: 44ch; font-size: clamp(16px, 1.2vw, 19px); line-height: 1.5; }

.builders-form {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 24px;
  display: flex; flex-direction: column; gap: 4px;
  backdrop-filter: blur(8px);
  align-self: center;
}
.form-row {
  display: grid; grid-template-columns: 80px 1fr; gap: 12px; align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.form-row .lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
.form-row input, .form-row select {
  background: transparent; border: none; color: white;
  font-family: inherit; font-size: 14px; outline: none; width: 100%;
}
.form-row input::placeholder { color: rgba(255,255,255,0.32); }
.form-row select option { color: var(--ink); }
.builders-form-submit {
  margin-top: 18px;
  padding: 16px 22px;
  background: var(--teal-2);
  color: var(--ink);
  border-radius: 999px;
  display: inline-flex; align-items: center; justify-content: space-between; gap: 10px;
  font-weight: 500; font-size: 14px;
  transition: background 0.2s, transform 0.2s;
  border: none;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
}
.builders-form-submit:hover { background: white; transform: translateY(-1px); }
.builders-form-submit .arrow { width: 14px; height: 1px; background: currentColor; position: relative; }
.builders-form-submit .arrow::after {
  content: ""; position: absolute; right: -1px; top: -3px;
  width: 6px; height: 6px;
  border-right: 1.5px solid currentColor; border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
}
@media (max-width: 1000px) {
  .cta-wrap { grid-template-columns: 1fr; }
  .cta-stamp { position: static; align-self: flex-start; display: inline-block; }
}
`;

export default function BuildersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buildersCss }} />
      <Rail items={railItems} />

      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>∕</span>
            <span className="accent">Builders</span>
          </>
        }
        headline={
          <>
            Build hulls that
            <br />
            get <span className="italic">smarter</span> after delivery.
          </>
        }
        tag="Anchor: Focus Motor Yachts · 8 founding yards · 4 seats left for 2026"
        sub={
          <>
            Live telemetry on every hull you&rsquo;ve ever delivered. <b>Warranty cost down.</b> Equipment picked on data, not catalogs. One cloud where every supplier you chose collaborates by default.
          </>
        }
        actions={[
          { href: "#cta", label: "Request access", variant: "primary" },
          { href: "#console", label: "See the build console", variant: "ghost" },
        ]}
        visual={
          <div className="hero-3d-inner" aria-hidden="true">
            <div className="card3d b-build">
              <div className="top">
                <div>
                  <span className="num">During build</span>
                  <h4>M/Y Atlas · Hull VIQ-0014</h4>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "var(--ink-3)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Day 387 / 612
                </span>
              </div>
              <div className="progress">
                <div className="fill" />
              </div>
              <div className="markers">
                <span>Keel</span>
                <span>Hull</span>
                <span>Systems</span>
                <span className="now">Outfit ●</span>
                <span>Trial</span>
                <span>Handover</span>
              </div>
              <div className="meta">
                <span>
                  Phase <b>Outfitting</b>
                </span>
                <span>12 events / 24h</span>
                <span>
                  <b style={{ color: "var(--teal)" }}>3</b> open
                </span>
              </div>
            </div>

            <div className="hero-bridge">
              <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                <defs>
                  <marker
                    id="bArrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path className="bridge-head" d="M 0 0 L 10 5 L 0 10 z" />
                  </marker>
                </defs>
                <path
                  className="bridge-arc"
                  d="M 20 60 C 60 60, 60 20, 100 20 C 140 20, 140 60, 180 20"
                  markerEnd="url(#bArrow)"
                />
              </svg>
            </div>

            <div className="card3d b-live">
              <div className="top">
                <div>
                  <span className="num">6 months after delivery</span>
                  <h4>M/Y Atlas · still streaming</h4>
                </div>
                <span className="pulse-tag">Live</span>
              </div>
              <div className="systems">
                <div className="row">
                  <span>Engines</span>
                  <b className="ok">● nominal</b>
                </div>
                <div className="row">
                  <span>Genset</span>
                  <b className="ok">● nominal</b>
                </div>
                <div className="row">
                  <span>HVAC</span>
                  <b className="ok">● nominal</b>
                </div>
                <div className="row">
                  <span>Nav</span>
                  <b className="ok">● nominal</b>
                </div>
                <div className="row">
                  <span>Hours</span>
                  <b>1,247</b>
                </div>
                <div className="row">
                  <span>Voyages</span>
                  <b>89</b>
                </div>
              </div>
              <div className="spark">
                <svg viewBox="0 0 280 28" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0a8a78" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#0a8a78" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 18 L 20 16 L 40 17 L 60 14 L 80 15 L 100 12 L 120 13 L 140 10 L 160 11 L 180 8 L 200 9 L 220 6 L 240 7 L 260 4 L 280 6 L 280 28 L 0 28 Z"
                    fill="url(#sFill)"
                  />
                  <path
                    d="M0 18 L 20 16 L 40 17 L 60 14 L 80 15 L 100 12 L 120 13 L 140 10 L 160 11 L 180 8 L 200 9 L 220 6 L 240 7 L 260 4 L 280 6"
                    fill="none"
                    stroke="#0a8a78"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="pill3d pill-build">
              <span className="dot" /> Build console
            </div>
            <div className="pill3d pill-live">
              <span className="dot" /> Lives on forever
            </div>
          </div>
        }
      />

      {/* WINS */}
      <Section
        id="wins"
        eyebrow="Four things change"
        title={
          <>
            A hull that earns <span className="italic">after delivery.</span>
          </>
        }
        lead="Today a yacht leaves the yard as a stack of paperwork. Once it is on VesselIQ, four things change, at the yard, and for the rest of the hull's life."
        className="shell"
      >
        <div className="wins">
          <Reveal as="article" className="win">
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l2-6 4 12 2-6h6" />
              </svg>
            </div>
            <span className="win-num">W · 01 · Visibility</span>
            <h3>Telemetry &amp; management insight on every hull.</h3>
            <p>
              Every boat you have delivered, still talking. See how systems perform, where alarms cluster, which captains run hard, which yards push fast turnaround.
            </p>
            <div className="stat">
              <span className="n">142</span>
              <span className="l">Hulls reporting today</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={1}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="win-num">W · 02 · Warranty</span>
            <h3>Failure patterns spotted before they are claims.</h3>
            <p>
              The intelligence layer sees what fails, on what hull class, at what hour count, in what waters. Issue an advisory before it is a warranty event.
            </p>
            <div className="stat">
              <span className="n">∼60%</span>
              <span className="l">Less reactive warranty work</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={2}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l5-5 4 4 8-8" />
                <path d="M14 8h6v6" />
              </svg>
            </div>
            <span className="win-num">W · 03 · Equipment</span>
            <h3>Pick on data. Stop picking on catalogs.</h3>
            <p>
              Which genset actually runs cleanest at idle on this hull class? Which HVAC vendor never gets a service ticket south of 30°? The fleet answers.
            </p>
            <div className="stat">
              <span className="n">47</span>
              <span className="l">OEMs publishing live specs</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={3}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="18" r="3" />
                <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
              </svg>
            </div>
            <span className="win-num">W · 04 · Collaboration</span>
            <h3>One cloud where everything you picked talks.</h3>
            <p>
              The smart app on the hull is not stitched together at sea trial. Every supplier you specified collaborates in one platform by default, the moment they are installed.
            </p>
            <div className="stat">
              <span className="n">0</span>
              <span className="l">Proprietary protocols required</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CINEMATIC */}
      <CinePlate
        image="/assets/yacht-red.jpg"
        eyebrow="A hull. A network. A career."
        headline="Build it once. Stay close forever."
        body="Every hull you deliver keeps reporting back. Warranty patterns visible. Equipment choices vindicated or rejected. Your yard learns from its own fleet."
      />

      {/* BUILD CONSOLE */}
      <Section
        id="console"
        eyebrow="B · 01 · Build Console"
        title={
          <>
            Live yard view. <span className="italic">Open it Monday.</span>
          </>
        }
        className="shell"
      >
        <div className="console-wrap">
          <Reveal className="console-text">
            <h3>Every install, every signoff, on one timeline.</h3>
            <p>
              Open the console Monday morning and know what shipped, what is stuck, who is waiting on whom. Every subcontractor handover is cryptographically signed.
            </p>
            <ul className="console-list">
              <li>
                <b>Hull progress</b> by phase and system
              </li>
              <li>
                <b>Subcontractor handovers</b>, signed at source
              </li>
              <li>
                <b>Open items</b> routed to the right team automatically
              </li>
              <li>
                <b>Owner side approvals</b> when a spec change needs a nod
              </li>
            </ul>
          </Reveal>

          <Reveal className="console-window" delay={2}>
            <div className="console-chrome">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="title">M/Y Atlas · Build Console · VesselIQ</div>
              <div className="url">yard.vesseliq.io</div>
            </div>
            <div className="console-body">
              <div className="console-header">
                <div>
                  <span className="overline">Hull VIQ-0014 · Atlas class 24m</span>
                  <div className="ttl">M/Y Atlas</div>
                </div>
                <div>
                  <span className="overline">Phase</span>
                  <div className="val">Outfitting</div>
                </div>
                <div>
                  <span className="overline">Day</span>
                  <div className="val">
                    387 <span className="muted">/ 612</span>
                  </div>
                </div>
                <div>
                  <span className="overline">Sea trial</span>
                  <div className="val" style={{ color: "var(--teal)" }}>
                    in 89d
                  </div>
                </div>
              </div>

              <div className="console-progress">
                <div className="fill" />
              </div>
              <div className="console-marks">
                <span>Keel</span>
                <span>Hull</span>
                <span>Systems</span>
                <span className="here">Outfit ●</span>
                <span>Trial</span>
                <span>Handover</span>
              </div>

              <div className="console-section-head">
                <span>Last 24 hours</span>
                <span className="accent">12 events</span>
              </div>

              <div className="feed">
                <div className="feed-row">
                  <span className="t">14:22</span>
                  <span className="tag ok">commissioned</span>
                  <span className="ref">S.04 · Power</span>
                  <span className="what">
                    <b>Kohler 80EFOZ</b> generator online.{" "}
                    <span style={{ color: "var(--ink-3)" }}>signed · Marella Marine</span>
                  </span>
                </div>
                <div className="feed-row">
                  <span className="t">11:08</span>
                  <span className="tag ok">installed</span>
                  <span className="ref">S.07 · Lighting</span>
                  <span className="what">
                    <b>Lumitec Poco LED</b> zones 03 to 08. Bench tested.
                  </span>
                </div>
                <div className="feed-row">
                  <span className="t">09:51</span>
                  <span className="tag pending">spec change</span>
                  <span className="ref">S.06 · HVAC</span>
                  <span className="what">
                    <b>Webasto BlueCool C</b>, raised cooling capacity.{" "}
                    <span style={{ color: "#c5790a" }}>Owner approval requested.</span>
                  </span>
                </div>
                <div className="feed-row">
                  <span className="t">08:14</span>
                  <span className="tag ok">signed off</span>
                  <span className="ref">S.03 · Comms</span>
                  <span className="what">
                    <b>B&amp;G H5000</b> instrument net, captain handover complete.
                  </span>
                </div>
              </div>

              <div className="console-foot">
                <span>
                  <b>3</b> open items
                </span>
                <span>
                  <b className="accent">2</b> awaiting owner
                </span>
                <span>
                  <b>0</b> critical
                </span>
                <span className="pass">● Build healthy</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EQUIPMENT SELECTION */}
      <Section
        id="selection"
        eyebrow="B · 02 · During the build"
        title={
          <>
            Equipment selection becomes <span className="italic">a conversation about collaboration.</span>
          </>
        }
        lead={
          <>
            Once a hull is on VesselIQ, the question for every piece of equipment is no longer &ldquo;does it work?&rdquo; but &ldquo;how does it talk?&rdquo; Three modes. The yard picks the lane each system lands in.
          </>
        }
        className="shell"
      >
        <div className="modes">
          <Reveal as="article" className="mode">
            <div className="mode-head">
              <span className="mode-num">01</span>
              <span className="mode-tag">Read · Telemetry</span>
            </div>
            <h4>Open by protocol</h4>
            <p>
              Equipment that already speaks NMEA 2000, J1939, Modbus, BACnet, or Signal-K. VesselIQ reads the bus, the system joins the record.
            </p>
            <div className="examples">
              <b>Engines</b> · <b>Nav</b> · <b>Comms</b> · <b>Power</b>
            </div>
            <div className="pick">
              <b>Pick when:</b> industry standard kit is the right answer anyway.
            </div>
          </Reveal>

          <Reveal as="article" className="mode is-featured" delay={1}>
            <div className="mode-head">
              <span className="mode-num">02</span>
              <span className="mode-tag">Control · Read &amp; write</span>
            </div>
            <h4>Has a real API</h4>
            <p>
              Smart hydraulic platforms, stabilizers with apps, advanced lighting controllers. Modern marine kit with its own control surface, exposed cleanly to the rest of the hull.
            </p>
            <div className="examples">
              <b>Hydraulics</b> · <b>Stabilizers</b> · <b>Lighting</b> · <b>Tenders</b>
            </div>
            <div className="pick">
              <b>Pick when:</b> best in class, and the maker has done its own engineering.
            </div>
          </Reveal>

          <Reveal as="article" className="mode" delay={2}>
            <div className="mode-head">
              <span className="mode-num">03</span>
              <span className="mode-tag">Uplift · Make it smart</span>
            </div>
            <h4>Takes an uplift</h4>
            <p>
              Older generators, manual valves, simple sensors. Equipment without a brain of its own that gets a thin VesselIQ layer added at install time.
            </p>
            <div className="examples">
              <b>Legacy gensets</b> · <b>Manual valves</b> · <b>Sensors</b>
            </div>
            <div className="pick">
              <b>Pick when:</b> legacy or commodity kit is fine, but you want it on the bridge.
            </div>
          </Reveal>
        </div>

        <Reveal className="mode-note" delay={3}>
          <span className="mode-note-eyebrow">The yard&rsquo;s specification</span>
          <p>
            Building on VesselIQ does not mean changing what you build with. It means specifying every system into one of these three lanes during procurement. The hull ships as a working network, not a collection of installed boxes.
          </p>
        </Reveal>
      </Section>

      {/* ANCHOR */}
      <Section
        id="anchor"
        eyebrow="Anchor builder partner"
        title={
          <>
            Focus Motor Yachts <span className="italic">is the first.</span>
          </>
        }
        className="shell"
      >
        <div className="anchor-wrap">
          <Reveal className="anchor-text">
            <span className="tag">Why it matters</span>
            <h3>The first builder in the world to make VesselIQ standard.</h3>
            <p>
              Focus runs a yard where engineering precision is the brand. Every hull they deliver ships with the platform built in, ready for equipment partners to integrate against from day one. Their captains, their owners, their service partners all benefit from a hull that knows itself.
            </p>
            <p style={{ color: "var(--ink-3)", fontSize: "13.5px", maxWidth: "50ch" }}>
              Anchor since 2026. 100% of new hulls on the platform. Eight hulls live this year.
            </p>
          </Reveal>

          <Reveal className="anchor-card" delay={1}>
            <span className="tag">Partner mark</span>
            <div className="mark">
              FOCUS
              <br />
              MOTOR
              <br />
              <span className="accent">YACHTS</span>
            </div>
            <div className="stats">
              <span>
                <b>Builder · Netherlands</b>
              </span>
              <span>Anchor partner · 2026</span>
              <span>100% new hulls on platform</span>
              <span className="live">● Every hull, every build</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <BuildersCta />
    </>
  );
}

// Dedicated multi field application form. Inert in v1 like CtaForm; the
// generic CtaForm component only handles a single email field, so the
// builders yard application is rendered locally with its own layout. The
// CtaForm import is kept for shape parity with other audience pages even
// though this page does not use it directly.
function BuildersCta() {
  return (
    <section className="shell" id="cta">
      <div className="cta-wrap">
        <div className="cta-stamp">
          Anchor program
          <br />
          <span className="accent">4 of 12</span>
          <br />
          yard seats left · 2026
        </div>

        <div>
          <span className="eyebrow">Access</span>
          <h2 className="display display-xl">Bring a hull on.</h2>
          <p>
            VesselIQ is invited, not bought. If you build, refit, or operate yachts above 24m and want them to leave the yard knowing themselves, send a note. We are taking four more yards this year.
          </p>
        </div>

        <BuildersForm />
      </div>
    </section>
  );
}

// Static yard application form. No backend in v1: submission is intentionally
// inert and the visual state swaps on submit. Replace with the real lead
// route when ready.
function BuildersForm() {
  return (
    <form
      className="builders-form"
      action="/api/cta"
      method="post"
    >
      <div className="form-row">
        <span className="lbl">Yard</span>
        <input type="text" name="yard" placeholder="Shipyard or builder name" />
      </div>
      <div className="form-row">
        <span className="lbl">You</span>
        <input type="text" name="name" placeholder="Name &amp; title" />
      </div>
      <div className="form-row">
        <span className="lbl">Email</span>
        <input type="email" name="email" placeholder="hello@yard.com" required />
      </div>
      <div className="form-row">
        <span className="lbl">Hulls / yr</span>
        <select name="hulls" defaultValue="1, 2">
          <option>1, 2</option>
          <option>3, 6</option>
          <option>7, 12</option>
          <option>13+</option>
        </select>
      </div>
      <button type="submit" className="builders-form-submit">
        <span>Request access</span>
        <span className="arrow" />
      </button>
    </form>
  );
}


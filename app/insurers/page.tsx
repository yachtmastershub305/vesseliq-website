import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { CinePlate } from "@/components/sections/CinePlate";
import { CtaForm } from "@/components/sections/CtaForm";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";

// Page-level metadata for the insurance audience page.
export const metadata: Metadata = {
  title: "Insurance",
  description:
    "Price, bind, and adjudicate on real telemetry. Owner authorized hull records, signed at source. Claims in hours, not weeks.",
};

// In-page rail anchors. Matches the source rail block 1:1.
const rail: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "pillars", label: "What moves" },
  { id: "underwriting", label: "Underwriting" },
  { id: "claims", label: "Claims" },
  { id: "trust", label: "Trust" },
  { id: "fleet", label: "Portfolio" },
  { id: "cta", label: "Engage" },
];

export default function InsurersPage() {
  return (
    <>
      <Rail items={rail} />

      {/* ============ HERO ============ */}
      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>{"∕"}</span>
            <span className="accent">Insurance</span>
          </>
        }
        headline={
          <>
            Underwrite
            <br />
            the hull, <span className="italic">not the paperwork.</span>
          </>
        }
        tag={<>One signed record per hull, owner authorized</>}
        sub="Price, bind, and adjudicate on real telemetry. Claims in hours, not weeks."
        actions={[
          { href: "#cta", label: "Request a binder demo", variant: "primary" },
          { href: "#claims", label: "See a live claim file", variant: "ghost" },
        ]}
        visual={
          <div className="hero-3d-inner" aria-hidden>
            {/* Bottom card: hull silhouette */}
            <div className="card3d deck-1">
              <span className="label">M/Y Atlas · 32 m</span>
              <svg className="hull-svg" viewBox="0 0 600 200" fill="none">
                <path
                  d="M40 140 C 120 70, 280 60, 420 80 C 500 90, 540 120, 560 150 L 60 150 Z"
                  fill="#cfe8df"
                  stroke="#0a8a78"
                  strokeWidth="1"
                  opacity="0.55"
                />
                <path
                  d="M40 140 L 560 150"
                  stroke="#0a8a78"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <line x1="120" y1="80" x2="120" y2="140" stroke="#0a8a78" strokeWidth="0.6" opacity="0.45" />
                <line x1="220" y1="72" x2="220" y2="142" stroke="#0a8a78" strokeWidth="0.6" opacity="0.45" />
                <line x1="320" y1="68" x2="320" y2="144" stroke="#0a8a78" strokeWidth="0.6" opacity="0.45" />
                <line x1="420" y1="78" x2="420" y2="148" stroke="#0a8a78" strokeWidth="0.6" opacity="0.45" />
              </svg>
            </div>

            {/* Middle card: telemetry sparkline */}
            <div className="card3d deck-2">
              <div className="row">
                <span className="deck2-label">Bearing 03 · STBD</span>
                <span className="deck2-stat">
                  <span className="ok">●</span> nominal · 71%
                </span>
              </div>
              <svg className="spark" viewBox="0 0 300 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0a8a78" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#0a8a78" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="area"
                  d="M0 42 L 20 38 L 40 40 L 60 36 L 80 38 L 100 32 L 120 30 L 140 34 L 160 26 L 180 22 L 200 18 L 220 22 L 240 16 L 260 12 L 280 18 L 300 14 L 300 60 L 0 60 Z"
                />
                <path d="M0 42 L 20 38 L 40 40 L 60 36 L 80 38 L 100 32 L 120 30 L 140 34 L 160 26 L 180 22 L 200 18 L 220 22 L 240 16 L 260 12 L 280 18 L 300 14" />
              </svg>
              <div className="row">
                <span className="deck2-label">Trend +0.4°C / hr</span>
                <span className="deck2-stat">03:14:08 UTC</span>
              </div>
            </div>

            {/* Top card: signed event */}
            <div className="card3d deck-3">
              <div className="deck3-head">
                <span className="deck3-eyebrow">Signed · MTU.MFG.v4</span>
                <span className="deck3-tick">
                  <svg viewBox="0 0 24 24">
                    <polyline points="4 12 10 18 20 6" />
                  </svg>
                </span>
              </div>
              <div className="deck3-title">Propulsion event · Bearing 03 wear flagged</div>
              <div className="deck3-meta">
                <span>Hash</span>
                <span className="hash">0x7a3f…91d2</span>
              </div>
            </div>

            <div className="pill3d pill-a">
              <span className="dot" /> ECU stream
            </div>
            <div className="pill3d pill-b">
              <span className="dot" /> Carrier feed live
            </div>
          </div>
        }
      />

      {/* ============ PILLARS ============ */}
      <Section
        id="pillars"
        className="shell"
        eyebrow="Four places the loss ratio moves"
        title={
          <>
            Less paper. <span className="italic">More signal.</span>
          </>
        }
      >
        <div className="pillars">
          <Reveal as="article" className="pillar">
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l5-5 4 4 8-8" />
                <path d="M14 8h6v6" />
              </svg>
            </div>
            <span className="pillar-num">01 · Underwriting</span>
            <h3>Price on signal, not on the form.</h3>
            <p>Engine hours, voyage patterns, alarms, verifiable at the source.</p>
            <div className="pillar-stat">
              <span className="num">∼60%</span>
              <span className="lbl">Less paperwork at renewal</span>
            </div>
          </Reveal>

          <Reveal as="article" className="pillar" delay={1}>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 12l5 5L20 7" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <span className="pillar-num">02 · Claims</span>
            <h3>Adjudicate with evidence.</h3>
            <p>Every event cryptographically signed at the moment it happened.</p>
            <div className="pillar-stat">
              <span className="num">hours</span>
              <span className="lbl">FNOL to adjudication</span>
            </div>
          </Reveal>

          <Reveal as="article" className="pillar" delay={2}>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
            <span className="pillar-num">03 · Loss prevention</span>
            <h3>See the failure before the claim.</h3>
            <p>Forty seven OEM partners run field models against live data.</p>
            <div className="pillar-stat">
              <span className="num">71%</span>
              <span className="lbl">Median early warning confidence</span>
            </div>
          </Reveal>

          <Reveal as="article" className="pillar" delay={3}>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 20h18" />
                <path d="M5 20V10l4 3 3-6 3 4 4-3v12" />
              </svg>
            </div>
            <span className="pillar-num">04 · Portfolio</span>
            <h3>Cede with proof, not narrative.</h3>
            <p>
              Benchmark your book against the live water. Loss ratio by hull class, by region, by season. Reinsurers
              see actual signal at renewal.
            </p>
            <div className="pillar-stat">
              <span className="num">live</span>
              <span className="lbl">Per hull cession feed</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ CINEMATIC ============ */}
      <CinePlate
        image="/assets/yacht-black.jpg"
        eyebrow="A bearing. A claim. A signal."
        headline="Underwrite the hull. Not the paperwork."
        body="Every event signed at source. Every claim file pre populated from telemetry the carrier can independently verify."
      />

      {/* ============ UNDERWRITING ============ */}
      <Section
        id="underwriting"
        className="shell uw-section"
        eyebrow="Underwriting · annual renewal"
        title={
          <>
            Same 24m hull. <span className="italic">Two underwriters.</span>
          </>
        }
        lead="One waits for a 40 page submission. One pulls the record."
      >
        <Reveal className="uw-wrap" delay={2}>
          <div className="uw">
            <span className="uw-tag">Without VesselIQ</span>
            <h4>Pull together a binder.</h4>
            <div className="uw-row">
              <span className="lbl">Engine hrs</span>
              <span>Self reported. Verifiable at next haul out.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Voyages</span>
              <span>AIS scrape, when AIS was on.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Maintenance</span>
              <span>PDF logs, often from prior owner.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Time to quote</span>
              <span>
                <b>5 to 12 working days.</b>
              </span>
            </div>
          </div>
          <div className="uw uw--after">
            <span className="uw-tag">With VesselIQ</span>
            <h4>Pull the record. Quote.</h4>
            <div className="uw-row">
              <span className="lbl">Engine hrs</span>
              <span>ECU telemetry, signed by MTU, since commissioning.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Voyages</span>
              <span>Continuous track plus weather plus speed bands.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Maintenance</span>
              <span>Every service event, signed by yard or crew.</span>
            </div>
            <div className="uw-row">
              <span className="lbl">Time to quote</span>
              <span>
                <b>Same day. Often inside an hour.</b>
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ CLAIM TIMELINE ============ */}
      <Section
        id="claims"
        className="shell"
        eyebrow="Claims · M/Y Atlas · STBD bearing 03"
        title={
          <>
            A bearing fails at sea. <span className="italic">The file already exists.</span>
          </>
        }
      >
        <Reveal className="claim" delay={2}>
          <div className="claim-head">
            <span>{"VIQ-0014 ∕ propulsion event"}</span>
            <span className="accent">● Owner authorized · signed events</span>
          </div>
          <div className="claim-body">
            <div className="claim-event">
              <span className="t">03:14:08 UTC</span>
              <span className="what">
                <b>Telemetry</b> · Bearing 03 trending +0.4°C / hr. <span className="muted">Streamed via J1939.</span>
              </span>
              <span className="sig">
                <span className="ok">●</span> MTU.MFG.v4
                <br />
                0x7a3f…91d2
              </span>
            </div>
            <div className="claim-event">
              <span className="t">03:14:11 UTC</span>
              <span className="what">
                <b>Classification</b> · Wear probability 71% · severity amber.
              </span>
              <span className="sig">
                <span className="ok">●</span> VIQ.CORE.v2
                <br />
                0x9b1c…44ea
              </span>
            </div>
            <div className="claim-event">
              <span className="t">03:14:13 UTC</span>
              <span className="what">
                <b>MTU ack</b> · Stuttgart desk, 19 seconds. Parts pre staged for Piraeus.
              </span>
              <span className="sig">
                <span className="ok">●</span> MTU.SVC.v4
                <br />
                0x2e80…7fc1
              </span>
            </div>
            <div className="claim-event">
              <span className="t">03:46:22 UTC</span>
              <span className="what">
                <b>Seizure</b> · Controlled shutdown. <span className="muted">12 nm SSW of Hydra.</span>
              </span>
              <span className="sig">
                <span className="ok">●</span> CAPT.M.ROSS
                <br />
                0xf419…b03d
              </span>
            </div>
            <div className="claim-event">
              <span className="t">07:42:00 UTC</span>
              <span className="what">
                <b>FNOL</b> · Pre populated from canonical record.
              </span>
              <span className="sig">
                <span className="ok">●</span> YMH.BRIDGE
                <br />
                0x6d22…0e84
              </span>
            </div>
            <div className="claim-event">
              <span className="t">10:18:55 UTC</span>
              <span className="what">
                <b>Adjudication</b> · Coverage confirmed. <span className="muted">3 hrs after FNOL.</span>
              </span>
              <span className="sig">
                <span className="ok">●</span> CARRIER.UW
                <br />
                0x1f93…ad47
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ TRUST ============ */}
      <Section
        id="trust"
        className="shell"
        eyebrow="Trust model"
        title={
          <>
            You see what the owner authorized. <span className="italic">Not a byte more.</span>
          </>
        }
      >
        <div className="trust">
          <Reveal className="trust-tile">
            <span className="num">T · 01 , Ownership</span>
            <h5>Owner held record.</h5>
            <p>
              Title transfer re authorizes with full history intact. The carrier is a granted audience, not a custodian.
            </p>
          </Reveal>
          <Reveal className="trust-tile" delay={1}>
            <span className="num">T · 02 , Scope</span>
            <h5>Granular consent.</h5>
            <p>Hull, voyage, maintenance, alarms, each a separate scope. Revocable mid policy with notice.</p>
          </Reveal>
          <Reveal className="trust-tile" delay={2}>
            <span className="num">T · 03 , Evidence</span>
            <h5>Signed at source.</h5>
            <p>Manufacturers, yards, crews. Hashes are independently verifiable and admissible in arbitration.</p>
          </Reveal>
        </div>
      </Section>

      {/* ============ FLEET ============ */}
      <Section
        id="fleet"
        className="shell"
        eyebrow="Portfolio grade data, on tap"
        title={
          <>
            The network <span className="italic">today.</span>
          </>
        }
      >
        <div className="fleet">
          <Reveal className="fleet-card">
            <span className="idx">P · 01</span>
            <span className="num">142</span>
            <span className="lbl">Hulls in network</span>
          </Reveal>
          <Reveal className="fleet-card" delay={1}>
            <span className="idx">P · 02</span>
            <span className="num">47</span>
            <span className="lbl">OEM partners signing specs</span>
          </Reveal>
          <Reveal className="fleet-card" delay={2}>
            <span className="idx">P · 03</span>
            <span className="num">
              99.4<span className="unit">%</span>
            </span>
            <span className="lbl">Fleet uptime · 90d</span>
          </Reveal>
          <Reveal className="fleet-card" delay={3}>
            <span className="idx">P · 04</span>
            <span className="num">
              118<span className="unit">ms</span>
            </span>
            <span className="lbl">Sensor to carrier p50</span>
          </Reveal>
        </div>

        <Reveal className="pilots" delay={3}>
          <div className="pilot-chip">
            <span className="dot" /> Carrier 01 <span className="sub">· EU specialist</span>
          </div>
          <div className="pilot-chip">
            <span className="dot" /> Carrier 02 <span className="sub">· London market</span>
          </div>
          <div className="pilot-chip">
            <span className="dot" /> Carrier 03 <span className="sub">· US east coast</span>
          </div>
          <div className="pilot-chip">
            <span className="dot" /> MGA 01 <span className="sub">· Mediterranean</span>
          </div>
          <div className="pilot-chip">
            <span className="dot" /> MGA 02 <span className="sub">· Charter book</span>
          </div>
          <div className="pilot-chip">
            <span className="dot" /> Reinsurer A <span className="sub">· observing</span>
          </div>
        </Reveal>
      </Section>

      {/* ============ CTA ============ */}
      <CtaForm
        id="cta"
        eyebrow="Engage"
        headline="Bind a pilot book."
        body="One yacht you already cover. A side by side: the file you have vs. the file VesselIQ would have. 30 minutes. NDA. No commitment."
        placeholder="you@carrier.com"
        submitLabel="Request a binder demo"
      />

      {/* Page-scoped styles for classes from the source HTML that the shared
          globals.css does not provide. These are insurer page specific
          patterns (3D hero stack, underwriting compare, claim timeline,
          trust tiles, fleet stats, pilot chips, pillar icon/stat). Inlined
          via <style> so this stays a server component. */}
      <style>{`
        /* Hero 3D stack */
        .hero-3d {
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          perspective: 1400px;
          transform-style: preserve-3d;
        }
        .hero-3d-inner {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform: rotateX(8deg) rotateY(-18deg) rotateZ(-2deg);
          animation: gentleTilt 14s ease-in-out infinite;
        }
        @keyframes gentleTilt {
          0%,
          100% {
            transform: rotateX(8deg) rotateY(-18deg) rotateZ(-2deg) translateY(0);
          }
          50% {
            transform: rotateX(11deg) rotateY(-16deg) rotateZ(-1deg) translateY(-8px);
          }
        }
        .card3d {
          position: absolute;
          border-radius: 22px;
          background: white;
          border: 1px solid var(--line);
          box-shadow: var(--shadow-xl);
          transform-style: preserve-3d;
          overflow: hidden;
        }
        .card3d.deck-1 {
          width: 78%;
          height: 60%;
          left: 0;
          top: 22%;
          transform: translateZ(-60px);
          background:
            radial-gradient(ellipse at 30% 30%, #e6f6f1 0%, transparent 60%),
            linear-gradient(180deg, #f1efe8 0%, #e2dfd6 100%);
        }
        .card3d.deck-1 .label {
          position: absolute;
          left: 20px;
          bottom: 18px;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
        }
        .card3d.deck-1 .hull-svg {
          position: absolute;
          right: -10%;
          bottom: 10%;
          width: 110%;
          opacity: 0.55;
        }
        .card3d.deck-2 {
          width: 72%;
          height: 38%;
          left: 14%;
          top: 30%;
          transform: translateZ(0);
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, #ffffff 0%, #fbfaf6 100%);
        }
        .card3d.deck-2 .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .deck2-label {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
        }
        .deck2-stat {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--ink);
          letter-spacing: -0.01em;
        }
        .deck2-stat .ok {
          color: var(--teal);
        }
        .spark {
          width: 100%;
          height: 40px;
        }
        .spark path {
          fill: none;
          stroke: var(--teal);
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .spark .area {
          fill: url(#sparkFill);
          stroke: none;
        }
        .card3d.deck-3 {
          width: 60%;
          height: 38%;
          right: 0;
          top: 4%;
          transform: translateZ(80px) rotate(2deg);
          padding: 18px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #f4f8f7 100%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid rgba(10, 138, 120, 0.18);
        }
        .deck3-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .deck3-eyebrow {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .deck3-tick {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 6px var(--teal-glow);
        }
        .deck3-tick svg {
          width: 12px;
          height: 12px;
          stroke: white;
          stroke-width: 2.4;
          fill: none;
        }
        .deck3-title {
          font-size: 14px;
          color: var(--ink);
          font-weight: 500;
          line-height: 1.3;
        }
        .deck3-meta {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.14em;
          color: var(--ink-3);
        }
        .deck3-meta .hash {
          color: var(--ink);
          letter-spacing: 0.06em;
        }
        .pill3d {
          position: absolute;
          padding: 10px 14px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 999px;
          box-shadow: var(--shadow-lg);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink-2);
        }
        .pill3d .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--teal);
        }
        .pill-a {
          left: -4%;
          top: 12%;
          transform: translateZ(120px);
        }
        .pill-b {
          right: -2%;
          bottom: 8%;
          transform: translateZ(140px);
        }
        @media (max-width: 1000px) {
          .hero-3d {
            max-width: 460px;
          }
        }

        /* Pillar enhancements (icon, num pill, stat footer) */
        .pillar {
          position: relative;
          padding: 32px 28px 28px;
          overflow: hidden;
          gap: 20px;
        }
        .pillar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--teal) 0%, var(--teal-2) 100%);
          opacity: 0.5;
        }
        .pillar-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: radial-gradient(circle at 30% 30%, #ffffff, #def7f0 70%, #b9ebdb 100%);
          box-shadow:
            inset 0 1px 0 white,
            inset 0 -6px 14px rgba(10, 138, 120, 0.18),
            0 5px 12px -5px rgba(10, 138, 120, 0.32);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal);
        }
        .pillar-icon svg {
          width: 24px;
          height: 24px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .pillar-num {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .pillar h3 {
          font-size: 19px;
          max-width: 18ch;
          line-height: 1.2;
        }
        .pillar p {
          font-size: 13.5px;
        }
        .pillar-stat {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--line-faint);
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
        }
        .pillar-stat .num {
          font-family: var(--font-mono);
          font-size: 24px;
          letter-spacing: -0.03em;
          color: var(--ink);
          line-height: 1;
        }
        .pillar-stat .lbl {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          text-align: right;
          max-width: 14ch;
          line-height: 1.4;
        }
        .pillars {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        @media (max-width: 1100px) {
          .pillars {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .pillars {
            grid-template-columns: 1fr;
          }
        }

        /* Underwriting before / after */
        .uw-section {
          background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%);
        }
        .uw-wrap {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .uw {
          padding: 36px 32px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }
        .uw--after {
          background:
            radial-gradient(ellipse at 0% 0%, var(--teal-soft) 0%, transparent 50%),
            white;
          border-color: rgba(10, 138, 120, 0.2);
          box-shadow: var(--shadow-lg), 0 0 0 1px rgba(10, 138, 120, 0.05);
        }
        .uw-tag {
          display: inline-flex;
          align-self: flex-start;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding: 6px 12px;
          border-radius: 999px;
          background: var(--canvas-2);
        }
        .uw--after .uw-tag {
          color: var(--teal);
          background: var(--teal-soft);
        }
        .uw h4 {
          font-size: clamp(22px, 1.7vw, 28px);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
          line-height: 1.15;
        }
        .uw-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 16px;
          padding: 12px 0;
          border-top: 1px solid var(--line-faint);
          font-size: 14px;
          color: var(--ink-2);
          line-height: 1.5;
        }
        .uw-row .lbl {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-top: 2px;
        }
        .uw--after .uw-row .lbl {
          color: var(--teal);
        }
        .uw-row b {
          color: var(--ink);
          font-weight: 500;
        }
        .uw--after .uw-row b {
          color: var(--teal);
        }
        @media (max-width: 820px) {
          .uw-wrap {
            grid-template-columns: 1fr;
          }
        }

        /* Claim timeline */
        .claim {
          max-width: 1300px;
          margin: 0 auto;
          background: white;
          border: 1px solid var(--line);
          border-radius: 22px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        .claim-head {
          padding: 22px 32px;
          border-bottom: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
          background: linear-gradient(180deg, #fdfcf9 0%, transparent 100%);
        }
        .claim-head .accent {
          color: var(--teal);
        }
        .claim-body {
          padding: 18px 32px 28px;
        }
        .claim-event {
          display: grid;
          grid-template-columns: 110px 1fr 170px;
          gap: 24px;
          padding: 20px 0;
          border-top: 1px solid var(--line-faint);
          align-items: baseline;
        }
        .claim-event:first-child {
          border-top: none;
        }
        .claim-event .t {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--teal);
          letter-spacing: 0.04em;
        }
        .claim-event .what {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.5;
        }
        .claim-event .what b {
          font-weight: 500;
          color: var(--ink);
        }
        .claim-event .what span.muted {
          color: var(--ink-3);
        }
        .claim-event .sig {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--ink-3);
          text-align: right;
          line-height: 1.5;
        }
        .claim-event .sig .ok {
          color: var(--teal);
        }
        @media (max-width: 820px) {
          .claim-event {
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .claim-event .sig {
            text-align: left;
          }
        }

        /* Trust tiles */
        .trust {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1300px;
          margin: 0 auto;
        }
        .trust-tile {
          padding: 32px 28px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
        }
        .trust-tile:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        .trust-tile .num {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .trust-tile h5 {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.015em;
          color: var(--ink);
        }
        .trust-tile p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-2);
        }
        @media (max-width: 820px) {
          .trust {
            grid-template-columns: 1fr;
          }
        }

        /* Fleet stats */
        .fleet {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .fleet-card {
          padding: 36px 30px 32px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .fleet-card .num {
          font-family: var(--font-mono);
          font-size: clamp(40px, 4.2vw, 64px);
          letter-spacing: -0.04em;
          color: var(--ink);
          line-height: 1;
        }
        .fleet-card .num .unit {
          font-size: 0.42em;
          color: var(--teal);
          margin-left: 4px;
        }
        .fleet-card .lbl {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-top: auto;
        }
        .fleet-card .idx {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--teal);
        }
        @media (max-width: 1000px) {
          .fleet {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Pilots chip wall */
        .pilots {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          max-width: 1100px;
          margin: 48px auto 0;
        }
        .pilot-chip {
          padding: 14px 22px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 999px;
          box-shadow: var(--shadow-sm);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-2);
          transition: transform 0.2s, box-shadow 0.25s;
        }
        .pilot-chip:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .pilot-chip .dot {
          width: 6px;
          height: 6px;
          background: var(--teal);
          border-radius: 50%;
        }
        .pilot-chip .sub {
          color: var(--ink-3);
          margin-left: 4px;
          font-size: 9px;
        }

        /* Hero crumb accent override (source uses different selector) */
        .hero-crumb .accent {
          color: var(--teal);
        }
      `}
      </style>
    </>
  );
}

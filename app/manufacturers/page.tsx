import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { CinePlate } from "@/components/sections/CinePlate";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";
import { CtaPartnerForm } from "./CtaPartnerForm";

export const metadata: Metadata = {
  title: "Manufacturers · VesselIQ",
  description:
    "Failure pattern detection across every install. Build software in our cloud or interop with what's there. Warranty exposure modeled on real signal.",
};

const railItems: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "wins", label: "What you get" },
  { id: "spec", label: "Spec sheet" },
  { id: "scenarios", label: "Collaboration" },
  { id: "partners", label: "Partners" },
  { id: "cta", label: "Access" },
];

const wins = [
  {
    num: "W · 01 · Failure detection",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12l4-4 4 4 6-6" />
        <path d="M11 8h6v6" />
      </svg>
    ),
    title: "See failure patterns before they're claims.",
    body:
      "The intelligence layer sees what fails, on what hull class, at what hour count, in what waters. Ship an advisory before the warranty event lands.",
    stat: "68",
    label: "Hulls running MTU today",
  },
  {
    num: "W · 02 · Warranty",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l8 4v6c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Warranty exposure modeled, not guessed.",
    body:
      "Real install conditions, real hour counts, real operating profiles. Reserve smarter. Price the next contract better. Catch the bad batch in week 4, not month 14.",
    stat: "99.4%",
    label: "Fleet uptime · 90d",
  },
  {
    num: "W · 03 · Software",
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: "Ship software in our cloud, or talk to what's there.",
    body:
      "Stand up an OEM branded app inside VesselIQ, or interop cleanly with the other systems on the hull through the shared layer. Your call, not theirs.",
    stat: "4",
    label: "SDK runtimes available",
  },
  {
    num: "W · 04 · Reach",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "One spec. Every yard. Forever.",
    body:
      "Publish once. Every yard on VesselIQ can find, spec, and install your equipment. No per yard sales pitch. No bespoke integration. No per hull fees.",
    stat: "8",
    label: "Founding yards · 3 continents",
  },
];

const scenarios = [
  {
    idx: "C · 01",
    flow: [
      { v: "MTU", s: "Propulsion", center: false },
      { kind: "arrow" as const, top: "load demand", bottom: "J1939", double: false },
      { v: "VesselIQ", s: "Data layer", center: true },
      { kind: "arrow" as const, top: "start request", bottom: "Modbus", double: false },
      { v: "Kohler", s: "Generator", center: false },
    ],
    title: "The engines call. The generator answers.",
    body:
      "MTU pushes a load reading. Kohler reads it, comes online before voltage sags, tells the engines it's covered. Two manufacturers. One protocol agnostic conversation.",
  },
  {
    idx: "C · 02",
    flow: [
      { v: "Furuno", s: "Navigation", center: false },
      { kind: "arrow" as const, top: "heading change", bottom: "NMEA 2K", double: false },
      { v: "VesselIQ", s: "Data layer", center: true },
      { kind: "arrow" as const, top: "precool 2°C", bottom: "BACnet", double: false },
      { v: "Webasto", s: "HVAC", center: false },
    ],
    title: "The bridge plans. The saloon prepares.",
    body:
      "Furuno flags a course change into the sun. Webasto starts precooling. The guests never feel the cabin warm up. Neither maker wrote a line of code for the other.",
  },
  {
    idx: "C · 03",
    flow: [
      { v: "B&G", s: "Comms", center: false },
      { kind: "arrow" as const, top: "live status", bottom: "⇄ control", double: true },
      { v: "VesselIQ", s: "Data layer", center: true },
      { kind: "arrow" as const, top: "live status", bottom: "⇄ control", double: true },
      { v: "Owner", s: "Pocket app", center: false },
    ],
    title: "Your spec answers when the owner asks.",
    body:
      "The owner taps her phone in Monaco. B&G's H5000 answers in 118ms, through your spec, signed by you, no integration from your team. Your kit is suddenly part of the owner's experience.",
  },
];

const partners = [
  "MTU",
  "Caterpillar",
  "Furuno",
  "Raymarine",
  "B&G",
  "Garmin",
  "Kohler",
  "Naiad",
  "Side-Power",
  "Webasto",
  "ZF Marine",
  "Volvo Penta",
  "Glendinning",
  "Lumitec",
  "SeaKeeper",
  "Northern Lights",
  "Yanmar",
  "Lewmar",
  "Maretron",
  "Vetus",
  "Fischer Panda",
  "Sleipner",
  "Schenker",
];

export default function ManufacturersPage() {
  return (
    <>
      <PageStyles />
      <Rail items={railItems} />

      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>∕</span>
            <span className="accent">Manufacturers</span>
          </>
        }
        headline={
          <>
            See your gear
            <br />
            in the wild. <span className="italic">Build software around it.</span>
          </>
        }
        tag={<>47 manufacturers · 142 hulls · signed specs live</>}
        sub={
          <>
            <b>Failure patterns</b> spotted before claims. <b>Warranty exposure</b> modeled on real signal. Ship software in our cloud, or interop with what's already there. Your kit, finally talking back.
          </>
        }
        actions={[
          { href: "#cta", label: "Publish a spec", variant: "primary" },
          { href: "#scenarios", label: "See it collaborating", variant: "ghost" },
        ]}
        visual={
          <div className="hero-3d-inner" aria-hidden="true">
            <div className="card3d m-spec">
              <div className="head">
                <div>
                  <span className="num">Specsheet</span>
                  <h4>MTU 12V 2000 M96L</h4>
                </div>
                <span className="ver">
                  v4.2.1
                  <br />
                  <span className="signed">● signed</span>
                </span>
              </div>
              <div className="row">
                <span>Power</span>
                <b>1,432 kW @ 2,450 RPM</b>
              </div>
              <div className="row">
                <span>Weight</span>
                <b>2,310 kg</b>
              </div>
              <div className="row">
                <span>Protocol</span>
                <b>J1939 / VIQ-2.4</b>
              </div>
              <div className="row">
                <span>Streams</span>
                <b>rpm · temp · fuel · 8 alarms</b>
              </div>
              <div className="row">
                <span>Cert</span>
                <b>IMO Tier III · IACS UR-M67</b>
              </div>
            </div>

            <div className="hero-bridge">
              <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                <defs>
                  <marker
                    id="mArrow"
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
                  d="M 180 20 C 140 20, 140 60, 100 60 C 60 60, 60 20, 20 60"
                  markerEnd="url(#mArrow)"
                />
              </svg>
            </div>

            <div className="card3d m-fleet">
              <div className="top">
                <div>
                  <span className="num">Live across the fleet</span>
                  <h4>MTU 12V 2000 · deployments</h4>
                </div>
                <span className="pulse-tag">Live</span>
              </div>
              <div className="big">
                68<span className="unit">hulls</span>
              </div>
              <div className="micro">
                <div>
                  Online <b style={{ color: "var(--teal)" }}>66</b>
                </div>
                <div>
                  Warn <b style={{ color: "var(--amber)" }}>2</b>
                </div>
                <div>
                  Down <b>0</b>
                </div>
              </div>
            </div>

            <div className="pill3d pill-spec">
              <span className="dot" /> One spec, signed
            </div>
            <div className="pill3d pill-fleet">
              <span className="dot" /> Every install reports back
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
            Stop being a black box <span className="italic">on someone else's boat.</span>
          </>
        }
        lead="Publish your spec once. The platform handles delivery, integration, telemetry, and the long tail of what happens after the bolts are tightened."
      >
        <div className="wins">
          {wins.map((w, i) => (
            <Reveal key={w.num} delay={i === 0 ? undefined : ((i as 1 | 2 | 3))} as="article">
              <div className="win">
                <div className="win-icon">{w.icon}</div>
                <span className="win-num">{w.num}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <div className="stat">
                  <span className="n">{w.stat}</span>
                  <span className="l">{w.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CINEMATIC */}
      <CinePlate
        image="/assets/yacht-black.jpg"
        eyebrow="Your gear. In the wild."
        headline="See every install. From every angle."
        body="Your equipment runs on 142 hulls and counting. Failure patterns surface across the fleet, not one warranty claim at a time."
      />

      {/* SPEC SHEET */}
      <Section
        id="spec"
        eyebrow="M · 01 · Spec sheet"
        title={
          <>
            One spec. <span className="italic">Signed by you.</span>
          </>
        }
      >
        <div className="spec-wrap">
          <Reveal className="spec-text">
            <h3>Capability schema, datasheet, contract, certs, published once.</h3>
            <p>
              Sign with your manufacturer key. The spec becomes immutable, versioned, and traceable for the life of every unit. Every yard sees it the moment it lands.
            </p>
            <p style={{ marginTop: 14, color: "var(--ink-3)", fontSize: "13.5px" }}>
              Power · weight · footprint · protocol · streams · alarms · certifications. The yard's dry run validates compatibility before the bolt turns.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="spec-sheet">
              <div className="spec-sheet-head">
                <span className="accent">Specsheet · MTU 12V 2000 M96L</span>
                <span>v4.2.1 · signed</span>
              </div>
              <div className="spec-sheet-body">
                <div className="ttl">MTU 12V 2000 M96L</div>
                <div className="sub">Marine diesel · Propulsion class</div>
                <div className="spec-sheet-row">
                  <span className="lbl">Power</span>
                  <span className="val">1,432 kW @ 2,450 RPM</span>
                </div>
                <div className="spec-sheet-row">
                  <span className="lbl">Weight</span>
                  <span className="val">2,310 kg</span>
                </div>
                <div className="spec-sheet-row">
                  <span className="lbl">Protocol</span>
                  <span className="val">SAE J1939 / VIQ-2.4</span>
                </div>
                <div className="spec-sheet-row">
                  <span className="lbl">Streams</span>
                  <span className="val">rpm · temp · pressure · fuel · alarms (8)</span>
                </div>
                <div className="spec-sheet-row">
                  <span className="lbl">Cert</span>
                  <span className="val">IMO Tier III · IACS UR-M67</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SCENARIOS */}
      <Section
        id="scenarios"
        eyebrow="M · 02 · Collaboration"
        title={
          <>
            Your kit, <span className="italic">talking to everyone else's.</span>
          </>
        }
        lead="Publish your spec and your equipment can read and write to every other system on the boat, without a single bespoke integration, in any language, across any protocol."
      >
        <div className="scenarios">
          {scenarios.map((s, i) => (
            <Reveal key={s.idx} delay={i === 0 ? undefined : ((i as 1 | 2))} as="article">
              <div className="scenario">
                <div className="scenario-flow">
                  {s.flow.map((node, j) => {
                    if ("kind" in node && node.kind === "arrow") {
                      return (
                        <div key={j} className="arrow-block">
                          <span className={`arrow-line${node.double ? " double" : ""}`} />
                          <span className="arrow-label">
                            {node.top}
                            <br />
                            {node.bottom}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={j}
                        className={`actor${"center" in node && node.center ? " is-center" : ""}`}
                      >
                        <span className="v">{"v" in node ? node.v : ""}</span>
                        <span className="s">{"s" in node ? node.s : ""}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="scenario-caption">
                  <span className="idx">{s.idx}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section id="partners">
        <header className="section-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Live partner network
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display display-l" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Forty seven makers. <span className="italic">One platform.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Equipment publishing live, signed specs on VesselIQ, and talking to every other system on every hull running the platform.
            </p>
          </Reveal>
        </header>

        <Reveal delay={2}>
          <div className="partners">
            {partners.map((p) => (
              <div key={p} className="partner">
                {p}
              </div>
            ))}
            <div className="partner more">+ 24 more</div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="testimonial" style={{ marginTop: 80 }}>
            <span className="testimonial-eyebrow">From the field</span>
            <blockquote>
              &ldquo;We integrated once. Now our engines run on{" "}
              <span className="accent">142 hulls</span> with a single contract instead of forty seven.&rdquo;
            </blockquote>
            <div className="testimonial-attr">
              <span className="testimonial-avatar">LH</span>
              <span className="testimonial-meta">
                <span className="testimonial-name">Lukas Hoffmann</span>
                <span className="testimonial-title">Head of Marine Integration, MTU</span>
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <section className="shell" id="cta">
        <div className="cta-wrap">
          <div className="cta-stamp">
            Partner network
            <br />
            <span className="accent">47 active</span>
            <br />
            manufacturers
          </div>
          <div>
            <span className="eyebrow">M · 03 · Partnership</span>
            <h2 className="display display-xl">Publish a spec.</h2>
            <p>
              If you build marine equipment above the recreational tier, send us a note. We&apos;ll set up a partner key, ingest your existing spec library, and route your first hull within the week.
            </p>
          </div>
          <CtaPartnerForm />
        </div>
      </section>
    </>
  );
}


function PageStyles() {
  const css = `
/* Hero 3D — spec sheet + fleet deployment */
.hero-3d { aspect-ratio: 1 / 1.05; width: 100%; max-width: 580px; margin: 0 auto; perspective: 1500px; }
.hero-3d-inner { position: absolute; inset: 0; transform-style: preserve-3d; transform: rotateX(12deg) rotateY(-18deg); animation: tilt3d 18s ease-in-out infinite; }
@keyframes tilt3d { 0%, 100% { transform: rotateX(12deg) rotateY(-18deg) translateY(0); } 50% { transform: rotateX(14deg) rotateY(-15deg) translateY(-8px); } }
.card3d { position: absolute; border-radius: 22px; background: #fff; border: 1px solid var(--line); box-shadow: var(--shadow-xl); overflow: hidden; transform-style: preserve-3d; }
.card3d.m-spec { right: 0; top: 0; width: 74%; height: 54%; transform: translateZ(60px); background: linear-gradient(180deg, #fff 0%, #fafbfd 100%); padding: 22px 24px; display: flex; flex-direction: column; gap: 10px; }
.m-spec .head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--line); padding-bottom: 10px; }
.m-spec .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.m-spec h4 { font-family: var(--font-sans); font-weight: 500; font-size: 18px; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.m-spec .ver { font-family: var(--font-mono); font-size: 9px; color: var(--ink-3); letter-spacing: 0.14em; text-align: right; }
.m-spec .ver .signed { color: var(--teal); }
.m-spec .row { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.04em; color: var(--ink-3); padding: 5px 0; border-bottom: 1px solid var(--line-faint); }
.m-spec .row b { color: var(--ink); font-weight: 500; }

.card3d.m-fleet { left: 0; bottom: 0; width: 78%; height: 42%; transform: translateZ(-30px); background: radial-gradient(ellipse at 20% 100%, var(--teal-soft) 0%, transparent 60%), linear-gradient(180deg, #fcfaf4 0%, #f0ede5 100%); padding: 22px 24px; display: flex; flex-direction: column; gap: 12px; }
.m-fleet .top { display: flex; justify-content: space-between; align-items: flex-start; }
.m-fleet .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: #c5790a; }
.m-fleet h4 { font-family: var(--font-sans); font-weight: 500; font-size: 17px; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.m-fleet .pulse-tag { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--teal); padding: 4px 9px; background: var(--teal-soft); border-radius: 999px; }
.m-fleet .pulse-tag::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 0 3px var(--teal-glow); animation: pulse 1.8s ease-in-out infinite; }
.m-fleet .big { font-family: var(--font-mono); font-size: clamp(32px, 3.5vw, 52px); letter-spacing: -0.04em; color: var(--ink); line-height: 1; }
.m-fleet .big .unit { font-size: 0.42em; color: var(--teal); margin-left: 4px; }
.m-fleet .micro { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3); margin-top: auto; }
.m-fleet .micro b { font-weight: 500; font-size: 14px; letter-spacing: -0.02em; display: block; margin-top: 2px; color: var(--ink); }

.hero-bridge { position: absolute; left: 32%; top: 42%; width: 36%; height: 20%; transform: translateZ(20px); pointer-events: none; }
.hero-bridge svg { width: 100%; height: 100%; overflow: visible; }
.bridge-arc { stroke: var(--teal); stroke-width: 1.4; fill: none; stroke-dasharray: 4 5; opacity: 0.7; animation: dash 1.8s linear infinite; }
@keyframes dash { to { stroke-dashoffset: -18; } }
.bridge-head { fill: var(--teal); }

.pill3d { position: absolute; padding: 9px 13px; background: #fff; border: 1px solid var(--line); border-radius: 999px; box-shadow: var(--shadow-lg); font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 7px; color: var(--ink-2); }
.pill3d .dot { width: 7px; height: 7px; border-radius: 50%; }
.pill-spec { right: -4%; top: 14%; transform: translateZ(140px); }
.pill-spec .dot { background: var(--teal); }
.pill-fleet { left: -6%; bottom: 22%; transform: translateZ(120px); }
.pill-fleet .dot { background: #c5790a; }

@media (max-width: 1000px) { .hero-3d { max-width: 480px; } }

/* WINS */
.wins { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1400px; margin: 0 auto; }
.win { padding: 32px 28px 28px; background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--shadow-md); display: flex; flex-direction: column; gap: 20px; transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease); position: relative; overflow: hidden; height: 100%; }
.win:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.win::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal) 0%, var(--teal-2) 100%); opacity: 0.5; }
.win-icon { width: 48px; height: 48px; border-radius: 12px; background: radial-gradient(circle at 30% 30%, #fff, var(--teal-soft) 70%, #b9ebdb 100%); box-shadow: inset 0 1px 0 #fff, inset 0 -6px 14px rgba(10,138,120,0.18), 0 5px 12px -5px rgba(10,138,120,0.32); display: flex; align-items: center; justify-content: center; color: var(--teal); }
.win-icon svg { width: 24px; height: 24px; stroke: currentColor; fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.win-num { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.win h3 { font-family: var(--font-sans); font-size: 19px; font-weight: 500; letter-spacing: -0.02em; color: var(--ink); line-height: 1.2; max-width: 18ch; }
.win p { font-size: 13.5px; line-height: 1.55; color: var(--ink-2); }
.win .stat { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--line-faint); display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
.win .stat .n { font-family: var(--font-mono); font-size: 24px; letter-spacing: -0.03em; color: var(--ink); line-height: 1; }
.win .stat .l { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3); text-align: right; max-width: 14ch; line-height: 1.4; }
@media (max-width: 1100px) { .wins { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .wins { grid-template-columns: 1fr; } }

/* SPEC SHEET */
.spec-wrap { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: clamp(40px, 5vw, 80px); align-items: center; }
.spec-text h3 { font-size: clamp(28px, 2.4vw, 44px); font-weight: 500; letter-spacing: -0.025em; color: var(--ink); line-height: 1.05; margin-top: 22px; max-width: 14ch; }
.spec-text p { margin-top: 22px; font-size: 16px; line-height: 1.6; color: var(--ink-2); max-width: 44ch; }
.spec-sheet { background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--shadow-xl); overflow: hidden; }
.spec-sheet-head { padding: 18px 28px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; background: linear-gradient(180deg, #fdfcf9 0%, transparent 100%); font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-3); }
.spec-sheet-head .accent { color: var(--teal); }
.spec-sheet-body { padding: 32px 32px 36px; }
.spec-sheet-body .ttl { font-size: 28px; letter-spacing: -0.025em; color: var(--ink); margin-bottom: 6px; font-weight: 500; }
.spec-sheet-body .sub { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 24px; }
.spec-sheet-row { display: grid; grid-template-columns: 140px 1fr; gap: 16px; padding: 12px 0; border-top: 1px solid var(--line-faint); align-items: baseline; }
.spec-sheet-row .lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.spec-sheet-row .val { font-family: var(--font-mono); font-size: 13px; color: var(--ink); letter-spacing: 0.02em; }
@media (max-width: 1100px) { .spec-wrap { grid-template-columns: 1fr; } }

/* SCENARIOS */
.scenarios { max-width: 1300px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
.scenario { padding: 32px; background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: var(--shadow-md); display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 40px; align-items: center; transition: box-shadow 0.4s var(--ease); }
.scenario:hover { box-shadow: var(--shadow-lg); }
.scenario-flow { display: flex; align-items: center; gap: 14px; flex-wrap: nowrap; overflow-x: auto; }
.actor { display: flex; flex-direction: column; gap: 4px; padding: 14px 16px; background: var(--canvas); border: 1px solid var(--line); border-radius: 12px; min-width: 90px; flex-shrink: 0; }
.actor.is-center { background: var(--teal-soft); border-color: rgba(10,138,120,0.25); }
.actor .v { font-family: var(--font-sans); font-weight: 500; font-size: 14px; letter-spacing: -0.01em; color: var(--ink); }
.actor.is-center .v { color: var(--teal); }
.actor .s { font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
.arrow-block { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 0 0 auto; min-width: 80px; }
.arrow-line { width: 60px; height: 1px; background: var(--teal); position: relative; }
.arrow-line::after { content: ""; position: absolute; right: -1px; top: -3px; width: 6px; height: 6px; border-right: 1px solid var(--teal); border-top: 1px solid var(--teal); transform: rotate(45deg); }
.arrow-line.double::before { content: ""; position: absolute; left: -1px; top: -3px; width: 6px; height: 6px; border-left: 1px solid var(--teal); border-top: 1px solid var(--teal); transform: rotate(-45deg); }
.arrow-label { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3); text-align: center; line-height: 1.4; }
.scenario-caption .idx { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.scenario-caption h4 { font-family: var(--font-sans); font-weight: 500; font-size: 20px; letter-spacing: -0.02em; color: var(--ink); line-height: 1.2; margin-top: 8px; margin-bottom: 10px; }
.scenario-caption p { font-size: 14px; line-height: 1.55; color: var(--ink-2); }
@media (max-width: 1000px) { .scenario { grid-template-columns: 1fr; } .scenario-flow { padding-bottom: 8px; } }

/* PARTNERS */
.partners { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; }
.partner { background: #fff; padding: 28px 16px; display: flex; align-items: center; justify-content: center; font-family: var(--font-sans); font-weight: 500; font-size: 15px; letter-spacing: -0.005em; color: var(--ink-2); transition: background 0.2s, color 0.2s; }
.partner:hover { background: var(--teal-soft); color: var(--teal); }
.partner.more { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); }
@media (max-width: 900px) { .partners { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 500px) { .partners { grid-template-columns: repeat(2, 1fr); } }

/* TESTIMONIAL */
.testimonial { max-width: 1100px; margin: 0 auto; padding: 60px; background: #fff; border: 1px solid var(--line); border-radius: 22px; box-shadow: var(--shadow-lg); text-align: center; }
.testimonial-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--teal); }
.testimonial blockquote { font-family: var(--font-serif); font-style: italic; font-size: clamp(26px, 3vw, 42px); line-height: 1.2; letter-spacing: -0.02em; color: var(--ink); margin-top: 24px; text-wrap: balance; }
.testimonial blockquote .accent { color: var(--teal); }
.testimonial-attr { margin-top: 40px; display: inline-flex; align-items: center; gap: 16px; }
.testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--teal), var(--blue)); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 14px; letter-spacing: 0.04em; font-weight: 500; }
.testimonial-meta { display: flex; flex-direction: column; text-align: left; gap: 2px; }
.testimonial-name { font-family: var(--font-sans); font-weight: 500; font-size: 15px; color: var(--ink); }
.testimonial-title { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3); }

/* CTA */
.cta-wrap { margin: 80px auto 100px; max-width: 1400px; border-radius: 28px; background: radial-gradient(ellipse at 20% 0%, rgba(94,234,212,0.16) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(31,100,215,0.18) 0%, transparent 50%), linear-gradient(180deg, #0c1117 0%, #131a25 100%); color: #fff; padding: clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px); box-shadow: var(--shadow-xl); position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: clamp(40px, 5vw, 80px); }
.cta-stamp { position: absolute; top: 28px; right: 32px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.55); border: 1px solid rgba(255,255,255,0.15); padding: 10px 16px; border-radius: 10px; line-height: 1.7; text-align: right; }
.cta-stamp .accent { color: var(--teal-2); font-size: 16px; letter-spacing: 0.04em; }
.cta-wrap .eyebrow { color: var(--teal-2); }
.cta-wrap .eyebrow::before { background: var(--teal-2); }
.cta-wrap h2 { color: #fff; margin-top: 24px; }
.cta-wrap p { color: rgba(255,255,255,0.7); margin-top: 24px; max-width: 44ch; font-size: clamp(16px, 1.2vw, 19px); line-height: 1.5; }
.cta-partner-form { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 4px; backdrop-filter: blur(8px); align-self: center; }
.cta-partner-form .form-row { display: grid; grid-template-columns: 90px 1fr; gap: 12px; align-items: center; padding: 12px 4px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.cta-partner-form .form-row .lbl { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
.cta-partner-form .form-row input, .cta-partner-form .form-row select { background: transparent; border: none; color: #fff; font-family: inherit; font-size: 14px; outline: none; width: 100%; }
.cta-partner-form .form-row input::placeholder { color: rgba(255,255,255,0.32); }
.cta-partner-form .form-row select option { color: var(--ink); }
.form-submit-partner { margin-top: 18px; padding: 16px 22px; background: var(--teal-2); color: var(--ink); border-radius: 999px; display: inline-flex; align-items: center; justify-content: space-between; gap: 10px; font-weight: 500; font-size: 14px; transition: background 0.2s, transform 0.2s; border: none; cursor: pointer; font-family: inherit; }
.form-submit-partner:hover { background: #fff; transform: translateY(-1px); }
.form-submit-partner .arrow { width: 14px; height: 1px; background: currentColor; position: relative; }
.form-submit-partner .arrow::after { content: ""; position: absolute; right: -1px; top: -3px; width: 6px; height: 6px; border-right: 1.5px solid currentColor; border-top: 1.5px solid currentColor; transform: rotate(45deg); }
@media (max-width: 1000px) { .cta-wrap { grid-template-columns: 1fr; } .cta-stamp { position: static; align-self: flex-start; display: inline-block; } }
`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { CinePlate } from "@/components/sections/CinePlate";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "REST and streaming endpoints. SDKs in Node, Python, Swift, Rust. Sandbox hulls. Train models on a marine corpus that doesn't exist anywhere else.",
  openGraph: {
    title: "Developers · VesselIQ",
    description:
      "REST and streaming endpoints. SDKs in Node, Python, Swift, Rust. Sandbox hulls. Train models on a marine corpus that doesn't exist anywhere else.",
    images: ["/assets/og-share.png"],
  },
};

const railItems: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "wins", label: "What you get" },
  { id: "quickstart", label: "Quickstart" },
  { id: "schema", label: "Schema" },
  { id: "sdks", label: "SDKs" },
  { id: "sandbox", label: "Sandbox" },
  { id: "cta", label: "Access" },
];

// Page specific styles. The shared design tokens and primitives live in
// app/globals.css. The classes below are unique to the developers page
// (code windows, wins grid, schema table, sdk grid, sandbox layout, custom
// cta with stamp and inline form). Inlined here so the page is self contained
// without polluting the global stylesheet.
const pageStyles = `
.dev-hero-code{position:relative;width:100%;max-width:640px;margin:0 auto;perspective:1500px}
.dev-hero-code-inner{position:relative;transform-style:preserve-3d;transform:rotateX(8deg) rotateY(-10deg);animation:devCodeTilt 18s ease-in-out infinite}
@keyframes devCodeTilt{0%,100%{transform:rotateX(8deg) rotateY(-10deg) translateY(0)}50%{transform:rotateX(10deg) rotateY(-8deg) translateY(-6px)}}
.dev-code-window{background:#0f1620;border-radius:18px;box-shadow:var(--shadow-xl);overflow:hidden;border:1px solid rgba(255,255,255,0.06)}
.dev-code-chrome{padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:14px;background:rgba(0,0,0,0.2)}
.dev-code-chrome .dots{display:flex;gap:6px}
.dev-code-chrome .dots i{width:10px;height:10px;border-radius:50%;display:block}
.dev-code-chrome .dots i:nth-child(1){background:#e87167}
.dev-code-chrome .dots i:nth-child(2){background:#e8b958}
.dev-code-chrome .dots i:nth-child(3){background:#67c97f}
.dev-code-chrome .title{flex:1;text-align:center;font-family:var(--font-mono);font-size:11px;color:rgba(255,255,255,0.45);letter-spacing:0.04em}
.dev-code-chrome .lang{font-family:var(--font-mono);font-size:10px;color:var(--teal-2);letter-spacing:0.16em;text-transform:uppercase;padding:4px 9px;background:rgba(94,234,212,0.1);border-radius:6px}
.dev-code-block{padding:22px 26px;font-family:var(--font-mono);font-size:13px;line-height:1.65;color:rgba(255,255,255,0.85);white-space:pre;overflow-x:auto;margin:0}
.dev-code-block .c-com{color:#6a7585}
.dev-code-block .c-kw{color:#c084fc}
.dev-code-block .c-str{color:#5eead4}
.dev-code-block .c-prop{color:#7dd3fc}
.dev-code-block .c-num{color:#fb923c}
.dev-code-block .blink{display:inline-block;width:8px;height:14px;background:var(--teal-2);vertical-align:middle;margin-left:2px;animation:devBlink 1.1s steps(2,start) infinite}
@keyframes devBlink{to{visibility:hidden}}
.dev-stream-tape{margin-top:14px;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-lg);padding:14px 20px;display:flex;align-items:center;gap:14px;font-family:var(--font-mono);font-size:11px;letter-spacing:0.04em;color:var(--ink-2)}
.dev-stream-tape .tag{display:inline-flex;align-items:center;gap:6px;font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--teal);padding:4px 9px;background:var(--teal-soft);border-radius:999px}
.dev-stream-tape .tag::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 3px var(--teal-glow);animation:pulse 1.8s ease-in-out infinite}
.dev-stream-tape .ev{flex:1;display:flex;gap:12px;overflow:hidden;white-space:nowrap}
.dev-stream-tape .ev b{color:var(--ink);font-weight:500}
.dev-stream-tape .ev .t{color:var(--teal)}
@media (max-width:1000px){.dev-hero-code{max-width:560px}}

.dev-wins{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1400px;margin:0 auto}
.dev-win{padding:32px 28px 28px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-md);display:flex;flex-direction:column;gap:20px;transition:transform 0.4s var(--ease),box-shadow 0.4s var(--ease);position:relative;overflow:hidden}
.dev-win:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.dev-win::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--teal) 0%,var(--teal-2) 100%);opacity:0.5}
.dev-win-icon{width:48px;height:48px;border-radius:12px;background:radial-gradient(circle at 30% 30%,#fff,var(--teal-soft) 70%,#b9ebdb 100%);box-shadow:inset 0 1px 0 #fff,inset 0 -6px 14px rgba(10,138,120,0.18),0 5px 12px -5px rgba(10,138,120,0.32);display:flex;align-items:center;justify-content:center;color:var(--teal)}
.dev-win-icon svg{width:24px;height:24px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.dev-win-num{font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
.dev-win h3{font-family:var(--font-sans);font-size:19px;font-weight:500;letter-spacing:-0.02em;color:var(--ink);line-height:1.2;max-width:18ch}
.dev-win p{font-size:13.5px;line-height:1.55;color:var(--ink-2)}
.dev-win .stat{margin-top:auto;padding-top:16px;border-top:1px solid var(--line-faint);display:flex;justify-content:space-between;align-items:baseline;gap:10px}
.dev-win .stat .n{font-family:var(--font-mono);font-size:24px;letter-spacing:-0.03em;color:var(--ink);line-height:1}
.dev-win .stat .l{font-family:var(--font-mono);font-size:9.5px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-3);text-align:right;max-width:14ch;line-height:1.4}
@media (max-width:1100px){.dev-wins{grid-template-columns:repeat(2,1fr)}}
@media (max-width:600px){.dev-wins{grid-template-columns:1fr}}

.dev-quickstart-wrap{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(40px,5vw,80px);align-items:center}
.dev-quickstart-text h3{font-size:clamp(28px,2.4vw,44px);font-weight:500;letter-spacing:-0.025em;color:var(--ink);line-height:1.05;margin-top:22px;max-width:14ch}
.dev-quickstart-text p{margin-top:22px;font-size:16px;line-height:1.6;color:var(--ink-2);max-width:44ch}
.dev-step-list{margin-top:28px;display:flex;flex-direction:column;gap:14px}
.dev-step-list .step{display:flex;gap:14px;align-items:flex-start}
.dev-step-list .n{font-family:var(--font-mono);font-size:12px;color:var(--teal);font-weight:500;flex-shrink:0;width:28px;height:28px;border:1px solid var(--teal);border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--teal-soft)}
.dev-step-list .txt{font-size:14px;color:var(--ink-2);line-height:1.5;padding-top:5px}
.dev-step-list .txt b{color:var(--ink);font-weight:500}
@media (max-width:1100px){.dev-quickstart-wrap{grid-template-columns:1fr}}

.dev-schema-table{max-width:1300px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-lg);overflow:hidden}
.dev-schema-row{display:grid;grid-template-columns:80px 200px 1fr;gap:24px;padding:24px 32px;border-top:1px solid var(--line-faint);align-items:baseline}
.dev-schema-row:first-child{border-top:none}
.dev-schema-row:hover{background:var(--canvas)}
.dev-schema-row .idx{font-family:var(--font-mono);font-size:11px;letter-spacing:0.18em;color:var(--teal)}
.dev-schema-row .key{font-family:var(--font-sans);font-size:18px;font-weight:500;letter-spacing:-0.015em;color:var(--ink)}
.dev-schema-row .desc{font-size:14px;line-height:1.55;color:var(--ink-2)}
@media (max-width:800px){.dev-schema-row{grid-template-columns:1fr;gap:6px;padding:20px 24px}}

.dev-sdks{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:18px;overflow:hidden}
.dev-sdk{background:#fff;padding:40px 28px;display:flex;flex-direction:column;gap:18px;transition:background 0.2s}
.dev-sdk:hover{background:var(--teal-soft)}
.dev-sdk-num{font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
.dev-sdk h3{font-family:var(--font-sans);font-size:30px;font-weight:500;letter-spacing:-0.02em;color:var(--ink)}
.dev-sdk .pkg{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:0.02em;line-height:1.5}
.dev-sdk .pkg b{color:var(--ink);font-weight:500}
@media (max-width:900px){.dev-sdks{grid-template-columns:repeat(2,1fr)}}

.dev-sandbox-wrap{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(40px,5vw,80px);align-items:center}
.dev-sandbox-text h3{font-size:clamp(28px,2.4vw,44px);font-weight:500;letter-spacing:-0.025em;color:var(--ink);line-height:1.05;margin-top:22px;max-width:14ch}
.dev-sandbox-text p{margin-top:22px;font-size:16px;line-height:1.6;color:var(--ink-2);max-width:44ch}
.dev-sandbox-text .pill{display:inline-flex;align-items:center;gap:8px;margin-top:22px;padding:8px 14px;background:var(--teal-soft);border:1px solid rgba(10,138,120,0.25);border-radius:999px;font-family:var(--font-mono);font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal)}
.dev-sandbox-text .pill::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--teal)}
@media (max-width:1100px){.dev-sandbox-wrap{grid-template-columns:1fr}}

.dev-testimonial{max-width:1100px;margin:0 auto;padding:60px;background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow-lg);text-align:center}
.dev-testimonial-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
.dev-testimonial blockquote{font-family:var(--font-serif);font-style:italic;font-size:clamp(26px,3vw,42px);line-height:1.2;letter-spacing:-0.02em;color:var(--ink);margin-top:24px;text-wrap:balance}
.dev-testimonial blockquote .accent{color:var(--teal)}
.dev-testimonial-attr{margin-top:40px;display:inline-flex;align-items:center;gap:16px}
.dev-testimonial-avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--teal),var(--blue));color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:14px;letter-spacing:0.04em;font-weight:500}
.dev-testimonial-meta{display:flex;flex-direction:column;text-align:left;gap:2px}
.dev-testimonial-name{font-family:var(--font-sans);font-weight:500;font-size:15px;color:var(--ink)}
.dev-testimonial-title{font-family:var(--font-mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-3)}

.dev-cta-wrap{margin:80px auto 100px;max-width:1400px;border-radius:28px;background:radial-gradient(ellipse at 20% 0%,rgba(94,234,212,0.16) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(31,100,215,0.18) 0%,transparent 50%),linear-gradient(180deg,#0c1117 0%,#131a25 100%);color:#fff;padding:clamp(48px,6vw,80px) clamp(32px,5vw,72px);box-shadow:var(--shadow-xl);position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(40px,5vw,80px)}
.dev-cta-stamp{position:absolute;top:28px;right:32px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.15);padding:10px 16px;border-radius:10px;line-height:1.7;text-align:right}
.dev-cta-stamp .accent{color:var(--teal-2);font-size:16px;letter-spacing:0.04em}
.dev-cta-wrap .eyebrow{color:var(--teal-2)}
.dev-cta-wrap .eyebrow::before{background:var(--teal-2)}
.dev-cta-wrap h2{color:#fff;margin-top:24px}
.dev-cta-wrap p{color:rgba(255,255,255,0.7);margin-top:24px;max-width:44ch;font-size:clamp(16px,1.2vw,19px);line-height:1.5}
.dev-cta-form{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:4px;backdrop-filter:blur(8px);align-self:center}
.dev-form-row{display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:center;padding:12px 4px;border-bottom:1px solid rgba(255,255,255,0.08)}
.dev-form-row .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.55)}
.dev-form-row input,.dev-form-row select{background:transparent;border:none;color:#fff;font-family:inherit;font-size:14px;outline:none;width:100%}
.dev-form-row input::placeholder{color:rgba(255,255,255,0.32)}
.dev-form-row select option{color:var(--ink)}
.dev-form-submit{margin-top:18px;padding:16px 22px;background:var(--teal-2);color:var(--ink);border-radius:999px;display:inline-flex;align-items:center;justify-content:space-between;gap:10px;font-weight:500;font-size:14px;transition:background 0.2s,transform 0.2s;border:none;cursor:pointer;font-family:inherit}
.dev-form-submit:hover{background:#fff;transform:translateY(-1px)}
.dev-form-submit .arrow{width:14px;height:1px;background:currentColor;position:relative}
.dev-form-submit .arrow::after{content:"";position:absolute;right:-1px;top:-3px;width:6px;height:6px;border-right:1.5px solid currentColor;border-top:1.5px solid currentColor;transform:rotate(45deg)}
@media (max-width:1000px){.dev-cta-wrap{grid-template-columns:1fr}.dev-cta-stamp{position:static;align-self:flex-start;display:inline-block}}
`;

// Hero code window mirrors the source TypeScript sample. Kept verbatim
// because dashes are allowed inside code identifiers and string literals.
const heroVisual = (
  <div className="dev-hero-code" aria-hidden="true">
    <div className="dev-hero-code-inner">
      <div className="dev-code-window">
        <div className="dev-code-chrome">
          <div className="dots">
            <i />
            <i />
            <i />
          </div>
          <div className="title">~/marine-app · npm</div>
          <span className="lang">TypeScript</span>
        </div>
        <pre className="dev-code-block">
          <code>
            <span className="c-com">{"// install + attach to a hull"}</span>
            {"\n"}
            <span className="c-kw">import</span>
            {" { VesselIQ } "}
            <span className="c-kw">from</span>{" "}
            <span className="c-str">{'"@vesseliq/sdk"'}</span>
            {";\n\n"}
            <span className="c-kw">const</span>
            {" client = "}
            <span className="c-kw">new</span>
            {" VesselIQ({ apiKey: process.env."}
            <span className="c-prop">VIQ_KEY</span>
            {" });\n"}
            <span className="c-kw">const</span>
            {" hull   = "}
            <span className="c-kw">await</span>
            {" client.vessels."}
            <span className="c-prop">get</span>
            {"("}
            <span className="c-str">{'"VIQ-0014"'}</span>
            {");\n\nhull.systems\n  .stream({ filter: "}
            <span className="c-str">{'"propulsion, nav, power"'}</span>
            {" })\n  .on("}
            <span className="c-str">{'"event"'}</span>
            {", (e) => {\n    console."}
            <span className="c-prop">log</span>
            {"(e."}
            <span className="c-prop">source</span>
            {", e."}
            <span className="c-prop">payload</span>
            {");\n    "}
            <span className="c-com">
              {"// MTU.12V2000.PORT { rpm: 1820, temp: 68 }"}
            </span>
            {"\n  });\n"}
            <span className="blink" />
          </code>
        </pre>
      </div>

      <div className="dev-stream-tape">
        <span className="tag">streaming</span>
        <span className="ev">
          <span className="t">14:22:08.124</span>{" "}
          <b>MTU.12V2000.PORT</b> rpm=1820 · temp=68°C · 118ms
        </span>
      </div>
    </div>
  </div>
);

export default function DevelopersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <Rail items={railItems} />

      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>∕</span>
            <span className="accent">Developers</span>
          </>
        }
        headline={
          <>
            Build against <span className="italic">the boat.</span>
          </>
        }
        tag={<>vesseliq.dev · sandbox open · 118ms p50</>}
        sub={
          <>
            A real REST API for boats. Streaming endpoints. SDKs in{" "}
            <b>Node, Python, Swift, Rust.</b> Sandbox hulls you can write code
            against today. Documentation that knows what a bilge is.
          </>
        }
        actions={[
          { href: "#cta", label: "Get a sandbox key", variant: "primary" },
          { href: "#quickstart", label: "Read the quickstart", variant: "ghost" },
        ]}
        visual={heroVisual}
      />

      {/* WINS */}
      <Section
        id="wins"
        eyebrow="Why build here"
        title={
          <>
            The first real data layer{" "}
            <span className="italic">for marine software.</span>
          </>
        }
        lead="A corpus that doesn't exist anywhere else. A go to market that comes with the platform. Integration work that's already done."
      >
        <div className="dev-wins">
          <Reveal className="dev-win" as="article">
            <div className="dev-win-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12c2-4 6-6 9-6s7 2 9 6c-2 4-6 6-9 6s-7-2-9-6z" />
              </svg>
            </div>
            <span className="dev-win-num">W · 01 · AI</span>
            <h3>Train on a marine corpus that doesn&rsquo;t exist anywhere else.</h3>
            <p>
              Telemetry, voyages, failure events, service logs, equipment
              performance, across 142 hulls and growing. The training data
              nobody else has.
            </p>
            <div className="stat">
              <span className="n">12,400</span>
              <span className="l">Events / second</span>
            </div>
          </Reveal>

          <Reveal className="dev-win" as="article" delay={1}>
            <div className="dev-win-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="8 6 2 12 8 18" />
                <polyline points="16 6 22 12 16 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <span className="dev-win-num">W · 02 · API</span>
            <h3>A real API. Sandbox hulls. Four runtimes.</h3>
            <p>
              REST and streaming, OpenAPI 3.1 and AsyncAPI 2.6. SDKs in Node,
              Python, Swift, Rust, all generated from the same schema, all
              signed, all typed.
            </p>
            <div className="stat">
              <span className="n">
                118
                <span style={{ fontSize: "0.5em", color: "var(--teal)" }}>
                  ms
                </span>
              </span>
              <span className="l">p50 sandbox latency</span>
            </div>
          </Reveal>

          <Reveal className="dev-win" as="article" delay={2}>
            <div className="dev-win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l2-6 4 12 2-6h6" />
              </svg>
            </div>
            <span className="dev-win-num">W · 03 · Integration</span>
            <h3>Skip the integration work entirely.</h3>
            <p>
              Protocols normalized at the layer. NMEA 2000, J1939, Modbus,
              BACnet, Signal K, already translated into one model. Ship your
              feature, not your serial parser.
            </p>
            <div className="stat">
              <span className="n">5</span>
              <span className="l">Open protocols translated</span>
            </div>
          </Reveal>

          <Reveal className="dev-win" as="article" delay={3}>
            <div className="dev-win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l5-5 4 4 8-8" />
                <path d="M14 8h6v6" />
              </svg>
            </div>
            <span className="dev-win-num">W · 04 · Distribution</span>
            <h3>Go to market on the same rails the industry runs on.</h3>
            <p>
              If you ship something useful, every yard, every OEM, every owner
              on VesselIQ can find it. The platform&rsquo;s network is your
              distribution network.
            </p>
            <div className="stat">
              <span className="n">142</span>
              <span className="l">Hulls reachable today</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CINEMATIC */}
      <CinePlate
        image="/assets/yacht-black.jpg"
        eyebrow="A real corpus. A real surface."
        headline="Build on water. Not on a slide deck."
        body="Sandbox hulls, signed schemas, four runtimes, and a marine training corpus that exists nowhere else on earth."
      />

      {/* QUICKSTART */}
      <Section
        id="quickstart"
        eyebrow="D · 01 · Quickstart"
        title={
          <>
            Sixty seconds <span className="italic">to first event.</span>
          </>
        }
      >
        <div className="dev-quickstart-wrap">
          <Reveal className="dev-quickstart-text">
            <h3>Install the SDK. Subscribe. Done.</h3>
            <p>
              Every push is typed, every event traceable, every stream signed.
              The contract you read in the docs is the contract you get in
              production.
            </p>
            <div className="dev-step-list">
              <div className="step">
                <span className="n">1</span>
                <span className="txt">
                  <b>Install</b> the SDK for your runtime.
                </span>
              </div>
              <div className="step">
                <span className="n">2</span>
                <span className="txt">
                  <b>Attach</b> to a hull, yours or a sandbox.
                </span>
              </div>
              <div className="step">
                <span className="n">3</span>
                <span className="txt">
                  <b>Subscribe</b> to systems and watch events arrive.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="dev-code-window" delay={2}>
            <div className="dev-code-chrome">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="title">vesseliq sandbox attach · CLI</div>
              <span className="lang">bash</span>
            </div>
            <pre className="dev-code-block">
              <code>
                <span className="c-com">{"$ vesseliq sandbox attach"}</span>
                {"\n"}
                <span className="c-prop">
                  {"  → attached to VIQ-SANDBOX (Atlas-class, 87m)"}
                </span>
                {"\n"}
                <span className="c-prop">{"  → 47 systems online"}</span>
                {"\n"}
                <span className="c-prop">
                  {"  → telemetry: 12,400 events/s"}
                </span>
                {"\n\n"}
                <span className="c-com">
                  {"$ vesseliq stream tail \\\n    --hull SANDBOX \\\n    --system propulsion"}
                </span>
                {"\n\n"}
                <span className="c-num">14:22:08.124</span>
                {"  "}
                <span className="c-kw">MTU.12V2000.PORT</span>
                {"  rpm=1820 temp=68C\n"}
                <span className="c-num">14:22:08.124</span>
                {"  "}
                <span className="c-kw">MTU.12V2000.STBD</span>
                {"  rpm=1818 temp=67C\n"}
                <span className="c-num">14:22:08.184</span>
                {"  "}
                <span className="c-kw">MTU.12V2000.PORT</span>
                {"  rpm=1822 temp=68C\n"}
                <span className="c-num">14:22:08.184</span>
                {"  "}
                <span className="c-kw">MTU.12V2000.STBD</span>
                {"  rpm=1820 temp=67C\n"}
                <span className="c-com">{"                    ⋮ "}</span>
                <span className="blink" />
              </code>
            </pre>
          </Reveal>
        </div>
      </Section>

      {/* SCHEMA */}
      <Section
        id="schema"
        eyebrow="D · 02 · Schema"
        title={
          <>
            The vessel <span className="italic">as a contract.</span>
          </>
        }
        lead="OpenAPI 3.1 for the REST surface. AsyncAPI 2.6 for streaming. One schema package, signed, versioned. Generate clients for any language."
      >
        <Reveal className="dev-schema-table" delay={2}>
          <div className="dev-schema-row">
            <span className="idx">S · 01</span>
            <span className="key">Vessel</span>
            <span className="desc">
              The root object. Hull number, builder, length, current build
              state, owner, and the live registry of installed systems.
            </span>
          </div>
          <div className="dev-schema-row">
            <span className="idx">S · 02</span>
            <span className="key">System</span>
            <span className="desc">
              A named subsystem (propulsion, navigation, hvac, power…).
              References equipment installations and their telemetry streams.
            </span>
          </div>
          <div className="dev-schema-row">
            <span className="idx">S · 03</span>
            <span className="key">Equipment</span>
            <span className="desc">
              A specific piece of hardware on the hull. Linked to a
              manufacturer&rsquo;s published spec and to the Systems it participates
              in.
            </span>
          </div>
          <div className="dev-schema-row">
            <span className="idx">S · 04</span>
            <span className="key">Stream</span>
            <span className="desc">
              A typed real time channel, temperatures, pressures, GPS, AIS,
              alarms, with retention, schema, and access scopes.
            </span>
          </div>
          <div className="dev-schema-row">
            <span className="idx">S · 05</span>
            <span className="key">Event</span>
            <span className="desc">
              An immutable, signed entry on a Stream. Subscribers receive
              events with sub 200ms p50 latency.
            </span>
          </div>
          <div className="dev-schema-row">
            <span className="idx">S · 06</span>
            <span className="key">Job</span>
            <span className="desc">
              A unit of build, refit, or sea trial work. Belongs to a Vessel,
              owned by a yard, trackable from quote to signoff.
            </span>
          </div>
        </Reveal>
      </Section>

      {/* SDKs */}
      <Section
        id="sdks"
        eyebrow="D · 03 · SDKs"
        title={
          <>
            Four runtimes. <span className="italic">One contract.</span>
          </>
        }
        lead="Each SDK ships from the same schema. Same retry, idempotency, signing primitives, whichever runtime fits where your integration lives."
      >
        <Reveal className="dev-sdks" delay={2}>
          <div className="dev-sdk">
            <span className="dev-sdk-num">SDK · 01</span>
            <h3>Node</h3>
            <p className="pkg">
              <b>@vesseliq/sdk</b>
              <br />
              v2.4.1 · MIT
            </p>
          </div>
          <div className="dev-sdk">
            <span className="dev-sdk-num">SDK · 02</span>
            <h3>Python</h3>
            <p className="pkg">
              <b>vesseliq</b>
              <br />
              v2.4.1 · Apache-2.0
            </p>
          </div>
          <div className="dev-sdk">
            <span className="dev-sdk-num">SDK · 03</span>
            <h3>Swift</h3>
            <p className="pkg">
              <b>VesselIQ</b>
              <br />
              v2.4.0 · MIT
            </p>
          </div>
          <div className="dev-sdk">
            <span className="dev-sdk-num">SDK · 04</span>
            <h3>Rust</h3>
            <p className="pkg">
              <b>vesseliq-rs</b>
              <br />
              v2.4.1 · MIT / Apache
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SANDBOX */}
      <Section
        id="sandbox"
        eyebrow="D · 04 · Sandbox"
        title={
          <>
            A simulated <span className="italic">87 metre.</span>
          </>
        }
      >
        <div className="dev-sandbox-wrap">
          <Reveal className="dev-sandbox-text">
            <h3>VIQ-SANDBOX is a fully wired virtual hull.</h3>
            <p>
              Every developer account comes with it. Atlas class, 87m, 47
              systems online, telemetry at 12,400 events per second.
              Production schemas. Production latency. Build against it before
              you ship anything physical.
            </p>
            <span className="pill">Free · always on · 99.4% uptime</span>
          </Reveal>

          <Reveal className="dev-testimonial" delay={2}>
            <span className="dev-testimonial-eyebrow">From the field</span>
            <blockquote>
              &ldquo;We built a fleet app for a charter operator in{" "}
              <span className="accent">two weeks.</span> Without VesselIQ it
              would have been six months.&rdquo;
            </blockquote>
            <div className="dev-testimonial-attr">
              <span className="dev-testimonial-avatar">PN</span>
              <span className="dev-testimonial-meta">
                <span className="dev-testimonial-name">Priya Nair</span>
                <span className="dev-testimonial-title">
                  Lead Engineer, Helmwise
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="shell" id="cta">
        <div className="dev-cta-wrap">
          <div className="dev-cta-stamp">
            Sandbox
            <br />
            <span className="accent">always</span>
            <br />
            free
          </div>
          <div>
            <span className="eyebrow">D · 05 · Access</span>
            <h2 className="display display-xl">Get an API key.</h2>
            <p>
              Developer access is open today. Sandbox is free. Production keys
              are issued to verified integrations after a short review.
            </p>
          </div>
          <form className="dev-cta-form" action="#" method="post">
            <div className="dev-form-row">
              <span className="lbl">Name</span>
              <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="dev-form-row">
              <span className="lbl">Email</span>
              <input
                type="email"
                placeholder="dev@company.com"
                name="email"
              />
            </div>
            <div className="dev-form-row">
              <span className="lbl">Company</span>
              <input type="text" placeholder="Optional" name="company" />
            </div>
            <div className="dev-form-row">
              <span className="lbl">Use case</span>
              <select name="useCase" defaultValue="Hull management software">
                <option>Hull management software</option>
                <option>Fleet operations</option>
                <option>Equipment telemetry</option>
                <option>Crew app</option>
                <option>AI / research</option>
                <option>Personal</option>
              </select>
            </div>
            <button type="submit" className="dev-form-submit">
              <span>Get a sandbox key</span>
              <span className="arrow" />
            </button>
          </form>
        </div>
      </section>

    </>
  );
}

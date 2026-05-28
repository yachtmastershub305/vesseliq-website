import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Rail, type RailItem } from "@/components/layout/Rail";
import { Reveal } from "@/components/sections/Reveal";

export const metadata: Metadata = {
  title: "Brokers · VesselIQ",
  description:
    "Universal HIN search. Owner authorized unified vessel record. Telemetry backed listings and policies. Diligence in days, not weeks.",
};

const railItems: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "wins", label: "What you get" },
  { id: "record", label: "The record" },
  { id: "surveyor", label: "Surveyors" },
  { id: "cta", label: "Access" },
];

// Page specific styles. Brokers has a HIN lookup mockup in the hero, a four
// up wins grid, a record anatomy table, a surveyor copyright posture grid,
// and a two column dark CTA with a full request form. None of these primitives
// live in globals.css so they ride along here with the page.
const pageStyles = `
  /* HIN lookup UI mockup */
  .hin-mock{position:relative;width:100%;max-width:600px;margin:0 auto;perspective:1500px}
  .hin-inner{position:relative;transform-style:preserve-3d;transform:rotateX(8deg) rotateY(-12deg);animation:hinTilt 18s ease-in-out infinite}
  @keyframes hinTilt{0%,100%{transform:rotateX(8deg) rotateY(-12deg) translateY(0)}50%{transform:rotateX(10deg) rotateY(-10deg) translateY(-6px)}}

  .hin-search{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-xl);overflow:hidden}
  .hin-search-bar{padding:16px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:14px;background:linear-gradient(180deg,#fdfcf9 0%,transparent 100%)}
  .hin-search-bar .ico{width:18px;height:18px;color:var(--ink-3);flex-shrink:0}
  .hin-search-bar .ico svg{width:100%;height:100%;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round}
  .hin-search-bar .field{flex:1;font-family:var(--font-mono);font-size:13px;color:var(--ink);letter-spacing:0.04em}
  .hin-search-bar .field .typed{color:var(--ink)}
  .hin-search-bar .field .cursor{display:inline-block;width:2px;height:14px;background:var(--teal);vertical-align:middle;margin-left:1px;animation:blink 1.1s steps(2,start) infinite}
  @keyframes blink{to{visibility:hidden}}
  .hin-search-bar .tag{font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--teal);padding:4px 9px;background:var(--teal-soft);border-radius:999px}

  .hin-result-head{padding:18px 24px;border-bottom:1px solid var(--line-faint);display:flex;justify-content:space-between;align-items:flex-start;background:radial-gradient(ellipse at 0% 0%,var(--teal-soft) 0%,transparent 60%)}
  .hin-result-head .lbl{font-family:var(--font-mono);font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
  .hin-result-head h4{font-family:var(--font-sans);font-weight:500;font-size:22px;letter-spacing:-0.02em;color:var(--ink);margin-top:4px}
  .hin-result-head .sub{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;letter-spacing:0.06em}
  .hin-result-head .auth{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--teal);padding:6px 12px;background:var(--teal-soft);border:1px solid rgba(10,138,120,0.25);border-radius:999px;white-space:nowrap}
  .hin-result-head .auth::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 3px var(--teal-glow)}

  .hin-rows{padding:8px 24px 20px}
  .hin-row{display:grid;grid-template-columns:110px 1fr auto;gap:14px;padding:10px 0;border-top:1px solid var(--line-faint);font-family:var(--font-mono);font-size:11px;letter-spacing:0.02em;align-items:center}
  .hin-row:first-child{border-top:none}
  .hin-row .k{color:var(--ink-3);letter-spacing:0.12em;text-transform:uppercase;font-size:9.5px}
  .hin-row .v{color:var(--ink)}
  .hin-row .v b{font-weight:500}
  .hin-row .badge{font-family:var(--font-mono);font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:var(--teal);padding:3px 8px;border-radius:999px;background:var(--teal-soft)}

  .hin-footer{padding:14px 24px;background:var(--canvas);font-family:var(--font-mono);font-size:9.5px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-3);display:flex;justify-content:space-between;align-items:center}
  .hin-footer .live{color:var(--teal)}

  .pill3d{position:absolute;padding:9px 13px;background:#fff;border:1px solid var(--line);border-radius:999px;box-shadow:var(--shadow-lg);font-family:var(--font-mono);font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;display:inline-flex;align-items:center;gap:7px;color:var(--ink-2);transform-style:preserve-3d}
  .pill3d .dot{width:7px;height:7px;border-radius:50%;background:var(--teal)}
  .pill-a{left:-6%;top:8%;transform:translateZ(60px)}
  .pill-b{right:-4%;bottom:10%;transform:translateZ(60px)}

  @media (max-width:1000px){.hin-mock{max-width:520px}}

  /* WINS */
  .wins{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1400px;margin:0 auto}
  .win{padding:32px 28px 28px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-md);display:flex;flex-direction:column;gap:20px;transition:transform 0.4s var(--ease),box-shadow 0.4s var(--ease);position:relative;overflow:hidden}
  .win:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
  .win::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--teal) 0%,var(--teal-2) 100%);opacity:0.5}
  .win-icon{width:48px;height:48px;border-radius:12px;background:radial-gradient(circle at 30% 30%,#fff,var(--teal-soft) 70%,#b9ebdb 100%);box-shadow:inset 0 1px 0 #fff,inset 0 -6px 14px rgba(10,138,120,0.18),0 5px 12px -5px rgba(10,138,120,0.32);display:flex;align-items:center;justify-content:center;color:var(--teal)}
  .win-icon svg{width:24px;height:24px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
  .win-num{font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
  .win h3{font-family:var(--font-sans);font-size:19px;font-weight:500;letter-spacing:-0.02em;color:var(--ink);line-height:1.2;max-width:18ch}
  .win p{font-size:13.5px;line-height:1.55;color:var(--ink-2)}
  .win .stat{margin-top:auto;padding-top:16px;border-top:1px solid var(--line-faint);display:flex;justify-content:space-between;align-items:baseline;gap:10px}
  .win .stat .n{font-family:var(--font-mono);font-size:22px;letter-spacing:-0.03em;color:var(--ink);line-height:1}
  .win .stat .l{font-family:var(--font-mono);font-size:9.5px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-3);text-align:right;max-width:14ch;line-height:1.4}
  @media (max-width:1100px){.wins{grid-template-columns:repeat(2,1fr)}}
  @media (max-width:600px){.wins{grid-template-columns:1fr}}

  /* RECORD ANATOMY */
  .record-wrap{max-width:1300px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow-lg);overflow:hidden}
  .record-head{padding:24px 32px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;background:linear-gradient(180deg,#fdfcf9 0%,transparent 100%);font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--ink-3);gap:16px;flex-wrap:wrap}
  .record-head .accent{color:var(--teal)}
  .record-body{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}
  .record-cell{background:#fff;padding:32px 32px}
  .record-cell .idx{font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--teal)}
  .record-cell h4{font-family:var(--font-sans);font-size:22px;font-weight:500;letter-spacing:-0.02em;color:var(--ink);margin-top:10px}
  .record-cell p{font-size:14px;line-height:1.55;color:var(--ink-2);margin-top:10px}
  .record-cell .meta{margin-top:16px;font-family:var(--font-mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--ink-3)}
  .record-cell .meta b{color:var(--teal);font-weight:500}
  @media (max-width:800px){.record-body{grid-template-columns:1fr}}

  /* SURVEYOR */
  .surveyor{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:24px}
  .surveyor-tile{padding:36px 32px;background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-md);display:flex;flex-direction:column;gap:18px;transition:transform 0.4s var(--ease),box-shadow 0.4s var(--ease);position:relative;overflow:hidden}
  .surveyor-tile:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg)}
  .surveyor-tile::before{content:"";position:absolute;top:0;left:0;right:0;height:4px}
  .surveyor-tile.t-buyer::before{background:linear-gradient(90deg,var(--teal) 0%,var(--teal-2) 100%)}
  .surveyor-tile.t-surv::before{background:linear-gradient(90deg,var(--indigo) 0%,var(--blue) 100%)}
  .surveyor-tile .badge{display:inline-flex;align-self:flex-start;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;padding:6px 12px;border-radius:999px}
  .surveyor-tile.t-buyer .badge{color:var(--teal);background:var(--teal-soft)}
  .surveyor-tile.t-surv .badge{color:var(--indigo);background:var(--indigo-soft)}
  .surveyor-tile h3{font-family:var(--font-sans);font-size:24px;font-weight:500;letter-spacing:-0.02em;color:var(--ink);line-height:1.2}
  .surveyor-tile p{font-size:14.5px;line-height:1.55;color:var(--ink-2);max-width:38ch}
  .surveyor-tile .holds{margin-top:auto;padding-top:18px;border-top:1px solid var(--line-faint);font-family:var(--font-mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-3)}
  .surveyor-tile .holds b{color:var(--ink);font-weight:500}
  @media (max-width:900px){.surveyor{grid-template-columns:1fr}}

  /* CTA two column with full form */
  .cta-wrap{margin:80px auto 100px;max-width:1400px;border-radius:28px;background:radial-gradient(ellipse at 20% 0%,rgba(94,234,212,0.16) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(31,100,215,0.18) 0%,transparent 50%),linear-gradient(180deg,#0c1117 0%,#131a25 100%);color:#fff;padding:clamp(48px,6vw,80px) clamp(32px,5vw,72px);box-shadow:var(--shadow-xl);position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(40px,5vw,80px)}
  .cta-stamp{position:absolute;top:28px;right:32px;font-family:var(--font-mono);font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.15);padding:10px 16px;border-radius:10px;line-height:1.7;text-align:right}
  .cta-stamp .accent{color:var(--teal-2);font-size:16px;letter-spacing:0.04em}
  .cta-wrap .eyebrow{color:var(--teal-2)}
  .cta-wrap .eyebrow::before{background:var(--teal-2)}
  .cta-wrap h2{color:#fff;margin-top:24px}
  .cta-wrap p{color:rgba(255,255,255,0.7);margin-top:24px;max-width:44ch;font-size:clamp(16px,1.2vw,19px);line-height:1.5}
  .cta-wrap p a{color:var(--teal-2);border-bottom:1px solid rgba(94,234,212,0.4)}
  .cta-broker-form{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:4px;backdrop-filter:blur(8px);align-self:center}
  .cta-broker-form .form-row{display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:center;padding:12px 4px;border-bottom:1px solid rgba(255,255,255,0.08)}
  .cta-broker-form .form-row .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.55)}
  .cta-broker-form .form-row input,.cta-broker-form .form-row select{background:transparent;border:none;color:#fff;font-family:inherit;font-size:14px;outline:none;width:100%}
  .cta-broker-form .form-row input::placeholder{color:rgba(255,255,255,0.32)}
  .cta-broker-form .form-row select option{color:var(--ink)}
  .cta-broker-form .form-submit{margin-top:18px;padding:16px 22px;background:var(--teal-2);color:var(--ink);border-radius:999px;display:inline-flex;align-items:center;justify-content:space-between;gap:10px;font-weight:500;font-size:14px;transition:background 0.2s,transform 0.2s;border:none;cursor:pointer;font-family:inherit}
  .cta-broker-form .form-submit:hover{background:#fff;transform:translateY(-1px)}
  .cta-broker-form .form-submit .arrow{width:14px;height:1px;background:currentColor;position:relative}
  .cta-broker-form .form-submit .arrow::after{content:"";position:absolute;right:-1px;top:-3px;width:6px;height:6px;border-right:1.5px solid currentColor;border-top:1.5px solid currentColor;transform:rotate(45deg)}
  @media (max-width:1000px){.cta-wrap{grid-template-columns:1fr}.cta-stamp{position:static;align-self:flex-start;display:inline-block}}
`;

export default function BrokersPage() {
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
            <span className="accent">Brokers &amp; Surveyors</span>
          </>
        }
        headline={
          <>
            The HIN lookup
            <br />
            the industry has <span className="italic">been missing.</span>
          </>
        }
        tag={<>Universal search · owner authorized records · diligence in days</>}
        sub={
          <>
            One canonical record per hull. <b>Confirmed specs.</b> Service history,
            equipment manifest, surveyor reports, all owner authorized.{" "}
            <b>Telemetry devices</b> you can attach to a listing or a policy.
          </>
        }
        actions={[
          { href: "#cta", label: "Request access", variant: "primary" },
          { href: "#record", label: "See a record", variant: "ghost" },
        ]}
        visual={
          <div className="hin-mock" aria-hidden="true">
            <div className="hin-inner">
              <div className="hin-search">
                <div className="hin-search-bar">
                  <span className="ico">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M16 16l5 5" />
                    </svg>
                  </span>
                  <span className="field">
                    <span className="typed">NL-FCS-2024-018</span>
                    <span className="cursor"></span>
                  </span>
                  <span className="tag">HIN · live</span>
                </div>
                <div className="hin-result-head">
                  <div>
                    <span className="lbl">1 result · matched</span>
                    <h4>M/Y Atlas</h4>
                    <span className="sub">32m · Focus Motor Yachts · Hull 014</span>
                  </div>
                  <span className="auth">Owner authorized</span>
                </div>
                <div className="hin-rows">
                  <div className="hin-row">
                    <span className="k">HIN</span>
                    <span className="v">
                      <b>NL-FCS-2024-018</b>
                    </span>
                    <span className="badge">verified</span>
                  </div>
                  <div className="hin-row">
                    <span className="k">Builder</span>
                    <span className="v">Focus Motor Yachts</span>
                    <span className="badge">signed</span>
                  </div>
                  <div className="hin-row">
                    <span className="k">Engines</span>
                    <span className="v">2× MTU 12V 2000</span>
                    <span className="badge">live</span>
                  </div>
                  <div className="hin-row">
                    <span className="k">Hours</span>
                    <span className="v">
                      <b>1,247</b>
                    </span>
                    <span className="badge">streaming</span>
                  </div>
                  <div className="hin-row">
                    <span className="k">Last survey</span>
                    <span className="v">2026-03-14 · Burgess</span>
                    <span className="badge">on file</span>
                  </div>
                  <div className="hin-row">
                    <span className="k">Status</span>
                    <span className="v">
                      <b style={{ color: "var(--teal)" }}>● Active · Cap Ferrat</b>
                    </span>
                    <span className="badge">live</span>
                  </div>
                </div>
                <div className="hin-footer">
                  <span>847 signed events · 12 service entries</span>
                  <span className="live">● Diligence ready</span>
                </div>
              </div>
              <div className="pill3d pill-a">
                <span className="dot"></span> One source
              </div>
              <div className="pill3d pill-b">
                <span className="dot"></span> Owner authorized
              </div>
            </div>
          </div>
        }
      />

      {/* WINS */}
      <section className="section shell" id="wins">
        <div className="section-head">
          <Reveal as="div">
            <span className="eyebrow">Four tools you don&apos;t have today</span>
          </Reveal>
          <Reveal as="div" delay={1}>
            <h2 className="display display-l">
              Cleaner records. <span className="italic">Faster closes.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={2}>
            <p className="lead">
              Every boat on VesselIQ has one clean file. Brokers move faster.
              Surveyors keep their copyright. Buyers know what they&apos;re actually
              buying.
            </p>
          </Reveal>
        </div>

        <div className="wins">
          <Reveal as="article" className="win">
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M16 16l5 5" />
              </svg>
            </div>
            <span className="win-num">W · 01, Search</span>
            <h3>Universal HIN lookup. Single source.</h3>
            <p>
              Search any hull on the platform by HIN. Confirmed builder, spec,
              hours, last survey, current location. The lookup tool the industry
              has been describing for decades.
            </p>
            <div className="stat">
              <span className="n">142</span>
              <span className="l">Hulls indexed today</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={1}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 12l5 5L20 7" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <span className="win-num">W · 02, Spec</span>
            <h3>Spec confirmed. Not asserted.</h3>
            <p>
              Every equipment install signed by the installer. Every voyage
              logged. Every service event attributed. The &ldquo;as stated&rdquo;
              spec sheet finally has a verifiable counterpart.
            </p>
            <div className="stat">
              <span className="n">47</span>
              <span className="l">OEMs signing specs</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={2}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
            <span className="win-num">W · 03, Record</span>
            <h3>Unified record, owner authorized.</h3>
            <p>
              Pull the whole file with a single grant. From YMH or any management
              app the owner uses. Diligence drops from weeks to days. Buyer knows.
              Seller knows. You close.
            </p>
            <div className="stat">
              <span className="n">1</span>
              <span className="l">File per hull</span>
            </div>
          </Reveal>

          <Reveal as="article" className="win" delay={3}>
            <div className="win-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l2-6 4 12 2-6h6" />
              </svg>
            </div>
            <span className="win-num">W · 04, Telemetry</span>
            <h3>Devices &amp; app you can attach to any deal.</h3>
            <p>
              Hand the seller a telemetry box and the owner app as part of the
              listing. Real usage data, signed, ready for the next underwriter.
              Bring your own carrier, or use ours.
            </p>
            <div className="stat">
              <span className="n">
                118
                <span style={{ fontSize: "0.5em", color: "var(--teal)" }}>ms</span>
              </span>
              <span className="l">Boat to your dashboard</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CINEMATIC */}
      <section className="cine-plate">
        <div
          className="cine-img"
          style={{ backgroundImage: "url(/assets/yacht-red.jpg)" }}
          aria-hidden
        />
        <div className="cine-content">
          <Reveal as="div">
            <span className="eyebrow">A HIN. A history. A close.</span>
          </Reveal>
          <Reveal as="div">
            <h2>
              Diligence in days. <span className="italic">Not weeks.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={2}>
            <p>
              The boat is what its record says it is. Signed by the people who
              installed every system, attributed at every service event.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RECORD ANATOMY */}
      <section className="section shell" id="record">
        <div className="section-head">
          <Reveal as="div">
            <span className="eyebrow">B · 01, The record</span>
          </Reveal>
          <Reveal as="div" delay={1}>
            <h2 className="display display-l">
              One file. <span className="italic">Every signature.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={2}>
            <p className="lead">
              When a hull is on the platform, its full history is in one place.
              Each entry signed by the responsible party. Each entry verifiable.
            </p>
          </Reveal>
        </div>

        <Reveal as="div" className="record-wrap" delay={2}>
          <div className="record-head">
            <span>
              <span className="accent">Vessel record</span> · M/Y Atlas ·
              NL-FCS-2024-018
            </span>
            <span>Owner authorized · viewer: J. Burgess (broker)</span>
          </div>
          <div className="record-body">
            <div className="record-cell">
              <span className="idx">R · 01, Equipment manifest</span>
              <h4>Every system on the hull.</h4>
              <p>
                Maker, model, install date, signed by the installer. The hull is
                what it says it is, because the people who installed it said so.
              </p>
              <div className="meta">
                <b>47 installs</b> · 12 categories · all signed
              </div>
            </div>
            <div className="record-cell">
              <span className="idx">R · 02, Service history</span>
              <h4>Every event. Attributed. Survives owner changes.</h4>
              <p>
                Each service signed by the crew or yard that did it. Carries
                forward when the boat sells. No more &ldquo;ask the prior
                owner.&rdquo;
              </p>
              <div className="meta">
                <b>12 service entries</b> · 4 yards · since commissioning
              </div>
            </div>
            <div className="record-cell">
              <span className="idx">R · 03, Survey reports</span>
              <h4>Two layer ownership. Both respected.</h4>
              <p>
                Buyer holds use rights to the report they commissioned. Surveyor
                retains copyright. The record carries the link, not a stolen PDF.
              </p>
              <div className="meta">
                <b>2 surveys on file</b> · Lloyd&apos;s · Burgess
              </div>
            </div>
            <div className="record-cell">
              <span className="idx">R · 04, Closes</span>
              <h4>Diligence in hours, not weeks.</h4>
              <p>
                The data is already correct. Wire transfer day arrives without
                the usual two week scramble for service logs.
              </p>
              <div className="meta">
                <b>Median diligence:</b> 3 days vs 18
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SURVEYOR */}
      <section className="section shell" id="surveyor">
        <div className="section-head">
          <Reveal as="div">
            <span className="eyebrow">B · 02, Surveyor posture</span>
          </Reveal>
          <Reveal as="div" delay={1}>
            <h2 className="display display-l">
              Two layers. <span className="italic">Both respected.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={2}>
            <p className="lead">
              Surveyor reports follow a two layer ownership model. We do not
              flatten that distinction to make the data easier to move.
            </p>
          </Reveal>
        </div>

        <div className="surveyor">
          <Reveal as="div" className="surveyor-tile t-buyer">
            <span className="badge">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--teal)",
                }}
              ></span>{" "}
              Layer · 01 · Use rights
            </span>
            <h3>The buyer holds use rights to the report they commissioned.</h3>
            <p>
              They can reference it in negotiations, attach it to insurance, pull
              it into VesselIQ as part of their hull file. The report works for
              the deal it was paid for.
            </p>
            <div className="holds">
              Belongs to <b>the buyer</b>, as commissioner.
            </div>
          </Reveal>
          <Reveal as="div" className="surveyor-tile t-surv" delay={1}>
            <span className="badge">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--indigo)",
                }}
              ></span>{" "}
              Layer · 02 · Copyright
            </span>
            <h3>The surveyor retains copyright over the underlying work.</h3>
            <p>
              Their analysis, framing, and findings are their craft. We ingest
              the report only with owner authorization, and the surveyor&apos;s
              mark stays on it forever.
            </p>
            <div className="holds">
              Belongs to <b>the surveyor</b>, as author.
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="shell" id="cta">
        <div className="cta-wrap">
          <div className="cta-stamp">
            Cohorts of
            <br />
            <span className="accent">twelve</span>
            <br />
            onboarded / mo
          </div>
          <div>
            <span className="eyebrow">B · 03, Access</span>
            <h2 className="display display-xl">Request access.</h2>
            <p>
              Brokers, surveyors, and marine attorneys.{" "}
              <a href="/insurers">Carriers and MGAs have their own door →</a> If
              you touch hull records as part of your work, request access. We
              onboard in cohorts of twelve.
            </p>
          </div>
          <form className="cta-broker-form" action="#cta">
            <div className="form-row">
              <span className="lbl">Company</span>
              <input type="text" placeholder="Brokerage or firm" />
            </div>
            <div className="form-row">
              <span className="lbl">You</span>
              <input type="text" placeholder="Name & title" />
            </div>
            <div className="form-row">
              <span className="lbl">Email</span>
              <input type="email" placeholder="you@firm.com" />
            </div>
            <div className="form-row">
              <span className="lbl">Role</span>
              <select defaultValue="Broker">
                <option>Broker</option>
                <option>Surveyor</option>
                <option>Attorney</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="form-submit">
              <span>Request access</span>
              <span className="arrow"></span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

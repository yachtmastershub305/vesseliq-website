import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Pillars, type Pillar } from "@/components/sections/Pillars";
import { CinePlate } from "@/components/sections/CinePlate";
import { CtaForm } from "@/components/sections/CtaForm";
import { Reveal } from "@/components/sections/Reveal";
import { Rail, type RailItem } from "@/components/layout/Rail";

export const metadata: Metadata = {
  title: "About",
  description:
    "VesselIQ is the marine data layer of Yacht Masters Hub, Inc. Built by people who build boats.",
};

const railItems: RailItem[] = [
  { id: "hero", label: "Top" },
  { id: "origin", label: "Origin" },
  { id: "lineage", label: "Lineage" },
  { id: "values", label: "Commitments" },
  { id: "cta", label: "Contact" },
];

const values: Pillar[] = [
  {
    num: "V · 01 · Neutral",
    title: "We never compete with builders on top of us.",
    body: "The platform belongs to the industry, not to a single vendor. Ever.",
  },
  {
    num: "V · 02 · Authorized",
    title: "The record belongs to the owner.",
    body: "Never sold, never shared, never learned from without explicit consent.",
  },
  {
    num: "V · 03 · Marine native",
    title: "No general purpose cloud built this.",
    body: "Three years on the dock, two refits, and one anchor partner to start.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Rail items={railItems} />

      <Hero
        id="hero"
        crumb={
          <>
            <span>VesselIQ</span>
            <span style={{ color: "var(--ink-4)" }}>∕</span>
            <span className="accent">About</span>
          </>
        }
        headline={
          <>
            Built by people
            <br />
            who <span className="italic">build boats.</span>
          </>
        }
        tag={<>A Yacht Masters Hub company · platform live since 2025</>}
        sub={<>The marine data layer of YMH. Owner authorized. Neutral. Marine native.</>}
        visual={
          <div
            aria-hidden
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              width: "100%",
              maxWidth: "560px",
              margin: "0 auto",
              perspective: "1400px",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                transformStyle: "preserve-3d",
                transform: "rotateX(8deg) rotateY(-15deg) rotateZ(-1deg)",
              }}
            >
              {/* Bottom — corp stamp */}
              <div
                style={{
                  position: "absolute",
                  width: "78%",
                  height: "60%",
                  left: 0,
                  top: "24%",
                  transform: "translateZ(-60px)",
                  borderRadius: "22px",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-xl)",
                  overflow: "hidden",
                  background:
                    "radial-gradient(ellipse at 20% 20%, #fff7e8 0%, transparent 60%), linear-gradient(180deg, #f1efe8 0%, #e6e2d6 100%)",
                  padding: "26px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                  }}
                >
                  Yacht Masters Hub, Inc · Delaware
                </span>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--ink-3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "flex-end",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "24px",
                    color: "var(--ink-2)",
                    opacity: 0.6,
                    position: "relative",
                  }}
                >
                  YMH
                </div>
              </div>

              {/* Middle — YMH parent card */}
              <div
                style={{
                  position: "absolute",
                  width: "72%",
                  height: "36%",
                  left: "14%",
                  top: "32%",
                  transform: "translateZ(0)",
                  borderRadius: "22px",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-xl)",
                  overflow: "hidden",
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "linear-gradient(180deg, #ffffff 0%, #fbfaf6 100%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    Parent
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    Est. 2024
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "26px",
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Yacht Masters Hub
                </span>
                <div style={{ height: "1px", background: "var(--line)", margin: "4px 0" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    VesselIQ · data layer
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    Live 2025
                  </span>
                </div>
              </div>

              {/* Top — incorporation card */}
              <div
                style={{
                  position: "absolute",
                  width: "58%",
                  height: "38%",
                  right: 0,
                  top: "4%",
                  transform: "translateZ(80px) rotate(2deg)",
                  borderRadius: "22px",
                  boxShadow: "var(--shadow-xl)",
                  overflow: "hidden",
                  padding: "20px 22px",
                  background: "linear-gradient(180deg, #ffffff 0%, #f4f8f7 100%)",
                  border: "1px solid rgba(10,138,120,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                    }}
                  >
                    Incorporated
                  </span>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 0 6px var(--teal-glow)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: "12px",
                        height: "12px",
                        stroke: "white",
                        strokeWidth: 2.4,
                        fill: "none",
                      }}
                    >
                      <polyline points="4 12 10 18 20 6" />
                    </svg>
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--ink)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  Delaware General Corporation Law · §101
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    color: "var(--ink-3)",
                  }}
                >
                  <span>File</span>
                  <span style={{ color: "var(--ink)", letterSpacing: "0.06em" }}>
                    YMH·2024·0118
                  </span>
                </div>
              </div>

              {/* Floating pills */}
              <div
                style={{
                  position: "absolute",
                  left: "-4%",
                  top: "12%",
                  transform: "translateZ(120px)",
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
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--teal)",
                  }}
                />
                Owner authorized
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "-2%",
                  bottom: "8%",
                  transform: "translateZ(140px)",
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
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--teal)",
                  }}
                />
                Marine native
              </div>
            </div>
          </div>
        }
      />

      {/* ============ ORIGIN ============ */}
      <Section id="origin" eyebrow="Origin" title={<>YMH is where this starts.</>}>
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          <Reveal delay={1}>
            <p className="lead">
              YMH was founded to give owners one place to manage fleet, captains, and yards. The
              real problem sat one layer down. Every system on a boat speaks a different language.
              We built VesselIQ to fix that.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              {[
                { n: "2024", l: "YMH founded" },
                { n: "2025", l: "VesselIQ live" },
                { n: "142", l: "Hulls on platform" },
                { n: "47", l: "OEM partners" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    padding: "22px",
                    background: "var(--canvas-2)",
                    border: "1px solid var(--line-faint)",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(28px, 2.2vw, 38px)",
                      letterSpacing: "-0.03em",
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <aside
              style={{
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: "22px",
                boxShadow: "var(--shadow-lg)",
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "var(--teal-soft)",
                }}
              >
                Our north star
              </span>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 2vw, 30px)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                  textWrap: "balance",
                }}
              >
                &ldquo;One owner authorized record per hull. Every other thing we build is
                downstream of that idea.&rdquo;
              </p>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "var(--teal)",
                    borderRadius: "50%",
                  }}
                />
                VesselIQ founding charter · 2024
              </span>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* ============ LINEAGE ============ */}
      <Section id="lineage" className="lineage-section">
        <Reveal>
          <div
            style={{
              maxWidth: "1300px",
              margin: "0 auto",
              background: "white",
              border: "1px solid var(--line)",
              borderRadius: "22px",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {[
              {
                year: "2024 · Q1",
                title: "YMH founded",
                body: "Owner facing fleet management. Built on the dock with one anchor family office.",
              },
              {
                year: "2024 · Q4",
                title: "Data layer split out",
                body: "Every integration was being rebuilt. We extracted the canonical record and called it VesselIQ.",
              },
              {
                year: "2025 · Q2",
                title: "Platform opens",
                body: "Builders, OEMs, brokers, insurers join. YMH becomes the first tenant of its own layer.",
              },
            ].map((s, i, arr) => (
              <div
                key={s.title}
                style={{
                  padding: "36px 32px",
                  borderRight: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: "var(--teal)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.year}
                </span>
                <h5
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "20px",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                    marginTop: "4px",
                  }}
                >
                  {s.title}
                </h5>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                    marginTop: "6px",
                    maxWidth: "32ch",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ VALUES ============ */}
      <Section
        id="values"
        eyebrow="Three commitments"
        title={
          <>
            To <span className="italic">everyone</span> on the platform.
          </>
        }
      >
        <Pillars items={values} />
      </Section>

      {/* ============ CINEMATIC ============ */}
      <CinePlate
        image="/assets/yacht-red.jpg"
        eyebrow="Built by people who build boats."
        headline="On the dock. In the yard. On the bridge."
        body="Three years in marine work before a single line of platform code was written. The hardware came first. The data layer followed."
      />

      {/* ============ CTA ============ */}
      <CtaForm
        id="cta"
        eyebrow="Find us"
        headline="Tell us about your hull."
        body="Yard, manufacturer, developer, broker, or just curious. We read every message."
      />
    </>
  );
}

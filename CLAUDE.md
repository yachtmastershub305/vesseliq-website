# CLAUDE.md — vesseliq-website

Project context and standing rules for the VesselIQ marketing website. Claude Code reads this at the start of every session. Keep it short, true, and current.

## What this is

The public marketing website for vesseliq.com. A Next.js 15 App Router site pitching VesselIQ to B2B audiences (insurers, brokers, builders, manufacturers, developers). Built from a Claude Design handoff. This repo is marketing only. It does NOT contain the platform, the edge agent, or any customer data. Those live in separate repos (vesseliq-platform, vesseliq-edge, vesseliq).

## Stack

- Next.js 15, App Router, TypeScript
- Tailwind CSS
- next/font/google for fonts
- next/image for images
- Deployed on Vercel
- No database. No auth. This is a static marketing site. Forms post to HubSpot via the Forms API.

## Routes

One route per audience page. All prerendered as static content.

- `/` Platform landing (the hub)
- `/insurers` underwriting and claims pitch
- `/brokers` HIN lookup and canonical record pitch
- `/builders` post delivery telemetry pitch
- `/manufacturers` gear in the wild pitch
- `/developers` API and SDK pitch
- `/about` origin, lineage, values

## Component structure

- `components/layout/` Nav, Footer, NavMark, Orbs, Rail
- `components/sections/` Hero, Section, Pillars, CinePlate, CtaForm, Reveal
- `lib/hooks/` useReveal and any other client hooks
- `app/<route>/page.tsx` per page, server component with a metadata export
- Page local client islands live next to the page (e.g. app/manufacturers/CtaPartnerForm.tsx) when a section needs event handlers

The pattern that works: page is a server component so it can export const metadata. Anything interactive (forms, scroll reveal, parallax, drawer) is a client component or a page local client island. Do not put "use client" on a page that also exports metadata; extract the interactive part instead.

## Brand tokens

These live in app/globals.css as CSS variables. Preserve the original variable names for debuggability against the design source.

- Ink (primary text, dark): `#0c1117`
- Teal (primary accent): `#0a8a78`
- Canvas (warm background): `#f6f4ef`
- Paper (white surface): `#ffffff`
- Secondary ink: `var(--ink-2)`

Fonts:
- Instrument Sans, body and UI
- Instrument Serif, italic accents in display headlines
- JetBrains Mono, eyebrows, metadata, hashes, timestamps

## Writing rules (apply to all copy and all commits)

- Prefer commas, periods, colons, and spaces over dashes. No em dashes, no en dashes, no hyphens in compound modifiers anywhere in user facing copy. Exemptions: code identifiers, file paths, npm package names. The design source HTML uses em dashes throughout; replace each one rather than preserving it.
- US English spellings (color not colour, license not licence, optimize not optimise).
- Do not include Claude Code attribution in commits, code comments, PR descriptions, or page content.
- Keep marketing copy verbatim from the approved design source unless explicitly asked to change it. This design was iterated on by the founder. Implement, do not redesign. If you want to change something, leave it and flag it.

## Logo

The VesselIQ wordmark renders as inline SVG (see NavMark component). VESSEL in Instrument Sans, lowercase i in Instrument Serif italic, Q with a magnifying glass detail line. On light backgrounds use ink `#0c1117`. On dark backgrounds use white. There is also a raster logo at public/assets/vesseliq-logo.png for og images and favicons.

## Git workflow

- Work on feature branches, not directly on main
- Granular commits with clear messages, present tense, no attribution
- Open one PR per feature, squash merge, delete branch
- Build must pass (npm run build) before any merge. Fix build errors, never commit a broken build.

## Forms and lead capture

CTA forms post to HubSpot via the HubSpot Forms API (custom form UI, HubSpot backend, so the design stays intact). HubSpot portal id and form id are read from environment variables (NEXT_PUBLIC_HUBSPOT_PORTAL_ID, NEXT_PUBLIC_HUBSPOT_FORM_ID). Never hardcode these. The form should optimistically show a success state and post in the background. On failure, the form should still acknowledge the user but log the error.

## Known v1 gaps (do not treat as bugs unless asked)

- Hero 3D tilt oscillation animation on the Platform page is static (not animated)
- Parallax on cine plate frames is not implemented as a hook (ken burns IS active)
- Per page audience CSS is inlined via style blocks rather than fully lifted into shared CSS modules. A v2 refactor could consolidate. Acceptable for v1.

## What to do when uncertain

If something in the design is ambiguous, an asset is missing, or a token value is unclear, stop and ask rather than guessing. The founder prefers a clarifying question over a wrong implementation that has to be redone.

## Things this repo must never do

- Never import or reference platform code, customer data, or telemetry
- Never add analytics or tracking that conflicts with the privacy first message of the site without explicit approval
- Never deploy to production domains without the founder confirming the DNS cutover

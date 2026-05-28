import type { ReactNode } from "react";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

type HeroProps = {
  id?: string;
  crumb?: ReactNode;
  headline: ReactNode;
  sub?: ReactNode;
  tag?: ReactNode;
  actions?: HeroAction[];
  visual?: ReactNode;
};

// Two column hero. Left side is text, right side is a free form visual that
// callers supply (the two layer 3D stack on Platform, the cinematic plate
// on audience pages, etc).
export function Hero({ id = "hero", crumb, headline, sub, tag, actions, visual }: HeroProps) {
  return (
    <section className="hero" id={id}>
      <div>
        {crumb && <div className="hero-crumb">{crumb}</div>}
        <h1 className="display display-hero hero-headline">{headline}</h1>
        {tag && (
          <div className="hero-tag">
            <span className="dot" />
            {tag}
          </div>
        )}
        {sub && <p className="hero-sub">{sub}</p>}
        {actions && actions.length > 0 && (
          <div className="hero-ctas">
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                href={a.href}
                className={`btn ${a.variant === "ghost" ? "btn-ghost" : "btn-primary"}`}
              >
                {a.label} <span className="arrow" />
              </Link>
            ))}
          </div>
        )}
      </div>
      {visual && <div className="hero-3d">{visual}</div>}
    </section>
  );
}

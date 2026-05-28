"use client";

import { useEffect, useRef } from "react";

type CinePlateProps = {
  image: string;
  eyebrow?: string;
  headline: string;
  body?: string;
  id?: string;
};

// Cinematic plate with ken burns background, gradient scrim, and word level
// fade in for the headline. Headline words are split on whitespace and each
// gets a small stagger delay so the line reveals left to right.
export function CinePlate({ image, eyebrow, headline, body, id }: CinePlateProps) {
  const h2Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = h2Ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = headline.split(/\s+/);

  return (
    <section className="section" id={id}>
      <div className="cine-plate">
        <div className="cine-img" style={{ backgroundImage: `url(${image})` }} aria-hidden />
        <div className="cine-content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 ref={h2Ref}>
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className="word"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
          {body && <p>{body}</p>}
        </div>
      </div>
    </section>
  );
}

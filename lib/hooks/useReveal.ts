"use client";

import { useEffect, useRef } from "react";

// Adds .is-in to an element when it enters the viewport. Match source design
// timing: -10% bottom margin so the reveal fires slightly before fully
// visible, single shot (unobserve once it has been seen).
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

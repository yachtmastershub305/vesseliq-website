"use client";

import { useReveal } from "@/lib/hooks/useReveal";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: "div" | "section" | "header" | "article" | "li";
};

// Wrapper that fades a block in when it scrolls into view. Mirrors the
// .reveal pattern from the source HTML. Use delay=1..4 to stagger siblings.
export function Reveal({ children, className = "", delay, as: Tag = "div" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const classes = ["reveal", delay ? `delay-${delay}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    // The wrapper just adds the class; useReveal toggles .is-in on intersect.
    <Tag ref={ref as never} className={classes}>
      {children}
    </Tag>
  );
}

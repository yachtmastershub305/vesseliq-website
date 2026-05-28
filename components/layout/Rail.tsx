"use client";

import { useEffect, useState } from "react";

export type RailItem = { id: string; label: string };

type RailProps = {
  items: RailItem[];
};

// Vertical in page rail that highlights the section currently in view.
// Uses IntersectionObserver with 45% top / 50% bottom margin to match the
// source design timing. Hidden under 1100px via CSS.
export function Rail({ items }: RailProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="rail" aria-label="On this page">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-label={item.label}
          className={activeId === item.id ? "is-active" : ""}
          aria-label={item.label}
        />
      ))}
    </nav>
  );
}

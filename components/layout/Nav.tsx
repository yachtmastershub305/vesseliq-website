"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavMark } from "./NavMark";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Platform" },
  { href: "/builders", label: "Builders" },
  { href: "/manufacturers", label: "Manufacturers" },
  { href: "/developers", label: "Developers" },
  { href: "/brokers", label: "Brokers" },
  { href: "/insurers", label: "Insurers" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close the drawer on route change. Setting state during render is the
  // pattern the React 19 hooks rules want here, not an effect.
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <Link className="nav-brand" href="/" aria-label="VesselIQ home">
          <NavMark />
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <Link className="nav-cta" href="/#cta">
          Request access <span className="arrow" />
        </Link>
      </nav>
      <div ref={drawerRef} className={`nav-drawer${open ? " is-open" : ""}`} role="dialog" aria-label="Mobile menu">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            className={isActive(item.href) ? "is-active" : ""}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/#cta" onClick={() => setOpen(false)}>
          Request access <span className="arrow" />
        </Link>
      </div>
    </>
  );
}

type NavMarkProps = {
  variant?: "default" | "footer";
};

// The VesselIQ wordmark used in the nav and the footer. The gradient outline
// is used in the nav for color; the footer version uses a solid ink outline.
export function NavMark({ variant = "default" }: NavMarkProps) {
  const isFooter = variant === "footer";
  return (
    <svg className="nav-mark-svg" viewBox="0 0 220 56" fill="none" aria-label="VesselIQ">
      {!isFooter && (
        <defs>
          <linearGradient id="navMarkBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a8a78" />
            <stop offset="50%" stopColor="#1f64d7" />
            <stop offset="100%" stopColor="#3a3aa6" />
          </linearGradient>
        </defs>
      )}
      <rect
        x="1"
        y="1"
        width="218"
        height="54"
        rx="6"
        fill="transparent"
        stroke={isFooter ? "#0c1117" : "url(#navMarkBorder)"}
        strokeWidth="2"
      />
      <text
        x="110"
        y="36"
        fontFamily="Instrument Sans, sans-serif"
        fontSize="22"
        fontWeight="500"
        fill="#0c1117"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        VESSEL
        <tspan fontFamily="Instrument Serif, serif" fontStyle="italic" fontWeight="400">
          i
        </tspan>
        Q
      </text>
      <line
        x1="158"
        y1="36"
        x2="167"
        y2="46"
        stroke="#0c1117"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

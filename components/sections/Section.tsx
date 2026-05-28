import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
};

// Standard section wrapper. Title block goes on top, content fills below.
// Title and lead are optional so callers can use this just for the padding
// and id anchor.
export function Section({ id, eyebrow, title, lead, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      {(eyebrow || title || lead) && (
        <header className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="display display-l">{title}</h2>}
          {lead && <p className="lead">{lead}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

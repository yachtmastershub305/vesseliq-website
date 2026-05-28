import type { ReactNode } from "react";

export type Pillar = {
  num: string;
  title: ReactNode;
  body: ReactNode;
  tag?: ReactNode;
};

type PillarsProps = {
  items: Pillar[];
};

export function Pillars({ items }: PillarsProps) {
  return (
    <div className="pillars">
      {items.map((p, i) => (
        <article key={i} className="pillar">
          <span className="num">{p.num}</span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          {p.tag && <div className="tag">{p.tag}</div>}
        </article>
      ))}
    </div>
  );
}

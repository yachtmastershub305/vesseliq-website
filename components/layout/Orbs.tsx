// Ambient background orbs. Pure CSS, no client behavior. Rendered once in
// the root layout so all pages inherit the same ambient depth.
export function Orbs() {
  return (
    <>
      <div className="orb orb-1" aria-hidden />
      <div className="orb orb-2" aria-hidden />
      <div className="orb orb-3" aria-hidden />
      <div className="orb orb-4" aria-hidden />
    </>
  );
}

import Link from "next/link";
import { NavMark } from "./NavMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="nav-brand" href="/">
            <NavMark variant="footer" />
          </Link>
          <p className="brand-blurb">
            The marine intelligence layer of Yacht Masters Hub, Inc. Two cooperating layers, one platform.
          </p>
        </div>
        <div>
          <h4>Platform</h4>
          <ul>
            <li><Link href="/">Overview</Link></li>
            <li><Link href="/#layers">Two layers</Link></li>
            <li><Link href="/#primitives">Primitives</Link></li>
          </ul>
        </div>
        <div>
          <h4>Audiences</h4>
          <ul>
            <li><Link href="/builders">Builders</Link></li>
            <li><Link href="/manufacturers">Manufacturers</Link></li>
            <li><Link href="/developers">Developers</Link></li>
            <li><Link href="/brokers">Brokers</Link></li>
            <li><Link href="/insurers">Insurers</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#cta">Request access</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-foot">
        <span>© 2026 VesselIQ. Yacht Masters Hub, Inc. · Delaware.</span>
        <span><span style={{ color: "var(--teal-2)" }}>●</span> All systems nominal</span>
      </div>
    </footer>
  );
}

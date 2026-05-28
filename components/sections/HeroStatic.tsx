import Image from "next/image";

type HeroStaticProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  sub: string;
  imageSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Shared hero used by the home and every audience page.
// Full bleed yacht photo or video, navy gradient scrim, brand typography
// on top. One pattern, one look across the site.
//
// Pass either imageSrc or videoSrc. When videoSrc is set, the video plays
// muted, looped, and inline, with posterSrc shown until the first frame.
//
// The CSS lives in app/globals.css under the "Hero static" section so it
// can be edited site wide in one place.
export function HeroStatic({
  id,
  eyebrow,
  headline,
  sub,
  imageSrc,
  videoSrc,
  posterSrc,
  ctaLabel = "Request access",
  ctaHref = "mailto:jorge@yachtmastershub.com?subject=VesselIQ%20access",
}: HeroStaticProps) {
  return (
    <section id={id} className="hero-static">
      {videoSrc ? (
        <video
          className="hero-static-media"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      ) : null}
      <div className="hero-static-scrim" aria-hidden />
      <div className="hero-static-content shell">
        <span className="hero-static-eyebrow">{eyebrow}</span>
        <h1 className="display display-xl hero-static-headline">{headline}</h1>
        <p className="hero-static-sub">{sub}</p>
        <div className="hero-static-ctas">
          <a className="btn btn-primary-on-dark" href={ctaHref}>
            {ctaLabel} <span className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

/* As Seen On badge — PRNow embed, reimagined as an infinite marquee.
   The 7 outlet logos scroll continuously; pause on hover; reduced-motion
   users see a static row. Faithful to the PRNow embed (link + utm params +
   prp0ib8c class preserved), animated for life. */

const LOGOS: { src: string; alt: string }[] = [
  { src: "https://prnow.io/associated%20press%20logo.png", alt: "Associated Press" },
  { src: "https://prnow.io/usa%20today%20logo.png", alt: "USA Today" },
  { src: "https://prnow.io/yahoo%20finance%20logo.png", alt: "Yahoo Finance" },
  { src: "https://prnow.io/barchart%20logo.png", alt: "Barchart" },
  { src: "https://prnow.io/abc%20logo.png", alt: "ABC" },
  { src: "https://prnow.io/nbc%20logo.png", alt: "NBC" },
  { src: "https://prnow.io/cbs%20logo.png", alt: "CBS" },
];

export function AsSeenOn() {
  // Duplicate the logo set so the marquee loops seamlessly.
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="As seen on"
      className="relative overflow-hidden border-y border-line bg-bg py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <a
          href="https://prnow.io/?utm_source=asseenon&utm_medium=badge&utm_campaign=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="prp0ib8c group block"
          style={{
            textDecoration: "none",
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "28px 0",
              textAlign: "center",
              boxSizing: "border-box",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              className="prp0ib8c-h"
              style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "3px",
                color: "#2E81B5",
                textTransform: "uppercase",
                lineHeight: 1.2,
                margin: "0 0 20px",
                padding: "0 48px",
              }}
            >
              AS SEEN ON
            </div>

            {/* Marquee track — duplicated logos for seamless loop */}
            <div className="group-hover:[animation-play-state:paused] motion-reduce:animate-none animate-marquee flex w-max items-center gap-12 pr-12">
              {loop.map((logo, i) => (
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="shrink-0"
                  style={{
                    height: "32px",
                    maxWidth: "140px",
                    width: "auto",
                    objectFit: "contain",
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

/* As Seen On badge — PRNow embed.
   Faithful reproduction of the PRNow-provided snippet as a React component.
   Placed after the Hero section as a trust signal. */

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
  return (
    <section
      aria-label="As seen on"
      className="relative py-14 sm:py-16"
      style={{ backgroundColor: "#080914" }}
    >
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <a
          href="https://prnow.io/?utm_source=asseenon&utm_medium=badge&utm_campaign=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="prp0ib8c"
          style={{
            display: "inline-block",
            textDecoration: "none",
            maxWidth: "900px",
            width: "100%",
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "40px 48px",
              textAlign: "center",
              boxSizing: "border-box",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
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
              }}
            >
              AS SEEN ON
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "22px 32px",
                flexWrap: "wrap",
              }}
            >
              {LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
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

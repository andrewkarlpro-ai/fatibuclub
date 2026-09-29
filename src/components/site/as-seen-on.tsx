"use client";

/* As Seen On badge — PRNow dynamic image, scrolling as an infinite marquee.
   Two copies of the badge image sit side by side in a flex track that
   translates -50% over 40s, creating a seamless loop. Pause on hover.
   Reduced-motion users see a single static centered badge. */

const BADGE_URL =
  "https://prnow.io/api/badge?template=plate" +
  "&logos=ap%2Cusatoday%2Cyahoo%2Cbarchart%2Cbenzinga%2Cabc%2Cnbc%2Ccbs%2Cfox%2Cforbes%2Cwsj%2Cmarketwatch%2Cglobeandmail%2Cstreetinsider%2Cdigitaljournal" +
  "&ratio=compact&font=serif&header=AS+SEEN+ON" +
  "&bg=%23080914&fg=%23f5f3ee&accent=%23f4d77a&border=transparent&verified=1&variant=square";

export function AsSeenOn() {
  return (
    <section
      aria-label="As seen on"
      className="relative overflow-hidden border-y border-line bg-bg py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1320px]">
        <a
          href="https://prnow.io/?utm_source=asseenon&utm_medium=badge&utm_campaign=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* Marquee track — two badge copies for seamless loop.
              Each badge is ~550px wide; the track scrolls -50%. */}
          <div className="group-hover:[animation-play-state:paused] motion-reduce:animate-none animate-badge-marquee flex w-max items-center">
            {/* Using plain <img> (not next/image) — remote dynamic SVG
                from PRNow whose content is generated server-side. */}
            <img
              src={BADGE_URL}
              alt="As Seen On — Associated Press, USA Today, Yahoo Finance, Barchart, Benzinga, ABC, NBC, CBS, Fox, Forbes, WSJ, MarketWatch, Globe and Mail, StreetInsider, Digital Journal"
              className="shrink-0"
              style={{ width: "550px", maxWidth: "80vw", height: "auto" }}
              loading="lazy"
            />
            <img
              src={BADGE_URL}
              alt=""
              aria-hidden="true"
              className="shrink-0"
              style={{ width: "550px", maxWidth: "80vw", height: "auto" }}
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

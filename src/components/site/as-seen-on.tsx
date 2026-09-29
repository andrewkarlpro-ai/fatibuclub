"use client";

/* As Seen On badge — PRNow dynamic image badge with FatiBuClub brand colors.
   Uses PRNow's server-side rendered badge image (logos + styling baked in),
   so the shape, layout, and "verified" mark are all handled by PRNow.
   Brand colors: deep navy bg + cream/white fg, matching the site. */

export function AsSeenOn() {
  // PRNow dynamic badge URL with FatiBuClub brand palette.
  // bg = #080914 (site deep navy), fg = #f5f3ee (warm off-white),
  // accent = #f4d77a (brand cream), verified=1, square variant.
  const badgeUrl =
    "https://prnow.io/api/badge?template=plate" +
    "&logos=ap%2Cusatoday%2Cyahoo%2Cbarchart%2Cbenzinga%2Cabc%2Cnbc%2Ccbs%2Cfox%2Cforbes%2Cwsj%2Cmarketwatch%2Cglobeandmail%2Cstreetinsider%2Cdigitaljournal" +
    "&ratio=compact&font=serif&header=AS+SEEN+ON" +
    "&bg=%23080914&fg=%23f5f3ee&accent=%23f4d77a&border=transparent&verified=1&variant=square";

  return (
    <section
      aria-label="As seen on"
      className="relative overflow-hidden border-y border-line bg-bg py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <a
          href="https://prnow.io/?utm_source=asseenon&utm_medium=badge&utm_campaign=embed"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* Using a plain <img> (not next/image) because this is a remote
              dynamic SVG from PRNow whose dimensions/content we don't
              control at build time. */}
          <img
            src={badgeUrl}
            alt="As Seen On — Associated Press, USA Today, Yahoo Finance, Barchart, Benzinga, ABC, NBC, CBS, Fox, Forbes, WSJ, MarketWatch, Globe and Mail, StreetInsider, Digital Journal"
            className="mx-auto block h-auto w-full"
            style={{ maxWidth: "1100px" }}
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}

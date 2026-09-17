"use client";

import { Reveal, SectionNumber } from "./primitives";
import { EditorialImage, Atmosphere } from "./editorial-image";

export function Philosophy() {
  return (
    <section id="about" className="anchor relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <Atmosphere tint="amber" position="left" opacity={28} />
      {/* decorative animated divider at top */}
      <DividerLine />

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* LEFT — oversized number + title */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Our Foundation
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex items-start gap-5">
              <SectionNumber>01</SectionNumber>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-4 font-display font-medium text-ink display-tight text-[clamp(2.4rem,5.5vw,4.2rem)]">
              Our Philosophy
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Literature as a permanent cultural contribution — not a temporary
              commodity.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — editorial paragraph */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal delay={0.1}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-6 top-2 hidden font-display text-[120px] leading-none text-amber-400/30 lg:block"
              >
                &ldquo;
              </span>
              <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-light leading-[1.35] text-ink">
                <span className="text-gradient-ink font-medium">FatiBuClub</span>{" "}
                is built on an{" "}
                <em className="not-italic text-cream">interdisciplinary focus</em>{" "}
                that bridges the gap between literature, human progress, and
                community. We dedicate ourselves to scouting exceptional,
                independently published works that deserve a{" "}
                <em className="not-italic text-cream">legacy spotlight</em>. By
                introducing selected authors to a sophisticated network of deeply
                engaged thinkers, we foster{" "}
                <em className="not-italic text-cream">high-signal discourse</em>{" "}
                that treats literature not as a temporary commodity, but as a{" "}
                <em className="not-italic text-cream">
                  permanent cultural contribution
                </em>
                .
              </p>
            </div>
          </Reveal>

          {/* three principle pills */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Literature",
                "Human Progress",
                "Community",
                "Legacy Spotlight",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-[12px] font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Editorial image band — the literary archive */}
      <div className="mx-auto mt-16 max-w-[1320px] px-5 sm:px-8 lg:mt-20 lg:px-12">
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <EditorialImage
                src="/images/philosophy-library.jpg"
                alt="A dimly lit bookstore interior with sunlight streaming through a large window — the kind of overlooked place where meaningful literary work is found."
                ratio="aspect-[16/10] sm:aspect-[16/8]"
                tint="amber"
                overlay={55}
                label="The Archive"
              />
            </div>
            <div className="lg:col-span-4 lg:pl-4">
              <p className="text-[13px] uppercase tracking-[0.18em] text-amber-400/90">
                Overlooked places
              </p>
              <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">
                Uncovering meaningful ingredients in overlooked places.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                We scout the quiet shelves, the independent presses, the
                manuscripts that deserve a legacy spotlight.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Animated hairline divider that draws in */
export function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 ${className}`}>
      <Reveal y={0}>
        <div className="hairline w-full" />
      </Reveal>
    </div>
  );
}

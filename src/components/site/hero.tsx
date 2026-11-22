"use client";

import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { PhotoBanner } from "./background-image";

/* Hero — compact (pt-20 pb-6 on mobile). Bookshelf photo as a 100%-opacity
   clean rounded banner: below CTAs on mobile, beside text on desktop. */

const RIBBON_STATS: { value: string; label: string }[] = [
  { value: "1,240", label: "members" },
  { value: "450", label: "active readers" },
  { value: "150", label: "avg readers per book" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg pt-20 pb-6 sm:pt-24 sm:pb-8">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* LEFT — copy */}
          <div>
            <Reveal>
              <span className="eyebrow text-[11px]">
                FatiBuClub · Private Indie Reading Society · Est. 2018
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 font-display font-semibold text-ink tracking-tight text-[25px] leading-[1.18] sm:text-[clamp(1.75rem,4vw,2.875rem)] sm:leading-[1.12]">
                Thoughtful Readers for Independent Books Worth Talking About.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-2.5 max-w-md text-[13.5px] leading-[1.55] text-ink-body sm:text-[15px] sm:leading-[1.6]">
                We connect independent authors with small, attentive reading
                circles for genuine reading, lively group discussion, and honest
                Goodreads reviews.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <PillLink href="#contact" size="md">
                  Share Your Book With Us <ArrowNudge />
                </PillLink>
                <PillLink href="#how-it-works" variant="secondary" size="md">
                  See How It Works
                </PillLink>
              </div>
            </Reveal>

            {/* Slim stat ribbon */}
            <Reveal delay={0.22}>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-[10px] border border-sage bg-surface px-3.5 py-2.5 sm:gap-x-5">
                {RIBBON_STATS.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-1">
                    <span className="font-display text-[13px] font-bold text-brand tabular-nums sm:text-[14px]">{s.value}</span>
                    <span className="text-[11px] text-ink-body sm:text-[12px]">{s.label}</span>
                  </div>
                ))}
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[13px] font-bold text-brand tabular-nums sm:text-[14px]">Est. 2018</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — bookshelf photo as 100%-opacity clean banner */}
          <Reveal delay={0.15} y={18}>
            <PhotoBanner
              src="/images/bg-bookshelf.png"
              alt="A bright, sunlit wooden bookshelf filled with colorful books."
              className="h-44 sm:h-64 lg:h-80"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "./primitives";
import { DividerLine } from "./philosophy";

export function Committee() {
  return (
    <section
      id="committee"
      className="sec-committee anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />

      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[5%] top-1/3 h-[520px] w-[520px] aura-cream opacity-20"
      />

      <div className="mx-auto mt-20 grid max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* LEFT — giant stacked type */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="font-display text-sm font-medium text-cream tabular-nums">
                05
              </span>
              <span className="h-px w-10 bg-line-strong" />
              The Curators
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display font-medium text-ink display-tighter text-[clamp(2.5rem,7vw,6rem)]">
              The
              <br />
              Selection
              <br />
              <span className="text-gradient-cream italic">Committee</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              A dedicated team of literary specialists, academic minds, and
              cultural curators reviewing hundreds of independent titles
              annually.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — content panel + profile */}
        <div className="lg:col-span-6">
          <Reveal delay={0.08}>
            <div className="surface-card rounded-2xl p-8 sm:p-10">
              <p className="text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
                Our curation process is steered by{" "}
                <span className="text-ink">Prof. Waheed Heritage</span>, Selection
                Committee Chair, alongside a dedicated team of literary
                specialists, academic minds, and cultural curators. With deep
                roots in narrative structure and community building, the
                committee reviews hundreds of independent titles annually to
                discover the rare few that match our community&apos;s standard
                for{" "}
                <span className="text-cream">intellectual depth</span>.
              </p>
            </div>
          </Reveal>

          {/* Chair profile — real portrait */}
          <Reveal delay={0.14}>
            <div className="mt-5 flex items-center gap-5 rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-line-strong">
              <ChairPortrait />
              <div className="min-w-0">
                <p className="font-display text-lg font-medium text-ink">
                  Prof. Waheed Heritage
                </p>
                <p className="mt-0.5 text-[13px] text-cream">
                  Selection Committee Chair
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink-faint">
                  Narrative structure &amp; community building.
                </p>
              </div>
            </div>
          </Reveal>

          {/* committee composition pills */}
          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                "Literary Specialists",
                "Academic Minds",
                "Cultural Curators",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[12px] text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Real portrait of Prof. Waheed Heritage, Selection Committee Chair. */
function ChairPortrait() {
  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line-strong sm:h-24 sm:w-24">
      <Image
        src="/images/waheed-heritage.jpg"
        alt="Portrait of Prof. Waheed Heritage, Selection Committee Chair of FatiBuClub."
        fill
        sizes="96px"
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}

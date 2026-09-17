"use client";

import { Reveal } from "./primitives";
import { EditorialImage, Atmosphere } from "./editorial-image";
import { DividerLine } from "./philosophy";

export function HowWeOperate() {
  return (
    <section
      id="operate"
      className="anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />
      <Atmosphere tint="teal" position="left" opacity={24} />
      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-medium text-cream tabular-nums">
              06
            </span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Operating Principle</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-6 font-display font-medium text-ink display-tight text-[clamp(2.4rem,6vw,5rem)]">
            How We Operate
          </h2>
        </Reveal>

        {/* Statement panel with contrasting accent border */}
        <Reveal delay={0.12}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-line-strong bg-surface/40">
            {/* accent edge */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-400 via-cream to-accent" />
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-teal-500/30 blur-3xl rounded-full" />

            <div className="grid grid-cols-1 gap-10 p-8 pl-10 sm:p-12 sm:pl-14 lg:grid-cols-12 lg:gap-12 lg:p-16 lg:pl-20">
              {/* paragraph */}
              <div className="lg:col-span-8">
                <p className="font-display text-[clamp(1.35rem,2.4vw,2rem)] font-light leading-[1.4] text-ink">
                  <span className="text-cream">FatiBuClub</span> operates strictly
                  as an{" "}
                  <span className="text-cream">
                    independent private literary society
                  </span>{" "}
                  and <span className="text-cream">curated cultural hub</span>.
                  We are entirely transparent about our structure: our community
                  is built on <span className="text-cream">mutual respect</span>{" "}
                  and <span className="text-cream">intellectual rigor</span>, not
                  commercial &ldquo;pay-to-play&rdquo; marketing models. We fund
                  our massive distribution, community infrastructure, and
                  engagement programs through our private network, ensuring that
                  our selection criteria remain purely focused on{" "}
                  <span className="text-cream">literary merit</span> and{" "}
                  <span className="text-cream">narrative impact</span>.
                </p>
              </div>

              {/* side notes */}
              <div className="flex flex-col justify-between gap-6 lg:col-span-4">
                <div className="rounded-xl border border-line bg-bg/60 p-5">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    What we are not
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    Not a commercial &ldquo;pay-to-play&rdquo; marketing model.
                    Selection is driven by merit alone.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-bg/60 p-5">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    How we are funded
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    Through our private network — funding distribution,
                    community infrastructure, and engagement programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* vintage books — editorial visual */}
        <Reveal delay={0.12}>
          <div className="mt-5">
            <EditorialImage
              src="/images/operate-books.jpg"
              alt="A close-up stack of antique leather-bound books with gilded spines and faded text — the permanent cultural contributions the committee scouts for."
              ratio="aspect-[21/8]"
              tint="teal"
              overlay={50}
              label="The Archive"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

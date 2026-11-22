"use client";

import Image from "next/image";
import { Reveal, SectionHeader } from "./primitives";

/* Section 04 · Our Team — compact portrait, founder bio. */

export function Team() {
  return (
    <section id="team" className="anchor bg-bg-alt py-9 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          eyebrow="Who Runs the Club"
          title="Curated by Real Readers"
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-12 lg:items-center">
          {/* Portrait — compact (120px mobile, 180px desktop) */}
          <div className="flex justify-center lg:col-span-5">
            <Reveal>
              <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] overflow-hidden rounded-2xl border-2 border-sage shadow-[0_4px_16px_rgba(28,43,34,0.08)]">
                <Image
                  src="/images/waheed-heritage.jpg"
                  alt="Portrait of Prof. Waheed Heritage, Founder and Lead Curator of FatiBuClub"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 120px"
                />
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <h3 className="font-display text-[22px] sm:text-[28px] font-bold text-ink">
                Prof. Waheed Heritage
              </h3>
              <p className="text-brand text-[13px] font-semibold uppercase tracking-wide mt-1">
                Founder &amp; Lead Curator
              </p>
              <p className="text-[14px] sm:text-[15px] text-ink-body leading-[1.6] mt-3.5 max-w-xl">
                FatiBuClub is led by Prof. Waheed Heritage alongside volunteer
                readers who help screen submissions and host group discussions.
                Every book we consider is looked at by real people who care
                about story craft and honest conversation.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

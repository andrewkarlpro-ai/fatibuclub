"use client";

import Image from "next/image";
import { Reveal, SectionHeader } from "./primitives";

/* Section 04 · Our Team — compact founder layout.
   84px portrait beside name on mobile, bio below. */

export function Team() {
  return (
    <section id="team" className="anchor bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader index="04" eyebrow="Who Runs the Club" title="Curated by Real Readers" className="mb-4 sm:mb-6" />

        <Reveal delay={0.05}>
          {/* Mobile: portrait beside name/title, bio below */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
              <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-xl border border-sage object-cover shadow-sm sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                <Image
                  src="/images/waheed-heritage.jpg"
                  alt="Portrait of Prof. Waheed Heritage, Founder and Lead Curator of FatiBuClub"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 192px, 84px"
                />
              </div>
              <div className="sm:mt-1">
                <h3 className="font-display text-[16px] font-bold text-ink sm:text-[20px] lg:text-[22px]">Prof. Waheed Heritage</h3>
                <p className="text-brand text-[11px] font-semibold uppercase tracking-wide sm:text-[12px]">Founder &amp; Lead Curator</p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[13.5px] leading-[1.55] text-ink-body sm:text-[15px] sm:leading-[1.6] sm:max-w-xl">
                FatiBuClub is led by Prof. Waheed Heritage alongside volunteer readers who help screen submissions and host group discussions. Every book we consider is looked at by real people who care about story craft and honest conversation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

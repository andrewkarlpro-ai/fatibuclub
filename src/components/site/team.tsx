"use client";

import Image from "next/image";
import { Reveal, SectionHeader } from "./primitives";

/* Section 04 · Team — compact founder card. */

export function Team() {
  return (
    <section id="team" className="anchor bg-bg-alt py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-3.5 sm:px-6">
        <SectionHeader index="04" eyebrow="Who Runs the Club" title="Curated by Real Readers" className="mb-6" />

        <Reveal delay={0.05}>
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <div className="relative w-16 h-16 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-sage">
              <Image
                src="/images/waheed-heritage.jpg"
                alt="Portrait of Waheed Heritage, Founder and Lead Curator of FatiBuClub"
                fill
                className="object-cover object-top"
                sizes="(min-width: 640px) 112px, 80px"
              />
            </div>

            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink">Waheed Heritage</h3>
              <p className="text-brand text-xs font-semibold uppercase tracking-wide mt-0.5">Founder &amp; Lead Curator</p>
              <p className="mt-3 text-[13px] text-ink-body leading-relaxed max-w-xl sm:text-sm">
                FatiBuClub is led by Waheed Heritage alongside volunteer readers who help screen submissions and host group discussions. Every book we consider is looked at by real people who care about story craft and honest conversation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

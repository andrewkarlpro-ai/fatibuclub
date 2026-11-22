"use client";

import Image from "next/image";
import { Reveal, SectionHeader } from "./primitives";

export function Team() {
  return (
    <section id="team" className="anchor bg-bg-alt py-12 sm:py-16 md:py-18">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          index="04"
          eyebrow="Who Runs the Club"
          title="Curated by Real Readers"
          className="mb-8 sm:mb-10"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left — portrait */}
          <div className="flex justify-center lg:col-span-5">
            <Reveal>
              <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] overflow-hidden rounded-2xl border-2 border-sage shadow-[0_4px_16px_rgba(28,43,34,0.08)]">
                <Image
                  src="/images/waheed-heritage.jpg"
                  alt="Portrait of Prof. Waheed Heritage, Founder and Lead Curator of FatiBuClub"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 140px"
                />
              </div>
            </Reveal>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Prof. Waheed Heritage
              </h3>
              <p className="text-brand text-[14px] font-semibold uppercase tracking-wide mt-1">
                Founder &amp; Lead Curator
              </p>
              <p className="text-[15px] sm:text-base text-ink-body leading-[1.7] mt-4 max-w-xl">
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

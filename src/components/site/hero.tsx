"use client";

import Image from "next/image";
import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";

const RIBBON_STATS: { value: string; label: string }[] = [
  { value: "1,240", label: "Community Members" },
  { value: "450", label: "Active Readers" },
  { value: "150", label: "Avg Readers Per Book" },
  { value: "Est. 2018", label: "Since 2018" },
];

export function Hero() {
  return (
    <section id="top" className="bg-bg pt-20 pb-8 sm:pt-24 sm:pb-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          {/* LEFT — copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                FatiBuClub · Private Indie Reading Society · Est. 2018
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 font-display font-bold text-ink tracking-tight text-2xl leading-tight sm:text-4xl">
                Thoughtful Readers for Independent Books Worth Talking About.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-body sm:text-base">
                We connect independent authors with small, attentive reading
                circles for genuine reading, lively group discussion, and honest
                Goodreads reviews.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 flex flex-wrap gap-3">
                <PillLink href="#contact">
                  Share Your Book With Us <ArrowNudge />
                </PillLink>
                <PillLink href="#how-it-works" variant="secondary">
                  See How It Works
                </PillLink>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — bookshelf photo */}
          <Reveal delay={0.15}>
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-sage sm:h-72">
              <Image
                src="/images/bg-bookshelf.png"
                alt="A bright, sunlit wooden bookshelf filled with colorful books."
                fill
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>

        {/* Stat ribbon */}
        <Reveal delay={0.22}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {RIBBON_STATS.map((s) => (
              <div key={s.label} className="card-surface p-3 text-center">
                <p className="font-display text-lg font-bold text-brand tabular-nums">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs text-ink-body">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

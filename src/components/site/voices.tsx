"use client";

import { Reveal } from "./primitives";
import { DividerLine } from "./philosophy";

const VOICES = [
  {
    category: "Author Perspective",
    quote:
      "The depth of discussion generated around my book was staggering. FatiBuClub didn't just give me readers; they gave my work a legacy, treating the text with a level of consideration that is incredibly rare in the modern publishing landscape.",
    attribution: "Residency Alumnus",
    accent: "cream",
  },
  {
    category: "Reader Perspective",
    quote:
      "In a sea of surface-level internet commentary, this salon is a sanctuary. The discussions are consistently high-signal, challenging, and deeply rewarding.",
    attribution: "Core Salon Member",
    accent: "accent",
  },
];

export function Voices() {
  return (
    <section
      id="voices"
      className="anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />
      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-medium text-cream tabular-nums">
                  07
                </span>
                <span className="h-px w-10 bg-line-strong" />
                <span className="eyebrow">From the Hub</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display font-medium text-ink display-tight text-[clamp(2.4rem,6vw,4.5rem)]">
                Voices From the Hub
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-[14px] leading-relaxed text-ink-muted">
              First-hand reflections from authors and readers inside the
              residency.
            </p>
          </Reveal>
        </div>

        {/* Editorial wall — asymmetric */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {VOICES.map((v, i) => (
            <Reveal
              key={v.category}
              delay={i * 0.1}
              className={
                i === 0
                  ? "lg:col-span-7"
                  : "lg:col-span-5 lg:mt-16"
              }
            >
              <VoiceCard voice={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VoiceCard({
  voice,
}: {
  voice: (typeof VOICES)[number];
}) {
  const isCream = voice.accent === "cream";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:bg-surface sm:p-10">
      {/* giant quotation mark graphic */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-1 -top-10 font-display text-[170px] leading-none transition-opacity duration-500 group-hover:opacity-100 ${
          isCream ? "text-cream/20" : "text-accent/25"
        }`}
      >
        &rdquo;
      </span>

      <div className="relative">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${
            isCream
              ? "border-cream/30 text-cream"
              : "border-accent/30 text-accent-soft"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isCream ? "bg-cream" : "bg-accent"
            }`}
          />
          {voice.category}
        </span>
      </div>

      <blockquote className="relative mt-7 flex-1">
        <p className="font-display text-[clamp(1.25rem,2.2vw,1.85rem)] font-light leading-[1.4] text-ink">
          &ldquo;{voice.quote}&rdquo;
        </p>
      </blockquote>

      <div className="relative mt-8 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-bg font-display text-[11px] font-semibold text-ink-muted">
          {voice.attribution
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
        <span className="text-[14px] text-ink-muted">
          — {voice.attribution}
        </span>
      </div>
    </article>
  );
}

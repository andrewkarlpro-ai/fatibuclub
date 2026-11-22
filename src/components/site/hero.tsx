"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, PillLink, ArrowNudge } from "./ui-atoms";
import { Reveal } from "./primitives";

/* ============================================================
   Hero — bright, airy, welcoming. Light bg only.
   No background images, no dark theme, no avatars.
   Left = copy. Right = compact floating stats card.
   ============================================================ */

const CIRCLE_STATS: { value: string; label: string }[] = [
  { value: "240", label: "Community Members" },
  { value: "65", label: "Active Readers" },
  { value: "25", label: "Avg Readers Per Book" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="bg-bg relative overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      {/* soft ambient sage glow — keeps the section bright, not flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[12%] -top-[10%] h-[460px] w-[460px] rounded-full bg-sage/70 blur-3xl" />
        <div className="absolute -left-[10%] bottom-[6%] h-[360px] w-[360px] rounded-full bg-bg-alt blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — copy */}
          <div className="flex flex-col">
            <Reveal>
              <span className="eyebrow">
                FatiBuClub · Private Indie Reading Society
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display font-semibold text-ink tracking-tight text-[28px] leading-[1.15] sm:text-[clamp(1.75rem,4vw,3rem)] sm:leading-[1.12]">
                Thoughtful Readers for Independent Books Worth Talking About.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.6] text-ink-body sm:text-base">
                We connect independent authors with small, attentive reading
                circles for genuine reading, lively group discussion, and honest
                Goodreads reviews.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PillLink href="#contact" size="lg">
                  Share Your Book With Us
                  <ArrowNudge />
                </PillLink>
                <PillLink href="#how-it-works" variant="secondary" size="lg">
                  See How It Works
                </PillLink>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — compact floating stats card */}
          <Reveal delay={0.18} y={28}>
            <div className={cn(!reduce && "animate-float")}>
              <Card className="card-surface rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-ink text-lg font-semibold">
                    2026 Reading Circles
                  </h3>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand pulse-dot"
                  />
                </div>

                <div className="mt-5 flex flex-col divide-y divide-[var(--color-sage-border)]">
                  {CIRCLE_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="font-display text-2xl font-bold text-brand tabular-nums">
                        {s.value}
                      </span>
                      <span className="text-sm text-ink-body text-right">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-[var(--color-sage-border)] pt-4">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  <span className="text-xs text-ink-faint">
                    Small circles. Real conversations.
                  </span>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

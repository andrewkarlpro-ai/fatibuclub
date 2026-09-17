"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { Reveal } from "./primitives";

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // depth layers move differently
  const t1x = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const t1y = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const t2x = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const t2y = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const t3x = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="sec-hero grain relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      {/* background atmospherics */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] top-[5%] h-[620px] w-[620px] aura-accent opacity-60" />
        <div className="absolute -left-[8%] bottom-[8%] h-[420px] w-[420px] aura-cream opacity-30" />
        <div className="absolute inset-0 bg-dots opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        {/* oversized faded type */}
        <motion.span
          aria-hidden
          style={{ x: t3x }}
          className="absolute -right-6 top-[18%] hidden font-display text-[28vw] font-bold leading-none text-white/[0.025] sm:block"
        >
          FBC
        </motion.span>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* LEFT — copy */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cream pulse-dot" />
              <span className="eyebrow !text-[11px] text-ink">FatiBuClub</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-[15px] font-medium text-cream sm:text-base">
              A Private Literary Society &amp; Managed Reader Experience
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-5 font-display font-medium text-ink display-tight text-[clamp(2.6rem,7vw,6rem)]">
              Where Intellectual
              <br className="hidden sm:block" /> Curiosity Meets
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-cream italic">Companionable</span>{" "}
              <span className="text-gradient-cream italic">Consideration.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
              Uncovering meaningful ingredients in overlooked places. We connect
              brilliant independent authors with an elite global reading
              community for a structured, year-long journey of deep literary
              engagement.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PillLink href="#contact" size="lg">
                Connect With the Selection Committee
                <ArrowNudge />
              </PillLink>
              <PillLink href="#experience" variant="secondary" size="lg">
                Explore the Experience
              </PillLink>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — layered editorial visual */}
        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[540px]">
            {/* card 1 — selection cycle */}
            <motion.div
              style={reduce ? undefined : { x: t1x, y: t1y }}
              className="absolute left-1/2 top-1/2 w-[78%] -translate-x-[58%] -translate-y-[52%] animate-float"
            >
              <EditorialCard
                eyebrow="Selection Cycle"
                title="2025 Annual Residency"
                meta="15 standout authors"
                accent="cream"
              />
            </motion.div>

            {/* card 2 — stat fragment */}
            <motion.div
              style={reduce ? undefined : { x: t2x, y: t2y }}
              className="absolute right-0 top-2 w-[58%] animate-float-slow"
            >
              <MiniStatCard
                value="150+"
                label="High-quality review clusters"
              />
            </motion.div>

            {/* card 3 — 12 month chip */}
            <motion.div
              style={reduce ? undefined : { x: t2x, y: t2y }}
              className="absolute bottom-0 left-0 w-[62%] animate-float"
            >
              <ChipCard
                kicker="12 Months"
                title="Managed Reader Experience"
              />
            </motion.div>

            {/* vertical rail label */}
            <div
              aria-hidden
              className="absolute -left-3 top-1/2 hidden -translate-y-1/2 -rotate-90 sm:block"
            >
              <span className="eyebrow !text-[10px] text-ink-faint">
                Private · Literary · Society
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="eyebrow !text-[10px] text-ink-faint">Scroll</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-line-strong p-1">
          <span className="h-1.5 w-1 rounded-full bg-cream animate-scroll-cue" />
        </span>
      </div>
    </section>
  );
}

/* ---- hero sub-cards ---- */
function EditorialCard({
  eyebrow,
  title,
  meta,
  accent,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  accent: "cream" | "accent";
}) {
  return (
    <div className="surface-raised rounded-2xl p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between">
        <span className="eyebrow !text-[10px]">{eyebrow}</span>
        <span
          className={
            accent === "cream"
              ? "h-1.5 w-1.5 rounded-full bg-cream"
              : "h-1.5 w-1.5 rounded-full bg-accent"
          }
        />
      </div>
      <p className="mt-6 font-display text-xl font-medium leading-tight text-ink">
        {title}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-[12px] text-ink-muted">{meta}</span>
        <div className="flex -space-x-2">
          {["/images/av1.jpg", "/images/av2.jpg", "/images/av3.jpg"].map(
            (src, i) => (
              <span
                key={src}
                className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-raised bg-raised"
                style={{ zIndex: 3 - i }}
              >
                <Image
                  src={src}
                  alt={`Selection committee member ${i + 1}`}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MiniStatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line-strong bg-bg/80 p-4 backdrop-blur-md">
      <p className="font-display text-3xl font-semibold text-gradient-cream">
        {value}
      </p>
      <p className="mt-1 text-[11px] leading-snug text-ink-muted">{label}</p>
    </div>
  );
}

function ChipCard({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-bg/80 p-3.5 backdrop-blur-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 font-display text-sm font-semibold text-accent-soft">
        12
      </span>
      <div>
        <p className="font-display text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          {kicker}
        </p>
        <p className="text-[13px] font-medium leading-tight text-ink">{title}</p>
      </div>
    </div>
  );
}

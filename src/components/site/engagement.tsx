"use client";

import { Reveal } from "./primitives";
import { DividerLine } from "./philosophy";

export function Engagement() {
  return (
    <section className="sec-engagement relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <DividerLine />
      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-medium text-cream tabular-nums">
            04
          </span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="eyebrow">Review Velocity</span>
        </div>

        {/* Huge typographic statement */}
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display font-medium text-ink display-tighter text-[clamp(3rem,12vw,10rem)]">
            High-Signal
            <br />
            <span className="text-gradient-cream italic">Engagement</span>
          </h2>
        </Reveal>

        {/* content grid — paragraph + 150 panel */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="surface-card rounded-2xl p-8 sm:p-10 lg:col-span-7 lg:p-12" delay={0.05}>
            <p className="max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
              Our community thrives on rigorous, authentic feedback. Through our
              private channels and active social salons, we generate consistent,
              analytical commentary that reflects the true depth of your work.
              This structured engagement naturally translates to a benchmark of{" "}
              <span className="text-cream">150+ high-quality review clusters</span>{" "}
              on major reading platforms, proving that when the right minds meet
              the right text, impact is inevitable.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Private Channels",
                "Social Salons",
                "Analytical Commentary",
                "Authentic Feedback",
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

          {/* 150+ with network */}
          <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-bg/40 p-8 sm:p-10 lg:col-span-5 lg:p-12" delay={0.12}>
            <NetworkBackdrop />
            <div className="relative flex h-full flex-col justify-between">
              <span className="eyebrow">Benchmark</span>
              <div>
                <div className="flex items-baseline">
                  <span className="font-display text-[clamp(5rem,14vw,9rem)] font-semibold leading-none text-gradient-cream">
                    150
                  </span>
                  <span className="ml-1 font-display text-5xl font-semibold text-cream">
                    +
                  </span>
                </div>
                <p className="mt-4 max-w-[15rem] font-display text-base font-medium text-ink">
                  High-quality review clusters
                </p>
                <p className="mt-2 text-[13px] text-ink-muted">
                  Across major reading platforms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NetworkBackdrop() {
  // a constellation of nodes + faint connections
  const nodes = [
    [12, 20], [28, 55], [42, 18], [55, 48], [70, 25], [85, 60],
    [18, 80], [38, 88], [62, 78], [80, 35], [50, 70], [92, 18],
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 3], [2, 4], [3, 5], [1, 6], [6, 7], [3, 8], [4, 9],
    [7, 10], [9, 11], [0, 2], [8, 10], [2, 4], [5, 11],
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full opacity-50"
    >
      <defs>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(99,91,255,0.5)" />
          <stop offset="100%" stopColor="rgba(244,215,122,0.25)" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#edge-grad)"
          strokeWidth="0.25"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 0.9 : 0.5}
          fill={i % 4 === 0 ? "#f4d77a" : "#8b85ff"}
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${2.4 + (i % 5) * 0.5}s`}
            repeatCount="indefinite"
            begin={`${i * 0.3}s`}
          />
        </circle>
      ))}
    </svg>
  );
}

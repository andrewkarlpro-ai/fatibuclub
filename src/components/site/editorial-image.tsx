"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

type Tint = "purple" | "cream" | "amber" | "teal" | "rose";

const TINT_MAP: Record<Tint, string> = {
  purple: "from-accent/35",
  cream: "from-cream/25",
  amber: "from-amber-500/30",
  teal: "from-teal-500/25",
  rose: "from-rose-500/25",
};

type EditorialImageProps = {
  src: string;
  alt: string;
  /** aspect ratio class, e.g. "aspect-[4/3]" */
  ratio?: string;
  /** color tint for the aura + overlay gradient */
  tint?: Tint;
  /** overlay strength 0-100 */
  overlay?: number;
  /** priority load (above the fold) */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** show caption label in corner */
  label?: string;
};

export function EditorialImage({
  src,
  alt,
  ratio = "aspect-[4/3]",
  tint = "purple",
  overlay = 60,
  priority = false,
  className,
  imgClassName,
  label,
}: EditorialImageProps) {
  return (
    <Reveal
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line",
        ratio,
        className
      )}
      y={20}
    >
      {/* aura behind */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-6 bg-gradient-to-br opacity-40 blur-2xl",
          `${TINT_MAP[tint]} to-transparent`
        )}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105",
          imgClassName
        )}
      />
      {/* dark gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"
        style={{ opacity: overlay / 100 }}
      />
      {/* tint wash */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-30 mix-blend-soft-light",
          `${TINT_MAP[tint]} to-transparent`
        )}
      />
      {/* grain */}
      <div aria-hidden className="grain absolute inset-0 opacity-[0.04]" />

      {label && (
        <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink-muted backdrop-blur-sm">
          <span className={cn("h-1.5 w-1.5 rounded-full", tintDot(tint))} />
          {label}
        </span>
      )}
    </Reveal>
  );
}

function tintDot(tint: Tint) {
  switch (tint) {
    case "purple":
      return "bg-accent";
    case "cream":
      return "bg-cream";
    case "amber":
      return "bg-amber-400";
    case "teal":
      return "bg-teal-400";
    case "rose":
      return "bg-rose-400";
  }
}

/* Radial aura blob used as a section atmosphere */
export function Atmosphere({
  tint = "purple",
  className,
  position = "right",
  opacity = 40,
}: {
  tint?: Tint;
  className?: string;
  position?: "left" | "right" | "center";
  opacity?: number;
}) {
  const pos =
    position === "left"
      ? "-left-[10%]"
      : position === "center"
      ? "left-1/2 -translate-x-1/2"
      : "-right-[10%]";
  const color = tintColor(tint);
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute top-1/3 h-[520px] w-[520px] rounded-full blur-3xl", pos, className)}
      style={{
        background: `radial-gradient(closest-side, ${color}, transparent 70%)`,
        opacity: opacity / 100,
      }}
    />
  );
}

function tintColor(tint: Tint) {
  switch (tint) {
    case "purple":
      return "rgba(99,91,255,0.55)";
    case "cream":
      return "rgba(244,215,122,0.45)";
    case "amber":
      return "rgba(245,158,11,0.4)";
    case "teal":
      return "rgba(45,212,191,0.4)";
    case "rose":
      return "rgba(244,114,182,0.4)";
  }
}

"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Tint = "purple" | "cream" | "amber" | "teal" | "rose";

const TINT_RGBA: Record<Tint, string> = {
  purple: "rgba(99,91,255,0.22)",
  cream: "rgba(244,215,122,0.18)",
  amber: "rgba(245,158,11,0.18)",
  teal: "rgba(45,212,191,0.18)",
  rose: "rgba(244,114,182,0.16)",
};

/* Atmospheric background image — sits behind a section's content as a
   fixed/parallax layer. Heavy dark overlay keeps text readable while
   letting the image texture breathe through. Designer's instinct, not
   a stock-photo sticker. */
export function BackgroundImage({
  src,
  alt,
  tint = "purple",
  overlay = 78,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  tint?: Tint;
  overlay?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* The image — fixed attachment for a subtle parallax feel */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
        style={{ objectPosition: "center" }}
      />
      {/* Dark overlay — keeps text readable */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(8,9,20,${overlay / 100})` }}
      />
      {/* Bottom fade into the section below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080914] to-transparent" />
      {/* Color tint wash */}
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{ backgroundColor: TINT_RGBA[tint] }}
      />
      {/* Grain */}
      <div className="grain absolute inset-0 opacity-[0.06]" />
    </div>
  );
}

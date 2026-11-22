"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tint = "green" | "yellow" | "warm" | "cream";

const TINT_RGBA: Record<Tint, string> = {
  green: "rgba(46, 125, 82, 0.12)",
  yellow: "rgba(252, 211, 77, 0.15)",
  warm: "rgba(244, 215, 122, 0.14)",
  cream: "rgba(230, 242, 234, 0.2)",
};

/* Atmospheric background image for light sections — sits behind content
   with a bright overlay (so text stays readable on a LIGHT surface),
   subtle parallax on scroll, and a gentle color tint. Designer's instinct:
   atmosphere where it earns its place, text always on a clean bright surface. */
export function BackgroundImage({
  src,
  alt,
  tint = "green",
  overlay = 80,
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
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Parallax: image drifts slower than scroll (0 → ~12% offset)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
      </motion.div>
      {/* Bright overlay — keeps text on a clean light surface */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(251, 253, 251, ${overlay / 100})` }}
      />
      {/* Soft tint wash */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ backgroundColor: TINT_RGBA[tint] }}
      />
      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fbfdfb] to-transparent" />
      {/* Top fade (for navbar transition) */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbfdfb] to-transparent" />
    </div>
  );
}

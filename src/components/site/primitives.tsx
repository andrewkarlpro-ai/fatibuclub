"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Reveal — simple fade+slide on scroll into view */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  once = true,
  className,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* useScrollSpy — active nav tracking */
export function useScrollSpy(ids: string[], offset = 100) {
  const [active, setActive] = React.useState<string>(ids[0] ?? "");
  React.useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);
  return active;
}

/* SectionHeader — clean eyebrow + title */
export function SectionHeader({
  index,
  eyebrow,
  title,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Reveal className="flex items-center gap-2">
        {index && (
          <span className="font-display text-[10px] font-semibold text-brand tabular-nums sm:text-[11px]">
            {index}
          </span>
        )}
        {index && <span className="h-px w-5 bg-sage-border sm:w-6" />}
        <span className="eyebrow text-[10px] sm:text-[11px]">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.03}>
        <h2 className="font-display font-semibold text-ink tracking-tight text-[18px] sm:text-3xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

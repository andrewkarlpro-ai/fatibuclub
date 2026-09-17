"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------
   Pill CTA — primary (cream) and secondary (outline)
   Used as anchor links for smooth in-page navigation.
   ---------------------------------------------------------------- */
type PillProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  children: React.ReactNode;
};

export function PillLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PillProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-[13px]",
        variant === "primary" &&
          "bg-cream text-bg hover:bg-cream-deep shadow-[0_8px_30px_-12px_rgba(244,215,122,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(244,215,122,0.7)]",
        variant === "secondary" &&
          "border border-line-strong text-ink hover:border-ink/40 hover:bg-white/[0.03]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

/* Icon arrow that nudges on hover */
export function ArrowNudge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex translate-x-0 transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      aria-hidden
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ----------------------------------------------------------------
   Card — rounded, thin border, subtle gradient surface
   ---------------------------------------------------------------- */
export function Card({
  children,
  className,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "surface-card rounded-2xl",
        hover &&
          "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

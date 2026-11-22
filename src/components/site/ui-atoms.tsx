"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* PillLink — compact slim buttons (38px height, 13px text on mobile).
   Primary = green fill, Secondary = green outline. */
type PillLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export function PillLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PillLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        "h-[38px] px-4 text-[13px]",
        size === "lg" && "sm:h-[42px] sm:px-5 sm:text-[14px]",
        size === "sm" && "h-[36px] px-3.5 text-[12px]",
        variant === "primary" &&
          "bg-brand text-white hover:bg-brand-dark shadow-[0_4px_14px_-4px_rgba(46,125,82,0.4)] hover:shadow-[0_6px_18px_-4px_rgba(46,125,82,0.5)]",
        variant === "secondary" &&
          "border border-brand text-brand bg-transparent hover:bg-sage hover:text-brand-dark",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </a>
  );
}

export function ArrowNudge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex translate-x-0 transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      aria-hidden
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* Compact card — white surface, sage border, subtle shadow.
   Tight padding (14px / p-3.5), 10px radius. */
export function Card({
  children,
  className,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "card-surface rounded-[10px]",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(28,43,34,0.06),0_6px_20px_rgba(46,125,82,0.1)] hover:border-brand",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

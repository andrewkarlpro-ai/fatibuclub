"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* PillLink — slim, crisp buttons (40-42px height, 13-14px text).
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
        size === "lg" ? "px-5 py-2.5 text-[14px] min-h-[42px]" : "px-[18px] py-2.5 text-[13px] min-h-[40px]",
        size === "sm" && "px-4 py-2 text-[13px] min-h-[36px]",
        variant === "primary" &&
          "bg-brand text-white hover:bg-brand-dark shadow-[0_4px_16px_-4px_rgba(46,125,82,0.4)] hover:shadow-[0_6px_20px_-4px_rgba(46,125,82,0.5)]",
        variant === "secondary" &&
          "border border-brand text-brand bg-transparent hover:bg-sage hover:text-brand-dark",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
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

/* Compact card — white surface, sage border, subtle shadow.
   Tight padding (14-16px mobile, 20px desktop), 10-12px radius. */
export function Card({
  children,
  className,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "card-surface rounded-xl",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(28,43,34,0.06),0_8px_24px_rgba(46,125,82,0.1)] hover:border-brand",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

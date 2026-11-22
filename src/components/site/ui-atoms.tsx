"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* PillLink — primary (green) and secondary (outlined green) CTA.
   Standard comfortable tap height (44-46px), 14-15px font. */
type PillLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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
}: PillLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "lg" ? "px-6 py-3 text-[15px]" : "px-[22px] py-3 text-[14px]",
        "min-h-[44px]",
        variant === "primary" &&
          "bg-brand text-white hover:bg-brand-dark shadow-[0_4px_20px_-4px_rgba(46,125,82,0.4)] hover:shadow-[0_6px_24px_-4px_rgba(46,125,82,0.5)]",
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

/* Arrow that nudges on hover */
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

/* Standard card — white surface, sage border, subtle shadow */
export function Card({
  children,
  className,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "card-surface rounded-2xl",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(28,43,34,0.06),0_8px_28px_rgba(46,125,82,0.1)] hover:border-brand",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

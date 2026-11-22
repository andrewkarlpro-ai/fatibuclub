"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* PillLink — compact buttons. Primary = green, Secondary = outline. */
type PillLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
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
        "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        size === "sm" ? "h-9 px-4 text-[13px]" : "h-10 px-5 text-[13px]",
        variant === "primary" && "bg-brand text-white hover:bg-brand-dark",
        variant === "secondary" && "border border-brand text-brand hover:bg-sage",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function ArrowNudge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block transition-transform duration-200 group-hover:translate-x-0.5",
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

/* Card — clean white surface, sage border, subtle shadow */
export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("card-surface", className)} {...props}>
      {children}
    </div>
  );
}

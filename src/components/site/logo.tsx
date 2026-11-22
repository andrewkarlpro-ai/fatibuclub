import Image from "next/image";
import { cn } from "@/lib/utils";

/* FatiBuClub logo — icon mark + wordmark, built as HTML so text is
   always perfect and theme-matched (no AI-garbled text). */
export function Logo({
  className,
  showTagline = false,
  size = "md",
}: {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const markSize =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-12 w-12" : "h-9 w-9";
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={36}
        height={36}
        className={cn(markSize, "w-auto")}
        style={{ width: "auto", height: "var(--h, 2.25rem)" }}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold text-ink tracking-tight",
            textSize
          )}
        >
          FatiBuClub
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-faint font-medium">
            Private Reading Society · Est. 2018
          </span>
        )}
      </span>
    </span>
  );
}

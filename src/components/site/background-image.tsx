import Image from "next/image";
import { cn } from "@/lib/utils";

/* PhotoBanner — renders a background image at 100% FULL OPACITY with ZERO
   foggy overlays. Clean, bright, vivid editorial photo card with rounded
   corners, sage border, and subtle shadow. Text never sits directly over
   the photo — the photo is its own clean banner element. */
export function PhotoBanner({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-[#D1E5D8] shadow-sm",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible star rating. Renders 5 stars, filling to `rating` (supports halves). */
export function Stars({
  rating = 5,
  className,
  size = 16,
}: {
  rating?: number;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <Star
            key={i}
            aria-hidden="true"
            style={{ width: size, height: size }}
            className={cn(
              filled ? "fill-copper-500 text-copper-500" : "fill-transparent text-copper-300"
            )}
          />
        );
      })}
    </span>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Wordmark + mark. The mark fuses a water droplet with a leaf — plumbing meets
 * the eucalypt-green brand. `tone` lets it sit on light or dark backgrounds.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "dark" ? "text-forest-900" : "text-forest-50";
  const sub = tone === "dark" ? "text-ink-muted" : "text-forest-200";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} — home`}
    >
      <span className="grid size-10 place-items-center rounded-xl bg-forest-800 shadow-soft transition-transform duration-200 group-hover:-translate-y-0.5">
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          aria-hidden="true"
        >
          {/* droplet */}
          <path
            d="M12 3.5c3.4 3.8 5.5 6.7 5.5 9.6a5.5 5.5 0 1 1-11 0C6.5 10.2 8.6 7.3 12 3.5Z"
            fill="#bd6630"
          />
          {/* leaf highlight */}
          <path
            d="M12 9.2c1.7 1 2.6 2.4 2.6 3.9a2.6 2.6 0 0 1-2.6 2.6Z"
            fill="#dcebe0"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", text)}>
          Ainslie Plumbing
        </span>
        <span className={cn("text-[10px] font-semibold uppercase tracking-[0.22em]", sub)}>
          Plumbing &amp; Gas · Canberra
        </span>
      </span>
    </Link>
  );
}

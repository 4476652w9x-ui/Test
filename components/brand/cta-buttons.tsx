import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/content/site";

/**
 * The two conversion CTAs, reused everywhere (header, hero, bands, sticky bar).
 * Keeping them here means phone number + booking destination change in one place.
 *
 * TODO(owner): point BookButton at your ServiceM8 / booking URL when ready —
 * see README "Wiring up the booking form".
 */

export function CallButton({
  variant = "forest",
  size = "md",
  showNumber = true,
  className,
}: Pick<ButtonProps, "variant" | "size" | "className"> & {
  showNumber?: boolean;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={site.phoneHref} data-cta="call">
        <Phone aria-hidden="true" />
        {showNumber ? site.phone : "Call now"}
      </a>
    </Button>
  );
}

export function BookButton({
  variant = "copper",
  size = "md",
  label = "Book Online",
  className,
}: Pick<ButtonProps, "variant" | "size" | "className"> & {
  label?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href="/contact" data-cta="book">
        <CalendarCheck aria-hidden="true" />
        {label}
      </Link>
    </Button>
  );
}

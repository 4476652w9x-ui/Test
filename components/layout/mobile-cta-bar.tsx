import Link from "next/link";
import { Phone, CalendarCheck, Siren } from "lucide-react";
import { site } from "@/content/site";

/**
 * Persistent mobile bottom bar: Call · Book · Emergency.
 * Hidden on lg+ (the header CTAs take over). Padded for iOS safe-area.
 */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={site.phoneHref}
          data-cta="call"
          className="flex flex-col items-center gap-0.5 py-2.5 text-forest-900"
        >
          <Phone className="size-5 text-forest-700" aria-hidden="true" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <Link
          href="/contact"
          data-cta="book"
          className="flex flex-col items-center gap-0.5 bg-copper-500 py-2.5 text-white"
        >
          <CalendarCheck className="size-5" aria-hidden="true" />
          <span className="text-xs font-semibold">Book</span>
        </Link>
        <a
          href={site.emergencyPhoneHref}
          data-cta="emergency"
          className="flex flex-col items-center gap-0.5 py-2.5 text-forest-900"
          aria-label={`Emergency plumber — call ${site.emergencyPhone}`}
        >
          <Siren className="size-5 text-copper-600" aria-hidden="true" />
          <span className="text-xs font-semibold">Emergency</span>
        </a>
      </div>
    </div>
  );
}

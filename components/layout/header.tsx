"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "@/components/brand/logo";
import { CallButton, BookButton } from "@/components/brand/cta-buttons";

const primaryNav = [
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Emergency", href: "/services/emergency" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Specials", href: "/specials" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on navigation.
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.hasMenu ? (
              <ServicesMenu key={item.href} pathname={pathname} />
            ) : (
              <NavLink key={item.href} href={item.href} pathname={pathname}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Persistent CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <CallButton variant="ghost" size="sm" />
          <BookButton size="sm" />
        </div>

        {/* Mobile: quick call + menu */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name} on ${site.phone}`}
            className="grid size-11 place-items-center rounded-full bg-forest-800 text-white shadow-soft"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Open menu"
                className="grid size-11 place-items-center rounded-full border border-border bg-background text-forest-900"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-background p-6 shadow-lift data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                <div className="flex items-center justify-between">
                  <Logo />
                  <Dialog.Close asChild>
                    <button
                      aria-label="Close menu"
                      className="grid size-11 place-items-center rounded-full border border-border text-forest-900"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Site menu</Dialog.Title>

                <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-3 font-display text-xl font-semibold text-forest-900 hover:bg-forest-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <BookButton size="lg" className="w-full" />
                  <CallButton variant="outline" size="lg" className="w-full" />
                  <p className="text-center text-sm text-ink-muted">
                    {site.emergencyNote}
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        active
          ? "text-copper-600"
          : "text-forest-900/80 hover:bg-forest-50 hover:text-forest-900"
      )}
    >
      {children}
    </Link>
  );
}

/** Services dropdown — opens on hover and on keyboard focus. */
function ServicesMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const active = pathname.startsWith("/services");
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>();

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href="/services"
        aria-expanded={open}
        onFocus={show}
        className={cn(
          "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          active
            ? "text-copper-600"
            : "text-forest-900/80 hover:bg-forest-50 hover:text-forest-900"
        )}
      >
        Services
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </Link>
      {open && (
        <div
          className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
          onBlur={hide}
        >
          <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-2 shadow-lift">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-forest-50"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-forest-100 text-forest-700 transition-colors group-hover:bg-copper-100 group-hover:text-copper-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-forest-900">
                      {s.navLabel}
                    </span>
                    <span className="line-clamp-2 text-xs text-ink-muted">
                      {s.summary}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

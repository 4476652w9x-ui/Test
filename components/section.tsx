import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/** A section heading block: eyebrow + title + optional intro, centered or left. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "prose-measure text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

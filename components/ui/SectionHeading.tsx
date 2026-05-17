import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-medium uppercase tracking-[0.28em]",
            light ? "text-copper-dark" : "text-copper-light",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-charcoal" : "text-champagne",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-muted" : "text-champagne-muted",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

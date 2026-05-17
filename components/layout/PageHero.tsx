import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/hero-villa.jpg",
  imageAlt = "Villa de luxe à Marrakech",
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-champagne/10",
        compact ? "pt-32 pb-16" : "pt-36 pb-24 lg:pt-44 lg:pb-32",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-copper-light">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl font-display text-4xl leading-tight tracking-tight text-champagne sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-champagne-muted">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const { brand } = siteConfig;

type LogoProps = {
  variant?: "nav" | "footer" | "hero";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  nav: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-14 w-14 sm:h-16 sm:w-16",
  hero: "h-24 w-24 sm:h-28 sm:w-28",
};

export function Logo({
  variant = "nav",
  linked = true,
  className,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={brand.logoPng}
      alt={brand.logoAlt}
      width={brand.logoWidth}
      height={brand.logoHeight}
      priority={priority}
      className={cn(
        "object-contain object-left",
        sizeClasses[variant],
        className,
      )}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="HOSTKECH CONCIERGERIE — Accueil"
    >
      {image}
    </Link>
  );
}

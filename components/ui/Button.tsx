import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-gradient-to-br from-copper-light via-copper to-copper-dark text-charcoal font-medium shadow-[0_8px_32px_-8px_rgba(184,115,51,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(184,115,51,0.65)] hover:brightness-110",
  secondary:
    "border border-champagne/25 text-champagne bg-transparent hover:border-copper-light/60 hover:text-champagne",
  ghost: "text-champagne-muted hover:text-champagne",
};

const sizes = {
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-sm tracking-[0.12em] uppercase",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

import * as React from "react";
import Link from "next/link";
import { cn } from "./cn";

export interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center rounded-xl transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ccc65]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonProps["variant"], string> = {
  primary:
    "bg-[#7cb342] text-white hover:bg-[#9ccc65] shadow-sm hover:shadow",
  secondary:
    "bg-white text-[#1a2f1c] border border-[#7cb342]/40 hover:border-[#7cb342] hover:bg-[#e8f5e9]/40",
  outline:
    "bg-transparent text-white border border-white/50 hover:border-white hover:bg-white/10",
};

const sizes: Record<ButtonProps["size"], string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function Inner({
  variant,
  size,
  className,
  children,
}: Pick<ButtonProps, "variant" | "size" | "className" | "children">) {
  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}

export function Button({
  variant,
  size,
  children,
  href,
  onClick,
  className,
  ariaLabel,
}: ButtonProps) {
  if (href) {
    const isAnchor = href.startsWith("#");
    const rel =
      href.startsWith("http") && !href.includes("localhost")
        ? "noopener noreferrer"
        : undefined;
    const target = href.startsWith("http") ? "_blank" : undefined;

    return (
      <Link
        href={href}
        scroll={isAnchor}
        className="inline-flex"
        aria-label={ariaLabel}
        rel={rel}
        target={target}
      >
        <Inner variant={variant} size={size} className={className}>
          {children}
        </Inner>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}


import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "gold" | "ghost" | "teal";
  className?: string;
};

const styles = {
  gold: "bg-champagne text-charcoal hover:bg-champagne-soft hover:shadow-[0_18px_50px_-10px_rgba(201,162,39,0.55)]",
  ghost: "border border-offwhite/30 text-offwhite hover:border-champagne hover:text-champagne",
  teal: "bg-teal text-offwhite hover:bg-teal-deep",
} as const;

const base =
  "group relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-500";

export function CTAExternal({
  href,
  children,
  variant = "gold",
  className,
}: CommonProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-magnetic
      className={cn(base, styles[variant], className)}
    >
      {children}
      <span className="translate-x-0 transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function CTALink({
  to,
  children,
  variant = "gold",
  className,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} data-magnetic className={cn(base, styles[variant], className)}>
      {children}
      <span className="translate-x-0 transition-transform duration-500 group-hover:translate-x-1">→</span>
    </Link>
  );
}

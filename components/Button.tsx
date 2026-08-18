import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-sage text-white hover:bg-sage-dark",
  secondary:
    "border border-border bg-surface text-ink hover:border-sage hover:bg-hover hover:text-sage-dark",
  text: "text-sage underline-offset-4 hover:text-sage-dark hover:underline",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
};

/** Borderless variants get type scale only, no box padding. */
const TEXT_SIZES: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-[0.9375rem]",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    BASE,
    variant === "text" ? TEXT_SIZES[size] : SIZES[size],
    VARIANTS[variant],
    className,
  );

  if (typeof href === "string") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.toLowerCase().startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

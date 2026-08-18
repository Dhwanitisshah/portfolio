import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md" | "lg";

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
  // The transparent border keeps primary the same height as secondary.
  primary:
    "border-[1.5px] border-transparent bg-sage text-white hover:bg-sage-dark",
  secondary:
    "border-[1.5px] border-sage bg-transparent text-sage hover:bg-hover",
  text: "text-sage underline-offset-4 hover:text-sage-dark hover:underline",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

/** Borderless variants get type scale only, no box padding. */
const TEXT_SIZES: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-base",
};

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

/** Same-page anchors stay plain <a> so the browser's native smooth scroll runs. */
function isHashLink(href: string) {
  return href.startsWith("#");
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

    if (isHashLink(href) || anchorProps.target !== undefined) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

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

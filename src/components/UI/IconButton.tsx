import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  ariaLabel: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      ariaLabel,
      variant = "primary",
      size = "medium",
      isLoading,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      "icon-button",
      `icon-button--variant-${variant}`,
      `icon-button--size-${size}`,
      isLoading ? "ui-icon-button--loading" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        aria-label={ariaLabel}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        data-variant={variant}
        data-size={size}
        {...rest}
      >
        {isLoading ? (
          <span className="icon-button__loader"> loading... </span>
        ) : (
          icon
        )}
      </button>
    );
  },
);
IconButton.displayName = "IconButton";

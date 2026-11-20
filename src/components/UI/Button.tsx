import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      isLoading = false,
      fullWidth = false,
      disabled,
      className,
      children,
      type = "button",
      ...restProps
    },
    ref,
  ) => {
    const classes = [
      "button",
      `button--variant-${variant}`,
      `button--size-${size}`,
      fullWidth ? "button--full-width" : "",
      isLoading ? "button--loading" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        data-variant={variant}
        data-size={size}
        data-loading={isLoading || undefined}
        {...restProps}
      >
        {isLoading ? (
          <span className="button__loader" aria-label="Loading">
            ⏳
          </span>
        ) : (
          <span className="button__content">{children}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

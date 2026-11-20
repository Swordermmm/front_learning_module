import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  variant?: "default" | "filled";
  size?: "small" | "medium" | "large";
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "medium",
      error = false,
      className,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      "input__wrapper",
      `input__wrapper--size-${size}`,
      error ? "input__wrapper--error" : "",
      disabled ? "input__wrapper--disabled" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={classes} data-error={error || undefined}>
        <input
          ref={ref}
          className="input__element"
          disabled={disabled}
          aria-invalid={error}
          data-variant={variant}
          data-size={size}
          {...rest}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

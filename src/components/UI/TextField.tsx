import { forwardRef, useId } from "react";
import { Input } from "./Input";
import type { InputProps } from "./Input";

export interface TextFieldProps extends Omit<
  InputProps,
  "id" | "aria-describedby"
> {
  label: string;
  helperText?: string;
  errorText?: string;
  id?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, helperText, errorText, id, error = !!errorText, ...inputProps },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;

    return (
      <div className="text-field">
        <label htmlFor={inputId} className="text-field__label">
          {label}
        </label>

        <Input
          ref={ref}
          id={inputId}
          error={error}
          aria-describedby={
            errorText ? helperId : helperText ? helperId : undefined
          }
          {...inputProps}
        />

        {(helperText || errorText) && (
          <span
            id={helperId}
            className="text-field__helper"
            data-error={error || undefined}
          >
            {errorText || helperText}
          </span>
        )}
      </div>
    );
  },
);
TextField.displayName = "TextField";

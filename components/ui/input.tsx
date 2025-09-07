import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const classes = `flex h-10 w-full rounded-brand border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${className ?? ""}`;
    return <input type={type} className={classes} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;



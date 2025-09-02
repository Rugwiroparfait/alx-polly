import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "destructive" | "ghost";
};

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 ring-offset-background";

const variantToClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
  ghost: "bg-transparent hover:bg-neutral-100 text-neutral-900",
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantToClasses[variant]} ${className ?? ""}`;
  return <button className={classes} {...props} />;
}

export default Button;



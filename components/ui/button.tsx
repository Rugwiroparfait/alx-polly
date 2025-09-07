import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "ghost";
  size?: "sm" | "md" | "lg";
};

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-brand font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizeClasses = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-cyan-500 text-navy-900 hover:bg-cyan-600 hover:-translate-y-0.5 active:translate-y-0 active:bg-cyan-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:transform-none",
  secondary:
    "bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-50 active:bg-navy-100",
  success:
    "bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 active:translate-y-0 active:bg-green-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:transform-none",
  ghost: "bg-transparent text-navy-900 hover:bg-gray-100 active:bg-gray-200",
};

export function Button({ 
  className, 
  variant = "primary", 
  size = "md",
  ...props 
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className ?? ""}`;
  return <button className={classes} {...props} />;
}

export default Button;



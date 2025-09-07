import * as React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `rounded-brand border border-gray-200 bg-white text-gray-900 shadow-card p-6 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `flex flex-col space-y-2 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const classes = `text-xl font-semibold leading-tight tracking-wide text-navy-900 ${className ?? ""}`;
  return <h3 className={classes} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const classes = `text-sm text-gray-600 leading-relaxed ${className ?? ""}`;
  return <p className={classes} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `flex items-center pt-4 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export default Card;



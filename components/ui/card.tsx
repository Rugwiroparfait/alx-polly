import * as React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `rounded-lg border border-neutral-200 bg-white text-neutral-900 shadow-sm ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `flex flex-col space-y-1.5 p-6 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const classes = `text-xl font-semibold leading-none tracking-tight ${className ?? ""}`;
  return <h3 className={classes} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const classes = `text-sm text-neutral-500 ${className ?? ""}`;
  return <p className={classes} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `p-6 pt-0 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const classes = `flex items-center p-6 pt-0 ${className ?? ""}`;
  return <div className={classes} {...props} />;
}

export default Card;



import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const classes = `flex min-h-[80px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`;
    return <textarea className={classes} ref={ref} {...props} />;
  }
);

Textarea.displayName = "Textarea";

export default Textarea;



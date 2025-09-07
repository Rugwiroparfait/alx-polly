import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const classes = `flex min-h-[80px] w-full rounded-brand border border-gray-300 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-vertical ${className ?? ""}`;
    return <textarea className={classes} ref={ref} {...props} />;
  }
);

Textarea.displayName = "Textarea";

export default Textarea;



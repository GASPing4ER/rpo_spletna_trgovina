import * as React from "react";
import { cn } from "@/lib/utils";

const Form = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form
    ref={ref}
    className={cn(
      "rounded-xl border border-neutral-200 bg-white  pt-12 px-8",
      className
    )}
    {...props}
  />
));
Form.displayName = "Form";

const FormHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col px-6", className)} {...props} />
));
FormHeader.displayName = "FormHeader";

const FormTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
FormTitle.displayName = "FormTitle";

const FormDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

const FormContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
FormContent.displayName = "FormContent";

const FormFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-6", className)}
    {...props}
  />
));
FormFooter.displayName = "FormFooter";

export {
  Form,
  FormHeader,
  FormFooter,
  FormTitle,
  FormDescription,
  FormContent,
};

"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

import { Loader2Icon } from "lucide-react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "px-3 py-2 rounded-lg font-medium inline-flex text-md items-center border border-transparent justify-center whitespace-nowrap gap-2 disabled:opacity-80 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent border-border text-primary",
        danger: "bg-destructive text-destructive-foreground",
        ghost: "bg-transparent text-primary hover:bg-secondary",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        icon: "aspect-square text-md p-1 size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  className?: string;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, className, isLoading = false, children, ...props },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading || props.disabled}
      >
        {size !== "icon" ? (
          <>
            <Loader2Icon
              className={cn("animate-spin", isLoading ? "block" : "hidden")}
            />
            {children as React.ReactNode}
          </>
        ) : isLoading ? (
          <Loader2Icon
            className={cn("animate-spin", isLoading ? "block" : "hidden")}
          />
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

export { Button, buttonVariants, type ButtonProps };

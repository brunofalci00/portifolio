import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Adicionar padding vertical extra */
  padded?: boolean;
  /** Variante de estilo */
  variant?: "default" | "transparent" | "solid";
  /** Tamanho do border radius */
  rounded?: "default" | "lg" | "xl" | "2xl" | "3xl";
}

export const SectionContainer = React.forwardRef<
  HTMLDivElement,
  SectionContainerProps
>(function SectionContainer(
  { children, className, padded = true, variant = "default", rounded = "3xl", ...props },
  ref
) {
  const variantClasses = {
    default: "bg-neutral-950/90 border border-neutral-800 backdrop-blur-sm",
    transparent: "bg-transparent",
    solid: "bg-neutral-950 border border-neutral-800",
  };

  const roundedClasses = {
    default: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-2xl",
    "2xl": "rounded-3xl",
    "3xl": "rounded-3xl",
  };

  return (
    <div
      ref={ref}
      className={cn(
        // Base styles
        "w-full max-w-7xl mx-auto",
        // Variant styles
        variantClasses[variant],
        // Border radius
        roundedClasses[rounded],
        // Padding
        padded && "py-16 md:py-24 px-6 md:px-12",
        // Margin for spacing between sections
        "my-8 md:my-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default SectionContainer;

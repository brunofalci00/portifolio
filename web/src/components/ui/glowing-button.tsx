import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Renderizar como link anchor */
  asChild?: boolean;
  /** href para quando usado como link */
  href?: string;
  /** Tamanho do botão */
  size?: "default" | "sm" | "lg";
}

const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "pt-2 pr-4 pb-2 pl-4 text-xs min-w-[100px]",
      default: "pt-3 pr-5 pb-3 pl-5 text-sm min-w-[140px]",
      lg: "pt-4 pr-6 pb-4 pl-6 text-base min-w-[160px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Outer wrapper with gradient border
          "group relative inline-flex items-center justify-center",
          "rounded-lg p-[1px]",
          "text-white select-none cursor-pointer",
          "transform-gpu transition duration-300 ease-out",
          "hover:-translate-y-0.5",
          "shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)]",
          "hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
          className
        )}
        style={{
          backgroundImage:
            "linear-gradient(144deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))",
        }}
        {...props}
      >
        <span
          className={cn(
            // Inner content
            "flex items-center justify-center gap-2",
            "w-full h-full",
            "font-medium leading-none",
            "bg-black/80 rounded-lg",
            "transition-colors duration-300",
            "group-hover:bg-black/50",
            sizeClasses[size]
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);

GlowingButton.displayName = "GlowingButton";

// Link variant
interface GlowingButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg";
}

const GlowingButtonLink = React.forwardRef<
  HTMLAnchorElement,
  GlowingButtonLinkProps
>(({ className, children, size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "pt-2 pr-4 pb-2 pl-4 text-xs min-w-[100px]",
    default: "pt-3 pr-5 pb-3 pl-5 text-sm min-w-[140px]",
    lg: "pt-4 pr-6 pb-4 pl-6 text-base min-w-[160px]",
  };

  return (
    <a
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center",
        "rounded-lg p-[1px]",
        "text-white select-none cursor-pointer",
        "transform-gpu transition duration-300 ease-out",
        "hover:-translate-y-0.5",
        "shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)]",
        "hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(144deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))",
      }}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center gap-2",
          "w-full h-full",
          "font-medium leading-none",
          "bg-black/80 rounded-lg",
          "transition-colors duration-300",
          "group-hover:bg-black/50",
          sizeClasses[size]
        )}
      >
        {children}
      </span>
    </a>
  );
});

GlowingButtonLink.displayName = "GlowingButtonLink";

export { GlowingButton, GlowingButtonLink };

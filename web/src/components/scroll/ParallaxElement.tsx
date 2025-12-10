"use client";

import { useRef, useLayoutEffect, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // -0.5 to 0.5 recommended for subtle effect
  direction?: "x" | "y";
  className?: string;
}

export function ParallaxElement({
  children,
  speed = 0.2,
  direction = "y",
  className = "",
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      const element = elementRef.current;
      if (!element) return;

      // Calculate moderate movement (30-50px range)
      const movement = speed * 200;

      gsap.to(element, {
        [direction]: movement,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3, // Fast, responsive parallax
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

export default ParallaxElement;

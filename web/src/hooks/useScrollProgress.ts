"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";

interface UseScrollProgressOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
}

export function useScrollProgress(options?: UseScrollProgressOptions) {
  const [progress, setProgress] = useState(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (options?.trigger) {
      // Section-specific progress
      triggerRef.current = ScrollTrigger.create({
        trigger: options.trigger,
        start: options.start || "top bottom",
        end: options.end || "bottom top",
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    } else {
      // Global progress
      const updateProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = window.scrollY / scrollHeight;
        setProgress(Math.min(1, Math.max(0, currentProgress)));
      };

      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();

      return () => {
        window.removeEventListener("scroll", updateProgress);
      };
    }

    return () => {
      triggerRef.current?.kill();
    };
  }, [options?.trigger, options?.start, options?.end]);

  return progress;
}

export function useSectionProgress(
  sectionRef: React.RefObject<HTMLElement>,
  options?: { start?: string; end?: string }
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: options?.start || "top bottom",
      end: options?.end || "bottom top",
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [sectionRef, options?.start, options?.end]);

  return progress;
}

export default useScrollProgress;

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default configuration
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

// Debug markers only in development
if (process.env.NODE_ENV === "development") {
  ScrollTrigger.defaults({
    markers: false, // Set to true for debugging
  });
}

export { gsap, ScrollTrigger };

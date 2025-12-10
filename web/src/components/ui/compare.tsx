"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  className?: string;
  slideMode?: "hover" | "drag" | "click";
  autoplay?: boolean;
  alt?: string;
}

export function Compare({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = "hover",
  autoplay = false,
  alt = "Comparison",
}: CompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        const next = prev + 1;
        return next > 100 ? 0 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (slideMode === "click") {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden select-none", className)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      style={{ cursor: slideMode === "drag" ? (isDragging ? "grabbing" : "grab") : "ew-resize" }}
    >
      {/* Before Image (Base Layer) */}
      <div className="relative w-full h-full">
        <Image
          src={firstImage}
          alt={`${alt} - Before`}
          fill
          className={cn("object-cover", firstImageClassName)}
        />
      </div>

      {/* After Image (Clipped Layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={secondImage}
          alt={`${alt} - After`}
          fill
          className={cn("object-cover", secondImageClassname)}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg
            className="w-6 h-6 text-neutral-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>

        {/* Top Arrow Indicator */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-neutral-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Bottom Arrow Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-neutral-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Sparkle Effects (subtle animation) */}
      {autoplay && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
            style={{
              left: `${sliderPosition}%`,
              top: "20%",
              animationDuration: "2s",
            }}
          />
          <div
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
            style={{
              left: `${sliderPosition}%`,
              top: "80%",
              animationDuration: "2.5s",
              animationDelay: "0.5s",
            }}
          />
        </div>
      )}
    </div>
  );
}

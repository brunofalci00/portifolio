"use client";

/**
 * @author: @dorian_baffier
 * @description: Mouse Effect Card - Interactive card with animated dot pattern that responds to mouse movement
 * @version: 1.0.0
 * @date: 2025-01-30
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const OPACITY_DURATION_BASE = 0.8;
const OPACITY_DURATION_VARIATION = 0.2;
const OPACITY_EASE = [0.4, 0, 0.2, 1] as const;
const OPACITY_DELAY_CYCLE = 1.5;
const OPACITY_DELAY_STEP = 0.02;
const MIN_OPACITY_MULTIPLIER = 0.5;
const MAX_OPACITY_MULTIPLIER = 1.5;
const MIN_OPACITY_FALLBACK = 0.3;
const PROXIMITY_MULTIPLIER = 1.2;
const PROXIMITY_OPACITY_BOOST = 0.8;

export interface MouseEffectCardProps {
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
    dotSize?: number;
    dotSpacing?: number;
    repulsionRadius?: number;
    repulsionStrength?: number;
    title?: string;
    subtitle?: string;
    topText?: string;
    topSubtext?: string;
    primaryCtaText?: string;
    primaryCtaUrl?: string;
    secondaryCtaText?: string;
    secondaryCtaUrl?: string;
    footerText?: string;
    layout?: "card" | "background";
}

interface Dot {
    id: string;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    opacity: number;
}

interface DotComponentProps {
    dot: Dot;
    index: number;
    dotSize: number;
    mouseX: ReturnType<typeof useMotionValue<number>>;
    mouseY: ReturnType<typeof useMotionValue<number>>;
    repulsionRadius: number;
    repulsionStrength: number;
}

function calculateDistance(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): number {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}

function generateDots(
    width: number,
    height: number,
    spacing: number,
): Dot[] {
    const dots: Dot[] = [];
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

    for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
            const x = col * spacing;
            const y = row * spacing;
            const dx = x - centerX;
            const dy = y - centerY;
            const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
            const edgeFactor = Math.min(distanceFromCenter / (maxDistance * 0.7), 1);

            if (Math.random() > edgeFactor) {
                continue;
            }

            const pattern = (row + col) % 3;
            const baseOpacities = [0.3, 0.5, 0.7];
            const opacity = baseOpacities[pattern] * edgeFactor;

            dots.push({
                id: `dot-${row}-${col}`,
                x,
                y,
                baseX: x,
                baseY: y,
                opacity,
            });
        }
    }

    return dots;
}

function DotComponent({
    dot,
    index,
    dotSize,
    mouseX,
    mouseY,
    repulsionRadius,
    repulsionStrength,
}: DotComponentProps) {
    const posX = useTransform([mouseX, mouseY], () => {
        const mx = mouseX.get();
        const my = mouseY.get();

        if (!Number.isFinite(mx) || !Number.isFinite(my)) {
            return 0;
        }

        const dx = dot.baseX - mx;
        const dy = dot.baseY - my;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * repulsionStrength;
            const angle = Math.atan2(dy, dx);
            return Math.cos(angle) * force;
        }

        return 0;
    });

    const posY = useTransform([mouseX, mouseY], () => {
        const mx = mouseX.get();
        const my = mouseY.get();

        if (!Number.isFinite(mx) || !Number.isFinite(my)) {
            return 0;
        }

        const dx = dot.baseX - mx;
        const dy = dot.baseY - my;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * repulsionStrength;
            const angle = Math.atan2(dy, dx);
            return Math.sin(angle) * force;
        }

        return 0;
    });

    const opacityBoost = useTransform([mouseX, mouseY], () => {
        const mx = mouseX.get();
        const my = mouseY.get();

        if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;

        const distance = calculateDistance(dot.baseX, dot.baseY, mx, my);
        const maxDistance = repulsionRadius * PROXIMITY_MULTIPLIER;

        if (distance < maxDistance) {
            const proximityFactor = 1 - distance / maxDistance;
            return proximityFactor * PROXIMITY_OPACITY_BOOST;
        }

        return 0;
    });

    const x = useSpring(posX, SPRING_CONFIG);
    const y = useSpring(posY, SPRING_CONFIG);

    const baseMinOpacity = Math.max(
        dot.opacity * MIN_OPACITY_MULTIPLIER,
        MIN_OPACITY_FALLBACK,
    );
    const baseMaxOpacity = Math.min(dot.opacity * MAX_OPACITY_MULTIPLIER, 1);

    const minOpacityWithBoost = useTransform(opacityBoost, (boost) =>
        Math.min(baseMinOpacity + boost, 1),
    );

    const delay = (index * OPACITY_DELAY_STEP) % OPACITY_DELAY_CYCLE;

    return (
        <motion.div
            className="absolute rounded-full bg-white/60 will-change-transform"
            style={{
                width: dotSize,
                height: dotSize,
                left: dot.baseX,
                top: dot.baseY,
                x,
                y,
                opacity: useSpring(minOpacityWithBoost, {
                    stiffness: 150,
                    damping: 25,
                }),
            }}
            initial={{ opacity: baseMinOpacity }}
            animate={{
                opacity: [baseMinOpacity, baseMaxOpacity, baseMinOpacity],
            }}
            transition={{
                opacity: {
                    duration:
                        OPACITY_DURATION_BASE +
                        (index % 4) * OPACITY_DURATION_VARIATION,
                    repeat: Infinity,
                    ease: OPACITY_EASE,
                    delay,
                    times: [0, 0.5, 1],
                },
            }}
        />
    );
}

export default function MouseEffectCard({
    className,
    contentClassName,
    children,
    dotSize = 2,
    dotSpacing = 16,
    repulsionRadius = 80,
    repulsionStrength = 20,
    title = "Acme",
    subtitle = "Build interfaces with interactive patterns",
    topText = "Case Study",
    topSubtext = "Discover something new",
    primaryCtaText = "Get Started",
    primaryCtaUrl = "#",
    secondaryCtaText = "View Docs",
    secondaryCtaUrl = "#",
    footerText = "We do it all",
    layout = "card",
}: MouseEffectCardProps) {
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);
    const [dots, setDots] = useState<Dot[]>([]);
    const isBackground = layout === "background";

    useEffect(() => {
        const updateDots = () => {
            if (!innerContainerRef.current) return;
            const rect = innerContainerRef.current.getBoundingClientRect();
            const newDots = generateDots(rect.width, rect.height, dotSpacing);
            setDots(newDots);
        };

        updateDots();

        const resizeObserver = new ResizeObserver(updateDots);
        if (innerContainerRef.current) {
            resizeObserver.observe(innerContainerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [dotSpacing]);

    // Use global mouse listener for background mode
    useEffect(() => {
        if (!isBackground) return;

        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!innerContainerRef.current) return;
            const rect = innerContainerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
    }, [isBackground, mouseX, mouseY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!innerContainerRef.current || isBackground) return;

        const rect = innerContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        if (isBackground) return;
        mouseX.set(Infinity);
        mouseY.set(Infinity);
    };

    return (
        <Card
            className={cn(
                "relative w-full rounded-2xl shadow-none max-w-md overflow-hidden border border-white/40 dark:border-white/10 p-0",
                isBackground &&
                    "pointer-events-none !max-w-none !rounded-none border-0 bg-transparent shadow-none",
                className,
            )}
        >
            <CardContent
                ref={innerContainerRef}
                className={cn(
                    "relative w-full h-[400px] overflow-hidden p-0",
                    isBackground && "h-full min-h-screen",
                    contentClassName,
                )}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {dots.map((dot, index) => (
                    <DotComponent
                        key={dot.id}
                        dot={dot}
                        index={index}
                        dotSize={dotSize}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        repulsionRadius={repulsionRadius}
                        repulsionStrength={repulsionStrength}
                    />
                ))}

                {!isBackground && topText && (
                    <div className="absolute top-6 left-6 z-10">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-lg bg-white/60 blur-lg dark:bg-zinc-950/60" />
                            <div className="relative flex flex-col gap-1">
                                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                                    {topText}
                                </p>
                                {topSubtext && (
                                    <p className="text-xs font-medium text-zinc-600 opacity-70 dark:text-zinc-400">
                                        {topSubtext}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {(!isBackground || children) && (
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-2">
                        {!isBackground && (
                            <div className="flex flex-col items-center gap-6">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-white/80 blur-2xl dark:bg-zinc-950/80" />
                                    <h2 className="relative text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                        {title}
                                    </h2>
                                </div>
                                {(subtitle || children) && (
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-lg bg-white/60 blur-xl dark:bg-zinc-950/60" />
                                        <p className="relative max-w-sm text-center text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
                                            {children || subtitle}
                                        </p>
                                    </div>
                                )}
                                <div className="mt-2 flex items-center gap-3">
                                    <Button asChild size="lg" className="rounded-full shadow-lg">
                                        <a
                                            href={primaryCtaUrl}
                                            onClick={(e) => {
                                                if (primaryCtaUrl === "#") {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            {primaryCtaText}
                                        </a>
                                    </Button>
                                    {secondaryCtaText && (
                                        <Button asChild variant="outline" size="lg" className="rounded-full">
                                            <a
                                                href={secondaryCtaUrl}
                                                onClick={(e) => {
                                                    if (secondaryCtaUrl === "#") {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                {secondaryCtaText}
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}

                        {isBackground && children}
                    </div>
                )}

                {!isBackground && footerText && (
                    <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-white/60 blur-lg dark:bg-zinc-950/60" />
                            <p className="relative px-4 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                {footerText}
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

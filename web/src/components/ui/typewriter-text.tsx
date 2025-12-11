import type React from "react";
import { useEffect, useRef, useState } from "react";

export type TypewriterTextProps = {
  children: string;
  speed?: number;
  loop?: boolean;
  className?: string;
  startWhenInView?: boolean;
};

const LOOP_RESTART_DELAY_MS = 1000;

const TypewriterText: React.FC<TypewriterTextProps> = ({
  children,
  speed = 50,
  loop = false,
  className = "",
  startWhenInView = false,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [isInView, setIsInView] = useState(!startWhenInView);
  const index = useRef(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startWhenInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsInView(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startWhenInView]);

  useEffect(() => {
    if (!isInView) return;

    setDisplayed("");
    index.current = 0;
    function type() {
      setDisplayed(children.slice(0, index.current + 1));
      if (index.current < children.length - 1) {
        index.current++;
        timeout.current = setTimeout(type, speed);
      } else if (loop) {
        timeout.current = setTimeout(() => {
          setDisplayed("");
          index.current = 0;
          type();
        }, LOOP_RESTART_DELAY_MS);
      }
    }
    type();
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [children, speed, loop, isInView]);

  return <span ref={elementRef} className={className}>{displayed}</span>;
};

export default TypewriterText;

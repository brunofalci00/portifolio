import type React from "react";
import { useEffect, useRef, useState } from "react";

export type TypewriterTextProps = {
  children: string;
  speed?: number;
  loop?: boolean;
  className?: string;
};

const LOOP_RESTART_DELAY_MS = 1000;

const TypewriterText: React.FC<TypewriterTextProps> = ({
  children,
  speed = 50,
  loop = false,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("");
  const index = useRef(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    const startTyping = () => {
      setDisplayed("");
      index.current = 0;

      const type = () => {
        setDisplayed(children.slice(0, index.current + 1));
        if (index.current < children.length - 1) {
          index.current += 1;
          timeout.current = setTimeout(type, speed);
        } else if (loop) {
          timeout.current = setTimeout(() => {
            setDisplayed("");
            index.current = 0;
            type();
          }, LOOP_RESTART_DELAY_MS);
        }
      };

      type();
    };

    const frame = requestAnimationFrame(startTyping);

    return () => {
      cancelAnimationFrame(frame);
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };
  }, [children, speed, loop]);

  return <span className={className}>{displayed}</span>;
};

export default TypewriterText;

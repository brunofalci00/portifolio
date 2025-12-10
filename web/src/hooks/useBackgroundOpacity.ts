"use client";

import { useEffect, useState } from "react";

interface UseBackgroundOpacityOptions {
  /** Opacidade inicial (no topo da página). Default: 1 */
  initialOpacity?: number;
  /** Opacidade final (após scroll). Default: 0.3 */
  finalOpacity?: number;
  /** Porcentagem do viewport onde a transição começa. Default: 0 */
  startAt?: number;
  /** Porcentagem do viewport onde a transição termina. Default: 100 */
  endAt?: number;
}

export function useBackgroundOpacity(options?: UseBackgroundOpacityOptions) {
  const {
    initialOpacity = 1,
    finalOpacity = 0.3,
    startAt = 0,
    endAt = 100,
  } = options || {};

  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calcula os pontos de início e fim em pixels
      const startPx = (startAt / 100) * viewportHeight;
      const endPx = (endAt / 100) * viewportHeight;

      // Calcula o progresso do scroll entre os pontos
      if (scrollY <= startPx) {
        setOpacity(initialOpacity);
      } else if (scrollY >= endPx) {
        setOpacity(finalOpacity);
      } else {
        // Interpola linearmente entre os valores
        const progress = (scrollY - startPx) / (endPx - startPx);
        const newOpacity = initialOpacity - (initialOpacity - finalOpacity) * progress;
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Executa uma vez no mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialOpacity, finalOpacity, startAt, endAt]);

  return opacity;
}

export default useBackgroundOpacity;

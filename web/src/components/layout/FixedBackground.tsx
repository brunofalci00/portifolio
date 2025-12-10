"use client";

import { useBackgroundOpacity } from "@/hooks/useBackgroundOpacity";
import Image from "next/image";

interface FixedBackgroundProps {
  /** Caminho da imagem de background */
  src?: string;
  /** Alt text para acessibilidade */
  alt?: string;
  /** Opacidade inicial (no topo). Default: 1 */
  initialOpacity?: number;
  /** Opacidade final (após scroll). Default: 0.3 */
  finalOpacity?: number;
  /** Porcentagem do viewport onde a transição termina. Default: 80 */
  fadeEndAt?: number;
}

export function FixedBackground({
  src = "/media/perfil_background.webp",
  alt = "Background",
  initialOpacity = 1,
  finalOpacity = 0.3,
  fadeEndAt = 80,
}: FixedBackgroundProps) {
  const opacity = useBackgroundOpacity({
    initialOpacity,
    finalOpacity,
    startAt: 0,
    endAt: fadeEndAt,
  });

  return (
    <div
      className="fixed inset-0 -z-10 transition-opacity duration-700"
      style={{ opacity }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={100}
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

export default FixedBackground;

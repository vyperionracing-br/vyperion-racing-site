"use client";
import { useState, type ReactNode } from "react";
// Mostra a imagem; se não houver ou não carregar, mostra o "fallback" (espaço reservado).
export default function Img({ src, alt, className = "", fallback }: { src?: string; alt: string; className?: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

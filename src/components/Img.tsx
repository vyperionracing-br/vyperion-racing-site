"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
// Mostra a imagem; se não houver ou não carregar, mostra o "fallback" (espaço reservado).
export default function Img({ src, alt, className = "", fallback }: { src?: string; alt: string; className?: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // Se a imagem já falhou antes do React carregar, onError não dispara: confere aqui.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);
  if (!src || failed) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

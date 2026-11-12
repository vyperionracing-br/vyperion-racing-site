"use client";
import { useEffect, useRef, type ReactNode } from "react";

// Nome nos créditos. Parece texto comum: sem cursor, sem efeito, sem animação.
// 10 cliques seguidos (no máximo 4s entre um e outro) abrem a página escondida.
const CLICKS = 10;
const GAP_MS = 4000;

export default function SecretCredit({ children, className = "" }: { children: ReactNode; className?: string }) {
  const count = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onClick = () => {
    if (timer.current) clearTimeout(timer.current);
    count.current += 1;
    if (count.current >= CLICKS) { count.current = 0; window.location.assign("/surpresa"); return; }
    timer.current = setTimeout(() => { count.current = 0; }, GAP_MS);
  };

  return (
    <div onClick={onClick} className={`select-none ${className}`} style={{ touchAction: "manipulation" }}>
      {children}
    </div>);
}

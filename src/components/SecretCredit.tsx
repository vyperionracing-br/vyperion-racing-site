"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Nome nos créditos. Parece texto comum: sem cursor, sem efeito, sem animação.
// 7 cliques seguidos (no máximo 3s entre um e outro) abrem a página escondida.
const CLICKS = 7;
const GAP_MS = 3000;

export default function SecretCredit({ name }: { name: string }) {
  const router = useRouter();
  const count = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onClick = () => {
    if (timer.current) clearTimeout(timer.current);
    count.current += 1;
    if (count.current >= CLICKS) { count.current = 0; router.push("/surpresa"); return; }
    timer.current = setTimeout(() => { count.current = 0; }, GAP_MS);
  };

  return (
    <span onClick={onClick} className="inline-block select-none px-2 py-3 -my-3" style={{ touchAction: "manipulation" }}>
      {name}
    </span>);
}

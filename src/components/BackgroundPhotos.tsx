"use client";
import { useEffect, useState } from "react";

// 4 fotos de fundo, na ordem da página (topo → fim). Arquivos em public/images/.
// Se a extensão for outra (.png, .jpeg), mude aqui.
const PHOTOS = ["/images/fundo-carro-1.jpeg", "/images/fundo-carro-2.jpeg", "/images/fundo-carro-3.jpeg", "/images/fundo-carro-4.jpeg"];
// Escurecimento base por cima das fotos (0 a 1). Mais alto = mais escuro.
const DARK = 0.5;
// Manchas de "fumaça" preta (paradas e se movendo bem devagar)
const SMOKE = [
  "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.6), transparent 45%)",
  "radial-gradient(circle at 78% 55%, rgba(0,0,0,0.65), transparent 50%)",
  "radial-gradient(circle at 45% 92%, rgba(0,0,0,0.55), transparent 45%)",
].join(", ");

export default function BackgroundPhotos() {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(PHOTOS.map(() => false));

  // só usa as fotos que existem
  useEffect(() => {
    PHOTOS.forEach((src, i) => {
      const img = new Image();
      img.onload = () => setLoaded((l) => l.map((v, j) => (j === i ? true : v)));
      img.src = src;
    });
  }, []);

  // troca a foto conforme o progresso da rolagem (4 faixas iguais)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setIdx(Math.min(PHOTOS.length - 1, Math.floor(p * PHOTOS.length)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!loaded.some(Boolean)) return null;
  return (
    <div aria-hidden className="fixed inset-0 -z-20 pointer-events-none">
      {PHOTOS.map((src, i) => (
        <div key={src} className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: loaded[i] ? `url(${src})` : "none", opacity: i === idx ? 1 : 0 }} />
      ))}
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${DARK})` }} />
      <div className="smoke absolute -inset-[20%]" style={{ background: SMOKE, filter: "blur(30px)" }} />
    </div>);
}

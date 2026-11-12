"use client";
import { useEffect, useState } from "react";

// Corações caindo bem devagar. Gerados só no navegador (evita diferença servidor/cliente).
const EMOJIS = ["❤️", "💕", "💗", "🤍", "💖", "❤️"];
const COUNT = 18;

interface Heart { e: string; x: number; s: number; d: number; delay: number; o: number; sway: number; }

export default function Hearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  useEffect(() => {
    const r = (a: number, b: number) => a + Math.random() * (b - a);
    setHearts(Array.from({ length: COUNT }, (_, i) => {
      const d = r(18, 32);
      return { e: EMOJIS[i % EMOJIS.length], x: r(2, 96), s: r(14, 28), d, delay: -r(0, d), o: r(0.25, 0.55), sway: r(-40, 40) };
    }));
  }, []);
  return (
    <div className="sp-hearts" aria-hidden>
      {hearts.map((h, i) => (
        <span key={i} className="sp-heart"
          style={{ "--x": `${h.x}%`, "--s": `${h.s}px`, "--d": `${h.d}s`, "--delay": `${h.delay}s`, "--o": h.o, "--sway": `${h.sway}px` } as React.CSSProperties}>
          {h.e}
        </span>))}
    </div>);
}

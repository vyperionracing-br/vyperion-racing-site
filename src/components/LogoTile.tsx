"use client";
import Img from "./Img";
// Logo quadrado, mesmo tamanho para todos, sem moldura: aparece o logo como ele é.
export default function LogoTile({ name, src, link, size }: { name: string; src?: string; link: string; size: string }) {
  return (
    <a href={link} aria-label={name} className={`${size} shrink-0 rounded-xl overflow-hidden flex items-center justify-center`}>
      <Img src={src} alt={name} className="w-full h-full object-contain"
        fallback={<span className="px-2 text-center text-xs font-bold text-white/80">{name}</span>} />
    </a>);
}

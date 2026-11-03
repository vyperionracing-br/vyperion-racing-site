"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Cpu, Users, Leaf, TrendingUp, Handshake, Mail, Maximize, Languages, Box } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { ui } from "@/data/content";

const items = [
  { id: "hero", Icon: Home }, { id: "stem", Icon: Cpu }, { id: "car3d", Icon: Box }, { id: "team", Icon: Users },
  { id: "impact", Icon: Leaf }, { id: "progress", Icon: TrendingUp }, { id: "partners", Icon: Handshake }, { id: "contact", Icon: Mail },
] as const;

export default function Navigation() {
  const { t, lang, toggle } = useLang();
  const [active, setActive] = useState<string>("hero");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => { // scroll spy
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    items.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Mantém o botão ativo visível quando o menu rola (celular)
  useEffect(() => {
    const box = scroller.current;
    const btn = document.getElementById(`nav-${active}`);
    if (box && btn) box.scrollTo({ left: btn.offsetLeft - (box.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const fs = () => { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.(); };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy/75 border-b border-cyan/25 pt-[env(safe-area-inset-top)]">
      <div className="flex items-center gap-2 px-2 md:px-4">
        {/* Seções: rolam para o lado se não couberem */}
        <div ref={scroller} className="no-scrollbar flex-1 min-w-0 overflow-x-auto">
          <div className="relative flex min-w-max justify-around gap-1">
            {items.map(({ id, Icon }) => (
              <motion.button key={id} id={`nav-${id}`} whileTap={{ scale: 0.95 }} onClick={() => go(id)} aria-label={t(ui.nav[id])}
                className={`btn flex flex-col lg:flex-row items-center justify-center gap-0.5 lg:gap-2 px-2 sm:px-3 lg:px-4 rounded-lg font-display text-[10px] lg:text-sm whitespace-nowrap transition-colors ${active === id ? "text-cyan bg-cyan/10" : "text-muted"}`}>
                <Icon size={20} /><span className="hidden sm:inline">{t(ui.nav[id])}</span>
              </motion.button>))}
          </div>
        </div>
        {/* Idioma e tela cheia: sempre fixos à direita, fora da rolagem */}
        <div className="flex shrink-0 items-center gap-1">
          <motion.button whileTap={{ scale: 0.95 }} onClick={toggle} aria-label="Language"
            className="btn flex items-center justify-center gap-1.5 px-3 rounded-full border border-cyan text-cyan font-display text-xs sm:text-sm">
            <Languages size={18} />{lang === "pt" ? "EN" : "PT"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={fs} aria-label={t(ui.fullscreen)} className="btn hidden sm:flex items-center justify-center px-3 text-muted">
            <Maximize size={20} />
          </motion.button>
        </div>
      </div>
    </motion.nav>);
}

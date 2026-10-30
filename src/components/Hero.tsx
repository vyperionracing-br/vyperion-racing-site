"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import Img from "./Img";
import { ui, tagline } from "@/data/content";
import { images } from "@/data/images";
export default function Hero() {
  const { t } = useLang();
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 gap-6">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-5 w-full">
        <div className="w-32 h-32 rounded-full border-2 border-cyan shadow-glow flex items-center justify-center overflow-hidden bg-card">
          <Img src={images.logo} alt="Vyperion Racing" className="w-full h-full object-contain p-3" fallback={<span className="font-display text-4xl text-cyan">VR</span>} />
        </div>
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-wide">VYPERION RACING</h1>
        {/* Logo da STEM Racing logo abaixo do título (sem borda) */}
        <div className="flex items-center justify-center">
          <Img src={images.stemLogo} alt="STEM Racing" className="h-28 md:h-36 w-auto max-w-[90vw] md:max-w-[420px] object-contain" fallback={<span className="px-6 py-8 font-display font-bold text-white">STEM RACING</span>} />
        </div>
        <p className="font-display text-xl md:text-2xl text-cyan">{tagline}</p>
        <p className="font-display text-sm text-muted tracking-widest">STEM RACING 2026/2027</p>
        <p className="text-xs text-muted">Cascavel · Brazil</p>
        <motion.button whileTap={{ scale: 0.95 }} onClick={() => document.getElementById("stem")?.scrollIntoView({ behavior: "smooth" })}
          className="btn px-10 rounded-full bg-cyan text-navy font-display font-bold text-lg">{t(ui.explore)}</motion.button>
      </motion.div>
    </section>);
}

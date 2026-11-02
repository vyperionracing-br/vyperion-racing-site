"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { stagger, rise, vp } from "./Section";
import Img from "./Img";
import { useLang } from "./LanguageProvider";
import { impactCards, ui } from "@/data/content";
import { impactGalleries } from "@/data/gallery";

// Faixa de fotos: deslize para o lado (direita → esquerda)
function Gallery({ photos, alt }: { photos: string[]; alt: string }) {
  const { lang } = useLang();
  return (
    <div className="mt-5">
      <p className="text-xs text-muted mb-2">{lang === "pt" ? "Fotos do projeto · deslize para o lado →" : "Project photos · swipe sideways →"}</p>
      <div className="flex gap-3 overflow-x-auto snap-x pb-3">
        {photos.map((src, i) => (
          <div key={src} className="snap-start shrink-0 w-44 md:w-52 h-60 md:h-72 rounded-xl overflow-hidden border border-cyan/20 bg-card/60">
            <Img src={src} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" fallback={null} />
          </div>))}
      </div>
    </div>);
}

export default function ImpactSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section id="impact" title="Beyond the Track">
      <p className="max-w-3xl text-muted leading-relaxed">{t(ui.impactText)}</p>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-10 grid md:grid-cols-2 gap-6 items-start">
        {impactCards.map((c) => { const isOpen = open === c.id; return (
          <motion.div key={c.id} variants={rise} className="min-w-0">
            <div className="rounded-2xl bg-card/80 border border-cyan/30 overflow-hidden">
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setOpen(isOpen ? null : c.id)} className="w-full text-left p-6 min-h-[56px]">
                <h3 className="font-display text-xl font-bold text-cyan">{t(c.title)}</h3>
                <p className="text-muted mt-2">{t(c.summary)}</p>
                <div className="mt-5 flex items-center gap-4">
                  <span className="font-display font-black text-4xl text-cyan">{c.stat}</span>
                  <div><p className="font-display text-sm">{t(c.statTitle)}</p><p className="text-xs text-muted">{t(c.statText)}</p></div>
                </div>
                <p className="mt-4 text-sm text-teal">{isOpen ? t(ui.close) : t(ui.more)}</p>
              </motion.button>
              <AnimatePresence initial={false}>{isOpen && (
                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-6 space-y-3 text-sm">
                  {c.details.map((d) => <li key={d.en}>{t(d)}</li>)}<li className="pb-4" /></motion.ul>)}</AnimatePresence>
            </div>
            {impactGalleries[c.id] && <Gallery photos={impactGalleries[c.id]} alt={t(c.title)} />}
          </motion.div>); })}
      </motion.div>
    </Section>);
}

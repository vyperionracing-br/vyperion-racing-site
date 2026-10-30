"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { stagger, rise, vp } from "./Section";
import { useLang } from "./LanguageProvider";
import { impactCards, ui } from "@/data/content";
export default function ImpactSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section id="impact" title="Beyond the Track">
      <p className="max-w-3xl text-muted leading-relaxed">{t(ui.impactText)}</p>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-10 grid md:grid-cols-2 gap-6 items-start">
        {impactCards.map((c) => { const isOpen = open === c.id; return (
          <motion.div key={c.id} variants={rise} className="rounded-2xl bg-card/80 border border-cyan/30 overflow-hidden">
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
          </motion.div>); })}
      </motion.div>
    </Section>);
}

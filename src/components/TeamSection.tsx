"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section, { stagger, rise, vp } from "./Section";
import Img from "./Img";
import { useLang } from "./LanguageProvider";
import { teamMembers, pillars, ui } from "@/data/content";
import { teamPhotos, images } from "@/data/images";
export default function TeamSection() {
  const { t } = useLang();
  const [shown, setShown] = useState<number | null>(null);
  return (
    <Section id="team" title={t(ui.aboutTitle)} subtitle={t(ui.aboutSub)}>
      <p className="max-w-3xl text-muted leading-relaxed">{t(ui.aboutText)}</p>
      <div className="mt-8">
        <p className="font-display text-sm text-cyan mb-3">{t(ui.pillarsTitle)}</p>
        <div className="flex flex-wrap gap-3">
          {pillars.map((p) => <span key={p.en} className="px-4 py-2 rounded-full border border-cyan/40 bg-card/80 text-sm">{t(p)}</span>)}
        </div>
      </div>
      <Img src={images.teamPhoto} alt="Equipe Vyperion Racing" className="mt-10 w-full max-w-3xl rounded-2xl border border-cyan/30" fallback={null} />
      <h3 className="mt-14 font-display font-bold text-xl md:text-2xl">{t(ui.teamTitle)}</h3>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {teamMembers.map((m, i) => (
          <motion.button key={m.name} variants={rise} whileTap={{ scale: 0.95 }} onClick={() => setShown(shown === i ? null : i)}
            className="p-5 rounded-2xl bg-card/80 border border-cyan/20 text-center min-h-[220px] flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full border-2 border-cyan overflow-hidden flex items-center justify-center font-display text-2xl text-cyan">
              <Img src={teamPhotos[m.name]} alt={m.name} className="w-full h-full object-cover" fallback={<span>{m.name[0]}</span>} />
            </div>
            <h4 className="font-display font-bold text-sm">{m.name}</h4>
            <p className="text-xs text-teal">{t(m.role)}</p>
            <p className={`text-xs text-muted transition-opacity duration-300 ${shown === i ? "opacity-100" : "opacity-0"}`}>{t(m.bio)}</p>
          </motion.button>))}
      </motion.div>
    </Section>);
}

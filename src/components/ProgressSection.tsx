"use client";
import { motion } from "framer-motion";
import Section, { stagger, rise, vp } from "./Section";
import { useLang } from "./LanguageProvider";
import { timelineEvents, ui } from "@/data/content";
// Linha do tempo (deslize para o lado). O último marco é futuro e ganha a etiqueta "Em breve".
export default function ProgressSection() {
  const { t } = useLang();
  return (
    <Section id="progress" title={t(ui.journeyTitle)}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="flex gap-6 overflow-x-auto pb-6 snap-x">
        {timelineEvents.map((e) => (
          <motion.div key={e.date.en} variants={rise} className={`snap-start shrink-0 w-64 border-t-2 pt-4 relative ${e.future ? "border-cyan" : "border-cyan/50"}`}>
            <span className={`absolute -top-[7px] left-0 w-3 h-3 rounded-full ${e.future ? "bg-cyan" : "bg-teal"}`} />
            <p className="font-display text-cyan text-sm">{t(e.date)}</p>
            {e.future && <span className="inline-block mt-1 px-2 py-0.5 rounded-full border border-cyan text-cyan text-[10px] font-display">{t(ui.upcoming)}</span>}
            <h3 className="font-bold mt-2">{t(e.title)}</h3>
            <p className="text-sm text-muted mt-1">{t(e.text)}</p>
          </motion.div>))}
      </motion.div>
    </Section>);
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Wrench, FlaskConical, Flag, Ruler, Factory, Wind, Megaphone, Presentation, HeartHandshake } from "lucide-react";
import Section, { stagger, rise, vp } from "./Section";
import { useLang } from "./LanguageProvider";
import { stemSteps, stemFacts, stemTasks, ui } from "@/data/content";
const stepIcons = { pencil: Pencil, wrench: Wrench, flask: FlaskConical, flag: Flag };
const taskIcons = { ruler: Ruler, factory: Factory, wind: Wind, megaphone: Megaphone, presentation: Presentation, heart: HeartHandshake };
const letters = ["Science", "Technology", "Engineering", "Mathematics"];
export default function StemSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="stem" title={t(ui.stemTitle)}>
      <p className="max-w-3xl text-muted leading-relaxed">{t(ui.stemIntro)}</p>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stemFacts.map((f) => (
          <motion.div key={f.big} variants={rise} className="p-4 rounded-2xl bg-card/80 border border-cyan/30 text-center">
            <p className="font-display font-bold text-2xl md:text-3xl text-cyan">{f.big}</p>
            <p className="text-xs text-muted mt-1">{t(f.label)}</p>
          </motion.div>))}
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-8 flex flex-wrap items-center gap-3">
        <span className="text-sm text-muted mr-2">STEM =</span>
        {letters.map((x) => (
          <motion.span key={x} variants={rise} className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/40 bg-card/80">
            <b className="font-display text-cyan">{x[0]}</b><span className="text-sm">{x}</span></motion.span>))}
      </motion.div>
      <h3 className="mt-14 font-display font-bold text-xl md:text-2xl">{t(ui.whatTeamDoes)}</h3>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stemTasks.map((k) => { const Icon = taskIcons[k.icon as keyof typeof taskIcons]; return (
          <motion.div key={k.icon} variants={rise} className="flex gap-4 p-5 rounded-2xl bg-card/80 border border-cyan/20">
            <Icon className="text-cyan shrink-0" size={28} />
            <div><h4 className="font-display font-bold text-sm">{t(k.title)}</h4><p className="text-sm text-muted mt-1">{t(k.text)}</p></div>
          </motion.div>); })}
      </motion.div>
      <h3 className="mt-14 font-display font-bold text-xl md:text-2xl">{t(ui.fourSteps)}</h3>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stemSteps.map((s) => { const Icon = stepIcons[s.icon]; return (
          <motion.button key={s.n} variants={rise} whileTap={{ scale: 0.95 }} onClick={() => setOpen(open === s.n ? null : s.n)}
            className="text-left p-5 rounded-2xl bg-card/80 border border-cyan/30 shadow-glow min-h-[56px]">
            <Icon className="text-cyan" size={28} />
            <p className="mt-3 font-display text-cyan text-sm">0{s.n}</p>
            <h4 className="font-display font-bold">{s.title}</h4>
            <p className="text-sm text-muted mt-1">{t(s.short)}</p>
            <AnimatePresence>{open === s.n && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden text-sm mt-3 text-white">{t(s.extra)}</motion.p>)}</AnimatePresence>
          </motion.button>); })}
      </motion.div>
    </Section>);
}

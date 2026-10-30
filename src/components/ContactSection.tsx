"use client";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import Section from "./Section";
import Img from "./Img";
import LogoTile from "./LogoTile";
import { useLang } from "./LanguageProvider";
import { links, partners, ui, tagline } from "@/data/content";
import { images, partnerLogos } from "@/data/images";

// Rodapé: três grupos por tamanho de logo. Os nomes precisam ser iguais aos de content.ts.
const footerGroups = [
  { size: "w-36 h-36 md:w-44 md:h-44", names: ["Studio Sherpe", "Nando Mecânica", "Sicredi", "Colégio SESI", "SENAI"] },
  { size: "w-28 h-28 md:w-36 md:h-36", names: ["Sindirepa", "Ceola Uniformes", "RM Usinagem", "Boys Express", "Mecânica Estrela"] },
  { size: "w-20 h-20 md:w-28 md:h-28", names: ["Rhaela Semijoias", "Imprecad Gráfica Rápida", "Enerrgy", "Person 3D", "Vitória Pneus e Rodas"] },
];

export default function ContactSection() {
  const { t } = useLang();
  const btn = "btn flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-cyan bg-card/80 font-display font-bold";
  return (<>
    <Section id="contact" title={t(ui.contactTitle)}>
      <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
        <motion.a whileTap={{ scale: 0.95 }} href={links.instagram} target="_blank" rel="noreferrer" className={btn}><Instagram /> Instagram</motion.a>
        <motion.a whileTap={{ scale: 0.95 }} href={`mailto:${links.email}`} className={btn}><Mail /> E-mail</motion.a>
      </div>
      <div className="mt-10 w-44 h-44 rounded-2xl border border-cyan/40 bg-white flex items-center justify-center overflow-hidden">
        <Img src={images.qr} alt="QR Code" className="w-full h-full object-contain p-2" fallback={<span className="text-navy/60 text-sm">QR Code</span>} />
      </div>
      <p className="mt-8 text-muted max-w-xl">{t(ui.contactText)}</p>
    </Section>

    <footer className="border-t border-cyan/25 bg-card/85 px-6 py-10 text-center">
      <p className="font-display text-xs tracking-[0.3em] text-cyan">{t(ui.sponsors).toUpperCase()}</p>
      {footerGroups.map((g) => (
        <div key={g.size} className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {g.names.map((n) => {
            const p = partners.find((x) => x.name === n);
            return p ? <LogoTile key={n} name={n} src={partnerLogos[n]} link={p.link} size={g.size} /> : null;
          })}
        </div>))}
      <div className="mt-10 mx-auto w-14 h-14 rounded-full border-2 border-cyan flex items-center justify-center overflow-hidden">
        <Img src={images.logo} alt="Vyperion" className="w-full h-full object-contain p-1" fallback={<span className="font-display text-cyan">VR</span>} />
      </div>
      <p className="mt-4 font-display text-sm">VYPERION RACING © 2026 · Colégio SESI Cascavel — PR</p>
      <p className="mt-1 text-cyan font-display text-xs">{tagline}</p>
    </footer></>);
}

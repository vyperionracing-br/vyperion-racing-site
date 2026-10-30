"use client";
import { motion } from "framer-motion";
import Section, { stagger, rise, vp } from "./Section";
import LogoTile from "./LogoTile";
import { useLang } from "./LanguageProvider";
import { partners, ui } from "@/data/content";
import { partnerLogos } from "@/data/images";
import type { Localized, Partner } from "@/types";

// Todos os logos têm o mesmo tamanho.
function Group({ title, items }: { title: Localized; items: Partner[] }) {
  const { t } = useLang();
  return (<>
    <h3 className="mt-12 mb-6 font-display font-bold text-lg md:text-xl text-center">{t(title)}</h3>
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp} className="flex flex-wrap justify-center gap-6 md:gap-8">
      {items.map((p) => (
        <motion.div key={p.name} variants={rise} whileTap={{ scale: 0.95 }}>
          <LogoTile name={p.name} src={partnerLogos[p.name]} link={p.link} size="w-40 h-40 md:w-48 md:h-48" />
        </motion.div>))}
    </motion.div>
  </>);
}
export default function PartnersSection() {
  const { t } = useLang();
  return (
    <Section id="partners" title={t(ui.partnersTitle)}>
      <p className="max-w-3xl mx-auto text-center text-muted leading-relaxed">{t(ui.partnersText)}</p>
      <Group title={ui.institutionsTitle} items={partners.filter((p) => p.kind === "institution")} />
      <Group title={ui.sponsorsTitle} items={partners.filter((p) => p.kind === "sponsor")} />
      <p className="mt-12 text-center text-sm text-muted">{t(ui.partnersCount)}</p>
    </Section>);
}

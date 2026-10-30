"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
// Animações repetem sempre que o elemento volta à tela (once: false).
export const vp = { once: false, amount: 0.15 } as const;
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
export const rise = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
export default function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="min-h-screen px-6 md:px-12 lg:px-20 py-24 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.05 }} transition={{ duration: 0.5 }}>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-cyan">{title}</h2>
        <div className="mt-3 h-[2px] w-24 bg-cyan/70" />
        {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>);
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Img from "@/components/Img";
import { images } from "@/data/images";
import { letterParagraphs } from "@/data/surpresa";

const reveal = { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.8 } } as const;

export default function Letter() {
  return (
    <main className="sp-letter">
      <header className="sp-head">
        <p className="sp-over">Vyperion Racing · STEM Racing</p>
        <h1 className="sp-title">Parabéns, Alexandra</h1>
        <div className="sp-rule"><span>♥</span></div>
      </header>

      <div className="sp-text">
        {letterParagraphs.map((p, i) => (
          <motion.p key={i} {...reveal} className={i === 0 ? "sp-lead" : undefined}>{p}</motion.p>))}
      </div>

      <motion.figure {...reveal} className="sp-photo">
        <Img src={images.surpresa} alt="Nós dois" className="sp-img"
          fallback={<div className="sp-img sp-img-empty" aria-hidden>🤍</div>} />
      </motion.figure>

      <Link href="/" className="sp-back sp-back-end">← voltar ao site</Link>
    </main>);
}

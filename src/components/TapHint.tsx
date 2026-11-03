"use client";
import { motion } from "framer-motion";
import { Hand, Plus } from "lucide-react";
import { useLang } from "./LanguageProvider";

// Linha discreta que avisa que os cards são clicáveis
export function TapCaption() {
  const { lang } = useLang();
  return (
    <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
      <Hand size={14} className="text-cyan/80" />
      {lang === "pt" ? "Toque nos cards para ver mais" : "Tap the cards to see more"}
    </p>);
}

// Selo "+" no canto do card; gira para "×" quando o card está aberto
export function PlusBadge({ open }: { open: boolean }) {
  return (
    <motion.span aria-hidden animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
      className="absolute top-3 right-3 w-6 h-6 rounded-full border border-cyan/60 text-cyan flex items-center justify-center">
      <Plus size={14} />
    </motion.span>);
}

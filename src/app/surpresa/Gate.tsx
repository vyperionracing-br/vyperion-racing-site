"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { gateQuestion } from "@/data/surpresa";

// Resposta certa: 28 de março. Aceita "28 de março", "28/03", "28/3", "28 marco", "dia 28 de março de 2026"...
function isRight(raw: string) {
  const n = raw.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  return /^(dia )?28 (de )?(0?3|marco)( |$)/.test(n);
}

export default function Gate({ onOpen }: { onOpen: () => void }) {
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(0); // conta os erros; também reinicia a animação do tremor

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (isRight(value)) onOpen(); else setWrong((w) => w + 1);
  };

  return (
    <main className="sp-gate">
      <p className="sp-over">uma pergunta só nossa</p>
      <h1 className="sp-question">{gateQuestion}</h1>
      <form onSubmit={submit} className="sp-form">
        <input key={wrong} className={`sp-input ${wrong ? "sp-shake" : ""}`} value={value} onChange={(e) => setValue(e.target.value)}
          placeholder="dia e mês" autoComplete="off" autoCapitalize="none" spellCheck={false} aria-label="Resposta" />
        <button type="submit" className="sp-btn">Entrar</button>
      </form>
      <p className="sp-hint" aria-live="polite">{wrong ? "Hmm, não é essa 🥲 tenta de novo" : " "}</p>
      <Link href="/" className="sp-back">← voltar ao site</Link>
    </main>);
}

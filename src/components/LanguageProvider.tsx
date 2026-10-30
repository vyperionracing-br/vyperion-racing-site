"use client";
// Idioma global (PT-BR / EN). Use: const { t, lang, toggle } = useLang(); t(objetoLocalizado)
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang, Localized } from "@/types";
interface Ctx { lang: Lang; toggle: () => void; t: (l: Localized) => string; }
const LangCtx = createContext<Ctx>({ lang: "pt", toggle: () => {}, t: (l) => l.pt });
export const useLang = () => useContext(LangCtx);
export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => { document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"; }, [lang]);
  return (
    <LangCtx.Provider value={{ lang, toggle: () => setLang((l) => (l === "pt" ? "en" : "pt")), t: (l) => l[lang] }}>
      {children}
    </LangCtx.Provider>);
}

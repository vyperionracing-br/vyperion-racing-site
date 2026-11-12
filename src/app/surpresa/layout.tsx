import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./surpresa.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });
const body = Lora({ subsets: ["latin"], variable: "--font-lora" });

// Página escondida: não aparece em buscadores.
export const metadata: Metadata = { title: "Para você", robots: { index: false, follow: false } };

export default function SurpresaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${serif.variable} ${body.variable}`}>{children}</div>;
}

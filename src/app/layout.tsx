import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "VYPERION RACING — Modern, Fast, Vyperion.", description: "STEM Racing 2026/2027 · Colégio SESI Cascavel",
  // Favicon: usa o logo da Vyperion (public/images/logo.jpeg)
  icons: { icon: "/images/logo.jpeg", apple: "/images/logo.jpeg" } };
export const viewport: Viewport = { themeColor: "#001935", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR" className={`${orbitron.variable} ${inter.variable}`}><body><LanguageProvider>{children}</LanguageProvider></body></html>);
}

"use client";
import { useEffect, useRef } from "react";
import BackgroundPhotos from "@/components/BackgroundPhotos";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StemSection from "@/components/StemSection";
import Car3D from "@/components/Car3D";
import TeamSection from "@/components/TeamSection";
import ImpactSection from "@/components/ImpactSection";
import ProgressSection from "@/components/ProgressSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const ATTRACT_MS = 90_000; // 90s sem interação → volta ao #hero
export default function Page() {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const reset = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }), ATTRACT_MS);
    };
    const evs = ["pointerdown", "keydown", "scroll", "touchstart"];
    evs.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();
    return () => { evs.forEach((e) => window.removeEventListener(e, reset)); if (timer.current) clearTimeout(timer.current); };
  }, []);
  return (<>
    <BackgroundPhotos /><Navigation /><main>
      <Hero /><StemSection /><Car3D /><TeamSection /><ImpactSection /><ProgressSection /><PartnersSection /><ContactSection />
    </main></>);
}

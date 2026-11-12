"use client";
import { useEffect, useState } from "react";
import Hearts from "./Hearts";
import Gate from "./Gate";
import Letter from "./Letter";

const KEY = "vr-surpresa";

// Fluxo: pergunta → página da Alexandra. Quem abrir o endereço direto também cai na pergunta.
export default function Page() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY) === "1") setOpen(true); } catch { /* sem armazenamento: segue normal */ }
    setReady(true);
  }, []);

  const unlock = () => {
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignora */ }
    window.scrollTo(0, 0);
    setOpen(true);
  };

  return (
    <div className="sp-root">
      <Hearts />
      {ready && (open ? <Letter /> : <Gate onOpen={unlock} />)}
    </div>);
}

"use client";
import { useEffect, useRef, useState, createElement } from "react";
import Section from "./Section";
import { useLang } from "./LanguageProvider";

const MODEL = "/models/carro.glb";
// Se o carro aparecer deitado ou virado, ajuste aqui (rotação do modelo: "X Y Z").
const ORIENTATION = "0deg 0deg 0deg";

// Elemento <model-viewer> (só o que usamos)
interface ModelViewerEl extends HTMLElement { cameraOrbit: string; cameraTarget: string; fieldOfView: string; }

export default function Car3D() {
  const { lang } = useLang();
  const tx = (pt: string, en: string) => (lang === "pt" ? pt : en);
  const ref = useRef<ModelViewerEl>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => { import("@google/model-viewer"); }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onError = () => setFailed(true);
    el.addEventListener("error", onError);
    return () => { el.removeEventListener("error", onError); };
  }, []);

  // volta a câmera para a posição inicial, com o carro no centro
  const resetCamera = () => {
    const el = ref.current;
    if (!el) return;
    el.cameraOrbit = "auto auto auto";
    el.cameraTarget = "auto auto auto";
    el.fieldOfView = "auto";
  };

  const specs = [
    { big: "47 g", label: tx("Massa do carro", "Car Mass") },
    { big: tx("Poliuretano + Impressão 3D", "Polyurethane + 3D Printing"), label: tx("Materiais de fabricação", "Manufacturing Materials") },
    { big: "Autodesk Fusion", label: tx("Software de modelagem 3D", "3D Modeling Software") },
    { big: tx("Formato de flecha", "Arrow-Shaped"), label: tx("Design aerodinâmico", "Aerodynamic Design") },
  ];

  return (
    <Section id="car3d" title={tx("Conheça o Apólo", "Meet Apólo")}>
      <p className="font-display text-cyan tracking-widest text-sm">{tx("PROJETADO PARA A VELOCIDADE", "ENGINEERED FOR SPEED")}</p>
      <p className="mt-3 max-w-3xl text-muted leading-relaxed">
        {tx("O Apólo é o carro de corrida em miniatura da Vyperion Racing, desenvolvido para combinar eficiência aerodinâmica, construção leve e engenharia de precisão.",
            "Apólo is Vyperion Racing’s miniature race car, developed to combine aerodynamic efficiency, lightweight construction, and precision engineering.")}
      </p>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((s) => (
          <div key={s.label} className="p-4 rounded-2xl bg-card/80 border border-cyan/30">
            <p className="font-display font-bold text-cyan text-lg leading-tight">{s.big}</p>
            <p className="text-xs text-muted mt-2">{s.label}</p>
          </div>))}
      </div>
      <div className="mt-6 p-5 rounded-2xl bg-card/60 border border-cyan/20 max-w-3xl">
        <h3 className="font-display font-bold text-sm text-cyan">{tx("Características aerodinâmicas", "Aerodynamic Features")}</h3>
        <p className="mt-2 text-sm text-muted">
          {tx("O Apólo tem uma estrutura oca, leve e em formato de flecha, projetada para reduzir o arrasto aerodinâmico e melhorar o desempenho na pista.",
              "Apólo features a hollow, lightweight, arrow-shaped structure designed to reduce aerodynamic drag and enhance racing performance.")}
        </p>
      </div>

      <div className="mt-10 mb-4 flex justify-between items-center gap-4">
        <p className="text-muted text-sm">{tx("Arraste para girar o carro em 360°.", "Drag to rotate the car 360°.")}</p>
        <button onClick={resetCamera}
          className="min-h-[48px] px-5 text-sm text-cyan border border-cyan/40 rounded-full active:scale-95 transition-transform">
          {tx("Resetar câmera", "Reset camera")}
        </button>
      </div>
      <div className="w-full h-[55vh] rounded-3xl border border-cyan/30 bg-card/60 overflow-hidden relative">
        {failed ? (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm">carro.glb</div>
        ) : (
          createElement("model-viewer", {
            ref,
            src: MODEL,
            alt: "Carro da Vyperion Racing",
            "camera-controls": true,
            "disable-zoom": true,   // sem zoom
            "disable-pan": true,    // carro sempre no centro
            "auto-rotate": true,
            "rotation-per-second": "10deg",
            "auto-rotate-delay": "1500",
            "interaction-prompt": "none",
            "touch-action": "none",
            "shadow-intensity": "1",
            orientation: ORIENTATION,
            style: { width: "100%", height: "100%", background: "transparent", outline: "none" },
          })
        )}
      </div>
    </Section>);
}

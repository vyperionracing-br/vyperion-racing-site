// Permite usar <model-viewer> no TSX
import type { DetailedHTMLProps, HTMLAttributes } from "react";
interface ModelViewerAttrs {
  src?: string;
  alt?: string;
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "rotation-per-second"?: string;
  "auto-rotate-delay"?: string;
  "interaction-prompt"?: string;
  "disable-zoom"?: boolean;
  "touch-action"?: string;
  "shadow-intensity"?: string;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & ModelViewerAttrs;
    }
  }
}
export {};

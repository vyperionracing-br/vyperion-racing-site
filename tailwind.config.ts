import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#001935", card: "#001935", teal: "#117d82", cyan: "#35ecde", muted: "#a0c0d0" },
    fontFamily: { display: ["var(--font-orbitron)", "sans-serif"], body: ["var(--font-inter)", "sans-serif"] },
    boxShadow: { glow: "0 0 24px rgba(53,236,222,0.25)" },
  } },
  plugins: [],
};
export default config;

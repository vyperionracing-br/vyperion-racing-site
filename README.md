# VYPERION RACING — Pitch Display
Instalar e rodar: `npm install && npm run dev` → http://localhost:3000

## Onde trocar
- Foto do carro: `public/images/carro.png` (Hero.tsx e ProgressSection.tsx)
- Logo: `public/images/logo.jpeg` (Hero.tsx, ContactSection.tsx)
- Fotos dos integrantes: TeamSection.tsx
- Logos dos parceiros: PartnersSection.tsx + `src/data/content.ts`
- Instagram / e-mail: `links` em `src/data/content.ts`
- QR Code: ContactSection.tsx
- Gráficos e textos: `src/data/content.ts`

## Deploy GitHub + Vercel
1. `git init && git add . && git commit -m "Vyperion site"`
2. Crie um repositório no GitHub: `git remote add origin <url> && git push -u origin main`
3. Em vercel.com: Add New → Project → importe o repositório → Deploy (preset Next.js automático).

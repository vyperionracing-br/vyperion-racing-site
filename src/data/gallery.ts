// Fotos dos projetos sociais. As pastas ficam dentro de public/ (com esses nomes, com espaço e maiúsculas):
//   public/Acelera STEAM/acelera-stem-1.jpeg ... 5
//   public/Vyperion Wear/projeto-social-sustentavel-1.jpeg ... 9
// A chave é o "id" do card em content.ts (social = Acelera STEAM, sustain = Vyperion Wear).
// "skip" = números das fotos que NÃO devem aparecer.
const build = (folder: string, prefix: string, total: number, skip: number[] = []): string[] =>
  Array.from({ length: total }, (_, i) => i + 1)
    .filter((n) => !skip.includes(n))
    .map((n) => `/${encodeURIComponent(folder)}/${prefix}-${n}.jpeg`);

export const impactGalleries: Record<string, string[]> = {
  social: build("Acelera STEAM", "acelera-stem", 5),
  sustain: build("Vyperion Wear", "projeto-social-sustentavel", 9, [6, 8]), // sem as fotos 6 e 8
};

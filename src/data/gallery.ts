// Fotos dos projetos sociais. As pastas ficam dentro de public/ (com esses nomes, com espaço e maiúsculas):
//   public/Acelera STEAM/acelera-stem-1.jpeg ... 5
//   public/Vyperion Wear/projeto-social-sustentavel-1.jpeg ... 9
// A chave é o "id" do card em content.ts (social = Acelera STEAM, sustain = Vyperion Wear).
const build = (folder: string, prefix: string, total: number): string[] =>
  Array.from({ length: total }, (_, i) => `/${encodeURIComponent(folder)}/${prefix}-${i + 1}.jpeg`);

export const impactGalleries: Record<string, string[]> = {
  social: build("Acelera STEAM", "acelera-stem", 5),
  sustain: build("Vyperion Wear", "projeto-social-sustentavel", 9),
};

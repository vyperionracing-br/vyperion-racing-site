// Caminhos das imagens (dentro de public/images). Se o arquivo não existir, aparece o espaço reservado.
// Se o nome do SEU arquivo for diferente, mude o caminho aqui.
export const images = {
  logo: "/images/logo.jpeg",              // logo da Vyperion
  car: "/images/carro.png",              // foto do carro (Apólo)
  stemLogo: "/images/stem-racing.png",   // logo da STEM Racing
  qr: "/images/qr.png",                  // QR Code
  teamPhoto: "/images/foto-do-time.png", // foto de toda a equipe (seção Sobre Nós)
};

// Foto de cada integrante: a chave é o NOME igual ao de content.ts
export const teamPhotos: Record<string, string> = {
  "Alexandra Rodriguez": "/images/equipe/alexandra.jpeg",
  "Nicolle Tebaldi": "/images/equipe/nicole.jpeg",
  "Nicoly de Lara": "/images/equipe/nicoly.jpeg",
  "Lucas Sousa": "/images/equipe/lucas.jpeg",
  "Hilary de Oliveira": "/images/equipe/hilary.jpeg",
  "João Stein": "/images/equipe/joao.jpeg",
};

// Logo de cada instituição/patrocinador: a chave é o NOME igual ao de content.ts
export const partnerLogos: Record<string, string> = {
  "Colégio SESI": "/images/sesi-industria.png",
  "SENAI": "/images/parceiros/senai.jpeg",
  "Studio Sherpe": "/images/parceiros/studio-sherpe.png",
  "RM Usinagem": "/images/parceiros/rm-usinagem.png",
  "Rhaela Semijoias": "/images/parceiros/rhaela.png",
  "Imprecad Gráfica Rápida": "/images/parceiros/imprecad.png",
  "Boys Express": "/images/parceiros/boys-express.png",
  "Ceola Uniformes": "/images/parceiros/ceola.png",
  "Enerrgy": "/images/parceiros/enerrgy.png",
  "Mecânica Estrela": "/images/parceiros/mecanica-estrela.png",
  "Person 3D": "/images/parceiros/person3d.png",
  "Vitória Pneus e Rodas": "/images/parceiros/vitoria-pneus.jpeg",
  "Nando Mecânica": "/images/parceiros/nando.png",
  "Sicredi": "/images/parceiros/sicredi.jpeg",
  "Sindirepa": "/images/parceiros/sindirepa.jpeg",
};
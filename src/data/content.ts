// EDITE AQUI: textos e dados, sempre em PT e EN.
import type { Localized, StemStep, TeamMember, TimelineEvent, Partner, ImpactCard, Spec } from "@/types";
export const L = (pt: string, en: string): Localized => ({ pt, en });

export const tagline = "Modern, Fast, Vyperion.";
export const links = {
  instagram: "https://instagram.com/vyperionracing",   // TROCAR
  email: "contato@vyperionracing.com",                 // TROCAR
};

export const ui = {
  nav: { hero: L("Home", "Home"), stem: L("STEM", "STEM"), car3d: L("O Carro", "The Car"), team: L("Sobre", "About"), impact: L("Impacto", "Impact"), progress: L("Jornada", "Journey"), partners: L("Parceiros", "Partners"), contact: L("Contato", "Contact") },
  explore: L("Explore a Equipe ↓", "Explore the Team ↓"),
  fullscreen: L("Tela cheia", "Fullscreen"),
  more: L("▼ Saiba mais", "▼ Learn more"), close: L("▲ Fechar", "▲ Close"),
  stemTitle: L("O que é a STEM Racing?", "What is STEM Racing?"),
  stemIntro: L(
    "A STEM Racing, antiga F1 in Schools, é uma competição internacional de educação STEM apoiada pela Formula 1. Cada equipe funciona como uma pequena escuderia: projeta, constrói, testa e corre com um carro de Fórmula 1 em miniatura, enquanto cuida de marca, finanças, patrocínios e apresentações. No Brasil, o programa é representado pelo STEM Racing Brazil e também conta com o SESI.",
    "STEM Racing, formerly F1 in Schools, is an international STEM education competition endorsed by Formula 1. Each team works like a small F1 team: it designs, builds, tests and races a miniature Formula 1 car while managing branding, finances, sponsorship and presentations. In Brazil the program is represented by STEM Racing Brazil and also involves SESI."),
  whatTeamDoes: L("O que uma equipe faz", "What a team does"), fourSteps: L("As 4 etapas", "The 4 stages"),
  // Sobre nós
  aboutTitle: L("Sobre Nós", "About Us"),
  aboutSub: L("Quem somos", "Who We Are"),
  aboutText: L(
    "A Vyperion Racing é uma equipe estudantil de STEM Racing do Colégio SESI, apoiada pelo SENAI, dedicada a unir engenharia, tecnologia, inovação e trabalho em equipe para desenvolver um carro de corrida em miniatura de alto desempenho, gerando impacto social e ambiental positivo além da pista.",
    "Vyperion Racing is a student-led STEM Racing team from Colégio SESI, supported by SENAI, dedicated to combining engineering, technology, innovation, and teamwork to develop a high-performance miniature racing car while creating positive social and environmental impact beyond the track."),
  pillarsTitle: L("Nossos Pilares", "Our Pillars"),
  teamTitle: L("Nossa Equipe", "Our People"),
  // Impacto
  impactText: L("Nosso impacto vai além da pista: um projeto social de iniciação científica em escolas públicas e um projeto de moda sustentável com crianças.", "Our impact goes beyond the track: a social science-outreach project in public schools and a sustainable fashion project with children."),
  // Jornada
  journeyTitle: L("Nossa Jornada", "Our Journey"), upcoming: L("Em breve", "Upcoming"),
  // Carro
  carTitle: L("Conheça o Apólo", "Meet Apólo"), carTag: L("Projetado para a velocidade", "Engineered for speed"),
  carText: L(
    "O Apólo é o carro de corrida em miniatura da Vyperion Racing, desenvolvido para combinar eficiência aerodinâmica, construção leve e engenharia de precisão.",
    "Apólo is Vyperion Racing’s miniature race car, developed to combine aerodynamic efficiency, lightweight construction, and precision engineering."),
  carAeroTitle: L("Características aerodinâmicas", "Aerodynamic Features"),
  carAero: L(
    "O Apólo tem uma estrutura oca, leve e em formato de flecha, projetada para reduzir o arrasto aerodinâmico e melhorar o desempenho na pista.",
    "Apólo features a hollow, lightweight, arrow-shaped structure designed to reduce aerodynamic drag and enhance racing performance."),
  car3dText: L("Arraste para girar o carro em 360°.", "Drag to rotate the car 360°."),
  carPhoto: L("Foto do carro", "Car photo"),
  // Parceiros
  partnersTitle: L("Powered by Partnerships", "Powered by Partnerships"),
  partnersText: L(
    "Nossas instituições de ensino e patrocinadores têm um papel essencial na jornada da Vyperion Racing, apoiando a inovação, a engenharia, a educação e o desenvolvimento de jovens talentos.",
    "Our educational institutions and sponsors play an essential role in Vyperion Racing’s journey, supporting innovation, engineering, education, and the development of young talents."),
  institutionsTitle: L("Instituições de Ensino", "Educational Institutions"),
  sponsorsTitle: L("Nossos Patrocinadores", "Our Sponsors"),
  partnersCount: L("15 organizações de apoio — 2 instituições de ensino e 13 patrocinadores.", "15 supporting organizations — 2 educational institutions and 13 sponsors."),
  becomePartner: L("Seja nosso parceiro →", "Become our partner →"),
  sponsors: L("Patrocinadores", "Sponsors"),
  contactTitle: L("Join Our Journey", "Join Our Journey"),
  contactText: L("Gostou da nossa história? Siga a equipe, escreva para nós e venha fazer parte dessa jornada.", "Enjoyed our story? Follow the team, write to us and be part of this journey."),
};

export const pillars: Localized[] = [
  L("Inovação", "Innovation"), L("Engenharia", "Engineering"), L("Tecnologia", "Technology"),
  L("Trabalho em equipe", "Teamwork"), L("Sustentabilidade", "Sustainability"), L("Impacto Social", "Social Impact"),
];

export const stemFacts = [
  { big: "9–19", label: L("anos: idade dos estudantes", "years: student age range") },
  { big: "1/20", label: L("escala do carro em miniatura", "miniature car scale") },
  { big: "20 m", label: L("pista reta de corrida", "straight race track") },
  { big: "1999", label: L("origem, como F1 in Schools", "origin, as F1 in Schools") },
];
export const stemTasks = [
  { icon: "ruler", title: L("Projetar", "Design"), text: L("Carro aerodinâmico em CAD, seguindo o regulamento técnico.", "Aerodynamic CAD car built to the technical regulations.") },
  { icon: "factory", title: L("Fabricar e testar", "Build & test"), text: L("Produção, testes e ajustes de desempenho.", "Manufacturing, testing and performance tuning.") },
  { icon: "wind", title: L("Correr", "Race"), text: L("Lançamento por cartucho de ar comprimido na pista de 20 m.", "Compressed-air cartridge launch on the 20 m track.") },
  { icon: "megaphone", title: L("Criar a marca", "Build the brand"), text: L("Identidade visual, uniformes, patrocínios e redes sociais.", "Visual identity, uniforms, sponsorship and social media.") },
  { icon: "presentation", title: L("Apresentar", "Present"), text: L("Portfólios e apresentação oral para jurados.", "Portfolios and oral presentation to judges.") },
  { icon: "heart", title: L("Gerar impacto social", "Create social impact"), text: L("Projetos sociais fazem parte da avaliação no Brasil.", "Social projects are part of the judging in Brazil.") },
];
export const stemSteps: StemStep[] = [
  { n: 1, title: "DESIGN", short: L("Projeto em CAD e aerodinâmica", "CAD and aerodynamics"), extra: L("Modelamos o carro em 3D e simulamos o fluxo de ar para reduzir o arrasto.", "We model the car in 3D and simulate airflow to reduce drag."), icon: "pencil" },
  { n: 2, title: "MANUFACTURE", short: L("Usinagem CNC e impressão 3D", "CNC machining and 3D printing"), extra: L("O corpo é usinado em CNC e peças auxiliares são impressas em 3D.", "The body is CNC machined and auxiliary parts are 3D printed."), icon: "wrench" },
  { n: 3, title: "TEST", short: L("Vistoria técnica e testes de pista", "Scrutineering and track tests"), extra: L("Medimos peso e dimensões e repetimos lançamentos para validar o projeto.", "We measure weight and dimensions and repeat launches to validate the design."), icon: "flask" },
  { n: 4, title: "RACE", short: L("Lançamento com CO₂ em 20 metros", "CO₂ launch over 20 meters"), extra: L("O cartucho impulsiona o carro pela pista reta em poucos décimos de segundo.", "The cartridge propels the car down the straight track in a fraction of a second."), icon: "flag" },
];

export const teamMembers: TeamMember[] = [
  { name: "Alexandra Rodriguez", role: L("Gestão de Projetos", "Project Management"), bio: L("Lidera a equipe, gerencia cronogramas, coordena tarefas e acompanha o progresso do projeto.", "Leads the team, manages schedules, coordinates tasks, and monitors project progress.") },
  { name: "Nicolle Tebaldi", role: L("Marketing", "Marketing"), bio: L("Gerencia as redes sociais, as campanhas promocionais e a imagem pública da equipe.", "Manages social media, promotional campaigns, and the team’s public image.") },
  { name: "Nicoly de Lara", role: L("Empresarial", "Enterprise"), bio: L("Gerencia finanças, patrocínios, parcerias e o planejamento de recursos.", "Manages finances, sponsorships, partnerships, and resource planning.") },
  { name: "Lucas Sousa", role: L("Engenheiro de Design", "Design Engineer"), bio: L("Projeta e otimiza a geometria, a aerodinâmica e o modelo 3D do carro.", "Designs and optimizes the car’s geometry, aerodynamics, and 3D model.") },
  { name: "Hilary de Oliveira", role: L("Projeto Social", "Social Project"), bio: L("Planeja e coordena iniciativas sociais, oficinas e o envolvimento com a comunidade.", "Plans and coordinates social initiatives, workshops, and community engagement.") },
  { name: "João Stein", role: L("Engenheiro de Manufatura", "Manufacturing Engineer"), bio: L("Supervisiona a fabricação, a montagem, o controle de qualidade e os ajustes técnicos do carro.", "Oversees car manufacturing, assembly, quality control, and technical adjustments.") },
];

export const timelineEvents: TimelineEvent[] = [
  { date: L("3 de março de 2026", "March 3, 2026"), title: L("Início do Projeto", "Project Kickoff"), text: L("Início oficial do projeto Vyperion Racing.", "Official start of the Vyperion Racing project.") },
  { date: L("18 de março de 2026", "March 18, 2026"), title: L("Lançamento do Projeto Social", "Social Project Launch"), text: L("Começa a iniciativa de impacto social da equipe.", "Beginning of the team’s social impact initiative.") },
  { date: L("28 de abril de 2026", "April 28, 2026"), title: L("Busca por Patrocínios", "Sponsorship Outreach"), text: L("Início da prospecção de patrocínios e do desenvolvimento de parcerias.", "Start of sponsorship prospecting and partnership development.") },
  { date: L("21 de maio de 2026", "May 21, 2026"), title: L("Primeiro Evento — Technovação", "First Event — Technovação"), text: L("Participação da equipe em seu primeiro evento.", "Team participation in its first event.") },
  { date: L("11 de junho de 2026", "June 11, 2026"), title: L("Rebranding da Vyperion Racing", "Vyperion Racing Rebranding"), text: L("Lançamento da identidade visual renovada da equipe.", "Launch of the team’s renewed visual identity.") },
  { date: L("24 de junho de 2026", "June 24, 2026"), title: L("Primeiro Parceiro", "First Partner"), text: L("Primeira parceria oficial conquistada.", "First official partnership secured.") },
  { date: L("27 de outubro de 2026", "October 27, 2026"), title: L("Preparação Final", "Final Preparations"), text: L("Ajustes finais e preparação para o festival regional.", "Final adjustments and preparations for the regional festival.") },
  { date: L("12 de novembro de 2026", "November 12, 2026"), title: L("Festival Regional de Robótica SESI", "SESI Regional Robotics Festival"), text: L("Próxima competição regional de STEM Racing.", "Upcoming regional STEM Racing competition."), future: true },
];

export const carSpecs: Spec[] = [
  { big: L("47 g", "47 g"), label: L("Massa do carro", "Car Mass") },
  { big: L("Poliuretano + Impressão 3D", "Polyurethane + 3D Printing"), label: L("Materiais de fabricação", "Manufacturing Materials") },
  { big: L("Autodesk Fusion", "Autodesk Fusion"), label: L("Software de modelagem 3D", "3D Modeling Software") },
  { big: L("Formato de flecha", "Arrow-Shaped"), label: L("Design aerodinâmico", "Aerodynamic Design") },
];

// kind: "institution" aparece em "Instituições de Ensino"; "sponsor" em "Patrocinadores"
export const partners: Partner[] = [
  { name: "Colégio SESI", kind: "institution", link: "#" },
  { name: "SENAI", kind: "institution", link: "#" },
  { name: "Studio Sherpe", kind: "sponsor", link: "#" },
  { name: "RM Usinagem", kind: "sponsor", link: "#" },
  { name: "Rhaela Semijoias", kind: "sponsor", link: "#" },
  { name: "Imprecad Gráfica Rápida", kind: "sponsor", link: "#" },
  { name: "Boys Express", kind: "sponsor", link: "#" },
  { name: "Ceola Uniformes", kind: "sponsor", link: "#" },
  { name: "Enerrgy", kind: "sponsor", link: "#" },
  { name: "Mecânica Estrela", kind: "sponsor", link: "#" },
  { name: "Person 3D", kind: "sponsor", link: "#" },
  { name: "Vitória Pneus e Rodas", kind: "sponsor", link: "#" },
  { name: "Nando Mecânica", kind: "sponsor", link: "#" },
  { name: "Sicredi", kind: "sponsor", link: "#" },
  { name: "Sindirepa", kind: "sponsor", link: "#" },
];

export const impactCards: ImpactCard[] = [
  { id: "social", title: L("Impacto Social — Acelera STEAM", "Social Impact — Acelera STEAM"),
    summary: L("Tornar a pesquisa científica mais acessível para estudantes de escolas públicas.", "Make scientific research more accessible to public school students."),
    details: [
      L("Projeto: Acelera STEAM.", "Project: Acelera STEAM."),
      L("Missão: tornar a pesquisa científica mais acessível a estudantes de escolas públicas por meio de mentoria, orientação técnica e apoio financeiro.", "Mission: Make scientific research more accessible to public school students through mentoring, technical guidance, and financial support."),
      L("Atividades: mentoria em pesquisa, desenvolvimento de projetos, inscrição em competições, financiamento de banners, artigos, materiais e taxas de participação, além de apoio contínuo durante o desenvolvimento dos projetos e nas feiras de ciências.", "Activities: Research mentoring, project development, competition registration, funding for banners, articles, materials, and participation fees, plus continuous support throughout project development and science fairs."),
    ],
    stat: "3º", statTitle: L("Nossa conquista", "Our Achievement"),
    statText: L("Um projeto científico apoiado pelo Acelera STEAM conquistou o terceiro lugar em uma feira de ciências.", "A scientific project supported by Acelera STEAM earned third place at a science fair.") },
  { id: "sustain", title: L("Sustentabilidade — Vyperion Wear", "Sustainability — Vyperion Wear"),
    summary: L("Promover a moda sustentável, incentivando o reuso de roupas, a criatividade e o consumo responsável.", "Promote sustainable fashion by encouraging clothing reuse, creativity, and responsible consumption."),
    details: [
      L("Projeto: Vyperion Wear.", "Project: Vyperion Wear."),
      L("Missão: promover a moda sustentável, incentivando o reuso de roupas, a criatividade e o consumo responsável.", "Mission: Promote sustainable fashion by encouraging clothing reuse, creativity, and responsible consumption."),
      L("Atividades: oficinas interativas em que crianças do ensino fundamental customizam e transformam roupas sem uso em peças renovadas e personalizadas.", "Activities: Interactive workshops where elementary school children customize and transform unused clothing into renewed, personalized pieces."),
      L("Impacto: incentivar o reuso têxtil, reduzir o desperdício e despertar a consciência ambiental nos jovens participantes.", "Impact: Encouraging textile reuse, reducing waste, and raising environmental awareness among young participants."),
    ],
    stat: "20+", statTitle: L("Crianças participaram", "Children Participated"),
    statText: L("Oficinas práticas que promovem o reuso de roupas e o consumo sustentável.", "Hands-on workshops promoting clothing reuse and sustainable consumption.") },
];

export type App = {
  slug: string;
  name: string;
  icon: string;
  href?: string;
};

export const apps: App[] = [
  {
    slug: "jogo-da-velha-classico",
    name: "Jogo da Velha Clássico",
    icon: "/images/icon-jogo-da-velha-classico.png",
  },
];

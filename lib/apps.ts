export type App = {
  slug: string;
  icon: string;
  href?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
};

export const apps: App[] = [
  {
    slug: "jogo-da-velha-classico",
    icon: "/images/icon-jogo-da-velha-classico.png",
  },
  {
    slug: "magnetic-chaos",
    icon: "/images/icon-magnetic-chaos.png",
  },
];

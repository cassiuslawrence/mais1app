export type App = {
  slug: string;
  icon: string;
  href?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  /**
   * Landing page screenshots (public paths). Setting this (plus `href` to
   * /apps/<slug> and the `apps.<slug>.landing.*` + `meta.<slug>` messages ×3)
   * is all it takes to give an app a landing page — no new code.
   */
  screenshots?: string[];
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
  {
    slug: "rumo",
    icon: "/images/icon-rumo.png",
    // Card only (formal identification) — no landing page by decision.
    // appStoreUrl: add when Rumo is live on the App Store.
  },
  {
    slug: "tslcheck",
    icon: "/images/icon-tslcheck.png",
    href: "/apps/tslcheck",
    // appStoreUrl: enable when the app is live on the App Store:
    // "https://apps.apple.com/app/id6790018039",
    screenshots: [
      "/images/tslcheck/01-welcome.jpg",
      "/images/tslcheck/03-checklist.jpg",
      "/images/tslcheck/07-report.jpg",
    ],
  },
];

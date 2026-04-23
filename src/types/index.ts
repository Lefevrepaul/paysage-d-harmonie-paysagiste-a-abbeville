export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "pencil-ruler" | "sprout" | "shovel";
};

export type RealisationCategory =
  | "Jardin contemporain"
  | "Terrasse"
  | "Piscine"
  | "Petit espace";

export type RealisationItem = {
  id: string;
  title: string;
  location: string;
  surfaceM2: number;
  category: RealisationCategory;
  image: {
    src: string;
    alt: string;
    blurDataURL: string;
  };
};

export type AvantApresItem = {
  id: string;
  location: string;
  surfaceM2: number;
  description: string;
  before: { src: string; alt: string; blurDataURL: string };
  after: { src: string; alt: string; blurDataURL: string };
};

export type TemoignageItem = {
  id: string;
  quote: string;
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type CertificationItem = {
  id: string;
  name: string;
  logoSrc: string;
  website?: string;
};

export type TemplateData = {
  nav: NavItem[];
  services: ServiceItem[];
  realisations: RealisationItem[];
  avantApres: AvantApresItem[];
  temoignages: TemoignageItem[];
  faqItems: FAQItem[];
  certifications: CertificationItem[];
};


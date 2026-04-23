import type { TemplateData } from "@/types";
import { siteConfig } from "@/config/site.config";

// Tiny, generic blur placeholder (works with next/image via blurDataURL).
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZTlmNWU5Ii8+PC9zdmc+";

const loc = siteConfig.location;

function villeRealisation(index: number): string {
  const v = loc.realisationsVilles;
  if (v.length === 0) return loc.city;
  return v[index % v.length]!;
}

function villeAvantApres(slot: 0 | 1): string {
  const v = loc.realisationsVilles;
  if (v.length === 0) return loc.city;
  return slot === 0 ? v[0]! : (v[1] ?? v[0])!;
}

function villeTemoignage(index: number): string {
  const v = loc.temoignagesVilles;
  if (v.length === 0) return loc.city;
  return v[index % v.length]!;
}

export const data: TemplateData = {
  nav: [
    { label: "Réalisations", href: "#realisations" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#processus" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      id: "conception",
      title: "Conception paysagère",
      description:
        "Plans, volumes, ambiances végétales. Une vision claire avant le premier coup de pelle.",
      icon: "pencil-ruler",
    },
    {
      id: "creation",
      title: "Création de jardins",
      description:
        "Terrasses, allées, plantations, éclairage. Un extérieur pensé pour durer.",
      icon: "shovel",
    },
    {
      id: "entretien",
      title: "Entretien annuel",
      description:
        "Contrats sur mesure pour garder votre jardin impeccable, saison après saison.",
      icon: "sprout",
    },
  ],
  realisations: [
    {
      id: "r1",
      title: "Parterre de fleurs structuré",
      location: villeRealisation(0),
      surfaceM2: 35,
      category: "Petit espace",
      image: {
        src: "/images/realisations/image réalisation parterre de fleur.jpg",
        alt: "Parterre d'hortensias et bordures en bois",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r2",
      title: "Pelouse et arbre d'ornement",
      location: villeRealisation(1),
      surfaceM2: 140,
      category: "Jardin contemporain",
      image: {
        src: "/images/realisations/image realisation pelouse et arbre.jpg",
        alt: "Pelouse avec arbre d'ornement et muret en pierre",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r3",
      title: "Pelouse et parterres fleuris",
      location: villeRealisation(2),
      surfaceM2: 300,
      category: "Jardin contemporain",
      image: {
        src: "/images/realisations/image realisation pelouse et parterre de fleur.jpg",
        alt: "Allée centrale avec parterres fleuris et grande pelouse",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r4",
      title: "Pré paysager et grands volumes",
      location: villeRealisation(3),
      surfaceM2: 800,
      category: "Jardin contemporain",
      image: {
        src: "/images/realisations/image réalisation pré.jpg",
        alt: "Grande prairie entretenue avec arbres en arrière-plan",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r5",
      title: "Cheminement en pas japonais",
      location: villeRealisation(4),
      surfaceM2: 60,
      category: "Terrasse",
      image: {
        src: "/images/realisations/image réalisation entretien chemin.jpg",
        alt: "Cheminement en pierres dans une pelouse bordée de massifs",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r6",
      title: "Muret en pierre et plantations",
      location: villeRealisation(5),
      surfaceM2: 90,
      category: "Terrasse",
      image: {
        src: "/images/realisations/image réalisation entretien mur en pierre.jpg",
        alt: "Chemin en pierre au pied d'un mur et plantations",
        blurDataURL: BLUR,
      },
    },
    {
      id: "r7",
      title: "Taille de haie et mise en forme",
      location: villeRealisation(6),
      surfaceM2: 50,
      category: "Petit espace",
      image: {
        src: "/images/realisations/image réalisation haie.jpg",
        alt: "Taille de haie pour un rendu net et structuré",
        blurDataURL: BLUR,
      },
    },
  ],
  avantApres: [
    {
      id: "aa1",
      location: villeAvantApres(0),
      surfaceM2: 65,
      description:
        "Reprise complète d'un mur et des abords pour un rendu propre, durable et harmonieux.",
      before: {
        src: "/images/avant-apres/réalisation mur avant.webp",
        alt: "Avant : mur et abords avant rénovation",
        blurDataURL: BLUR,
      },
      after: {
        src: "/images/avant-apres/réalisation mur après.webp",
        alt: "Après : mur et abords rénovés avec une finition soignée",
        blurDataURL: BLUR,
      },
    },
    {
      id: "aa2",
      location: villeAvantApres(1),
      surfaceM2: 110,
      description:
        "Aménagement d'un jardin exotique : volumes, textures et choix végétaux pour une ambiance dépaysante.",
      before: {
        src: "/images/avant-apres/aménagement jardin exotique avant.webp",
        alt: "Avant : jardin avant aménagement exotique",
        blurDataURL: BLUR,
      },
      after: {
        src: "/images/avant-apres/aménagement jardin exotique après.webp",
        alt: "Après : jardin exotique aménagé avec plantations et finitions",
        blurDataURL: BLUR,
      },
    },
  ],
  temoignages: [
    {
      id: "t1",
      quote:
        "“Équipe ponctuelle et très pro. Le rendu est encore plus beau que sur les plans.”",
      name: "Camille",
      city: villeTemoignage(0),
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "“Un accompagnement rassurant du début à la fin. Devis clair, chantier propre.”",
      name: "Thomas",
      city: villeTemoignage(1),
      rating: 5,
    },
    {
      id: "t3",
      quote:
        "“Notre jardin a complètement changé. Les conseils d'entretien sont un vrai plus.”",
      name: "Sophie",
      city: villeTemoignage(2),
      rating: 5,
    },
  ],
  faqItems: [
    {
      id: "q1",
      question: "Quel budget prévoir pour un jardin de 200m² ?",
      answer:
        "Selon les accès, les matériaux et la végétalisation, la plupart des projets se situent entre 12 000€ et 35 000€. Nous réalisons un devis détaillé après visite.",
    },
    {
      id: "q2",
      question: "Quelle est la meilleure période pour créer un jardin ?",
      answer:
        "Les travaux se font toute l’année. Pour les plantations, l’automne et le printemps sont idéaux, mais nous adaptons les essences et l’arrosage.",
    },
    {
      id: "q3",
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Oui, selon le montant du projet. Nous pouvons étaler les paiements par étapes (acompte, avancement, livraison) de façon transparente.",
    },
    {
      id: "q4",
      question: "Travaillez-vous avec des architectes ?",
      answer:
        "Oui. Nous collaborons régulièrement avec architectes et maîtres d’œuvre pour une cohérence parfaite entre intérieur et extérieur.",
    },
    {
      id: "q5",
      question: "Que comprend un contrat d'entretien ?",
      answer:
        "Taille, désherbage, soins des végétaux, entretien des massifs et conseils saisonniers. La fréquence est ajustée à votre jardin et à vos attentes.",
    },
    {
      id: "q6",
      question: "Quelles garanties proposez-vous ?",
      answer:
        "Une garantie sur la mise en œuvre, des matériaux sélectionnés et un suivi après livraison. Les détails sont précisés dans votre devis.",
    },
  ],
  certifications: [
    { id: "c1", name: "Qualipaysage", logoSrc: "/logos/qualipaysage.svg" },
    { id: "c2", name: "Unep", logoSrc: "/logos/unep.svg" },
    {
      id: "c3",
      name: "Pépiniéristes partenaires",
      logoSrc: "/logos/pepinieristes.svg",
    },
  ],
};


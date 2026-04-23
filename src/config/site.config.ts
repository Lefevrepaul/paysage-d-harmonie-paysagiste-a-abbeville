export const siteConfig = {
  company: {
    name: "Paysage d'Harmonie",
    tagline: "Votre paysagiste à Abbeville",
    description: "Paysage d'Harmonie vous accompagne dans tous vos projets d'aménagement paysager à Abbeville et dans la région des Hauts-de-France. Création de jardins, entretien d'espaces verts, aménagement extérieur : notre expertise de 5 ans et nos 38 réalisations témoignent de notre savoir-faire."
  },
  contact: {
    phoneDisplay: "07 89 26 13 67",
    phoneE164: "+33789261367",
    email: "Contactez-nous par formulaire"
  },
  location: {
    city: "Liercourt",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.0321564,
      lng: 1.9070149
    },
    villes: [
      "Liercourt",
      "Abbeville",
      "Amiens",
      "Rue",
      "Le Crotoy",
      "Saint-Valery-sur-Somme",
      "Crécy-en-Ponthieu",
      "Nouvion",
      "Forest-Montiers",
      "Pont-Remy",
      "Noyelles-sur-Mer",
      "Cayeux-sur-Mer"
    ],
    realisationsVilles: [
      "Liercourt",
      "Abbeville",
      "Rue",
      "Crécy-en-Ponthieu",
      "Saint-Valery-sur-Somme",
      "Le Crotoy"
    ],
    temoignagesVilles: [
      "Liercourt",
      "Abbeville",
      "Rue"
    ]
  },
  stats: {
    projectsCount: "38+",
    yearsExperience: "5 ans"
  },
  googleReviews: {
    rating: "5",
    count: 7,
    searchQuery: "Paysage+d'Harmonie+paysagiste+Abbeville+avis"
  },
  seo: {
    titleTemplate: "%s | Paysage d'Harmonie - Paysagiste Abbeville",
    defaultTitle: "Paysage d'Harmonie - Paysagiste à Abbeville et Liercourt",
    metaDescription: "Paysage d'Harmonie, votre paysagiste expert à Abbeville et Liercourt. Création et entretien de jardins, aménagement paysager dans la Somme. 5 ans d'expérience, note Google 5/5.",
    url: "https://paysage-harmonie-abbeville.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;
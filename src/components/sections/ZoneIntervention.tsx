import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

const mapQuery = `${siteConfig.location.coords.lat},${siteConfig.location.coords.lng}`;

export function ZoneIntervention() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28" aria-label="Zone d'intervention">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Zone d'intervention"
            title="Nous intervenons près de chez vous"
            subtitle={`Déplacement offert dans un rayon de ${siteConfig.location.radiusKm}km autour de ${siteConfig.location.city}.`}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="p-7">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#7cb342]" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  Carte — {siteConfig.location.city}
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <iframe
                    title={`Carte Google Maps — ${siteConfig.location.city}`}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${mapQuery}&z=11&output=embed`}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-5 py-4">
                  <p className="text-sm text-gray-600">
                    Déplacement offert dans un rayon de {siteConfig.location.radiusKm}
                    km
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${mapQuery}&z=11`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#1a2f1c] transition hover:text-gray-900"
                    aria-label="Ouvrir la carte dans Google Maps"
                  >
                    Ouvrir
                  </a>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                Nous planifions les visites rapidement et organisons les chantiers
                pour minimiser les délais, sans jamais sacrifier la qualité.
              </p>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-[#7cb342]">
                {siteConfig.location.region}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                {siteConfig.location.villes.map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#7cb342]"
                      aria-hidden="true"
                    />
                    {v}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-medium text-gray-900">
                  Déplacement offert
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Rayon de {siteConfig.location.radiusKm}km — au-delà, nous vous
                  proposons une solution sur mesure selon votre projet.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


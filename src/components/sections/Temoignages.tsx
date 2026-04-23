import { Star } from "lucide-react";
import { data } from "@/lib/data";
import { googleReviewsSearchUrl, siteConfig } from "@/config/site.config";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

export function Temoignages() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-label="Témoignages">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Ils nous font confiance"
            title="L'avis de nos clients"
            subtitle="Une relation simple et transparente, avec des finitions qui font la différence."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.temoignages.map((t) => (
            <FadeIn key={t.id}>
              <Card className="h-full p-7">
                <Stars value={t.rating} />
                <p className="mt-5 text-base italic leading-relaxed text-gray-700">
                  {t.quote}
                </p>
                <p className="mt-5 text-sm font-medium text-gray-900">
                  {t.name} ·{" "}
                  <span className="font-normal text-gray-600">{t.city}</span>
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center">
          <a
            href={googleReviewsSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-700 transition duration-300 hover:bg-gray-50"
            aria-label="Voir les avis Google"
          >
            <Badge className="bg-[#e8f5e9]">Google</Badge>
            <span>
              {siteConfig.googleReviews.rating} sur Google (
              {siteConfig.googleReviews.count} avis)
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Note ${value} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            className="h-4 w-4"
            aria-hidden="true"
            fill={filled ? "#7cb342" : "transparent"}
            stroke={filled ? "#7cb342" : "#d1d5db"}
          />
        );
      })}
    </div>
  );
}


import Image from "next/image";
import { data } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

export function AvantApres() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-label="Avant après">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Transformations"
            title="Le pouvoir d'un aménagement réussi"
            subtitle="Deux exemples concrets de transformation, avant/après, pour visualiser la valeur ajoutée."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {data.avantApres.map((p) => (
            <FadeIn key={p.id}>
              <Card className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <figure className="relative overflow-hidden rounded-xl border border-gray-200">
                    <div className="absolute left-3 top-3 z-10">
                      <Badge>Avant</Badge>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.before.src}
                        alt={p.before.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={p.before.blurDataURL}
                      />
                    </div>
                  </figure>

                  <figure className="relative overflow-hidden rounded-xl border border-gray-200">
                    <div className="absolute left-3 top-3 z-10">
                      <Badge>Après</Badge>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.after.src}
                        alt={p.after.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={p.after.blurDataURL}
                      />
                    </div>
                  </figure>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-gray-900">
                    {p.location} · {p.surfaceM2}m²
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {p.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


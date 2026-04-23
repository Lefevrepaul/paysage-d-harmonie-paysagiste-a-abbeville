import { PencilRuler, Shovel, Sprout } from "lucide-react";
import { data } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

const icons = {
  "pencil-ruler": PencilRuler,
  shovel: Shovel,
  sprout: Sprout,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Nos expertises"
            title="Un accompagnement complet"
            subtitle="De la conception à l’entretien, tout est pensé pour un extérieur élégant, pratique et durable."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <FadeIn key={s.id}>
                <Card className="group h-full p-7 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f5e9] text-[#1a2f1c]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {s.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}


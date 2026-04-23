import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

const steps = [
  {
    number: 1,
    title: "Rencontre",
    description:
      "Visite gratuite, analyse du terrain, écoute de vos envies et de vos contraintes.",
  },
  {
    number: 2,
    title: "Conception",
    description:
      "Plan 3D, sélection des végétaux, propositions matériaux et devis détaillé.",
  },
  {
    number: 3,
    title: "Réalisation",
    description:
      "Travaux par notre équipe, suivi de chantier régulier, finitions soignées.",
  },
  {
    number: 4,
    title: "Livraison",
    description:
      "Remise des clés, conseils d'entretien, garantie incluse et suivi après chantier.",
  },
] as const;

export function Processus() {
  return (
    <section id="processus" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Notre méthode"
            title="Un projet en 4 étapes"
            subtitle="Un cadre simple, rassurant et efficace pour avancer vite, sans compromis sur la qualité."
          />
        </FadeIn>

        <div className="mt-12">
          <div className="relative hidden gap-6 lg:grid lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-6 h-px bg-gray-200"
              aria-hidden="true"
            />
            {steps.map((s) => (
              <FadeIn key={s.number}>
                <div className="relative">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7cb342] text-white">
                    <span className="text-base font-medium">{s.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {s.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid gap-6 lg:hidden">
            {steps.map((s) => (
              <FadeIn key={s.number}>
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative flex w-12 justify-center">
                      {/* Start the connector *below* the circle (prevents the small line above it). */}
                      <div
                        className="absolute bottom-0 top-12 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7cb342] text-white">
                        <span className="text-base font-medium">{s.number}</span>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


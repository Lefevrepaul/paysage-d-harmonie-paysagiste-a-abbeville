import Image from "next/image";
import { data } from "@/lib/data";
import { FadeIn } from "@/components/ui/Motion";

export function Certifications() {
  return (
    <section className="bg-gray-50 py-14" aria-label="Certifications">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <p className="text-center text-sm text-gray-600">
            Certifié et reconnu par les professionnels du secteur
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {data.certifications.map((c) => (
              <a
                key={c.id}
                href={c.website ?? "#"}
                className="group inline-flex items-center"
                aria-label={c.name}
                target={c.website ? "_blank" : undefined}
                rel={c.website ? "noopener noreferrer" : undefined}
              >
                <Image
                  src={c.logoSrc}
                  alt={c.name}
                  width={140}
                  height={44}
                  className="h-10 w-auto opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


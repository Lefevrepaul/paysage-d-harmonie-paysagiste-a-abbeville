"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { data } from "@/lib/data";
import type { RealisationCategory } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";
import { cn } from "@/components/ui/cn";

const filters: Array<"Tous" | RealisationCategory> = [
  "Tous",
  "Jardin contemporain",
  "Terrasse",
  "Piscine",
  "Petit espace",
];

export function Realisations() {
  const [active, setActive] = React.useState<(typeof filters)[number]>("Tous");
  const [showAll, setShowAll] = React.useState(false);

  const filtered = React.useMemo(() => {
    const items =
      active === "Tous"
        ? data.realisations
        : data.realisations.filter((r) => r.category === active);
    return showAll ? items : items.slice(0, 6);
  }, [active, showAll]);

  const hasMore = React.useMemo(() => {
    const count =
      active === "Tous"
        ? data.realisations.length
        : data.realisations.filter((r) => r.category === active).length;
    return count > 6;
  }, [active]);

  return (
    <section id="realisations" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn>
          <SectionHeader
            tag="Nos réalisations"
            title="Des jardins qui nous ressemblent"
            subtitle="Des lignes épurées, des matériaux durables et une végétation choisie avec soin."
          />
        </FadeIn>

        <FadeIn className="mt-10">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtres des réalisations"
          >
            {filters.map((f) => {
              const selected = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition duration-300",
                    selected
                      ? "border-[#7cb342]/30 bg-[#e8f5e9] text-[#1a2f1c]"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50",
                  )}
                  onClick={() => {
                    setActive(f);
                    setShowAll(false);
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <FadeIn key={r.id}>
              <motion.article whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Card className="group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image.src}
                      alt={r.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      placeholder="blur"
                      blurDataURL={r.image.blurDataURL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{r.title}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">
                        {r.location} · {r.surfaceM2}m² · {r.category}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-medium text-gray-900">{r.title}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {r.location} · {r.surfaceM2}m²
                    </p>
                  </div>
                </Card>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowAll((v) => !v)}
              ariaLabel={showAll ? "Voir moins de projets" : "Voir tous les projets"}
            >
              {showAll ? "Voir moins de projets" : "Voir tous les projets"}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";
import heroBg from "../../../public/images/hero background paysagiste.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#1a2f1c] text-white"
      aria-label="Section d'introduction"
    >
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-organic opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 20%, rgba(124,179,66,.20), transparent 55%), radial-gradient(700px 400px at 80% 30%, rgba(156,204,101,.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-wider text-[#9ccc65]"
          >
            Paysagiste — {siteConfig.location.region}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl"
          >
            Créons ensemble votre espace de vie extérieur
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80"
          >
            Un accompagnement complet, du premier croquis à la livraison. Des
            aménagements durables, élégants, et 100% sur mesure.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              ariaLabel="Demander un devis"
              className="justify-center"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#realisations"
              ariaLabel="Voir nos projets"
              className="justify-center"
            >
              Voir nos projets
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid gap-6 sm:max-w-xl sm:grid-cols-3 lg:ml-auto lg:max-w-none lg:grid-cols-3"
          >
            <Stat label="Jardins" value={siteConfig.stats.projectsCount} />
            <Stat
              label="Expérience"
              value={`${siteConfig.stats.yearsExperience} ans`}
            />
            <Stat label="Sur mesure" value="100%" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <p className="text-2xl font-medium">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">
        {label}
      </p>
    </div>
  );
}


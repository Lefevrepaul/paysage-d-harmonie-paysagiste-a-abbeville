import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Realisations } from "@/components/sections/Realisations";
import { AvantApres } from "@/components/sections/AvantApres";
import { Processus } from "@/components/sections/Processus";
import { Temoignages } from "@/components/sections/Temoignages";
import { ZoneIntervention } from "@/components/sections/ZoneIntervention";
import { FAQ } from "@/components/sections/FAQ";
import { Certifications } from "@/components/sections/Certifications";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <main className="flex-1 pb-28 lg:pb-0">
      <Hero />
      <Services />
      <Realisations />
      <AvantApres />
      <Processus />
      <Temoignages />
      <ZoneIntervention />
      <FAQ />
      <Certifications />
      <CTAFinal />
    </main>
  );
}

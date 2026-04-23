"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 lg:hidden">
      <Button
        variant="primary"
        size="lg"
        href="#contact"
        ariaLabel="Aller au formulaire de devis"
        className="pointer-events-auto justify-center whitespace-nowrap shadow-lg"
      >
        Demander un devis
        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}


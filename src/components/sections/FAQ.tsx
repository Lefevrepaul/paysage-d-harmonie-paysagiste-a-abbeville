"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { data } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(data.faqItems[0]?.id ?? null);

  return (
    <section className="bg-white py-20 sm:py-28" aria-label="Questions fréquentes">
      <div className="mx-auto max-w-4xl px-5">
        <FadeIn>
          <SectionHeader tag="Questions fréquentes" title="Tout ce que vous voulez savoir" />
        </FadeIn>

        <div className="mt-12 grid gap-4">
          {data.faqItems.map((q) => {
            const open = q.id === openId;
            const buttonId = `faq-btn-${q.id}`;
            const panelId = `faq-panel-${q.id}`;
            return (
              <FadeIn key={q.id}>
                <Card className="overflow-hidden">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-gray-50"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : q.id)}
                  >
                    <span className="text-base font-medium text-gray-900">
                      {q.question}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1a2f1c]">
                      {open ? (
                        <Minus className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Plus className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="px-6"
                      >
                        <div className="pb-6 text-base leading-relaxed text-gray-600">
                          {q.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}


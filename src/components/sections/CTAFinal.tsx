"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/Motion";

export function CTAFinal() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [city, setCity] = React.useState("");
  const [message, setMessage] = React.useState("");

  const mailtoHref = React.useMemo(() => {
    const subject = encodeURIComponent(
      `Demande de devis — ${siteConfig.company.name}`,
    );
    const body = encodeURIComponent(
      [
        `Nom : ${name || "-"}`,
        `Téléphone : ${phone || "-"}`,
        `Ville : ${city || "-"}`,
        "",
        message || "-",
      ].join("\n"),
    );
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }, [name, phone, city, message]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1a2f1c] py-20 text-white sm:py-28"
      aria-label="Contact et demande de devis"
    >
      <div className="absolute inset-0 bg-organic opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 30% 15%, rgba(124,179,66,.18), transparent 60%), radial-gradient(700px 400px at 80% 60%, rgba(156,204,101,.10), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-[#9ccc65]">
              Devis gratuit sous 48h — Déplacement offert
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Prêt à transformer votre extérieur ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Dites-nous l’essentiel en 30 secondes. On vous rappelle rapidement
              avec une première estimation et un créneau de visite.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="border-white/10 bg-white/5 p-7 text-white shadow-none">
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom" value={name} onChange={setName} />
                  <Field
                    label="Téléphone"
                    value={phone}
                    onChange={setPhone}
                    inputMode="tel"
                  />
                </div>
                <Field label="Ville" value={city} onChange={setCity} />
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-white/70">
                    Votre projet
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#9ccc65]/60 focus:ring-2 focus:ring-[#9ccc65]/20"
                    placeholder="Terrasse, plantations, allée, éclairage… Surface, contraintes, délais."
                  />
                </div>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    variant="primary"
                    size="lg"
                    ariaLabel="Envoyer une demande de devis"
                  >
                    Demander un devis
                  </Button>
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm text-white transition duration-300 hover:bg-white/10"
                    aria-label={`Appeler le ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  En cliquant, votre application mail s’ouvre avec le message
                  pré-rempli. Vous pouvez aussi nous appeler directement.
                </p>
              </form>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-6">
              <Card className="border-white/10 bg-white/5 p-7 text-white shadow-none">
                <p className="text-sm font-medium">Ce que vous obtenez</p>
                <ul className="mt-4 grid gap-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9ccc65]" />
                    Une estimation budgétaire et un plan d’action clair
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9ccc65]" />
                    Une visite gratuite pour valider contraintes et accès
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9ccc65]" />
                    Un devis détaillé, étape par étape, sans surprise
                  </li>
                </ul>
              </Card>

              <Card className="border-white/10 bg-white/5 p-7 text-white shadow-none">
                <p className="text-sm font-medium">Délais moyens</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <MiniStat label="Devis" value="48h" />
                  <MiniStat label="Démarrage" value="2–6 sem." />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/60">
                  Selon saison et complexité. Nous vous proposons un planning
                  réaliste dès la conception.
                </p>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-white/70">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode={inputMode}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#9ccc65]/60 focus:ring-2 focus:ring-[#9ccc65]/20"
        placeholder={label}
      />
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-xl font-medium text-white">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">
        {label}
      </p>
    </div>
  );
}


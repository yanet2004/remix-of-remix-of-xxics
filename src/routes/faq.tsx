import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — XXICS" },
      { name: "description", content: "Honest answers about XXICS: pricing, AI, certificates, accessibility, languages and learning system." },
      { property: "og:title", content: "FAQ — XXICS" },
    ],
  }),
  component: FAQPage,
});

type FaqItem = { q: string; a: string };

function FAQPage() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as FaqItem[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{t("faq.eyebrow")}</p>
          <h1 className="text-display text-4xl md:text-7xl max-w-3xl">{t("faq.title")}</h1>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div className={`glass rounded-3xl overflow-hidden transition-all ${isOpen ? "shadow-[var(--shadow-soft)]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-medium">{item.q}</span>
                    <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-muted text-muted-foreground"}`}>
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-7 pb-6 md:pb-7 text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

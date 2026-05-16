import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import aiAssistant from "@/assets/lucy.png";
import { Brain, HeartHandshake, CalendarRange, GraduationCap, Compass, Moon } from "lucide-react";

export const Route = createFileRoute("/ai-assistant")({
  head: () => ({
    meta: [
      { title: "Lucy — AI Assistant — XXICS" },
      {
        name: "description",
        content:
          "Lucy is the futuristic 3D AI mentor inside XXICS — a personal tutor, planner and emotional companion for every student.",
      },
      { property: "og:title", content: "Lucy — AI Assistant — XXICS" },
    ],
  }),
  component: AIPage,
});

function AIPage() {
  const { t } = useTranslation();
  const features = [
    { key: "a", Icon: Brain },
    { key: "b", Icon: HeartHandshake },
    { key: "c", Icon: CalendarRange },
    { key: "d", Icon: GraduationCap },
    { key: "e", Icon: Compass },
    { key: "f", Icon: Moon },
  ] as const;

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{t("ai.eyebrow")}</p>
            <h1 className="text-display text-4xl md:text-7xl">{t("ai.title")}</h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed text-justify-balanced">{t("ai.sub")}</p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-[2rem] overflow-hidden glass-strong p-2">
              <img src={aiAssistant} alt="Lucy portrait" width={1024} height={1024} loading="lazy"
                  className="w-full rounded-[1.7rem]" />
                {/* Mask Gemini watermark */}
                <div aria-hidden className="absolute bottom-3 right-3 w-14 h-14 rounded-xl backdrop-blur-md bg-card/40" />
              </div>
              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-[11px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Listening
              </div>
              <div className="absolute bottom-4 right-4 glass rounded-full px-3 py-1.5 text-[11px]">
                v3.5 — neural
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl">{t("ai.chatTitle")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">{t("ai.chatSub")}</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {(["a", "b", "c"] as const).map((k, i) => (
            <Reveal key={k} delay={i * 100}>
              <div className="glass rounded-3xl p-5 space-y-3 h-full">
                <div className="flex justify-end">
                  <div className="bg-foreground text-background rounded-2xl rounded-tr-md px-4 py-2.5 text-sm max-w-[85%]">
                    {t(`ai.examples.${k}.user`)}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/30">
                    <img src={aiAssistant} alt="Lucy" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-md px-4 py-2.5 text-sm leading-relaxed">
                    {t(`ai.examples.${k}.aria`)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl">{t("ai.features.title")}</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 80}>
              <div className="glass rounded-3xl p-7 h-full hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/15 to-[oklch(0.65_0.18_350/0.15)] flex items-center justify-center text-primary mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(`ai.features.${key}.t`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify-balanced">{t(`ai.features.${key}.b`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

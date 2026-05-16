import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import { Activity, Sparkles, MessageCircle, Cpu } from "lucide-react";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";
import landscapeAutumn from "@/assets/landscape-autumn.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — XXICS" },
      {
        name: "description",
        content:
          "Why XXICS exists: a school designed from the student outward, replacing factory-era education with a future-ready model.",
      },
      { property: "og:title", content: "About — XXICS" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  const focus = [
    { key: "a", Icon: Activity },
    { key: "b", Icon: Sparkles },
    { key: "c", Icon: MessageCircle },
    { key: "d", Icon: Cpu },
  ] as const;

  return (
    <>
      <section className="container-x py-16 md:py-24 relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{t("about.eyebrow")}</p>
          <h1 className="text-display text-4xl md:text-7xl max-w-4xl">{t("about.title")}</h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed text-justify-balanced">{t("about.sub")}</p>
        </Reveal>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-10 h-full bg-foreground text-background">
              <h3 className="text-display text-2xl md:text-3xl mb-4">{t("about.missionTitle")}</h3>
              <p className="text-background/70 leading-relaxed text-justify-balanced">{t("about.missionBody")}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass rounded-3xl p-8 md:p-10 h-full bg-foreground text-background">
              <h3 className="text-display text-2xl md:text-3xl mb-4">{t("about.visionTitle")}</h3>
              <p className="text-background/70 leading-relaxed text-justify-balanced">{t("about.visionBody")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl">{t("about.outdated.title")}</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border/60 rounded-3xl overflow-hidden glass">
          {(["a", "b", "c", "d"] as const).map((k, i) => (
            <Reveal key={k} delay={i * 80}>
              <div className="bg-card/60 p-8 md:p-10 h-full">
                <div className="text-xs uppercase tracking-wider text-primary mb-3">0{i + 1}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{t(`about.outdated.${k}.t`)}</h3>
                <p className="text-muted-foreground leading-relaxed text-justify-balanced">{t(`about.outdated.${k}.b`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl">{t("about.focus.title")}</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focus.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 100}>
              <div className="glass rounded-3xl p-7 h-full hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/15 to-[oklch(0.65_0.18_350/0.15)] flex items-center justify-center text-primary mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(`about.focus.${key}.t`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`about.focus.${key}.b`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl mb-10">{t("about.brightTitle")}</h2>
        </Reveal>
        <Reveal delay={120}>
          <ImageComparison className="aspect-[16/9] rounded-3xl glass max-w-[65%] mx-auto">
            <ImageComparisonImage src={landscapeAutumn} alt="Цветное" position="left" />
            <ImageComparisonImage src={landscapeAutumn} alt="Чёрно-белое" position="right" className="grayscale" />
            <ImageComparisonSlider className="bg-primary/80 shadow-[var(--shadow-glow)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                ⇌
              </div>
            </ImageComparisonSlider>
          </ImageComparison>
        </Reveal>
      </section>
    </>
  );
}

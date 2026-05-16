import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Brain, Heart, Wrench, Flower2, Play, Headphones, FileText, Mic, Film, Zap, Trophy, BookOpen } from "lucide-react";
import aiAssistant from "@/assets/lucy.png";
import { Reveal } from "@/components/Reveal";
import { PricingInteraction } from "@/components/ui/pricing-interaction";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XXICS — The school of the 21st century" },
      {
        name: "description",
        content:
          "XXICS combines AI, emotional intelligence and modern learning formats to prepare teenagers for real life.",
      },
      { property: "og:title", content: "XXICS — The school of the 21st century" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();

  const formats = [
    { key: "shorts", Icon: Zap },
    { key: "videos", Icon: Play },
    { key: "guides", Icon: FileText },
    { key: "podcasts", Icon: Headphones },
    { key: "interviews", Icon: Mic },
    { key: "films", Icon: Film },
    { key: "interactive", Icon: BookOpen },
    { key: "challenges", Icon: Trophy },
  ] as const;

  const pillars = [
    { key: "a", Icon: Brain },
    { key: "b", Icon: Heart },
    { key: "c", Icon: Wrench },
    { key: "d", Icon: Flower2 },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-noise opacity-40" />

        <div className="container-x py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                {t("home.badge")}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 text-display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
                {t("home.heroTitleA")} <br className="hidden sm:block" />
                <span className="text-gradient italic">{t("home.heroTitleB")}</span>{" "}
                {t("home.heroTitleC")}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.heroSub")}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/85 transition-all shadow-[var(--shadow-soft)]"
                >
                  {t("home.ctaPrimary")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/ai-assistant"
                  className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover:bg-card transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  {t("home.ctaSecondary")}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <p className="mt-16 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
                ↓ {t("home.scrollHint")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="text-display text-3xl md:text-5xl max-w-2xl">
            {t("home.statsTitle")}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-3xl overflow-hidden glass">
          {(["stat1", "stat2", "stat3", "stat4"] as const).map((k, i) => (
            <Reveal key={k} delay={i * 80}>
              <div className="bg-card/60 p-6 md:p-8 h-full">
                <div className="text-display text-3xl md:text-5xl text-gradient">
                  {t(`home.${k}.value`)}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-snug">
                  {t(`home.${k}.label`)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
              {t("home.philosophyEyebrow")}
            </p>
            <h2 className="text-display text-3xl md:text-5xl">
              {t("home.philosophyTitle")}
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7 md:pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-justify-balanced">
              {t("home.philosophyBody")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 100}>
              <div className="group glass rounded-3xl p-7 h-full hover:shadow-[var(--shadow-elevated)] transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/15 to-[oklch(0.65_0.18_350/0.15)] flex items-center justify-center text-primary mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`home.pillars.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`home.pillars.${key}.body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section className="container-x py-20 md:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
            {t("home.formatsEyebrow")}
          </p>
          <h2 className="text-display text-3xl md:text-5xl max-w-3xl">
            {t("home.formatsTitle")}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {formats.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 60}>
              <div className="group relative overflow-hidden glass rounded-3xl p-6 aspect-square flex flex-col justify-between hover:bg-card transition-all hover:-translate-y-1">
                <Icon className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-base md:text-lg font-medium">
                    {t(`home.formats.${key}`)}
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI PREVIEW */}
      <section className="container-x py-20 md:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-6 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                {t("home.aiEyebrow")}
              </p>
              <h2 className="text-display text-4xl md:text-6xl">
                {t("home.aiTitle")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg text-justify-balanced">
                {t("home.aiBody")}
              </p>
              <Link
                to="/ai-assistant"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-[var(--shadow-glow)]"
              >
                {t("home.aiCta")} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden glass-strong p-2">
                  <img
                    src={aiAssistant}
                    alt="Lucy — XXICS AI mentor"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[1.7rem]"
                  />
                  {/* Mask out Gemini watermark in bottom-right corner */}
                  <div
                    aria-hidden
                    className="absolute bottom-3 right-3 w-14 h-14 rounded-xl backdrop-blur-md bg-card/40"
                  />
                </div>
                <div className="absolute -top-3 -left-3 glass rounded-full px-3 py-1.5 text-[11px] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Lucy — online
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUOTES / TESTIMONIALS */}
      <section className="container-x py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center"
        >
          <div className="inline-flex border border-border bg-card/60 backdrop-blur py-1 px-4 rounded-full text-xs uppercase tracking-[0.25em] text-primary">
            {t("home.quotesBadge")}
          </div>
          <h2 className="text-display text-3xl md:text-5xl mt-5">{t("home.quotesTitle")}</h2>
          <p className="text-center mt-4 text-muted-foreground text-pretty">{t("home.quotesSub")}</p>
        </motion.div>

        {(() => {
          const list = (t("home.quotesList", { returnObjects: true }) as Testimonial[]) ?? [];
          // Explicit gender mapping per testimonial index to match names/roles
          const genders: ("women" | "men")[] = [
            "women", // Adel/Адель - female student
            "men",   // Marat/Марат - male student
            "women", // Sofia/София - female student
            "women", // Alia/Алия - female parent
            "men",   // Daniyar/Данияр - male student
            "women", // Kamila/Камила - female student
            "men",   // Timur/Тимур - male student
            "men",   // Erzhan/Ержан - male student
            "women", // Natalia/Наталья - female parent
          ];
          const photoIdx = [21, 32, 44, 56, 18, 65, 23, 47, 71];
          const withAvatars: Testimonial[] = list.map((q, i) => ({
            ...q,
            image: `https://randomuser.me/api/portraits/${genders[i] ?? "women"}/${photoIdx[i] ?? (i + 10)}.jpg`,
          }));
          const first = withAvatars.slice(0, 3);
          const second = withAvatars.slice(3, 6);
          const third = withAvatars.slice(6, 9);
          return (
            <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
              <TestimonialsColumn testimonials={first} duration={18} />
              <TestimonialsColumn testimonials={second} className="hidden md:block" duration={22} />
              <TestimonialsColumn testimonials={third} className="hidden lg:block" duration={20} />
            </div>
          );
        })()}
      </section>

      {/* PRICING */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
              {t("home.pricingEyebrow")}
            </p>
            <h2 className="text-display text-3xl md:text-5xl text-pretty">
              {t("home.pricingTitle")}
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-md text-pretty">
              {t("home.pricingSub")}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex justify-center lg:justify-end">
              <PricingInteraction
                monthlyLabel={t("home.pricingMonthly")}
                yearlyLabel={t("home.pricingYearly")}
                perMonthLabel={t("home.pricingPerMonth")}
                ctaLabel={t("home.pricingCta")}
                plans={[
                  { name: t("home.plans.standard"), monthly: 3, annual: 2 },
                  { name: t("home.plans.pro"), monthly: 5, annual: 4, badge: t("home.plans.popular") },
                  { name: t("home.plans.proPlus"), monthly: 8, annual: 6 },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="container-x pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 text-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.6_0.25_22),transparent_70%)]" />
            <div className="relative">
              <h2 className="text-display text-4xl md:text-6xl">{t("home.ctaTitle")}</h2>
              <p className="mt-5 text-base md:text-lg text-background/70 max-w-xl mx-auto">
                {t("home.ctaSub")}
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-background/90 transition-colors"
              >
                {t("home.ctaButton")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import { User, BookOpen, Bot, CreditCard, Bug, HeartPulse, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — XXICS" },
      { name: "description", content: "Quiet, patient and fast support for students, parents and partners of XXICS." },
      { property: "og:title", content: "Support — XXICS" },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const { t } = useTranslation();
  const cats = [
    { key: "a", Icon: User },
    { key: "b", Icon: BookOpen },
    { key: "c", Icon: Bot },
    { key: "d", Icon: CreditCard },
    { key: "e", Icon: Bug },
    { key: "f", Icon: HeartPulse },
  ] as const;

  const openChat = () => {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).botpressWebChat) {
      ((window as unknown as Record<string, unknown>).botpressWebChat as { sendEvent: (e: object) => void }).sendEvent({ type: "show" });
    }
  };

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{t("support.eyebrow")}</p>
          <h1 className="text-display text-4xl md:text-7xl max-w-3xl">{t("support.title")}</h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed text-justify-balanced">{t("support.sub")}</p>
        </Reveal>
      </section>

      <section className="container-x py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cats.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 60}>
              <button className="text-left w-full glass rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all flex items-start gap-4" onClick={openChat}>
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-primary/15 to-[oklch(0.65_0.18_350/0.15)] flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{t(`support.cats.${key}.t`)}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t(`support.cats.${key}.b`)}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="glass-strong rounded-3xl p-5 md:p-10 h-full flex flex-col items-center justify-center text-center gap-6 min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-[oklch(0.65_0.18_350/0.2)] flex items-center justify-center text-primary">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">{t("support.chatTitle")}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{t("support.chatStatus")}</p>
            </div>
            <button
              onClick={openChat}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/85 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t("support.chatSend")}
            </button>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="font-semibold text-lg mb-1">{t("support.formTitle")}</h3>
              <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder={t("support.formName")} />
                <input type="email" className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder={t("support.formEmail")} />
                <textarea rows={4} className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder={t("support.formMessage")} />
                <button className="w-full rounded-full bg-foreground text-background py-3 text-sm font-medium hover:bg-foreground/85">{t("support.formSubmit")}</button>
              </form>
            </div>

            <div className="glass rounded-3xl p-6 md:p-8 bg-gradient-to-br from-card to-[oklch(0.97_0.04_15/0.6)]">
              <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-wider mb-2">
                <Bug className="w-4 h-4" /> {t("support.bugTitle")}
              </div>
              <p className="text-sm text-muted-foreground">{t("support.bugSub")}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

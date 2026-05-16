import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import React, { useState } from "react";
import { User, BookOpen, Bot, CreditCard, Bug, HeartPulse, Send } from "lucide-react";
import lucyImg from "@/assets/lucy.png";

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
  const { t, i18n } = useTranslation();
  const cats = [
    { key: "a", Icon: User },
    { key: "b", Icon: BookOpen },
    { key: "c", Icon: Bot },
    { key: "d", Icon: CreditCard },
    { key: "e", Icon: Bug },
    { key: "f", Icon: HeartPulse },
  ] as const;

  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<{ from: "you" | "aria"; text: string }[]>([
    { from: "aria", text: t("support.chatGreeting") },
  ]);

  // Refresh greeting when language changes (only if user hasn't sent anything yet)
  React.useEffect(() => {
    setChat((c) => {
      if (c.length === 1 && c[0].from === "aria") {
        return [{ from: "aria", text: t("support.chatGreeting") }];
      }
      return c;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage]);

  const replies = [
    "Got it — I've routed this to the right human and I'm staying on the line.",
    "Thanks for sharing. Let me look into it and get back to you in a moment.",
    "Understood. I'll follow up with a clear next step shortly.",
    "Noted. While you wait, is there anything else on your mind?",
    "On it. I'll keep you posted as soon as I hear back.",
  ];

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat((c) => [...c, { from: "you", text: msg }]);
    setMsg("");
    setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setChat((c) => [...c, { from: "aria", text: reply }]);
    }, 700);
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
              <button className="text-left w-full glass rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all flex items-start gap-4">
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
          <div className="glass-strong rounded-3xl p-5 md:p-8 h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="min-w-0">
                <h3 className="font-semibold text-lg truncate">{t("support.chatTitle")}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{t("support.chatStatus")}</p>
              </div>
              <span className="shrink-0 flex items-center gap-1.5 text-xs glass rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> live
              </span>
            </div>
            <div className="flex-1 min-h-[280px] space-y-2.5 overflow-y-auto pr-1">
              {chat.map((m, i) =>
                m.from === "aria" ? (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/30 bg-card">
                      <img src={lucyImg} alt="Lucy" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-md px-4 py-2.5 text-sm max-w-[80%] break-words">{m.text}</div>
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="bg-foreground text-background rounded-2xl rounded-tr-md px-4 py-2.5 text-sm max-w-[80%] break-words">{m.text}</div>
                  </div>
                )
              )}
            </div>
            <p className="text-[11px] text-muted-foreground mt-4 mb-2">{t("support.chatHint")}</p>
            <form onSubmit={send} className="flex gap-2 w-full">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder={t("support.chatPlaceholder")}
                className="flex-1 min-w-0 bg-background/70 border border-border rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button type="submit" aria-label={t("support.chatSend")} className="shrink-0 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium inline-flex items-center gap-1.5 hover:bg-primary/90">
                <Send className="w-3.5 h-3.5" /> <span className="hidden sm:inline">{t("support.chatSend")}</span>
              </button>
            </form>
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

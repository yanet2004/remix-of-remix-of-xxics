import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Instagram, Youtube, Send, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — XXICS" },
      { name: "description", content: "Talk to XXICS about enrollment, partnerships, press or just curious questions about the future of school." },
      { property: "og:title", content: "Contact — XXICS" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{t("contact.eyebrow")}</p>
          <h1 className="text-display text-4xl md:text-7xl max-w-4xl">{t("contact.title")}</h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed text-justify-balanced">{t("contact.sub")}</p>
        </Reveal>
      </section>

      <section className="container-x pb-16 md:pb-24 grid lg:grid-cols-12 gap-6">
        <Reveal className="lg:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="glass-strong rounded-3xl p-6 md:p-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder={t("contact.formName")} />
              <input type="email" className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder={t("contact.formEmail")} />
            </div>
            <input className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder={t("contact.formSubject")} />
            <textarea rows={6} className="w-full bg-background/70 border border-border rounded-2xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder={t("contact.formMessage")} />
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/85">
              {t("contact.formSubmit")} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5 space-y-4">
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-1.5 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-wider">{t("contact.infoEmail")}</span>
            </div>
            <p className="text-lg font-medium">{t("contact.emailValue")}</p>
          </div>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-wider">{t("contact.infoLocation")}</span>
            </div>
            <p className="text-lg font-medium">{t("contact.locationValue")}</p>
          </div>
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{t("contact.infoSocial")}</div>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/xxics21?igsh=MWJkNmdubjNxcXJodg==", label: "Instagram" },
                { Icon: Send, href: "https://t.me/XXICS21", label: "Telegram" },
                { Icon: Youtube, href: "https://youtube.com/@polshaporshe", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Futuristic map */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden glass-strong aspect-[16/8]">
            <div className="absolute inset-0 grid-noise opacity-50" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.65 0.25 22 / 0.5)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.25 22 / 0)" />
                </radialGradient>
              </defs>
              <g stroke="oklch(0.5 0.05 280 / 0.18)" strokeWidth="0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 25} x2="800" y2={i * 25} />
                ))}
                {Array.from({ length: 32 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="400" />
                ))}
              </g>
              {/* abstract continents */}
              <path d="M80 180 q60 -80 160 -50 q60 20 100 -10 q70 -50 140 0 q60 40 30 110 q-40 70 -160 50 q-100 -10 -160 30 q-80 30 -110 -130z"
                fill="oklch(0.95 0.02 15 / 0.7)" stroke="oklch(0.5 0.05 280 / 0.3)" />
              {/* hubs */}
              {[
                { x: 250, y: 180, label: "Almaty" },
                { x: 320, y: 150, label: "Astana" },
                { x: 270, y: 230, label: "Shymkent" },
                { x: 480, y: 200, label: "Worldwide" },
              ].map((p) => (
                <g key={p.label}>
                  <circle cx={p.x} cy={p.y} r="40" fill="url(#g1)" />
                  <circle cx={p.x} cy={p.y} r="6" fill="oklch(0.55 0.22 25)" />
                  <circle cx={p.x} cy={p.y} r="10" fill="none" stroke="oklch(0.55 0.22 25 / 0.4)" />
                  <text x={p.x + 14} y={p.y + 4} fontSize="11" fill="oklch(0.18 0.01 280)" fontFamily="Inter">{p.label}</text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-5 left-5 glass rounded-full px-3 py-1.5 text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> XXICS network — live
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

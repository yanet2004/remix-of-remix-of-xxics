import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram, Youtube, Send } from "lucide-react";
import logoPeace from "@/assets/logo-peace.webp";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border/60 bg-gradient-to-b from-transparent to-[oklch(0.97_0.02_15/0.6)]">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-card">
                <img src={logoPeace} alt="XXICS" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">XXICS</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {t("brand.tagline")}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <form
              className="flex items-center gap-2 max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 glass rounded-full px-4 py-2.5 flex items-center gap-2">
                <input
                  type="email"
                  placeholder={t("footer.newsletterPh")}
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground/70"
                />
                <button
                  type="submit"
                  className="text-primary hover:text-primary/80"
                  aria-label={t("footer.subscribe")}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground">{t("footer.newsletter")}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.explore")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-primary transition-colors">{t("nav.ai")}</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t("nav.faq")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">{t("nav.support")}</Link></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">{t("footer.careers")}</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">{t("footer.press")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a className="hover:text-primary transition-colors cursor-pointer">{t("footer.privacy")}</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">{t("footer.terms")}</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">{t("footer.cookies")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>© {year} XXICS. {t("footer.rights")}</p>
            <p className="opacity-80">{t("footer.credits")}</p>
          </div>
          <div className="flex items-center gap-1">
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
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary cursor-pointer transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

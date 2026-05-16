import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import logoPeace from "@/assets/logo-peace.webp";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/ai-assistant", label: t("nav.ai") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/support", label: t("nav.support") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between gap-6 rounded-full px-4 md:px-6 py-2.5 transition-all glass-strong ${
            scrolled ? "shadow-[var(--shadow-soft)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-card shadow-[var(--shadow-soft)]">
              <img src={logoPeace} alt="XXICS" className="w-full h-full object-cover" />
              <span className="absolute inset-0 rounded-full bg-primary/10 blur-md group-hover:blur-lg transition-all" />
            </div>
            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-tight">XXICS</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-3.5 py-2 text-[13.5px] font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors data-[status=active]:text-foreground data-[status=active]:bg-muted/60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-[13px] font-medium hover:bg-foreground/85 transition-colors"
            >
              {t("nav.enroll")}
              <span className="opacity-60">→</span>
            </Link>
            <button
              aria-label="menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass-strong rounded-3xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="block px-4 py-3 rounded-2xl text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 data-[status=active]:text-foreground data-[status=active]:bg-muted/60"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

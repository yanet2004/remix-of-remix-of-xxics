import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "kz", label: "Қазақша", short: "KZ" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === i18n.resolvedLanguage) ?? LANGS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-[12.5px] font-medium hover:bg-card/80 transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5 opacity-70" />
        <span>{current.short}</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-44 glass-strong rounded-2xl p-1.5 shadow-[var(--shadow-elevated)] animate-fade-up z-50"
        >
          {LANGS.map((l) => {
            const active = l.code === current.code;
            return (
              <button
                key={l.code}
                role="menuitem"
                onClick={() => {
                  i18n.changeLanguage(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-[13px] hover:bg-muted/70 transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold w-6 opacity-70">{l.short}</span>
                  <span>{l.label}</span>
                </span>
                {active && <Check className="w-3.5 h-3.5 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

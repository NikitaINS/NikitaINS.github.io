"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./i18n";

interface LangCtx {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
  }, []);

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

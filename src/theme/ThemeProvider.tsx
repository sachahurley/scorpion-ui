import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type AppTheme = "modern" | "retro";

interface ThemeContextValue {
  theme: AppTheme;
  toggleTheme: () => void;
  setTheme: (t: AppTheme) => void;
  retroDark: boolean;
  setRetroDark: (v: boolean) => void;
  toggleRetroDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "scorpion-ui-theme";
const RETRO_DARK_KEY = "scorpion-ui-retro-dark";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as AppTheme | null;
    return stored ?? "modern";
  });
  const [retroDark, setRetroDarkState] = useState<boolean>(() => {
    const stored = localStorage.getItem(RETRO_DARK_KEY);
    return stored === "true";
  });

  const applyTheme = (t: AppTheme, rd: boolean) => {
    const root = document.documentElement;
    // data attribute for CSS targeting
    root.setAttribute("data-theme", t);
    // helper class for specificity
    root.classList.toggle("theme-retro", t === "retro");
    // retro-only dark mode flag
    if (t === "retro") {
      if (rd) root.setAttribute("data-retro-dark", "true");
      else root.removeAttribute("data-retro-dark");
    } else {
      root.removeAttribute("data-retro-dark");
    }
  };

  useEffect(() => {
    applyTheme(theme, retroDark);
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem(RETRO_DARK_KEY, String(retroDark));
  }, [theme, retroDark]);

  const setTheme = (t: AppTheme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === "retro" ? "modern" : "retro"));

  const setRetroDark = (v: boolean) => setRetroDarkState(v);
  const toggleRetroDark = () => setRetroDarkState((prev) => !prev);

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme, retroDark, setRetroDark, toggleRetroDark }),
    [theme, retroDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within ThemeProvider");
  return ctx;
}

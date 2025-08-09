import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type AppTheme = "modern" | "retro";

interface ThemeContextValue {
  theme: AppTheme;
  toggleTheme: () => void;
  setTheme: (t: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "scorpion-ui-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as AppTheme | null;
    return stored ?? "modern";
  });

  const applyTheme = (t: AppTheme) => {
    const root = document.documentElement;
    // data attribute for CSS targeting
    root.setAttribute("data-theme", t);
    // helper class for specificity
    root.classList.toggle("theme-retro", t === "retro");
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: AppTheme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === "retro" ? "modern" : "retro"));

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within ThemeProvider");
  return ctx;
}

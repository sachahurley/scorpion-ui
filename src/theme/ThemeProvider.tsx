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
const VERSION_KEY = "scorpion-ui-version";
const CURRENT_VERSION = "1.0.0";

// Theme validation and fallback utilities
const isValidTheme = (theme: string): theme is AppTheme => {
  return theme === "modern" || theme === "retro";
};

const getStoredTheme = (): AppTheme => {
  try {
    // Check if this is a new version that should reset to retro
    const storedVersion = localStorage.getItem(VERSION_KEY);
    if (storedVersion !== CURRENT_VERSION) {
      // Reset to retro theme for new version
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      localStorage.removeItem(STORAGE_KEY);
      return "retro";
    }
    
    const stored = localStorage.getItem(STORAGE_KEY);
    // If no stored value exists, default to retro
    if (!stored) {
      return "retro";
    }
    return isValidTheme(stored) ? stored : "retro";
  } catch (error) {
    console.warn("Failed to read theme from localStorage:", error);
    return "retro";
  }
};

const getStoredRetroDark = (): boolean => {
  try {
    const stored = localStorage.getItem(RETRO_DARK_KEY);
    return stored === "true";
  } catch (error) {
    console.warn("Failed to read retro dark mode from localStorage:", error);
    return false;
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>(getStoredTheme);
  const [retroDark, setRetroDarkState] = useState<boolean>(getStoredRetroDark);

  const applyTheme = (t: AppTheme, rd: boolean) => {
    try {
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
    } catch (error) {
      console.error("Failed to apply theme:", error);
    }
  };

  const saveToStorage = (t: AppTheme, rd: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, t);
      localStorage.setItem(RETRO_DARK_KEY, String(rd));
    } catch (error) {
      console.warn("Failed to save theme preferences to localStorage:", error);
    }
  };

  useEffect(() => {
    applyTheme(theme, retroDark);
    saveToStorage(theme, retroDark);
  }, [theme, retroDark]);

  const setTheme = (t: AppTheme) => {
    if (!isValidTheme(t)) {
      console.warn(`Invalid theme "${t}", falling back to "modern"`);
      setThemeState("modern");
      return;
    }
    setThemeState(t);
  };

  const toggleTheme = () => setThemeState((prev) => (prev === "retro" ? "modern" : "retro"));

  const setRetroDark = (v: boolean) => setRetroDarkState(Boolean(v));
  const toggleRetroDark = () => setRetroDarkState((prev) => !prev);

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme, retroDark, setRetroDark, toggleRetroDark }),
    [theme, retroDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Enhanced error message with usage guidance
    throw new Error(
      "useAppTheme must be used within ThemeProvider. " +
      "Make sure your component is wrapped with <ThemeProvider>."
    );
  }
  return ctx;
}

"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "red";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "red") {
      root.style.setProperty("--color-background", "#e60000"); // Red background
      root.style.setProperty("--color-foreground", "#000000"); // Black text
      root.style.setProperty("--color-grid-line", "rgba(0, 0, 0, 0.2)"); // Darker subtle grid lines
      root.style.setProperty("--color-brand-red", "#000000"); // Accents become black
    } else {
      root.style.setProperty("--color-background", "#000000");
      root.style.setProperty("--color-foreground", "#ededed");
      root.style.setProperty("--color-grid-line", "#333333");
      root.style.setProperty("--color-brand-red", "#e60000");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="transition-colors duration-700 ease-in-out min-h-screen bg-background text-foreground">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

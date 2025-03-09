import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "../types";
import { defaultThemes } from "../data/theme";

interface ThemeContextType {
  currentTheme: Theme;
  isDarkMode: boolean;
  themes: Theme[];
  setTheme: (theme: Theme) => void;
  toggleDarkMode: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themes] = useState<Theme[]>(defaultThemes);
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const savedThemeId = localStorage.getItem("themeId");
    return savedThemeId
      ? defaultThemes.find((t) => t.id === savedThemeId) || defaultThemes[0]
      : defaultThemes[0];
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-primary",
      currentTheme.primaryColor
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      currentTheme.secondaryColor
    );
    document.documentElement.style.setProperty(
      "--color-background",
      currentTheme.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--color-text",
      currentTheme.textColor
    );
  }, [currentTheme]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("themeId", theme.id);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, isDarkMode, themes, setTheme, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

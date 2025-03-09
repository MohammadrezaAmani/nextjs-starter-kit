import { Theme } from "../types";

export const defaultThemes: Theme[] = [
  {
    id: "default-dark",
    name: "Default Dark",
    primaryColor: "#0ea5e9",
    secondaryColor: "#8b5cf6",
    backgroundColor: "#111827",
    textColor: "#f9fafb",
    isDark: true,
  },
  {
    id: "default-light",
    name: "Default Light",
    primaryColor: "#0ea5e9",
    secondaryColor: "#8b5cf6",
    backgroundColor: "#ffffff",
    textColor: "#111827",
    isDark: false,
  },
  {
    id: "airbnb",
    name: "Airbnb",
    primaryColor: "#ff385c",
    secondaryColor: "#00a6de",
    backgroundColor: "#ffffff",
    textColor: "#222222",
    isDark: false,
  },
  {
    id: "instagram",
    name: "Instagram",
    primaryColor: "#833ab4",
    secondaryColor: "#fd1d1d",
    backgroundColor: "#ffffff",
    textColor: "#262626",
    isDark: false,
  },
  {
    id: "notion",
    name: "Notion",
    primaryColor: "#000000",
    secondaryColor: "#2383e2",
    backgroundColor: "#ffffff",
    textColor: "#37352f",
    isDark: false,
  },
];

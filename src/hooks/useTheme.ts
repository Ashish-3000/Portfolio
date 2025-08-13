// hooks/useTheme.ts
import { useState, useEffect } from "react";
import { ThemeType } from "../types";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  
  useEffect(() => {
    // Get initial theme from localStorage or default to dark
    if (typeof window !== "undefined") {
      const savedTheme = (localStorage.getItem("theme") as ThemeType) || "dark";
      setTheme(savedTheme);
    }
  }, []);

  const updateTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  return { theme, setTheme: updateTheme };
}
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-changing");
    // Let the browser register the transition before changing the palette.
    requestAnimationFrame(() => {
      root.dataset.theme = next;
      try { localStorage.setItem("portfolio-theme", next); } catch {}
      setTheme(next);
      window.setTimeout(() => root.classList.remove("theme-changing"), 550);
    });
  }

  return <button type="button" className="theme-toggle" onClick={toggle} aria-pressed={theme === "light"} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
    {theme === "dark" ? <Sun size={21}/> : <Moon size={21}/>}
  </button>;
}

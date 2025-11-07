// File: src/components/ui/ThemeToggle.tsx
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ThemeToggle
 * - Elegant pill with large knob
 * - Neumorphism (soft shadows) in light mode; inset look in dark mode
 * - Accessible button, persists to localStorage
 */
const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [dark, setDark] = useState<boolean>(() => {
    const s = localStorage.getItem("theme");
    if (s) return s === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // neumorphic backgrounds
  const outerStyleLight = {
    background: "var(--color-dark-gray2)",
    boxShadow:
      "inset 3px 3px 6px rgba(0,0,0,0.15), inset 3px 3px 6px rgba(255,255,255,0.05)",
  };
  const outerStyleDark = {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.25))",
    boxShadow:
      "inset 3px 3px 6px rgba(0, 0, 0, 0.38), inset -3px -3px 6px rgba(255,255,255,0.03)",
  };

  return (
    <button
      aria-pressed={dark}
      aria-label="Toggle theme"
      onClick={() => setDark((s) => !s)}
      className={`relative rounded-full p-0.5 w-14 h-7 flex items-center focus:outline-none transition-all ${className}`}
      style={dark ? outerStyleDark : outerStyleLight}
    >
      {/* sun & moon static icons at sides */}
      {/* <Sun
        className="absolute left-2 w-3 h-3 transition-opacity"
        style={{ opacity: dark ? 0.4 : 0.9, color: dark ? "#aaa" : "#f59e0b" }}
      />
      <Moon
        className="absolute right-2 w-3 h-3 transition-opacity"
        style={{ opacity: dark ? 0.9 : 0.4, color: dark ? "#ddd" : "#555" }}
      /> */}

      {/* knob */}
      <motion.div
        layout
        initial={false}
        animate={{ x: dark ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          background: dark
            ? "linear-gradient(180deg,#2c2c2c,#171717)"
            : "#ffffff",
          boxShadow: dark
            ? "3px 3px 6px rgba(0,0,0,0.6)"
            : "2px 3px 6px rgba(0,0,0,0.15), -2px -3px 6px rgba(255,255,255,0.6)",
        }}
      >
        {dark ? (
          <Moon className="w-3 h-3 text-gray-300" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;


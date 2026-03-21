"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/providers/ThemeProvider";
import clsx from "clsx";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative inline-flex items-center justify-center",
        "w-10 h-10 rounded-lg",
        "bg-neutral-100 dark:bg-neutral-800",
        "hover:bg-neutral-200 dark:hover:bg-neutral-700",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
      )}
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 text-neutral-700" />
      ) : (
        <SunIcon className="w-5 h-5 text-neutral-300" />
      )}
    </button>
  );
}

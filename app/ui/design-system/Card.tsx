import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = false,
}: CardProps) {
  const baseClasses = "rounded-xl transition-all duration-300";

  const variantClasses = {
    default:
      "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800",
    glass: "glass-card",
    bordered:
      "bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700",
    elevated:
      "bg-white dark:bg-neutral-900 shadow-xl shadow-neutral-200/50 dark:shadow-neutral-950/50",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:shadow-2xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-700 cursor-pointer"
    : "";

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        className,
      )}
    >
      {children}
    </div>
  );
}

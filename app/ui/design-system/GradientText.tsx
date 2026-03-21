import { ReactNode } from "react";
import clsx from "clsx";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  gradient?: "primary" | "accent" | "rainbow";
}

export default function GradientText({
  children,
  className = "",
  animated = false,
  gradient = "primary",
}: GradientTextProps) {
  const gradients = {
    primary: "from-primary-500 via-primary-600 to-accent-500",
    accent: "from-accent-400 via-accent-500 to-accent-600",
    rainbow: "from-blue-500 via-primary-500 to-accent-500",
  };

  const baseClasses = "bg-clip-text text-transparent bg-gradient-to-r";
  const gradientClass = gradients[gradient];
  const animatedClass = animated ? "gradient-text-animated" : "";

  return (
    <span
      className={clsx(baseClasses, gradientClass, animatedClass, className)}
    >
      {children}
    </span>
  );
}

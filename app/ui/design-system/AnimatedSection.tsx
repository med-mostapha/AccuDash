"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "slide-in-right" | "scale-in";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700",
        isVisible ? `animate-${animation} opacity-100` : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

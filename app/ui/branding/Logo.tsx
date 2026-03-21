import { lusitana } from "@/app/ui/fonts";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "default" | "light" | "dark";
}

export default function Logo({
  className = "",
  iconOnly = false,
  variant = "default",
}: LogoProps) {
  const colorClasses = {
    default: "text-neutral-900 dark:text-white",
    light: "text-white",
    dark: "text-neutral-900",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className="relative">
        <Squares2X2Icon
          className={`h-10 w-10 ${variant === "default" ? "text-primary-500" : colorClasses[variant]}`}
        />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-500 animate-pulse" />
      </div>

      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`${lusitana.className} text-2xl font-bold leading-none ${colorClasses[variant]}`}
          >
            AccuDash
          </span>
          <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium tracking-wider uppercase">
            Financial Intelligence
          </span>
        </div>
      )}
    </div>
  );
}

import { ReactNode } from "react";
import clsx from "clsx";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  icon: ReactNode;
  required?: boolean;
  minLength?: number;
  autoComplete?: string;
  error?: string;
}

export default function FormInput({
  id,
  name,
  type,
  label,
  placeholder,
  icon,
  required = false,
  minLength,
  autoComplete,
  error,
}: FormInputProps) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={clsx(
            "peer block w-full rounded-lg border py-3 pl-11 pr-4 text-sm transition-all",
            "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "bg-white dark:bg-neutral-900",
            "text-neutral-900 dark:text-neutral-100",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
            "outline-none",
          )}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          autoComplete={autoComplete}
        />
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500">
          {icon}
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

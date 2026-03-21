import { clsx } from "clsx";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm md:text-base">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className="flex items-center gap-2"
          >
            <Link
              href={breadcrumb.href}
              className={clsx(
                "font-medium transition-colors",
                breadcrumb.active
                  ? "text-neutral-900 dark:text-white cursor-default"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400",
              )}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <ChevronRightIcon className="h-4 w-4 text-neutral-400 dark:text-neutral-600" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

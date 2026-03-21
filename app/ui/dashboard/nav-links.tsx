"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group relative flex  h-12 items-center justify-center gap-3 rounded-lg px-3 text-sm font-medium transition-all duration-200 md:justify-start",
              isActive
                ? "bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100",
            )}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-500 rounded-r-full max-md:w-12 max-md:h-1 max-md:top-full" />
            )}

            <LinkIcon
              className={clsx(
                "w-6 h-6 transition-transform group-hover:scale-110",
                isActive
                  ? "text-primary-500"
                  : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300",
              )}
            />

            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

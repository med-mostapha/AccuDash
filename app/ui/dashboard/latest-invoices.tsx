import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { lusitana } from "../fonts";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col">
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
      >
        Latest Invoices
      </h2>

      <div className="flex flex-col rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="flex-1 p-6">
          {latestInvoices.length === 0 ? (
            <p className="text-center text-neutral-400 dark:text-neutral-500 py-8">
              No invoices yet.
            </p>
          ) : (
            <div className="space-y-1">
              {latestInvoices.map((invoice, i) => (
                <div
                  key={invoice.id}
                  className={clsx(
                    "flex items-center justify-between py-4 px-3 rounded-lg transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800",
                    {
                      "border-t border-neutral-100 dark:border-neutral-800":
                        i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                      <Image
                        src={invoice.image_url}
                        alt={`${invoice.name}'s profile picture`}
                        className="relative rounded-full border-2 border-white dark:border-neutral-900"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                        {invoice.name}
                      </p>
                      <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                        {invoice.email}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`${lusitana.className} text-base font-bold text-neutral-900 dark:text-white ml-4`}
                  >
                    {invoice.amount}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
          <ArrowPathIcon className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Updated just now
          </p>
        </div>
      </div>
    </div>
  );
}

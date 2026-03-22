import { fetchTopCustomersByRevenue } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function TopCustomersChart() {
  const customers = await fetchTopCustomersByRevenue(5);

  if (!customers || customers.length === 0) {
    return (
      <div className="w-full">
        <h2
          className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
        >
          Top Customers
        </h2>
        <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 text-center">
          <p className="text-neutral-400 dark:text-neutral-500">
            No data available.
          </p>
        </div>
      </div>
    );
  }

  // Find max revenue for scaling
  const maxRevenue = Math.max(...customers.map((c) => c.total_revenue));

  return (
    <div className="w-full">
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
      >
        Top Customers
      </h2>

      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="space-y-4">
          {customers.map((customer, index) => {
            const barWidth = (customer.total_revenue / maxRevenue) * 100;

            return (
              <div key={customer.id} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                      {customer.image_url ? (
                        <Image
                          src={customer.image_url}
                          alt={customer.name}
                          width={32}
                          height={32}
                          className="relative rounded-full border-2 border-white dark:border-neutral-900"
                        />
                      ) : (
                        <UserCircleIcon className="relative h-8 w-8 text-neutral-400 dark:text-neutral-500" />
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {customer.name}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {customer.total_invoices} invoice
                        {customer.total_invoices !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">
                      {customer.total_revenue_formatted}
                    </p>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {customer.paid_revenue_formatted}
                      </span>
                      <span className="text-neutral-400">|</span>
                      <span className="text-amber-600 dark:text-amber-400">
                        {customer.pending_revenue_formatted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{
                      width: `${(customer.paid_revenue / maxRevenue) * 100}%`,
                    }}
                  />

                  {/* Pending portion */}
                  <div
                    className="absolute top-0 h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-1000 ease-out"
                    style={{
                      left: `${(customer.paid_revenue / maxRevenue) * 100}%`,
                      width: `${(customer.pending_revenue / maxRevenue) * 100}%`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Paid
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { fetchMonthlyInvoiceTrends } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default async function MonthlyTrendsChart() {
  const trends = await fetchMonthlyInvoiceTrends();

  if (!trends || trends.length === 0) {
    return (
      <div className="w-full">
        <h2
          className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
        >
          Monthly Trends
        </h2>
        <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 text-center">
          <p className="text-neutral-400 dark:text-neutral-500">
            No data available.
          </p>
        </div>
      </div>
    );
  }

  // Find max values for scaling
  const maxAmount = Math.max(...trends.map((t) => t.total_amount));
  const maxCount = Math.max(...trends.map((t) => t.invoice_count));
  const chartHeight = 200;
  const chartWidth = 100; // percentage per month

  return (
    <div className="w-full">
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
      >
        Monthly Trends
      </h2>

      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Chart */}
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-950 p-4 mb-4">
          <div className="relative" style={{ height: `${chartHeight}px` }}>
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-t border-neutral-200 dark:border-neutral-800"
                />
              ))}
            </div>

            <div className="absolute inset-0 flex items-end justify-around gap-1">
              {trends.map((month, index) => {
                const barHeight =
                  (month.total_amount / maxAmount) * chartHeight;
                const paidHeight =
                  (month.paid_amount / maxAmount) * chartHeight;
                const pendingHeight =
                  (month.pending_amount / maxAmount) * chartHeight;

                return (
                  <div
                    key={month.month}
                    className="flex-1 flex flex-col items-center gap-2 group relative"
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10">
                      <div className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                        <p className="font-bold">{month.month}</p>
                        <p className="text-emerald-400 dark:text-emerald-600">
                          Paid: {month.paid_amount_formatted}
                        </p>
                        <p className="text-amber-400 dark:text-amber-600">
                          Pending: {month.pending_amount_formatted}
                        </p>
                        <p className="text-neutral-400 dark:text-neutral-600 text-[10px] mt-1">
                          {month.invoice_count} invoice
                          {month.invoice_count !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rotate-45 -mt-1" />
                    </div>

                    {/* Stacked Bar */}
                    <div
                      className="w-full flex flex-col justify-end"
                      style={{ height: `${chartHeight}px` }}
                    >
                      {/* Pending portion top */}
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-amber-500 to-amber-400 transition-all duration-500 group-hover:from-amber-600 group-hover:to-amber-500 relative overflow-hidden"
                        style={{ height: `${pendingHeight}px` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Paid portion (bottom )*/}
                      <div
                        className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 transition-all duration-500 group-hover:from-emerald-600 group-hover:to-emerald-500 relative overflow-hidden"
                        style={{
                          height: `${paidHeight}px`,
                          borderTopLeftRadius:
                            pendingHeight === 0 ? "0.5rem" : "0",
                          borderTopRightRadius:
                            pendingHeight === 0 ? "0.5rem" : "0",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Month label */}
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {month.month}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Total Invoices
            </p>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              {trends.reduce((sum, t) => sum + t.invoice_count, 0)}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Total Revenue
            </p>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              {trends[0]?.total_amount_formatted || "$0"}
            </p>
          </div>

          {/* Avg Invoice */}
          <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Avg Invoice
            </p>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              {trends[0]?.avg_amount_formatted || "$0"}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Period
            </p>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              {trends.length} mo
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Last 12 months
            </span>
          </div>
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

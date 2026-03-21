import { generateYAxis } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";
import { fetchRevenue } from "@/app/lib/data";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return (
      <div className="w-full md:col-span-4">
        <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 text-center">
          <p className="text-neutral-400 dark:text-neutral-500">
            No data available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
      >
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-950 p-4">
          <div className="grid grid-cols-12 sm:grid-cols-13 items-end gap-2 md:gap-4">
            <div
              className="hidden sm:flex flex-col justify-between text-sm text-neutral-400 dark:text-neutral-500 font-medium"
              style={{ height: `${chartHeight}px` }}
            >
              {yAxisLabels.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>

            {revenue.map((month, index) => (
              <div
                key={month.month}
                className="flex flex-col items-center gap-2 group"
              >
                {/* Bar */}
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-primary-500 to-primary-400 shadow-sm transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-500 group-hover:shadow-lg relative overflow-hidden"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium -rotate-90 sm:rotate-0">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 pt-6 text-neutral-500 dark:text-neutral-400">
          <CalendarIcon className="h-5 w-5" />
          <p className="text-sm font-medium">Last 12 months</p>
        </div>
      </div>
    </div>
  );
}

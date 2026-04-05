import { fetchInvoiceStatusDistribution } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
import { AnimatedNumber } from "./animated-number";

export default async function InvoiceStatusChart() {
  const data = await fetchInvoiceStatusDistribution();

  if (!data || data.total.count === 0) {
    return (
      <div className="w-full">
        <h2
          className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
        >
          Invoice Status
        </h2>
        <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 text-center">
          <p className="text-neutral-400 dark:text-neutral-500">
            No data available.
          </p>
        </div>
      </div>
    );
  }

  const paidPercentage = (data.paid.count / data.total.count) * 100;
  const pendingPercentage = (data.pending.count / data.total.count) * 100;

  // SVG Donut calculation
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const paidOffset = circumference - (paidPercentage / 100) * circumference;
  const pendingOffset =
    circumference - (pendingPercentage / 100) * circumference;

  return (
    <div className="w-full">
      <h2
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold text-neutral-900 dark:text-white`}
      >
        Invoice Status
      </h2>

      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex-shrink-0">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="transform -rotate-90"
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="30"
                className="text-neutral-100 dark:text-neutral-800"
              />

              {/* Paid Arc */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="30"
                strokeDasharray={circumference}
                strokeDashoffset={paidOffset}
                className="text-green-400 dark:text-green-400 transition-all duration-1000"
                strokeLinecap="round"
              />

              {/* Pending Arc */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="30"
                strokeDasharray={circumference}
                strokeDashoffset={pendingOffset}
                className="text-orange-400 dark:text-orange-400 transition-all duration-1000"
                strokeLinecap="round"
                style={{
                  transform: `rotate(${paidPercentage * 3.6}deg)`,
                  transformOrigin: "100px 100px",
                }}
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <AnimatedNumber
                value={data.total.count}
                className="text-3xl font-bold text-neutral-900 dark:text-white"
              />
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Total
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 space-y-4 w-full">
            {/* Paid */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Paid
                  </p>
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">
                    {data.paid.formatted}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {paidPercentage.toFixed(0)}%
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {data.paid.count} invoices
                </p>
              </div>
            </div>

            {/* Pending */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Pending
                  </p>
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">
                    {data.pending.formatted}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {pendingPercentage.toFixed(0)}%
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {data.pending.count} invoices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

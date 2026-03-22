const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-white/10 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
        <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="h-8 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden`}>
      <div className="mb-4 h-8 w-40 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-950 p-4">
          <div className="h-[350px] grid grid-cols-12 items-end gap-2" />
        </div>
        <div className="flex items-center gap-2 pt-6">
          <div className="h-5 w-5 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-4 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex items-center justify-between py-4 px-3 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-3 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
      <div className="h-5 w-20 rounded-full bg-neutral-200 dark:bg-neutral-700" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className={`${shimmer} relative flex w-full flex-col overflow-hidden`}>
      <div className="mb-4 h-8 w-40 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
      <div className="flex flex-col rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
        <div className="flex-1 p-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center gap-2 px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
          <div className="h-5 w-5 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-4 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div
          className={`${shimmer} relative h-8 w-48 overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-700`}
        />
        <div
          className={`${shimmer} relative h-4 w-64 overflow-hidden rounded bg-neutral-200 dark:bg-neutral-700`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardsSkeleton />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
      <td className="whitespace-nowrap py-4 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-5 w-32 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-4 w-40 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-5 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-6 w-20 rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-6">
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-32 rounded bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
        <div className="h-6 w-20 rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="space-y-2">
          <div className="h-7 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6">
      <div className="md:hidden space-y-3">
        <InvoicesMobileSkeleton />
        <InvoicesMobileSkeleton />
        <InvoicesMobileSkeleton />
        <InvoicesMobileSkeleton />
        <InvoicesMobileSkeleton />
      </div>

      <div className="hidden md:block">
        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
            <thead className="bg-neutral-50 dark:bg-neutral-950">
              <tr>
                <th
                  scope="col"
                  className="py-4 pl-6 pr-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Status
                </th>
                <th scope="col" className="relative py-4 pl-3 pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function CustomerRowSkeleton() {
  return (
    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
      <td className="whitespace-nowrap py-4 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-5 w-32 rounded bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-4 w-40 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-5 w-12 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-5 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <div className="h-5 w-20 rounded bg-neutral-200 dark:bg-neutral-700" />
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-6">
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </td>
    </tr>
  );
}

export function CustomersMobileSkeleton() {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="space-y-2">
            <div className="h-4 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-36 rounded bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-4 pb-3">
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
          <div className="h-5 w-8 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
          <div className="h-5 w-12 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-12 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
          <div className="h-5 w-12 rounded bg-neutral-200 dark:bg-neutral-700 mx-auto" />
        </div>
      </div>
      <div className="flex justify-end gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
        <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
        <div className="h-10 w-10 rounded-lg bg-neutral-200 dark:bg-neutral-700" />
      </div>
    </div>
  );
}

export function CustomersTableSkeleton() {
  return (
    <div className="mt-6">
      <div className="md:hidden space-y-3">
        <CustomersMobileSkeleton />
        <CustomersMobileSkeleton />
        <CustomersMobileSkeleton />
        <CustomersMobileSkeleton />
        <CustomersMobileSkeleton />
      </div>

      <div className="hidden md:block">
        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
            <thead className="bg-neutral-50 dark:bg-neutral-950">
              <tr>
                <th
                  scope="col"
                  className="py-4 pl-6 pr-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Total Invoices
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Total Pending
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
                >
                  Total Paid
                </th>
                <th scope="col" className="relative py-4 pl-3 pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
              <CustomerRowSkeleton />
              <CustomerRowSkeleton />
              <CustomerRowSkeleton />
              <CustomerRowSkeleton />
              <CustomerRowSkeleton />
              <CustomerRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function InvoiceStatusChartSkeleton() {
  return (
    <div className="w-full">
      <div className="mb-4 h-8 w-48 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Donut skeleton */}
          <div className="w-[200px] h-[200px] rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />

          {/* Stats skeleton */}
          <div className="flex-1 space-y-4 w-full">
            <div className="h-20 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
            <div className="h-20 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopCustomersChartSkeleton() {
  return (
    <div className="w-full">
      <div className="mb-4 h-8 w-48 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                <div className="flex-1 h-6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                <div className="w-20 h-6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
              </div>
              <div className="h-3 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MonthlyTrendsChartSkeleton() {
  return (
    <div className="w-full">
      <div className="mb-4 h-8 w-48 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6">
        <div className="rounded-lg bg-neutral-50 dark:bg-neutral-950 p-4 mb-4">
          <div className="h-[200px] flex items-end justify-around gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                key={i}
                className="flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-t-lg animate-pulse"
                style={{ height: `${Math.random() * 80 + 20}%` }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            >
              <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse mb-2" />
              <div className="h-6 w-12 rounded bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import CardWrapper from "@/app/ui/dashboard/cards";
import InvoiceStatusChart from "@/app/ui/dashboard/invoice-status-chart";
import TopCustomersChart from "@/app/ui/dashboard/top-customers-chart";
import MonthlyTrendsChart from "@/app/ui/dashboard/monthly-trends-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  CardsSkeleton,
  InvoiceStatusChartSkeleton,
  TopCustomersChartSkeleton,
  MonthlyTrendsChartSkeleton,
  LatestInvoicesSkeleton,
} from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`${lusitana.className} text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white`}
          >
            Dashboard
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Overview of your business performance
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Last updated: Just now
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>

        <Suspense fallback={<TopCustomersChartSkeleton />}>
          <TopCustomersChart />
        </Suspense>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Suspense fallback={<MonthlyTrendsChartSkeleton />}>
          <MonthlyTrendsChart />
        </Suspense>

        <Suspense fallback={<InvoiceStatusChartSkeleton />}>
          <InvoiceStatusChart />
        </Suspense>
      </div>
    </main>
  );
}

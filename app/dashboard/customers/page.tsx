import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchCustomersPages } from "@/app/lib/data";
import { Metadata } from "next";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customers",
  description: "Manage your client list and track their interaction history.",
};

async function CustomersContent({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const totalPages = await fetchCustomersPages(query);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`${lusitana.className} text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white`}
          >
            Customers
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Manage your clients and track their invoices
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <Search placeholder="Search customers..." />
        </div>
        <Link
          href="/dashboard/customers/create"
          className="group flex h-10 items-center gap-2 rounded-lg bg-primary-500 px-4 text-sm font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          <span className="hidden md:block">Create Customer</span>
          <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
        </Link>
      </div>

      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersContent query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}

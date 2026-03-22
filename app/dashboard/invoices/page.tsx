import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
  description:
    "View and manage all your business invoices and payment statuses.",
};

async function InvoicesContent({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const totalPages = await fetchInvoicesPages(query);

  return (
    <>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
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
            Invoices
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Manage and track all your invoices
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <Search placeholder="Search invoices..." />
        </div>
        <CreateInvoice />
      </div>

      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InvoicesContent query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}

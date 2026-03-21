import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices } from "@/app/lib/data";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        {/* Mobile View - Cards */}
        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-3">
          {invoices?.map((invoice) => (
            <div
              key={invoice.id}
              className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  {/* Avatar with gradient ring */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                    <Image
                      src={invoice.image_url}
                      className="relative rounded-full border-2 border-white dark:border-neutral-900"
                      width={40}
                      height={40}
                      alt={`${invoice.name}'s profile picture`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {invoice.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <InvoiceStatus status={invoice.status} />
              </div>

              {/* Body */}
              <div className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {formatCurrency(invoice.amount)}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {formatDateToLocal(invoice.date)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <UpdateInvoice id={invoice.id} />
                  <DeleteInvoice id={invoice.id} />
                </div>
              </div>
            </div>
          ))}
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
                {invoices?.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  >
                    {/* Customer */}
                    <td className="whitespace-nowrap py-4 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                          <Image
                            src={invoice.image_url}
                            className="relative rounded-full border-2 border-white dark:border-neutral-900"
                            width={32}
                            height={32}
                            alt={`${invoice.name}'s profile picture`}
                          />
                        </div>
                        <p className="font-semibold text-neutral-900 dark:text-white">
                          {invoice.name}
                        </p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {invoice.email}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-neutral-900 dark:text-white">
                      {formatCurrency(invoice.amount)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {formatDateToLocal(invoice.date)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-4">
                      <InvoiceStatus status={invoice.status} />
                    </td>

                    {/* Actions */}
                    <td className="whitespace-nowrap py-4 pl-3 pr-6">
                      <div className="flex justify-end gap-2">
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice id={invoice.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {(!invoices || invoices.length === 0) && (
          <div className="mt-6 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-12 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              No invoices found. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";
import { UpdateCustomer, DeleteCustomer } from "./buttons";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-3">
          {customers?.map((customer) => (
            <div
              key={customer.id}
              className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  {/* Avatar with gradient ring */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                    <Image
                      src={customer.image_url}
                      className="relative rounded-full border-2 border-white dark:border-neutral-900"
                      width={48}
                      height={48}
                      alt={`${customer.name}'s profile picture`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {customer.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {customer.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 pb-3">
                <div className="text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    Invoices
                  </p>
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">
                    {customer.total_invoices}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    Pending
                  </p>
                  <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {customer.total_pending}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    Paid
                  </p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {customer.total_paid}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                <UpdateCustomer id={customer.id} />
                <DeleteCustomer id={customer.id} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
              {/* Table Header */}
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

              {/* Table Body */}
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
                {customers?.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  >
                    {/* Customer */}
                    <td className="whitespace-nowrap py-4 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar with gradient ring */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-sm opacity-50" />
                          <Image
                            src={customer.image_url}
                            className="relative rounded-full border-2 border-white dark:border-neutral-900"
                            width={40}
                            height={40}
                            alt={`${customer.name}'s profile picture`}
                          />
                        </div>
                        <p className="font-semibold text-neutral-900 dark:text-white">
                          {customer.name}
                        </p>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {customer.email}
                    </td>

                    {/* Total Invoices */}
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-neutral-900 dark:text-white">
                      {customer.total_invoices}
                    </td>

                    {/* Total Pending */}
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-amber-600 dark:text-amber-400">
                      {customer.total_pending}
                    </td>

                    {/* Total Paid */}
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {customer.total_paid}
                    </td>

                    {/* Actions */}
                    <td className="whitespace-nowrap py-4 pl-3 pr-6">
                      <div className="flex justify-end gap-2">
                        <UpdateCustomer id={customer.id} />
                        <DeleteCustomer id={customer.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {(!customers || customers.length === 0) && (
          <div className="mt-6 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-12 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              No customers found. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "@/app/ui/design-system/Button";
import { useActionState } from "react";
import { createInvoice, State } from "@/app/lib/actions/invoices";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* Form Card */}
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 shadow-sm">
        {/* Customer Name */}
        <div className="mb-6">
          <label
            htmlFor="customer"
            className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-3 pl-11 pr-4 text-base text-neutral-900 dark:text-neutral-100 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500 transition-colors" />
          </div>
          {state.errors?.customerId && (
            <div
              id="customer-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.customerId.map((error: string) => (
                <p
                  className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                  key={error}
                >
                  <span className="inline-block w-1 h-1 bg-red-600 dark:bg-red-400 rounded-full" />
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Invoice Amount */}
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Choose an amount
          </label>
          <div className="relative">
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Enter USD amount"
              className="peer block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-3 pl-11 pr-4 text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              aria-describedby="amount-error"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500 transition-colors" />
          </div>
          {state.errors?.amount && (
            <div
              id="amount-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.amount.map((error: string) => (
                <p
                  className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                  key={error}
                >
                  <span className="inline-block w-1 h-1 bg-red-600 dark:bg-red-400 rounded-full" />
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Invoice Status */}
        <fieldset aria-describedby="status-error">
          <legend className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
            Set the invoice status
          </legend>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Pending Option */}
            <label
              htmlFor="pending"
              className="relative flex items-center gap-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 cursor-pointer transition-all hover:border-amber-300 dark:hover:border-amber-700 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50 dark:has-[:checked]:bg-amber-950 flex-1"
            >
              <input
                id="pending"
                name="status"
                type="radio"
                value="pending"
                className="h-5 w-5 cursor-pointer text-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Pending
                </span>
              </div>
            </label>

            {/* Paid Option */}
            <label
              htmlFor="paid"
              className="relative flex items-center gap-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 cursor-pointer transition-all hover:border-emerald-300 dark:hover:border-emerald-700 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50 dark:has-[:checked]:bg-emerald-950 flex-1"
            >
              <input
                id="paid"
                name="status"
                type="radio"
                value="paid"
                className="h-5 w-5 cursor-pointer text-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Paid
                </span>
              </div>
            </label>
          </div>

          {state.errors?.status && (
            <div
              id="status-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.status.map((error: string) => (
                <p
                  className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                  key={error}
                >
                  <span className="inline-block w-1 h-1 bg-red-600 dark:bg-red-400 rounded-full" />
                  {error}
                </p>
              ))}
            </div>
          )}
        </fieldset>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3">
        <Link
          href="/dashboard/invoices"
          className="flex h-11 items-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          Cancel
        </Link>
        <Button type="submit" variant="primary" size="lg">
          Create Invoice
        </Button>
      </div>
    </form>
  );
}

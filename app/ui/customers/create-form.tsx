"use client";

import Link from "next/link";
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Button from "@/app/ui/design-system/Button";
import { useActionState } from "react";
import { createCustomer, State } from "@/app/lib/actions/customers";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createCustomer, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* Form Card */}
      <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 shadow-sm">
        {/* Customer Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Customer Name
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter customer name"
              className="peer block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-3 pl-11 pr-4 text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              aria-describedby="name-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500 transition-colors" />
          </div>
          {state.errors?.name && (
            <div
              id="name-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.name.map((error: string) => (
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

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className="peer block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-3 pl-11 pr-4 text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              aria-describedby="email-error"
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500 transition-colors" />
          </div>
          {state.errors?.email && (
            <div
              id="email-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.email.map((error: string) => (
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

        <div className="mb-6">
          <label
            htmlFor="image_url"
            className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Image URL{" "}
            <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <input
              id="image_url"
              name="image_url"
              type="url"
              placeholder="https://example.com/avatar.jpg"
              className="peer block w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-3 pl-11 pr-4 text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              aria-describedby="image_url-error"
            />
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 peer-focus:text-primary-500 transition-colors" />
          </div>
          {state.errors?.image_url && (
            <div
              id="image_url-error"
              className="mt-2"
              aria-live="polite"
              aria-atomic="true"
            >
              {state.errors.image_url.map((error: string) => (
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
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3">
        <Link
          href="/dashboard/customers"
          className="flex h-11 items-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          Cancel
        </Link>
        <Button type="submit" variant="primary" size="lg">
          Create Customer
        </Button>
      </div>
    </form>
  );
}

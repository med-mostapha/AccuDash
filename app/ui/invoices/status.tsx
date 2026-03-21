import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
        {
          "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900":
            status === "pending",
          "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900":
            status === "paid",
        },
      )}
    >
      {status === "pending" ? (
        <>
          <ClockIcon className="w-4 h-4" />
          Pending
        </>
      ) : null}
      {status === "paid" ? (
        <>
          <CheckIcon className="w-4 h-4" />
          Paid
        </>
      ) : null}
    </span>
  );
}

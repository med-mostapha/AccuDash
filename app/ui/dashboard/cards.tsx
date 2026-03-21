import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

// Color themes for each card type
const cardStyles = {
  collected: {
    iconBg: "bg-emerald-100 dark:bg-emerald-950",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-500/10 to-transparent",
  },
  pending: {
    iconBg: "bg-amber-100 dark:bg-amber-950",
    iconColor: "text-amber-600 dark:text-amber-400",
    gradient: "from-amber-500/10 to-transparent",
  },
  invoices: {
    iconBg: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500/10 to-transparent",
  },
  customers: {
    iconBg: "bg-purple-100 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500/10 to-transparent",
  },
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];
  const styles = cardStyles[type];

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-50`}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {title}
          </h3>
          <div
            className={`p-2 rounded-lg ${styles.iconBg} transition-transform group-hover:scale-110`}
          >
            {Icon && <Icon className={`h-5 w-5 ${styles.iconColor}`} />}
          </div>
        </div>

        <p
          className={`${lusitana.className} text-3xl font-bold text-neutral-900 dark:text-white`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

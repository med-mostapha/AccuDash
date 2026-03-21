import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full space-y-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Create New Invoice
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Fill in the details to create a new invoice
        </p>
      </div>

      <Form customers={customers} />
    </div>
  );
}

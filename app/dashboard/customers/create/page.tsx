import Form from "@/app/ui/customers/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Customer",
};

export default async function Page() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customer",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      />

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Create New Customer
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Add a new customer to your database
        </p>
      </div>

      <Form />
    </div>
  );
}

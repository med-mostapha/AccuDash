import Form from "@/app/ui/customers/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomerById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Customer",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="w-full space-y-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Edit Customer",
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Edit Customer
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Update customer information
        </p>
      </div>

      <Form customer={customer} />
    </div>
  );
}

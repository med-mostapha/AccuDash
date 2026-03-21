import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="w-full space-y-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Edit Invoice
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Update invoice details
        </p>
      </div>

      <Form invoice={invoice} customers={customers} />
    </div>
  );
}

import { sql } from "@vercel/postgres";
import { Revenue } from "../definitions";
import { formatCurrency } from "../utils";

export async function fetchRevenue() {
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchCardData() {
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? "0");
    const numberOfCustomers = Number(data[1].rows[0].count ?? "0");
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? "0");
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? "0");

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export async function fetchInvoiceStatusDistribution() {
  try {
    const data = await sql`
      SELECT
        COUNT(CASE WHEN status = 'paid' THEN 1 END) AS paid_count,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) AS pending_count,
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid_amount,
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending_amount,
        COUNT(*) AS total_count,
        SUM(amount) AS total_amount
      FROM invoices
    `;

    const result = data.rows[0];

    return {
      paid: {
        count: Number(result.paid_count),
        amount: Number(result.paid_amount),
        formatted: formatCurrency(result.paid_amount),
      },
      pending: {
        count: Number(result.pending_count),
        amount: Number(result.pending_amount),
        formatted: formatCurrency(result.pending_amount),
      },
      total: {
        count: Number(result.total_count),
        amount: Number(result.total_amount),
        formatted: formatCurrency(result.total_amount),
      },
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice status distribution.");
  }
}

export async function fetchTopCustomersByRevenue(limit: number = 5) {
  try {
    const data = await sql`
      SELECT
        customers.id,
        customers.name,
        customers.image_url,
        COUNT(invoices.id) AS total_invoices,
        SUM(invoices.amount) AS total_revenue,
        SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS paid_revenue,
        SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS pending_revenue
      FROM customers
      INNER JOIN invoices ON customers.id = invoices.customer_id
      GROUP BY customers.id, customers.name, customers.image_url
      ORDER BY total_revenue DESC
      LIMIT ${limit}
    `;

    return data.rows.map((customer) => ({
      id: customer.id,
      name: customer.name,
      image_url: customer.image_url,
      total_invoices: Number(customer.total_invoices),
      total_revenue: Number(customer.total_revenue),
      total_revenue_formatted: formatCurrency(customer.total_revenue),
      paid_revenue: Number(customer.paid_revenue),
      paid_revenue_formatted: formatCurrency(customer.paid_revenue),
      pending_revenue: Number(customer.pending_revenue),
      pending_revenue_formatted: formatCurrency(customer.pending_revenue),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch top customers by revenue.");
  }
}

export async function fetchMonthlyInvoiceTrends() {
  try {
    const data = await sql`
      SELECT
        TO_CHAR(date, 'Mon') AS month,
        EXTRACT(MONTH FROM date) AS month_number,
        COUNT(*) AS invoice_count,
        SUM(amount) AS total_amount,
        AVG(amount) AS avg_amount,
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid_amount,
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending_amount
      FROM invoices
      WHERE date >= NOW() - INTERVAL '12 months'
      GROUP BY TO_CHAR(date, 'Mon'), EXTRACT(MONTH FROM date)
      ORDER BY month_number ASC
    `;

    return data.rows.map((row) => ({
      month: row.month,
      month_number: Number(row.month_number),
      invoice_count: Number(row.invoice_count),
      total_amount: Number(row.total_amount),
      total_amount_formatted: formatCurrency(row.total_amount),
      avg_amount: Number(row.avg_amount),
      avg_amount_formatted: formatCurrency(row.avg_amount),
      paid_amount: Number(row.paid_amount),
      paid_amount_formatted: formatCurrency(row.paid_amount),
      pending_amount: Number(row.pending_amount),
      pending_amount_formatted: formatCurrency(row.pending_amount),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch monthly invoice trends.");
  }
}

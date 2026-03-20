import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Sidi Mohamed Zakari",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Ahmed Salem",
    email: "ahmed@example.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Fatimetou Zahra",
    email: "fatimetou@example.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Mohamed Lemine",
    email: "lemine@example.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Abdarrahmane",
    email: "abdou@example.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Mariem Mint Ahmed",
    email: "mariem@example.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Cheikh Tidjane",
    email: "cheikh@example.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`CREATE TABLE IF NOT EXISTS users (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, name VARCHAR(255) NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL);`;
    await client.sql`CREATE TABLE IF NOT EXISTS customers (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, image_url VARCHAR(255) NOT NULL);`;
    await client.sql`CREATE TABLE IF NOT EXISTS invoices (id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, customer_id UUID NOT NULL, amount INT NOT NULL, status VARCHAR(255) NOT NULL, date DATE NOT NULL);`;
    await client.sql`CREATE TABLE IF NOT EXISTS revenue (month VARCHAR(4) NOT NULL UNIQUE, revenue INT NOT NULL);`;

    await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`INSERT INTO users (id, name, email, password) VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}) ON CONFLICT (id) DO NOTHING;`;
      }),
    );

    await Promise.all(
      customers.map(
        (c) =>
          client.sql`INSERT INTO customers (id, name, email, image_url) VALUES (${c.id}, ${c.name}, ${c.email}, ${c.image_url}) ON CONFLICT (id) DO NOTHING;`,
      ),
    );
    await Promise.all(
      invoices.map(
        (i) =>
          client.sql`INSERT INTO invoices (customer_id, amount, status, date) VALUES (${i.customer_id}, ${i.amount}, ${i.status}, ${i.date}) ON CONFLICT (id) DO NOTHING;`,
      ),
    );
    await Promise.all(
      revenue.map(
        (r) =>
          client.sql`INSERT INTO revenue (month, revenue) VALUES (${r.month}, ${r.revenue}) ON CONFLICT (month) DO NOTHING;`,
      ),
    );

    await client.sql`COMMIT`;
    return Response.json({
      message:
        "Database seeded with Arabic names (English letters) successfully!",
    });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: (error as Error).message }, { status: 500 });
  } finally {
    client.release();
  }
}

"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Please enter a customer name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  image_url: z
    .string()
    .url({ message: "Please enter a valid image URL." })
    .optional()
    .or(z.literal("")),
});

const CreateCustomer = CustomerSchema.omit({ id: true });
const UpdateCustomer = CustomerSchema.omit({ id: true });

export async function createCustomer(prevState: State, formData: FormData) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    image_url: formData.get("image_url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }

  const { name, email, image_url } = validatedFields.data;
  const finalImageUrl = image_url || "/customers/default-avatar.svg";

  try {
    await sql`
      INSERT INTO customers (name, email, image_url)
      VALUES (${name}, ${email}, ${finalImageUrl})
    `;
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to Create Customer.",
    };
  }

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard");
  redirect("/dashboard/customers");
}

export async function updateCustomer(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    image_url: formData.get("image_url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Customer.",
    };
  }

  const { name, email, image_url } = validatedFields.data;
  const finalImageUrl = image_url || "/customers/default-avatar.png";

  try {
    await sql`
      UPDATE customers
      SET name = ${name}, email = ${email}, image_url = ${finalImageUrl}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to Update Customer.",
    };
  }

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard");
  redirect("/dashboard/customers");
}

export async function deleteCustomer(id: string) {
  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    revalidatePath("/dashboard/customers");
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Database Error: Failed to Delete Customer.");
  }
}

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | AccuDash",
    default: "AccuDash - Modern Financial Management",
  },
  description:
    "A powerful financial dashboard built with Next.js 16, allowing you to manage invoices, customers, and revenue in real-time.",
  keywords: [
    "Next.js",
    "Dashboard",
    "Financial Management",
    "Invoices",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Mohamed Elmostapha" }],
  metadataBase: new URL("https://accu-dash.vercel.app"),
  openGraph: {
    title: "AccuDash - Smart Business Solutions",
    description:
      "Manage your business finances with ease using our high-performance dashboard.",
    url: "https://accu-dash.vercel.app",
    siteName: "AccuDash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccuDash Dashboard",
    description: "Track your revenue and invoices efficiently.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

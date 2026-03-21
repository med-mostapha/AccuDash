import { ReactNode } from "react";
import Logo from "@/app/ui/branding/Logo";
import Card from "@/app/ui/design-system/Card";
import GradientText from "@/app/ui/design-system/GradientText";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="inline-flex justify-center mb-6">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold mb-2">
            <GradientText>{title}</GradientText>
          </h1>
          {subtitle && (
            <p className="text-neutral-600 dark:text-neutral-400">{subtitle}</p>
          )}
        </div>

        {/* Form Card */}
        <Card variant="elevated" padding="lg">
          {children}
        </Card>
      </div>
    </main>
  );
}

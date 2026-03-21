import { Metadata } from "next";
import { Suspense } from "react";
import AuthLayout from "@/app/ui/auth/AuthLayout";
import LoginForm from "@/app/ui/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your AccuDash account securely.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your dashboard"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}

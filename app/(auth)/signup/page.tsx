import { Metadata } from "next";
import AuthLayout from "@/app/ui/auth/AuthLayout";
import SignupForm from "@/app/ui/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your AccuDash account and start managing your finances.",
};

export default function SignupPage() {
  return (
    <AuthLayout title="Get Started" subtitle="Create your account in seconds">
      <SignupForm />
    </AuthLayout>
  );
}

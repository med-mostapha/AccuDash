"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { authenticate } from "@/app/lib/actions";
import Button from "@/app/ui/design-system/Button";
import FormInput from "./FormInput";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-5">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        icon={<AtSymbolIcon className="w-5 h-5" />}
        required
        autoComplete="email"
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        icon={<KeyIcon className="w-5 h-5" />}
        required
        minLength={6}
        autoComplete="current-password"
      />

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
          <ExclamationCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isPending}
        icon={<ArrowRightIcon />}
      >
        {isPending ? "Signing in..." : "Sign In"}
      </Button>

      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

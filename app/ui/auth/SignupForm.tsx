"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  AtSymbolIcon,
  KeyIcon,
  UserIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { signup, SignupState } from "@/app/lib/actions";
import Button from "@/app/ui/design-system/Button";
import FormInput from "./FormInput";

export default function SignupForm() {
  const initialState: SignupState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(signup, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Full Name"
        placeholder="Sidi Mohamed Zakari"
        icon={<UserIcon className="w-5 h-5" />}
        required
        autoComplete="name"
        error={state.errors?.name?.[0]}
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        icon={<AtSymbolIcon className="w-5 h-5" />}
        required
        autoComplete="email"
        error={state.errors?.email?.[0]}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Minimum 6 characters"
        icon={<KeyIcon className="w-5 h-5" />}
        required
        minLength={6}
        autoComplete="new-password"
        error={state.errors?.password?.[0]}
      />

      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter your password"
        icon={<KeyIcon className="w-5 h-5" />}
        required
        minLength={6}
        autoComplete="new-password"
        error={state.errors?.confirmPassword?.[0]}
      />

      {state.message && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
          <ExclamationCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-600 dark:text-red-400">
            {state.message}
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
        {isPending ? "Creating account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}

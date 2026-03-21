import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import Logo from "@/app/ui/branding/Logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col gap-2 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 px-3 py-6 md:px-4">
      <Link
        className="mb-2 flex h-20 items-center justify-center md:justify-start rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] md:mb-4"
        href="/"
      >
        <Logo variant="light" iconOnly className="md:hidden" />
        <Logo variant="light" className="hidden md:flex" />
      </Link>

      <div className="flex grow flex-row md:flex-col gap-2">
        <div className="flex flex-row md:flex-col gap-2 w-full">
          <NavLinks />
        </div>

        <div className="hidden md:block flex-1" />

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
          className="w-auto md:w-full"
        >
          <button
            type="submit"
            className="group flex h-12 w-12 md:w-full items-center justify-center gap-3 rounded-lg px-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 border border-transparent hover:border-red-200 dark:hover:border-red-900 md:justify-start"
          >
            <PowerIcon className="w-6 h-6 transition-transform group-hover:rotate-12" />
            <span className="hidden md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}

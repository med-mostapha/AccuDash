import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white dark:bg-neutral-950">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto max-w-7xl p-4 md:p-8 lg:p-12">{children}</div>
      </div>
    </div>
  );
}

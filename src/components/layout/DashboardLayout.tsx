import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: Props) {
  return (

    <main className="flex min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 ">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <section className="flex-1 p-8">{children}</section>
      </div>
    </main>
  );
}

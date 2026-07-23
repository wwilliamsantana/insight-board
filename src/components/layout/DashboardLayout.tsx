import { Dashboard } from "@/sections/dashboard/Dashboard";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <section className="flex-1 p-8">
          <Dashboard />
        </section>
      </div>
    </main>
  );
}

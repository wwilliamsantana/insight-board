import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <Sidebar />
    </main>
  );
}

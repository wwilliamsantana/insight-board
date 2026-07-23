import { ChartsSection } from "../charts/ChartsSection";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";

export function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <StatsCards />

      <ChartsSection />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="h-105 rounded-3xl border border-slate-200 bg-white lg:col-span-2" />
        <div className="h-105 rounded-3xl border border-slate-200 bg-white" />
      </div>
    </div>
  );
}

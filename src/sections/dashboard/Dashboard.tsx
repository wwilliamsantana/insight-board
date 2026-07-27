import { ChartsSection } from "../charts/ChartsSection";
import { PerformanceOverview } from "../performance/PerformanceOverview";
import { RecentOrders } from "../tables/RecentOrders";
import { ActivityTimeline } from "../timeline/ActivityTimeline";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";

export function Dashboard() {
  return (
    <div className="space-y-8 ">
      <DashboardHeader />
      <StatsCards />

      <ChartsSection />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentOrders />
          <PerformanceOverview />
        </div>
        <div className="space-y-6">
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}

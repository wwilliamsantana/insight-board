import { AnalyticsHeader } from "./AnalyticsHeader";
import { MetricsCards } from "./MetricsCards";

export function Analytics() {
  return (
    <div className="space-y-8">
      <AnalyticsHeader />

      <MetricsCards />

      <div className="h-105 rounded-3xl border border-slate-200 bg-white" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-95 rounded-3xl border border-slate-200 bg-white" />
        <div className="h-95 rounded-3xl border border-slate-200 bg-white" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="h-105 rounded-3xl border border-slate-200 bg-white lg:col-span-2" />
        <div className="h-105 rounded-3xl border border-slate-200 bg-white" />
      </div>
      <div className="h-95 rounded-3xl border border-slate-200 bg-white" />
    </div>
  );
}

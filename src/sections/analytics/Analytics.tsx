import { AnalyticsHeader } from "./AnalyticsHeader";
import { AnalyticsMetrics } from "./AnalyticsMetrics";

import { MetricsCards } from "./MetricsCards";

export function Analytics() {
  return (
    <div className="space-y-8">
      <AnalyticsHeader />

      <MetricsCards />

      <AnalyticsMetrics />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-95 rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800" />
        <div className="h-95 rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800" />
      </div>


      <div className="h-95 rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800" />
    </div>
  );
}

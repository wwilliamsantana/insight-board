import { analyticsDetails } from "@/data/analyticsDetails";
import { AnalyticsMetricItem } from "./AnalyticsMetricItem";

export function AnalyticsMetrics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 p-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Detailed Analytics</h2>

        <p className="mt-1 text-sm text-slate-500">
          Key performance indicators from the last 30 days.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {analyticsDetails.map((metric) => (
          <AnalyticsMetricItem key={metric.title} {...metric} />
        ))}
      </div>
    </section>
  );
}

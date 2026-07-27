import { performance } from "@/data/performance";

import { ProgressCard } from "./ProgressCard";

export function PerformanceOverview() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Performance Overview</h2>

        <p className="mt-1 text-sm text-slate-500">Current business goals.</p>
      </div>

      <div className="space-y-6">
        {performance.map((item) => (
          <ProgressCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

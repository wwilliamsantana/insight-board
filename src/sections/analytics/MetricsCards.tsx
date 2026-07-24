"use client";

import { analyticsMetrics } from "@/data/analyticsMetrics";
import { MetricCard } from "./MetricCard";

export function MetricsCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {analyticsMetrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </section>
  );
}

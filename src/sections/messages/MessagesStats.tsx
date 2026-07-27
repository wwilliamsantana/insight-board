"use client"

import { messageStats } from "@/data/messageStats";
import { MetricCard } from "../analytics/MetricCard";

export function MessagesStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {messageStats.map((metric) => (
        <MetricCard
          key={metric.title}
          {...metric}
        />
      ))}
    </section>
  );
}
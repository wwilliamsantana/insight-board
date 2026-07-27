"use client"

import { calendarStats } from "@/data/calendarStats";
import { MetricCard } from "../analytics/MetricCard";

export function CalendarStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {calendarStats.map((item) => (
        <MetricCard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}
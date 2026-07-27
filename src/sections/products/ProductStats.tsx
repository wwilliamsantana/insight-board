"use client"

import { productStats } from "@/data/productStats";
import { MetricCard } from "../analytics/MetricCard";

export function ProductStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {productStats.map((stat) => (
        <MetricCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}

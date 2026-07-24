"use client";

import { customerStats } from "@/data/customerStats";
import { CustomerStatCard } from "./CustomerStatCard";

export function CustomerStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {customerStats.map((item) => (
        <CustomerStatCard key={item.title} {...item} />
      ))}
    </section>
  );
}

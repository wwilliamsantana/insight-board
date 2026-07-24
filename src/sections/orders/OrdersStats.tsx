"use client";
import { orderStats } from "@/data/orderStats";
import { OrderStatCard } from "./OrderStatCard";

export function OrdersStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {orderStats.map((stat) => (
        <OrderStatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}

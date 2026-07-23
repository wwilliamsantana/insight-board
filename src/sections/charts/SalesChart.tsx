"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import { ChartCard } from "./ChartCard";
import { salesData } from "@/data/revenueData";

export function SalesChart() {
  return (
    <ChartCard title="Sales" description="Monthly sales">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={salesData}>
          <XAxis dataKey="month" />

          <Tooltip />

          <Bar dataKey="sales" radius={6} fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

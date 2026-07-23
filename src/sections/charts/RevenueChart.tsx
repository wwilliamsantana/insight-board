"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { revenueData } from "@/data/revenueData";
import { ChartCard } from "./ChartCard";

export function RevenueChart() {
  return (
    <ChartCard
      title="Revenue Overview"
      description="Monthly revenue performance"
    >
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />

              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            fill="url(#revenue)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

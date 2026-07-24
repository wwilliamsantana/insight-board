"use client";

import { MetricCard } from "@/sections/analytics/MetricCard";

type Props = React.ComponentProps<typeof MetricCard>;

export function OrderStatCard(props: Props) {
  return <MetricCard {...props} />;
}

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Analytics } from "@/sections/analytics/Analytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Data insights, charts and business analytics.",
};

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <Analytics />
    </DashboardLayout>
  );
}

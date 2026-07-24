import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Customers } from "@/sections/customers/Customers";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <Customers />
    </DashboardLayout>
  );
}

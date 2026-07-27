import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Customers } from "@/sections/customers/Customers";

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <Customers />
    </DashboardLayout>
  );
}

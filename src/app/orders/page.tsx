import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Orders as OrdersPage } from "@/sections/orders/Orders";

export default function Orders() {
  return (
    <DashboardLayout>
      <OrdersPage />
    </DashboardLayout>
  );
}

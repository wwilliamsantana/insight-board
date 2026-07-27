import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Orders } from "@/sections/orders/Orders";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Orders",
  description: "Track and manage customer orders.",
};

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <Orders />
    </DashboardLayout>
  );
}

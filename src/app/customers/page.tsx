import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Customers } from "@/sections/customers/Customers";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Customers",
  description: "Manage customer profiles and account information.",
};

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <Customers />
    </DashboardLayout>
  );
}

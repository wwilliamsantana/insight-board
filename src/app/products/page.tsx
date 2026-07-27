import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Products } from "@/sections/products/Products"
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Products",
  description: "Manage your product catalog and inventory.",
};

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <Products />
    </DashboardLayout>
  )
}
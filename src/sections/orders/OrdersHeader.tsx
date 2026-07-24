import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function OrdersHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">Order Management</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Orders</h1>
        <p className="mt-3 max-w-xl text-slate-500">
          Track orders, monitor payments, and manage fulfillment.
        </p>
      </div>

      <Button>
        <Download size={18} />
        Export Orders
      </Button>
    </div>
  );
}

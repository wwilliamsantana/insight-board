import { Button } from "@/components/ui/Button";
import { OrdersTable } from "./OrdersTable";

export function RecentOrders() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Recent Orders</h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest customer purchases
          </p>
        </div>

        <Button>View All</Button>
      </div>

      <OrdersTable />
    </section>
  );
}

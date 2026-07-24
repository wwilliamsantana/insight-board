import { OrdersHeader } from "./OrdersHeader";
import { OrdersStats } from "./OrdersStats";
import { OrdersFilters } from "./OrdersFilters";
import { OrdersTable } from "./OrdersTable";

export function Orders() {
  return (
    <div className="space-y-8">
      <OrdersHeader />
      <OrdersStats />
      <OrdersFilters />
      <OrdersTable />
    </div>
  );
}

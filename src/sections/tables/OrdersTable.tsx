import { recentOrders } from "@/data/recentOrders";
import { StatusBadge } from "./StatusBadge";

export function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
            <th className="pb-4">Order</th>
            <th className="pb-4">Customer</th>
            <th className="pb-4">Product</th>
            <th className="pb-4">Amount</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {recentOrders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-slate-100 transition hover:bg-slate-50"
            >
              <td className="py-5 font-medium">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td className="font-semibold">{order.amount}</td>
              <td>
                <StatusBadge status={order.status} />
              </td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

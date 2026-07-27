import { MoreHorizontal } from "lucide-react";

export function OrdersTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <p className="mt-1 text-sm text-slate-500">Latest customer purchase.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Order ID
              </th>

              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Customer
              </th>

              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Product
              </th>

              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Amount
              </th>

              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Status
              </th>

              <th
                scope="col"
                className="pb-4 text-left text-sm font-medium text-slate-500"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="transition hover:bg-slate-50 hover:dark:bg-slate-800">
              <td className="py-5 font-medium text-slate-900 dark:text-slate-50 ">#10241</td>

              <td className="py-5">
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-50">Emma Johnson</p>

                  <p className="text-sm text-slate-500 dark:text-slate-50">Jul 23, 2026</p>
                </div>
              </td>

              <td className="py-5 text-slate-600 dark:text-slate-50">Premium Plan</td>

              <td className="py-5 font-semibold text-slate-900 dark:text-slate-50">$249.00</td>

              <td className="py-5">
                <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Paid
                </span>
              </td>

              <td className="py-5">
                <button
                  className="rounded-lg p-2 transition hover:bg-slate-100"
                  aria-label="Order actions"
                >
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

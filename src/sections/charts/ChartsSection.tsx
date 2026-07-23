import { RevenueChart } from "./RevenueChart";
import { SalesChart } from "./SalesChart";

export function ChartsSection() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <RevenueChart />
      </div>

      <SalesChart />
    </section>
  );
}

import { CustomerFilters } from "./CustomerFilters";
import { CustomerStats } from "./CustomerStats";
import { CustomerTable } from "./CustomerTable";
import { CustomersHeader } from "./CustomersHeader";

export function Customers() {
  return (
    <div className="space-y-8">
      <CustomersHeader />
      <CustomerStats />
      <CustomerFilters />
      <CustomerTable />
    </div>
  );
}

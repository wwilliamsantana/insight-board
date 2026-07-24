import { Button } from "@/components/ui/Button";
import { UserPlus } from "lucide-react";

export function CustomersHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Customer Management
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">Customers</h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Manage customer information, activity, and account status.
        </p>
      </div>

      <Button>
        <UserPlus size={18} />
        Add Customer
      </Button>
    </div>
  );
}

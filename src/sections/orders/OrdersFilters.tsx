import { Button } from "@/components/ui/Button";
import { Search, Filter } from "lucide-react";

export function OrdersFilters() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search orders..."
          className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>

      <Button>
        <Filter size={18} />
        Filters
      </Button>
    </section>
  );
}

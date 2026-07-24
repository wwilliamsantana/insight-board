import { Button } from "@/components/ui/Button";
import { Search, SlidersHorizontal } from "lucide-react";

export function CustomerFilters() {
  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search customers..."
          className="w-full rounded-xl border border-slate-200 py-3 pr-4 pl-11 outline-none transition focus:border-blue-500"
        />
      </div>

      <Button>
        <SlidersHorizontal size={18} />
        Filters
      </Button>
    </section>
  );
}

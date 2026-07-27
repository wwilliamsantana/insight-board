import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export function ProductsHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Product Catalog
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Products
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Manage your inventory, pricing, and product availability.
        </p>
      </div>

      <Button>
        <Plus size={18} />
        Add Product
      </Button>
    </div>
  );
}
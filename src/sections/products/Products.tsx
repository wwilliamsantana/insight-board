import { ProductsHeader } from "./ProductsHeader";
import { ProductStats } from "./ProductStats";
import { ProductGrid } from "./ProductGrid";

export function Products() {
  return (
    <div className="space-y-8">
      <ProductsHeader />
      <ProductStats />
      <ProductGrid />
    </div>
  );
}
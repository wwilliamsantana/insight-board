import { ProductCard } from "./ProductCard";

const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$149.00",
    stock: 58,
  },
  {
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "$129.00",
    stock: 24,
  },
  {
    name: "Gaming Mouse",
    category: "Accessories",
    price: "$79.00",
    stock: 91,
  },
];

export function ProductGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
        />
      ))}
    </section>
  );
}